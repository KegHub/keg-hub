'use strict';

var isFunc = require('./isFunc-f93803cb.js');
var validate = require('./validate-23297ec2.js');
var isNum = require('./isNum-c7164b50.js');
var jsonEqual = require('./jsonEqual-7e69ef6a.js');
var isArr = require('./isArr-39234014.js');
var deepClone = require('./deepClone-ae664a21.js');
var isStr = require('./isStr-8a57710e.js');
var isObj = require('./isObj-6b3aa807.js');
var isValidDate = require('./isValidDate-813b9419.js');

const checkCall = (method, ...params) => {
  return isFunc.isFunc(method) ? method(...params) : undefined;
};

const complement = predicate => {
  const [valid] = validate.validate({
    predicate
  }, {
    predicate: isFunc.isFunc
  });
  return valid ? (...args) => !predicate(...args) : null;
};

const eitherFunc = (func1, func2) => isFunc.isFunc(func1) && func1 || func2;

const debounce = (func, wait = 250, immediate = false) => {
  let timeout;
  function wrapFunc(...args) {
    if (!isFunc.isFunc(func)) return null;
    const context = this;
    const later = () => {
      timeout = null;
      !immediate && func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) return isFunc.isFunc(func) && func.apply(context, args);
  }
  return wrapFunc;
};

const doIt = (...args) => {
  const params = args.slice();
  const num = params.shift();
  const bindTo = params.shift();
  const cb = params.pop();
  if (!isNum.isNum(num) || !isFunc.isFunc(cb)) return [];
  const doItAmount = new Array(num);
  const responses = [];
  for (let i = 0; i < doItAmount.length; i++) {
    const data = cb.call(bindTo, i, ...params);
    if (data === false) break;
    responses.push(data);
  }
  return responses;
};

const memorize = (func, getCacheKey, limit = 1) => {
  if (!isFunc.isFunc(func) || getCacheKey && !isFunc.isFunc(getCacheKey)) return console.error('Error: Expected a function', func, getCacheKey);
  let memorized = function () {
    const cache = memorized.cache;
    const key = getCacheKey ? getCacheKey.apply(this, arguments) : arguments[0];
    if (jsonEqual.hasOwn(cache, key)) return cache[key];
    const result = func.apply(this, arguments);
    isNum.isNum(limit) && Object.keys(cache).length < limit ? cache[key] = result : memorized.cache = {
      [key]: result
    };
    return result;
  };
  memorized.cache = {};
  memorized.destroy = () => {
    getCacheKey = undefined;
    memorized.cache = undefined;
    memorized.destroy = undefined;
    memorized = undefined;
  };
  return memorized;
};

const runSeq = async (asyncFns = [], options = {}) => {
  const [valid] = validate.validate({
    asyncFns
  }, {
    asyncFns: isArr.isArr
  });
  if (!valid) return [];
  const {
    cloneResults = false,
    returnOriginal = true
  } = options;
  const results = [];
  for (const fn of asyncFns) {
    const result = isFunc.isFunc(fn) ? await fn(results.length, cloneResults ? deepClone.deepClone(results) : results) : returnOriginal ? fn : undefined;
    results.push(result);
  }
  return results;
};

const timedRun = async (fn, ...args) => {
  const [valid] = validate.validate({
    fn
  }, {
    fn: isFunc.isFunc
  });
  if (!valid) return [undefined, -1];
  const startTime = new Date();
  const result = await fn(...args);
  return [result, new Date() - startTime];
};

const throttle = (func, wait = 100) => {
  let waiting = false;
  return function (...args) {
    if (waiting) return;
    waiting = true;
    func.apply(this, args);
    return setTimeout(() => {
      waiting = false;
    }, wait);
  };
};

const throttleLast = (func, cb, wait = 100) => {
  let throttleTimeout;
  if (isNum.isNum(cb)) {
    wait = cb;
    cb = undefined;
  }
  return function (...args) {
    if (throttleTimeout) clearTimeout(throttleTimeout);
    throttleTimeout = setTimeout(() => {
      func.apply(this, args);
      clearTimeout(throttleTimeout);
    }, wait);
    typeof cb === 'function' && cb();
  };
};

const limbo = promise => {
  return !promise || !isFunc.isFunc(promise.then) ? [new Error(`A promise or thenable is required as the first argument!`), null] : promise.then(data => [null, data]).catch(err => [err, undefined]);
};
const limboify = (cb, ...args) => {
  return limbo(new Promise((res, rej) => cb(...args, (err, success) => err ? rej(err) : res(success || true))));
};

const uuid = a => a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);

const noOp = () => {};

const parseErrorMessage = exception => {
  return isStr.isStr(exception) && !isValidDate.isEmpty(exception) ? exception : isObj.isObj(exception) ? exception.message : null;
};

const defFilters = [`node:internal`, `node_modules/jest`];
const stackTracePaths = (filter = defFilters) => {
  const orgPreStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = (_, stack) => stack;
  const stack = new Error().stack.slice(1);
  Error.prepareStackTrace = orgPreStackTrace;
  return stack.reduce((acc, cs) => {
    const loc = cs.getFileName();
    if (!loc) return acc;
    const ignore = isFunc.isFunc(filter) ? filter(loc, cs, stack) : Boolean(filter.length && filter.find(filterLoc => loc.includes(filterLoc)));
    !ignore && acc.push(loc);
    return acc;
  }, []);
};

exports.checkCall = checkCall;
exports.complement = complement;
exports.debounce = debounce;
exports.doIt = doIt;
exports.eitherFunc = eitherFunc;
exports.limbo = limbo;
exports.limboify = limboify;
exports.memorize = memorize;
exports.noOp = noOp;
exports.parseErrorMessage = parseErrorMessage;
exports.runSeq = runSeq;
exports.stackTracePaths = stackTracePaths;
exports.throttle = throttle;
exports.throttleLast = throttleLast;
exports.timedRun = timedRun;
exports.uuid = uuid;
//# sourceMappingURL=stackTracePaths-58b768d2.js.map
