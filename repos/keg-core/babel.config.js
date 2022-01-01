const kegConfig = require('./app.json')
const tapPath = require('app-root-path').path
const { checkCall } = require('@keg-hub/jsutils')
const tapResolver = require('@keg-hub/tap-resolver')
const { loadTapConfig } = require('./core/scripts/js/loadTapConfig')

/**
 * Uses the tap-resolve to build the babel config and setup tap aliases
 * Calls loadTapConfig to load a taps Config and merges it with the keg-core config
 * 
 * @returns {Object} - A valid babel config object - https://babeljs.io/docs/en/configuration#babelconfigjson
 */
module.exports = api => {
  checkCall(api && api.cache, true)

  return tapResolver({
    tapPath,
    kegPath: __dirname,
    config: loadTapConfig(kegConfig, tapPath)
  })
}
