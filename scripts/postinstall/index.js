const { linkRepos } = require('./linkRepos')
const { getRepoPaths } = require('./getRepoPaths')
const { installRepos } = require('./installRepos')

;(async () => {

  // Gets all repos folders from `<cli-root>/repos` directory
  const repos = getRepoPaths()

  // Finds all sub-repos with a package.json
  // Then runs yarn install on them
  installRepos(repos)

  // Then link each one to the root node_modules directory
  linkRepos(repos)

})()