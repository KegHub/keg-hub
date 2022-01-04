const path = require('path')
const { execSync } = require('child_process')
const { setupError } = require('./setupError')
const { getRepoPaths } = require('./getRepoPaths')

const rootDir = path.join(__dirname, '../../')
const {keg} = require(path.join(rootDir, 'tap.js'))

/**
 * Gets the path to the keg-cli folder from the KEG_CLI_PATH env
 * If not set, then throws an error
 * 
 * @returns {string|undefined} - Path to the keg-cli.js executable
 */
const getKegCli = () => {
  return process.env.KEG_CLI_PATH
    ? path.join(process.env.KEG_CLI_PATH, `keg-cli.js`)
    : console.warn(`Missing ENV "KEG_CLI_PATH", which is required to link keg-hub repos`)
}
const cli = getKegCli()

/**
 * Creates a tap link for the passed in repo
 * 
 * @param {string} repo - Location of the repo to create the tap link for
 * @param {string} args - Extra argument options to pass to the keg tap link command
 * 
 * @returns {boolean} - True if the tap link is created
 */
const linkTap = (repo, args='') => {
  try {
    if(!cli) return false

    const response = execSync(
      `${cli} tap link ${args}`.trim(),
      {cwd: repo, env: process.env}
    )
    const resStr = response.toString().trim()
    resStr && console.log(response.toString())
    return true
  }
  // Catch the error here, so it will still try to link the other repos
  catch(err){
    return false
  }
}

/**
 * Runs keg tap link for all sub repos that contain a tap.json
 * @type {function}
 * 
 * @param {Object} repos - Name/Locations of all sub-repos in the /repos directory
 * 
 * @returns {Void}
 */
 const linkRepos = repos => {
   try {
    console.log(`[KEG-HUB] Linking Keg-Hub repos to Keg-CLI`)
     // Get the path to the keg-cli executable
    repos = repos || getRepoPaths()
    // Add the keg-hub root directory to the repos
    // This way it will added as a tap link
    Object.entries({ ...repos, [`keg-hub`]: rootDir})
      .map(([name, repo]) => {
        let created = linkTap(repo, `--silent`) 
        // If it failed, then try running it again but passing in the name
        // This will create a link for repos without a tap config file
        // Check keg.repoAlias for custom alias based on repo name
        // This is for repos that don't contain a tap config
        const alias = keg.repoAlias[name] || name
        created = created || linkTap(repo, `--name ${alias} --silent`)
        created && console.log(`  * Linked "${name}" to Keg-CLI as "${alias}"`)
      })
  }
  catch(err){
    setupError(err, `Failed keg-cli task "keg tap link". Please run the command manually`, 1)
  }

  console.log()
}

/**
 * Check if the parent module has a parent
 * If it does, then it was called from code
 * So we should return the method instead of running it automatically
 * 
*/
require.main === module ? linkRepos() : (module.exports = { linkRepos, linkTap })