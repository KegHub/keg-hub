const core = require('./repos/keg-core/app.json')
const retheme = require('./repos/re-theme/tap.json')
const components = require('./repos/keg-components/tap.json')

const kegHubAlias = `hub`

module.exports = {
  keg: {
    alias: kegHubAlias,
    // Custom tap link alias for all sub-repos
    // Key is based on folder name
    repoAlias: {
      jsutils: 'utils',
      [`keg-hub`]: kegHubAlias,
      [`tap-resolver`]: 'resolver',
      [`keg-core`]: core.keg.alias,
      [`re-theme`]: retheme.keg.alias,
      [`keg-components`]: components.keg.alias,
    }
  }
}