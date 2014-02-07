'use strict';

module.exports = {
    db: "mongodb://localhost/cincity-dev",
    app: {
        name: "Cin City - Development"
    },
    facebook: {
        clientID: "589133697847778",
        clientSecret: "4822be5b9a2d4c4adb0a3a0ea6daa3b4",
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