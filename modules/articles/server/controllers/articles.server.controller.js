'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create an article
 */
exports.create = function (req, res) {
  res.status(400).send({
    message: 'No implementation'
  });
};

/**
 * Show the current article
 */
exports.read = function (req, res) {
  res.status(400).send({
    message: 'No implementation'
  });
};

/**
 * Update an article
 */
exports.update = function (req, res) {
  res.status(400).send({
    message: 'No implementation'
  });
};

/**
 * Delete an article
 */
exports.delete = function (req, res) {
  res.status(400).send({
    message: 'No implementation'
  });
};

/**
 * List of Articles
 */
exports.list = function (req, res) {
  res.status(400).send({
    message: 'No implementation'
  });
};

/**
 * Article middleware
 */
exports.articleByID = function (req, res, next, id) {

  next();

};
