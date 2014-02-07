'use strict';
var path = require('path'),
	rootPath = path.normalize(__dirname + '/..');

module.exports = {
	development: {
		db: "mongodb://localhost/cincity-dev",
		root: rootPath,
		app: {
		    name: "Cin City - Development"
		},
		facebook: {
		    clientID: "APP_ID",
		    clientSecret: "APP_SECRET",
		    callbackURL: "http://localhost:3000/auth/facebook/callback"
		},
		twitter: {
		    clientID: "CONSUMER_KEY",
		    clientSecret: "CONSUMER_SECRET",
		    callbackURL: "http://localhost:3000/auth/twitter/callback"
		},
		github: {
		    clientID: "APP_ID",
		    clientSecret: "APP_SECRET",
		    callbackURL: "http://localhost:3000/auth/github/callback"
		},
		google: {
		    clientID: "APP_ID",
		    clientSecret: "APP_SECRET",
		    callbackURL: "http://localhost:3000/auth/google/callback"
		},
		linkedin: {
		    clientID: "API_KEY",
		    clientSecret: "SECRET_KEY",
		    callbackURL: "http://localhost:3000/auth/linkedin/callback"
		}
	},

	test: {
		db: "mongodb://localhost/cincity-test",
		root: rootPath,
		app: {
		    name: "Cin City - Test"
		},
		facebook: {
		    clientID: "APP_ID",
		    clientSecret: "APP_SECRET",
		    callbackURL: "http://localhost:3000/auth/facebook/callback"
		},
		twitter: {
		    clientID: "CONSUMER_KEY",
		    clientSecret: "CONSUMER_SECRET",
		    callbackURL: "http://localhost:3000/auth/twitter/callback"
		},
		github: {
		    clientID: "APP_ID",
		    clientSecret: "APP_SECRET",
		    callbackURL: "http://localhost:3000/auth/github/callback"
		},
		google: {
		    clientID: "APP_ID",
		    clientSecret: "APP_SECRET",
		    callbackURL: "http://localhost:3000/auth/google/callback"
		}
	},

	production: {
		db: "mongodb://localhost/cincity",
		root: rootPath,
		app: {
		    name: "Cin City"
		},
		facebook: {
		    clientID: "APP_ID",
		    clientSecret: "APP_SECRET",
		    callbackURL: "http://localhost:3000/auth/facebook/callback"
		},
		twitter: {
		    clientID: "CONSUMER_KEY",
		    clientSecret: "CONSUMER_SECRET",
		    callbackURL: "http://localhost:3000/auth/twitter/callback"
		},
		github: {
		    clientID: "APP_ID",
		    clientSecret: "APP_SECRET",
		    callbackURL: "http://localhost:3000/auth/github/callback"
		},
		google: {
		    clientID: "APP_ID",
		    clientSecret: "APP_SECRET",
		    callbackURL: "http://localhost:3000/auth/google/callback"
		},
		linkedin: {
		    clientID: "API_KEY",
		    clientSecret: "SECRET_KEY",
		    callbackURL: "http://localhost:3000/auth/linkedin/callback"
		}
	}
};