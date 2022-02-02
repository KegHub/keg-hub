/** @module Helpers */

import { deepFreeze } from '../object/deepFreeze'

/**
 * Reuseable empty, frozen object
 * @type {Object}
 */
export const noOpObj = Object.freeze({})

/**
 * Reusable frozen object that contains a `content` object. Useful
 * for themes that rely on the content key.
 * @type {Object}
 */
export const noPropObj = deepFreeze({ content: {} })

/**
 * Reusable, empty frozen array
 * @type {Array}
 */
export const noPropArr = deepFreeze([])

/**
 * Reusable, empty frozen array.
 * Renamed for consistency
 * @type {Array}
 */
export const noOpArr = noPropArr