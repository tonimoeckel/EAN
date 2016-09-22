'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Show the current user
 */
exports.read = function (req, res) {
  res.status(400).send({
    message: 'No implementation'
  });
};

/**
 * Update a User
 */
exports.update = function (req, res) {
  res.status(400).send({
    message: 'No implementation'
  });
};

/**
 * Delete a user
 */
exports.delete = function (req, res) {
  res.status(400).send({
    message: 'No implementation'
  });
};

/**
 * List of Users
 */
exports.list = function (req, res) {
  res.status(400).send({
    message: 'No implementation'
  });
};

/**
 * User middleware
 */
exports.userByID = function (req, res, next, id) {
  next();
};
