/** @module Function */

import { isBool } from '../boolean/isBool'
import { isStrBool } from '../boolean/isStrBool'

import { isColl } from '../collection/isColl'
import { isEmptyColl } from '../collection/isEmptyColl'
import { deepEqual } from '../collection/deepEqual'


import { isDom } from '../dom/hasDomAccess'

import { exists } from '../ext/exists'
import { isEmpty } from '../ext/isEmpty'
import { isSame } from '../ext/isSame'
import { isValidDate } from '../ext/isValidDate'

import { isFunc } from './isFunc'
import { identity } from './identity'
import { isOrderable } from './isOrderable'

import { equalsNaN } from '../number/equalsNaN'
import { isFloat } from '../number/isFloat'
import { isInt } from '../number/isInt'
import { isNum } from '../number/isNum'
import { isNegative } from '../number/isNegative'
import { isPositive } from '../number/isPositive'

import { hasOwn } from '../object/hasOwn'
import { isEntry } from '../object/isEntry'
import { isArrMap } from '../object/isArrMap'
import { isObj } from '../object/isObj'
import { jsonEqual } from '../object/jsonEqual'

import { isRegex } from '../regex/isRegex'

import { isEmail } from '../string/isEmail'
import { isIp } from '../string/isIp'
import { isLowerCase } from '../string/isLowerCase'
import { isPhone } from '../string/isPhone'
import { isQuoted } from '../string/isQuoted'
import { isStr } from '../string/isStr'
import { isUpperCase } from '../string/isUpperCase'
import { isUrl } from '../string/isUrl'
import { isUuid } from '../string/isUuid'

import { isValidUrl } from '../url/isValidUrl'

/**
 * When called, if calls original function, then returns inverse of the functions result
 * Should be used with functions that return a boolean
 * @param {Function} func - Function call and invert its response
 *
 * @returns {Function} - Calls the passed in function then returns True if the passed in function returns falsy, otherwise false
 */
export const not = (func) => {
  return (...args) => !func.apply(null, args)
}

not.isBool = not(isBool)
not.isStrBool = not(isStrBool)
not.isColl = not(isColl)
not.deepEqual = not(deepEqual)
not.isEmptyColl = not(isEmptyColl)
not.isDom = not(isDom)
not.exists = not(exists)
not.isEmpty = not(isEmpty)
not.isSame = not(isSame)
not.isValidDate = not(isValidDate)
not.isFunc = not(isFunc)
not.identity = not(identity)
not.isOrderable = not(isOrderable)
not.equalsNaN = not(equalsNaN)
not.isFloat = not(isFloat)
not.isInt = not(isInt)
not.isNum = not(isNum)
not.isNegative = not(isNegative)
not.isPositive = not(isPositive)
not.hasOwn = not(hasOwn)
not.isEntry = not(isEntry)
not.isArrMap = not(isArrMap)
not.isObj = not(isObj)
not.jsonEqual = not(jsonEqual)
not.isRegex = not(isRegex)
not.isEmail = not(isEmail)
not.isIp = not(isIp)
not.isLowerCase = not(isLowerCase)
not.isPhone = not(isPhone)
not.isQuoted = not(isQuoted)
not.isStr = not(isStr)
not.isUpperCase = not(isUpperCase)
not.isUrl = not(isUrl)
not.isUuid = not(isUuid)
not.isValidUrl = not(isValidUrl)
