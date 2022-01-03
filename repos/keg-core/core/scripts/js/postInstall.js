const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const { exec } = require('child_process')
const coreDir = path.join(__dirname, '../../../')

const cmdExec = promisify(exec)

// Set the cmd options to ensure script is allowed to update permissions
const cmdOpts = {
  groupID: process.getgid(),
  userID: process.getuid(),
  maxBuffer: Infinity,
  env: process.env,
  cwd: coreDir,
}

/**
 * Runs yarn install from within the keg directory
 */
const doYarnInstall = async () => {
  console.log(`  * Running yarn install for Keg-Core`)
  const { stderr } = await cmdExec(`yarn install`, cmdOpts)
  if (stderr) throw new Error(stderr)
}

/**
 * Checks if expo and react node_modules are install
 * If not, then calls doYarnInstall
 */
const checkForNodeModules = () => {
  const checkModules = [
    path.join(coreDir, 'node_modules/expo'),
    path.join(coreDir, 'node_modules/react'),
    path.join(coreDir, 'node_modules/@keg-hub/tap-resolver'),
  ]

  return checkModules.map(dir => fs.existsSync(dir))
}

;(async () => {
  console.log()
  console.log(`[KEG-CORE] Running post install script`)
  const installed = checkForNodeModules()

  try {
    installed.indexOf(false) !== -1 && (await doYarnInstall())
  }
  catch (err) {}

  console.log()
  process.exit(0)
})()
