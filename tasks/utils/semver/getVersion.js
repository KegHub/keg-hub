const { cleanVersion } = require('./cleanVersion')

/**
 * Gets the version from the passed in params dependency or version properties
 * @returns {string|false} - Cleaned and validated server version 
 */
const getVersion = ({ dependency, version}) => {
  return version
    ? cleanVersion(version)
    : dependency &&
      dependency.includes('@') &&
      cleanVersion(dependency.split('@').pop())
}

module.exports = {
  getVersion
}