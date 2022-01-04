const path = require('path')
const appRoot = path.join(__dirname, '../')
const repos = path.join(appRoot, './repos')

module.exports = {
  repos,
  appRoot,
  scripts: path.join(appRoot, 'scripts'),
  core: path.join(repos, 'keg-core'),
  retheme: path.join(repos, 'retheme'),
  jsutils: path.join(repos, 'jsutils'),
  resolver: path.join(repos, 'resolver'),
  components: path.join(repos, 'keg-components'),
}
