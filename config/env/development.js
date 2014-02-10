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
        clientID: "GPbgbMjuQcY2IPc52KgQ",
        clientSecret: "r02FThWGv1lgEoZrPSWQvjxVDTRsje5q26gF6XdwQ",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
        clientID: "075d66b2735ed125a170",
        clientSecret: "979753293e3518bccaaedb06aee9daa649dd7b2c",
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    google: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    linkedin: {
        clientID: "77oxgf5hgokj73",
        clientSecret: "C7aYRbelbPMajMpn",
        callbackURL: "http://localhost:3000/auth/linkedin/callback"
    }
}
