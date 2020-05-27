
/**
 * Logs into a configured registry provider
 * @param {Object} args - arguments passed from the runTask method
 * @param {string} args.command - Initial command being run
 * @param {Array} args.options - arguments passed from the command line
 * @param {Object} args.tasks - All registered tasks of the CLI
 * @param {Object} args.task - Current task being run
 * @param {Object} args.params - Formatted key / value pair of the passed in options
 * @param {Object} globalConfig - Global config object for the keg-cli
 *
 * @returns {void}
 */
const providerLogin = (args) => {
  console.log(`---------- provider login ----------`)
}

module.exports = {
  login: {
    name: 'login',
    alias: [ 'lgn' ],
    action: providerLogin,
    description: 'Log into the Docker registry provider',
    example: 'keg docker provider login <options>',
    options: {
      user: {
        description: 'User to use when logging into the registry provider'
      },
      token: {
        description: 'API Token for registry provider to allow logging in'
      }
    }
  }
}