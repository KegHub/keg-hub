const { Logger, error } = require('@keg-hub/cli-utils')
const { getVersion } = require('../../utils/semver/getVersion')
const { getHubRepos } = require('../../utils/repos/getHubRepos')
const { resolveDepType } = require('../../utils/semver/resolveDepType')
const { writePackageVersion } = require('../../utils/repos/writePackageVersion')


const setDepVersion = (repo, params, version) => {
  const {dependency} = params
  const {type:depType, resolutions} = resolveDepType(params, repo.package)
  if(!depType && !resolutions) return

  if(depType) repo.package[depType][dependency] = version
  if(resolutions) repo.package.resolutions[dependency] = version

  // Overwrite the package.json file with updated package version
  writePackageVersion(repo.package, repo.location)
}

/**
 * Get information about the keg-hub repos information
 * @param {Object} args - arguments passed from the runTask method
 * @param {string} args.command - Initial command being run
 * @param {Array} args.options - arguments passed from the command line
 * @param {Object} args.tasks - All registered tasks of the CLI
 * @param {Object} args.params - Pre-Parsed options array as an object
 * @param {Object} globalConfig - Global config object for the keg-cli
 *
 * @returns {void}
 */
 const setDep = async args => {
  const { params } = args
  const version = getVersion(params)
  
  !version &&
    error.throwError(`A dependency version is required to run this task`, params.version, params.dependency)

  const repos = await getHubRepos(params)
  Object.values(repos).map(repo => setDepVersion(repo, params, version))
}

module.exports = {
  set: {
    name: 'set',
    action: setDep,
    alias: [ 'add' ],
    description: `Sets a dependency version in the repos package.json`,
    example: 'keg hub dependencies set <options>',
    options: {
      dependency: {
        alias: [ 'dep'],
        description: 'Specify the dependency that will be updated or added',
        example: 'keg hub dependencies set --dependencies @babel/core',
        required: true,
      },
      version: {
        alias: [ 'ver'],
        description: 'Specify the dependency version it will be set to',
        example: 'keg hub dependencies set --version 12.0.1',
        enforced: true,
      },
      context: {
        type: 'array',
        default: ['all'],
        alias: [ 'ctx', 'filter', 'ftr', 'scope', 'scp' ],
        description: 'Filter results based on a repo(s) name',
        example: 'keg hub dependencies set --scope cli,re-theme',
      },
      type: {
        allowed: [
          `dependencies`,
          `dep`,
          `prod`,
          `devDependencies`,
          `dev`,
          `peerDependencies`,
          `peer`,
          `resolutions`,
          `res`
        ],
        description: 'Specify the dependency type to set',
        example: 'keg hub dependencies --type dev',
      }
    }
  }
}
