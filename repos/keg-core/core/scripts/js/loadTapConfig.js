const path = require('path')
const corePackConf = require('../../../package.json')
const {
  deepMerge,
  set,
  get,
  unset,
  noOpObj,
  isArr,
} = require('@keg-hub/jsutils')
const getAppConfig = require('@keg-hub/tap-resolver/src/resolvers/getAppConfig')

/**
 * Cache holder for the merged tap / core config
 * @type {Object}
 */
let loadedConfig

/**
 * Loads a taps package.json file if it can
 * Otherwise returns an empty object
 * @param {string} tapPath - Root directory of the tap
 *
 * @returns {Object} - Loaded tap's package.json config
 */
const getTapPackage = tapPath => {
  /** Try to load the taps package.json, if it fails, just move on */
  try {
    return require(path.join(tapPath, `package.json`))
  }
  catch (err) {
    console.log(err.message)
    return noOpObj
  }
}

/**
 * Sets the expo sdk version and app version if needed
 * See https://docs.expo.dev/versions/latest/config/app/#sdkversion
 * @param {Object} expoConfig - Config object matching expo config spec
 * @param {Object} tapConfig - Original tap config object before being merged
 * @param {Object} tapPackConf - tap's package.json config
 *
 * @returns {Object} expoConfig - Config object matching expo config spec
 */
const updateVersions = (expoConfig, tapConfig, tapPackConf) => {
  /** Set the sdk version to match package.json dep */
  const expoVer = get(corePackConf, `devDependencies.expo`)
  expoVer && (expoConfig.sdkVersion = expoVer)

  const tapVersion = tapConfig.version || tapPackConf.version

  /** Set the expo version to match the merged config version if needed */
  tapVersion &&
    // Check the tapConfig to see if it had an expo.version set
    // If not set, the core version would be set, so we want to overwrite it
    (!tapConfig.expo || !tapConfig.expo.version) &&
    (expoConfig.version = tapVersion)

  return expoConfig
}

/**
 * Sets up the expo web config
 * See https://docs.expo.dev/versions/latest/config/app/#web
 * @param {Object} webConfig - Config object matching expo.web config spec
 * @param {Object} tapConfig - Original tap config object before being merged
 * @param {Object} tapPackConf - tap's package.json config
 *
 * @returns {Object} webConfig - Config object matching expo.web config spec
 */
const setupWebConfig = (webConfig, tapConfig, tapPackConf) => {
  webConfig.description =
    webConfig.description || tapConfig.description || tapPackConf.description
  // TODO: Add more updates as needed
  // Should add a default favicon via `webConfig.favicon`

  return webConfig
}

/**
 * Ensure configure expo prop array values match the tap.expo values
 * The deepMerge helper merges arrays instead of overwriting
 * This method ensures only the taps value is used for array properties
 * @param {Object} expoConfig - Config object matching expo config spec
 * @param {Object} tapConfig - Original tap config object before being merged
 *
 * @returns {Object} expoConfig - Config object matching expo config spec
 */
const ensureTapArrayValues = (expoConfig, tapConfig) => {
  const tapExpoConf = tapConfig.expo

  /** If not expo config on the tap config, then nothing to setup */
  if (!tapExpoConf) return expoConfig

  /**
   * Loop the expo config looking for array object
   * Then replace them with value in the tap config if it exists
   */
  Object.entries(expoConfig).map(([ key, value ]) => {
    isArr(value) && (expoConfig[key] = tapExpoConf[key] || expoConfig[key])
  })

  return expoConfig
}

/**
 * Sets dynamic values via tap config and package.json
 * @param {Object} mergedConfig - Contains the tap and core configs merged together
 * @param {Object} kegConfig - Config object for keg-core
 *
 * @returns {Object} - mergedConfig with the dynamic values configured
 */
const setDynamicValues = (mergedConfig, tapConfig, tapPath) => {
  const tapPackConf = getTapPackage(tapPath)

  const expoConfig = updateVersions(
    mergedConfig.expo || {},
    tapConfig,
    tapPackConf
  )

  const webConfig = setupWebConfig(expoConfig.web || {}, tapConfig, tapPackConf)

  /**
   * Ensure the updated configs get set as they might be new objects
   */
  expoConfig.web = webConfig
  mergedConfig.expo = ensureTapArrayValues(expoConfig, tapConfig)

  return mergedConfig
}

/**
 * Helper method to load a taps config (tap.js | tap.json | app.js | etc... )
 * Then merge it with keg-core's config file
 * Ensures any Keg-Core specific overrides are applied
 *
 * @param {Object} kegConfig - Config object for keg-core
 * @param {string} tapPath - Root directory of the tap
 *
 * @returns {Object} - merged tap and core config Objects
 */
const loadTapConfig = (kegConfig = noOpObj, tapPath) => {
  /** If a cache version exists, then use that */
  if (loadedConfig) return loadedConfig

  const tapConfig = getAppConfig(tapPath, false, false)

  if (tapConfig.name === kegConfig.name) return kegConfig

  const configOverrides = get(kegConfig, 'keg.overrides')
  unset(kegConfig, 'keg.overrides')

  const mergedConfig = deepMerge(kegConfig, tapConfig)

  /**
   * Override any config properties that keg-core owns
   * This ensures the are set to the correct values for using keg-core
   */
  configOverrides &&
    Object.keys(configOverrides).map(key => {
      const override = configOverrides[key]
      set(mergedConfig, override, get(kegConfig, override))
    })

  /**
   * Cache the config so it loads more quickly on subsequent calls
   * Expo calls this file a number of times on boot
   * So this speeds up the process
   */
  loadedConfig = setDynamicValues(mergedConfig, tapConfig, tapPath)

  return loadedConfig
}

module.exports = {
  loadTapConfig,
}
