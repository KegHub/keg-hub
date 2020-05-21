const { Logger } = require('KegLog')

/*
 * Helper to log an error message when a a file path does not exist locally
 * @function
 * @param {string} filePath - Path that does not exist
 * @param {string} extraMessage - Extra message data to show in the logged error
 *
 * @returns {void}
*/
const throwNoFileExists = (filePath, extraMessage) => {
  
  extraMessage && Logger.info(extraMessage)
  Logger.error(`\n File path does not exist at ${filePath}.\n`)
  Logger.empty()

  throw new Error(`Task failed!`)
}

module.exports = {
  throwNoFileExists
}