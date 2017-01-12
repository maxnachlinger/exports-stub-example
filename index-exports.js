'use strict'
const Promise = require('bluebird')

module.exports._internal = (arg) => Promise.reject(new Error('_internal error'))

module.exports.run = (arg) => exports._internal(arg)
  .then(() => 'yay')
