/** @module String */

/**
 * Convert JSON string into object, wrapped in a try / catch.
 * @function
 * @param {string} string
 * @return {Object} - JSON object
 */
export const parseJSON = (str, logErr=true) => {
  try {
    return JSON.parse(str)
  }
  catch (e){
    logErr && console.error(e.message)
    return null
  }
}
