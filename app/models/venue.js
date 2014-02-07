'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


/**
 * Venue Schema
 */
var VenueSchema = new Schema({
	name: String,
	location: String,
	owner: String,
	type: [
		{
			name: String
		}
	],
	phone: String
});

/**
 * Virtuals
 */
VenueSchema.virtual('password').set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
}).get(function() {
    return this._password;
});

/**
 * Validations
 */
var validatePresenceOf = function(value) {
    return value && value.length;
};

// the below 4 validations only apply if you are signing up traditionally
VenueSchema.path('name').validate(function(name) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (!this.provider) return true;
    return (typeof name === 'string' && name.length > 0);
}, 'Name cannot be blank');

VenueSchema.path('location').validate(function(location) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (!this.provider) return true;
    return (typeof location === 'string' && location.length > 0);
}, 'location cannot be blank');

VenueSchema.path('owner').validate(function(owner) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (!this.provider) return true;
    return (typeof owner === 'string' && owner.length > 0);
}, 'Username cannot be blank');

VenueSchema.path('type').validate(function(type) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (!this.provider) return true;
    return (typeof type === 'string' && type.length > 0);
}, 'Type cannot be blank');


/**
 * Pre-save hook
 */
VenueSchema.pre('save', function(next) {
    if (!this.isNew) return next();

    if (!validatePresenceOf(this.password) && !this.provider)
        next(new Error('Invalid password'));
    else
        next();
});

/**
 * Methods
 */
VenueSchema.methods = {
    /**
     * Authenticate - check if the passwords are the same
     *
     * @param {String} plainText
     * @return {Boolean}
     * @api public
     */
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    /**
     * Make salt
     *
     * @return {String}
     * @api public
     */
    makeSalt: function() {
        return crypto.randomBytes(16).toString('base64');
    },

    /**
     * Encrypt password
     *
     * @param {String} password
     * @return {String}
     * @api public
     */
    encryptPassword: function(password) {
        if (!password || !this.salt) return '';
        var salt = new Buffer(this.salt, 'base64');
        return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
    }
};

mongoose.model('Venue', VenueSchema);