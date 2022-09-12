const { TextEncoder, TextDecoder } = require('util')
global.testMocks = global.testMocks || {}
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

const jsdom = require('jsdom').jsdom

module.exports = jsdom