const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToekn, profile, done) => {
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToekn);
        console.log('profile:', profile);
    })
);



