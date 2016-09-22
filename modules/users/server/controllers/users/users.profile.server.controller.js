'use strict';

/**
 * Module dependencies
 */
var _ = require('lodash'),
  fs = require('fs'),
  path = require('path'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  multer = require('multer'),
  config = require(path.resolve('./config/config')),
  validator = require('validator');

var whitelistedFields = ['firstName', 'lastName', 'email', 'username'];

/**
 * Update user details
 */
exports.update = function (req, res) {
  res.status(400).send({
    message: 'No implementation'
  });
};

/**
 * Update profile picture
 */
exports.changeProfilePicture = function (req, res) {
  res.status(400).send({
    message: 'No implementation'
  });
};

/**
 * Send User
 */
exports.me = function (req, res) {
  res.status(400).send({
    message: 'No implementation'
  });
};
