import { i as isStr } from './isStr-481ce69b.js';
import { i as isArr } from './isArr-a4420764.js';
import './validate-0a7295ee.js';
import './noOps-e78de2aa.js';
import { b as isRegex } from './not-8920c559.js';

const getRegexSource = maybeRx => isRegex(maybeRx) ? maybeRx.source : isStr(maybeRx) ? maybeRx : null;

const parseArgs = args => {
  if (isArr(args[0])) return [args[0], args[1]];
  const last = args[args.length - 1];
  const options = isStr(last) ? last : undefined;
  const expressions = options ? args.splice(0, args.length - 1) : args;
  return [expressions, options];
};
const joinRegex = (...args) => {
  const [expressions, options] = parseArgs(args);
  const source = expressions.reduce((joined, next) => {
    const nextSource = getRegexSource(next);
    return !nextSource ? joined : joined === '' ? nextSource : `${joined}|${nextSource}`;
  }, '');
  return new RegExp(`(${source})`, options);
};

export { getRegexSource as g, joinRegex as j };
//# sourceMappingURL=joinRegex-89dc1093.js.map
