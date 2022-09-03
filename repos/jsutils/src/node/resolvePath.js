const os = require('os')
const path = require('path')
const homeDir = os.homedir()

/**
 * Converts the local part of the passed in location to an absolute path
 * @param {string} location - Path to be resolved
 *
 * @returns {string} - Resolved location
 */
const resolvePath = (location, rootDir = process.cwd()) => {
  return location.startsWith(`~`)
    ? path.resolve(path.join(homeDir, location.replace(`~`, '')))
    : location === `.`
      ? rootDir
      : location.startsWith(`./`)
        ? path.resolve(path.join(`${rootDir}/`, location.replace(`./`, ``)))
        : path.resolve(path.join(rootDir, location))
}

module.exports = {
  resolvePath,
}
