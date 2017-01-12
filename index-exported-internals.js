'use strict'
const Promise = require('bluebird')

const someFx = (arg) => Promise.reject(new Error('_internal error'))

const internals = {
  someFx
}

const run = (arg) => internals.someFx(arg)
  .then(() => 'yay')

module.exports.run = run
module.exports.internals = internals
