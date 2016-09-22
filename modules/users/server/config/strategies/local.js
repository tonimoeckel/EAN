'use strict';

/**
 * Module dependencies
 */
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

module.exports = function () {
  // Use local strategy
  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
  function (username, password, done) {
    User.findOne({
      username: username.toLowerCase()
    }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user || !user.authenticate(password)) {
        return done(null, false, {
          message: 'Invalid username or password (' + (new Date()).toLocaleTimeString() + ')'
        });
      }

      return done(null, user);
    });
  }));
};
