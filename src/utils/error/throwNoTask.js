const fs = require('fs')
const path = require('path')
const { isStr, isObj } = require('jsutils')
const { showHelp } = require('./showHelp')
const { Logger } = require('./logger')

/**
 * Prints CLI unknown task when task can not be found
 * @param {string} task - Invalid passed in task
 * @param {boolean} unknown - If it's an unknown task
 *
 * @returns {void}
 */
const throwNoTask = task => {

  Logger.empty()
  Logger.error(`Unknown task => ${task}`)
  Logger.green(`Type "keg help' to see all known tasks.`)
  Logger.empty()

  throw new Error(`Task failed!`)
}

module.exports = {
  throwNoTask
}