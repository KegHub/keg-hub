const { promisify } = require('util')
const { exec } = require('child_process')
const cmdExec = promisify(exec)
const package = require('../package.json')
const path = require('path')
const docsPath = path.join(__dirname, `../docs`)

const setupGit = async () => {
  try {
    await cmdExec(`git init`, {cwd: docsPath})
    await cmdExec(`git add .`, {cwd: docsPath})
    await cmdExec(`git commit -m "feat(docs): JS-Utils publish docs version ${package.version}"`, {cwd: docsPath})

    process.exit(0)
  }
  catch(e){
    console.error(e)
    process.exit(1)
  }
}

setupGit()