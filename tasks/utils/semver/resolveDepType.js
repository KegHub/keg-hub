const { get } = require('@keg-hub/jsutils')

const depTypeMap = {
  dep: `dependencies`,
  prod: `dependencies`,
  dependencies: `dependencies`,
  dev: `devDependencies`,
  devDependencies: `devDependencies`, 
  peer: `peerDependencies`,
  peerDependencies: `peerDependencies`,
  res: `resolutions`,
  resolutions: `resolutions`,
}
const depTypes = [`dependencies`, `devDependencies`, `peerDependencies`]

const checkEachType = (package, dep) => {
  const found = depTypes.find((depType) => get(package, [depType, dep]))
  
  return {
    type: found,
    resolutions: get(package, [`resolutions`, dep])
  }
}

/**
 * Gets the dependency type that should be used
 * Based on the package.json dependency types
 * @param {string} dependency - Type of dependency or shortcut to dependency
 * 
 * @returns {Object} - Contains the type and resolutions if exists in resolutions property
 */
const resolveDepType = ({ dependency, type }, package) => {
  return type ? { type: depTypeMap[type]} : checkEachType(package, dependency)
}

module.exports = {
  resolveDepType
}