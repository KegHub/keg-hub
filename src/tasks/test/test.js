
/**
 * Run Keg-CLI tasks for the keg-test repo
 * @param {Object} args - arguments passed from the runTask method
 * @param {string} args.command - Initial command being run
 * @param {Array} args.options - arguments passed from the command line
 * @param {Object} args.tasks - All registered tasks of the CLI
 * @param {Object} globalConfig - Global config object for the keg-cli
 *
 * @returns {void}
 */
const test = args => {
  const { command, options, globalConfig, params } = args
  console.log(`---------- Keg Test Tasks ----------`)
  
}

module.exports = {
  test: {
    name: 'test',
    action: test,
    description: `Run Keg-CLI tasks for the keg-test repo`,
    example: 'keg test <options>',
    tasks: {
      ...require('./start'),
      ...require('./stop'),
    }
  }
}