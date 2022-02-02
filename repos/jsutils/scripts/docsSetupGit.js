const path = require('path')
const { promisify } = require('util')
const { exec } = require('child_process')
const package = require('../package.json')

const cmdExec = promisify(exec)
const docsPath = path.join(__dirname, `../docs`)
const configsPath = path.join(__dirname, `../configs`)

/**
 * Executes a command in the docs directory
 * @function
 *
 * @param {string} cmd - Command to be run
 *
 * @returns {Promise} - resolves to response from cmdExec method
 */
const runCmd = async cmd => {
  return await cmdExec(cmd, {cwd: docsPath})
}

/**
 * Copies the docs readme from the configs path into the docs folder
 * @function
 *
 * @returns {void}
 */
const copyReadMe = async () => {
  const configReadMe = path.join(configsPath, 'docs.readme.md')
  const docsReadMe = path.join(docsPath, 'README.md')
  await runCmd(`cp ${configReadMe} ${docsReadMe}`)
}

/**
 * Setups up the docs folder and initialized it with git
 * Then pushes the updated to docs to the git repo
 * Then cleans up by removing the .git folder
 * @function
 *
 * @returns {void}
 */
const setupGit = async () => {
  let exitCode = 0
  try {
    await copyReadMe()
    await runCmd(`git init`)
    await runCmd(`git add .`)
    await runCmd(`git commit -m "feat(docs): JS-Utils publish docs version ${package.version}"`)
    await runCmd(`git remote add origin ${package.publish.repository}`)
    await runCmd(`git push origin main --force`)

    console.log(`Successfully published jsutils docs\n`)

  }
  catch(e){
    console.error(e)
    exitCode = 1
  }

  // Remove the git folder after pushing
  await runCmd(`rm -rf ./.git`)

  process.exit(exitCode)
}

setupGit()