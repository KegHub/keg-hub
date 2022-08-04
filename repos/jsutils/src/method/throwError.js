/** @module Function */

const { isStr } = require('../string')

/**
 * <p>Throws an Error from the passed in error</p>
 * @param {Object|string} error - The Error message or Object to throw
 *
 * @throws
 */
export const throwError = error => {
  if (!isStr(error) && error && error.stack && error.message) throw error

  throw new Error(error)
}
