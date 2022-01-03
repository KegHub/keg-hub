const semver = require('semver')

/**
 * Cleans the version number so it can be compared
 * @param {string} version - Version number of a dependency from a package.json file
 *
 * @returns {string} - Cleaned Version number
 */
const cleanVersion = ver => semver.clean(
  semver.coerce(ver).version || semver.parse(ver).version || ver,
  { loose: true }
)


module.exports = {
  cleanVersion
}