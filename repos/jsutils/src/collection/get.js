/** @module Collection */

import { updateColl } from './updateColl'

/**
 * Searches an object based on the path param
 * <br/>I.E. path = 'data.foo.bar' => will return obj.data.foo.bar.
 * <br/>If bar does not exist, then will return obj.data.foo
 * @example
 * get(obj, 'data.foo.bar')
 * // Returns the value of bar
 * @example
 * get(obj, ['data', 'foo', 'bar'])
 * // Returns the value of bar
 * @function
 * @param {Object} obj - Will search the object based on the path
 * @param {String|Array<string>} path - Dot notation string or Array of string keys of the object
 * @param {*} [fallback] - Separated string to search the object
 * @return {*} - The final value found from the path
 */
export const get = (obj, path, fallback) =>
  updateColl(obj, path, 'get', fallback)
