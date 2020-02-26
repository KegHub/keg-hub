
module.exports = {
  generate: {
    name: 'generate',
    alias: [ 'gen', 'gn' ],
    tasks: {
      tap: require('./tap'),
    },
    example: 'keg generate <command> <options>',
    description: 'Generates scaffolding for Keg and Tap projects'
  }
}