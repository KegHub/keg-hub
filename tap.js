

module.exports = {
  keg: {
    alias: 'hub',
    // Custom tap link alias for all sub-repos
    // Key is based on folder name
    repoAlias: {
      jsutils: 'utils',
      [`keg-hub`]: 'hub',
      [`keg-core`]: 'core',
      [`re-theme`]: 'retheme',
      [`tap-resolver`]: 'resolver',
      [`keg-components`]: 'components',
    }
  }
}