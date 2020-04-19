const { throwWrap } = require('KegUtils')
const { executeTask } = require('./executeTask')
const { get, isFunc, isStr } = require('jsutils')

/**
 * Checks all global sub-tasks for sub-sub-tasks
 * This allows calling the cli like keg branch || keg git branch
 * @param {Object} tasks - tasks to search
 * @param {string} command - Tasks to run from the command line
 *
 * @returns {Object} - Found task to run
 */
const checkSubTasks = (tasks, command) => {
  return Object.keys(tasks).reduce((task, key) => {
    return task || get(tasks, `${ key }.tasks.${ command }`, task)
  }, null) || get(tasks, command)
}

/**
 * Finds a parents sub tasks, and runs it
 * @param {*} parentTask - task object of the parent
 *
 * @returns {*} Response from sub-task
 */
const useSubTasksAction = parentTask => {

  /**
  * Default subTask runner
  * @param {Object} args - arguments passed from the runTask method
  * @param {string} args.command - Initial command being run
  * @param {Array} args.options - arguments passed from the command line
  * @param {Object} args.tasks - All registered tasks of the CLI
  * @param {Object} globalConfig - Global config object for the keg-cli
  *
  * @returns {void}
  */
  return args => {

    const { command, options, tasks, task, globalConfig } = args
    const subTasks = get(task, `tasks`, {})
    const isParent = parentTask.name === command || parentTask.alias.indexOf(command) !== -1
    
    let subTask = options[0] && isParent
      ? get(subTasks, options[0])
      : checkSubTasks(subTasks, command)

    // If subTask is a string it's an alias, so get the task object of the alias
    subTask = isStr(subTask) ? task.tasks[subTask] : subTask

    // Check if it's a sub-command, and if so execute it
    subTask
      ? executeTask({
          command,
          options,
          task: subTask,
          tasks,
          globalConfig
        })
      : throwWrap(`Could not find sub-command ${ command } ${ options[0] }!`)
  }

}

/**
 * Builds the alias and tasks for all global tasks, and their sub-tasks
 *
 * @returns {Object} - Contains global alias and tasks
 */
const buildTaskObject = (task) => {
  const built = {
    ...task,
    action: useSubTasksAction(task),
    alias: task.alias || [],
    tasks: task.tasks || {}
  }

  return Object.keys(built.tasks)
    .reduce((aliasTasks, key) => {
      const subSubTasks = Object.keys(get(built, `tasks.${key}.tasks`, {}))
      const subSubAlias = get(built, `tasks.${key}.alias`, [])
      aliasTasks.alias = [ ...aliasTasks.alias, key, ...subSubTasks, ...subSubAlias ]

      return aliasTasks
    }, built)

}



module.exports = {
  buildTaskObject
}