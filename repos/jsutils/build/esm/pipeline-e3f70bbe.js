import { i as isArr } from './isArr-a4420764.js';
import { i as isFunc } from './isFunc-40ceeef8.js';

const applyToFunc = (item, expression) => {
  if (isArr(expression)) {
    const [func, ...args] = expression;
    return func(item, ...args);
  } else if (isFunc(expression)) {
    return expression(item);
  } else {
    console.error(`Pipeline expected either a function or an array (for function expressions). Found ${typeof expression}`);
    return item;
  }
};

const pipeline = (item, ...functions) => {
  return functions.reduce((result, fn) => applyToFunc(result, fn), item);
};

export { applyToFunc as a, pipeline as p };
//# sourceMappingURL=pipeline-e3f70bbe.js.map
