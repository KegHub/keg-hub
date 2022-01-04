const kegConfig = require('./app.json')
const tapPath = require('app-root-path').path
const { loadTapConfig } = require('./core/scripts/js/loadTapConfig')

/**
 * Cache holder for merged tap and core configs
 * @type {Object}
 */
let expoConfig

/**
 * Loads and merges the tap and keg-core configs
 * Caches the merged object and returns the export property of the config
 * Allows overriding expo settings with tap specific settings
 * @function
 * @public
 * 
 * @returns {Object} export config object - https://docs.expo.dev/versions/latest/config/app/
 */
module.exports = args => {
  if(expoConfig) return expoConfig

  const tapConfig = loadTapConfig(kegConfig, tapPath)
  expoConfig = tapConfig.expo

  return expoConfig
}