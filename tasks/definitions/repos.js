const { Logger } = require('@keg-hub/cli-utils')
const { wordCaps, isObj } = require('@keg-hub/jsutils')
const { getHubRepos } = require('../utils/repos/getHubRepos')

/**
 * Keys to print form each repos package.json
 * @type {Array}
 */
const printKeys = [
  'version',
  'description',
  'author',
  'repository',
]

/**
 * Helper to format and print the passed in key and value
 * 
 * @param {string} key - Key from the package.json that exists in printKeys array
 * @param {string} value - Value of the key within a repos package.json
 * 
 * @returns {Void}
 */
const printDetail = (key, value) => {
  value = (key === 'repository' && isObj(value) && value.url) || value
  Logger.pair(`    * ${ wordCaps(key) }:`, `${ value }`)
}


/**
 * Get information about the repos in the keg-hub
 * @param {Object} args - arguments passed from the runTask method
 * @param {string} args.command - Initial command being run
 * @param {Array} args.options - arguments passed from the command line
 * @param {Object} args.tasks - All registered tasks of the CLI
 * @param {Object} args.params - Pre-Parsed options array as an object
 * @param {Object} globalConfig - Global config object for the keg-cli
 *
 * @returns {Object} - Repos as (key)folder => (value) object with the repos name, location and package.json
 */
const hubRepos = async args => {
  const { params } = args
  const { log } = params
  const repos = await getHubRepos(params)

  if(!log) return repos
  
  Logger.subHeader(`Keg-Hub Repos`)

  Object.values(repos)
    .map(({ location, package }) => {
      Logger.yellow(`  ${package.name}`)

      Object.entries(package)
        .map(([key, value]) => printKeys.includes(key) && printDetail(key, value))
      Logger.empty()
    })

  return repos
}

module.exports = {
  repos: {
    name: 'repos',
    alias: [ 'rep', 'rp', 'list', 'ls' ],
    action: hubRepos,
    description: `Get information about the repos in the keg-hub`,
    example: 'keg hub repos <options>',
    options: {
      context: {
        type: 'array',
        default: ['all'],
        alias: [ 'ctx', 'filter', 'ftr', 'scope', 'scp' ],
        description: 'Filter results based on a repo(s) name',
        example: 'keg hub repos --scope cli',
      },
      log: {
        description: 'Log the repos to the terminal',
        default: true
      },
    }
  }
}
