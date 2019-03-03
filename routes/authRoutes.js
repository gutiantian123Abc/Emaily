const passport = require('passport');

module.exports = app => {

    app.get(//Sign in
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get(// Redirect after sign in
        '/auth/google/callback',
        passport.authenticate('google')
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    //Get current_user
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};

