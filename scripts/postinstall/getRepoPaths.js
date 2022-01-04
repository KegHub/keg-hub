const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const reposPath = path.join(__dirname, '../../', 'repos')

/**
 * Finds all sub-repo paths from the <root>/repos directory
 * @type {function}
 * 
 * @return {Object} - Found repo paths by name
 */
const getRepoPaths = () => {
  // list of the repo names located at `<root>/repos`
  const repos = execSync('ls', { cwd: reposPath })
    .toString()
    .split('\n')
    .filter(Boolean)

  // object of env names to repo paths
  return repos.reduce(
    (values, name) => {
      if(name === 'keg-cli') return values

      const repo = path.join(reposPath, name)
      fs.existsSync(path.join(repo, `./package.json`)) && (values[name] = repo)

      return values
    },
    {}
  )
}

module.exports = {
  getRepoPaths
}