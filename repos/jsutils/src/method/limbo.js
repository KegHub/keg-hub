import { isFunc } from './isFunc'

/**
 * Response returned from a limbo promise
 * @typedef TLimboResponse
 * @type {Array}
 */

/**
 * Adds catch to a promise for better error handling of await functions
 * <br/>Removes the need for wrapping await in a try / catch
 * <br/>First argument is an Error when the promise throws or null when it resolves
 * <br/>Second argument is the response from the resolved promise
 * @example
 * const [ err, data ] = await limbo(promiseFunction())
 * // returns an array
 * // * err will be undefined if no error was thrown
 * // * data will be the response from the promiseFunction
 * @function
 * @param {Promise<Function>} promise - Promise to be resolved
 * @return {Promise<TLimboResponse>} - Slot 1 => error, Slot 2 => response from promise
 */
export const limbo = promise => {
  return !promise || !isFunc(promise.then)
    ? [
        new Error(`A promise or thenable is required as the first argument!`),
        null,
      ]
    : promise.then(data => [ null, data ]).catch(err => [ err, undefined ])
}
