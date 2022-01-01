const { deepMerge, set, get, unset, noOpObj } = require('@keg-hub/jsutils')
const getAppConfig = require('@keg-hub/tap-resolver/src/resolvers/getAppConfig')

/**
 * Helper method to load a taps config (tap.js | tap.json | app.js | etc... )
 * Then merge it with keg-core's config file
 * Ensures any Keg-Core specific overrides are applied
 * 
 * @param {Object} kegConfig - Config object for keg-core
 * @param {string} tapPath - Root directory of the tap
 * 
 * @returns {Object} - merged tap and core config files 
 */
const loadTapConfig = (kegConfig=noOpObj, tapPath) => {
  const tapConfig = getAppConfig(tapPath, false, false)

  if(tapConfig.name === kegConfig.name) return kegConfig

  const configOverrides = get(kegConfig, 'keg.overrides')
  unset(kegConfig, 'keg.overrides')
  
  const mergedConfig = deepMerge(kegConfig, tapConfig)

  configOverrides && Object.keys(configOverrides)
    .map(key => {
      const override = configOverrides[key]
      set(mergedConfig, override, get(kegConfig, override))
    })

  return mergedConfig
}


module.exports = {
  loadTapConfig
}