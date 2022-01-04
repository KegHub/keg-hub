const path = require('path')
const { scripts } = require('../../paths')
const { getRepoPaths } = require(path.join(scripts, 'postinstall/getRepoPaths'))
const { isFunc, pickKeys, eitherArr } = require('@keg-hub/jsutils')

/**
 * Gets the repo name, location and package json for all repos in the /repos folder
 * @param {Object} args.params - Pre-Parsed options array as an object
 *
 * @returns {Object} - Repos as (key)folder => (value) object with the repos name, location and package.json
 */
const getHubRepos = async ({ context }) => {
  const repos = getRepoPaths()
  const filter = eitherArr(context, [context])

  return Object.entries(repos)
    .reduce((acc, [repo, location]) => {
      try {
        
        // If a filter is passed, then check if the repo matches
        const include = filter.find(name => repo.includes(name))
        // If not repo match, then return
        if(filter[0] !== 'all' && !include) return acc
          
        
        const package = require(path.join(location, 'package.json'))
        acc[repo] = { repo, location, package }
      } catch(err){}

      return acc
    }, {})
}

module.exports = {
  getHubRepos
}