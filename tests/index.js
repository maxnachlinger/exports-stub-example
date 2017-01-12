'use strict'
const Promise = require('bluebird')
const chai = require('chai')
const indexExports = require('../index-exports')
const indexExportedInternals = require('../index-exported-internals')
const indexConstsUsedInternally = require('../index-consts-used-internally')
chai.should()

describe('index using exported funtions internally', () => {
  it('works', () => {
    indexExports._internal = () => Promise.resolve('not-an-error')

    return indexExports.run()
      .then((result) => result.should.exist)
      .catch((err) => err.should.not.exist)
  })
})

describe('index using exported object internally', () => {
  it('works', () => {
    indexExportedInternals.internals.someFx = () => Promise.resolve('not-an-error')

    return indexExportedInternals.run()
      .then((result) => result.should.exist)
      .catch((err) => err.should.not.exist)
  })
})

describe('index using const functions internally', () => {
  it('should error', () => {
    indexConstsUsedInternally.internals.someFx = () => Promise.resolve('not-an-error')

    return indexConstsUsedInternally.run()
      .then((result) => result.should.not.exist)
      .catch((err) => err.should.exist)
  })
})
