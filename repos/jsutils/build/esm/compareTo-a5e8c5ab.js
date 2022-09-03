import { i as isStr } from './isStr-481ce69b.js';
import { i as isOrderable } from './not-8920c559.js';
import { v as validate } from './validate-0a7295ee.js';

const compareTo = (x, y) => {
  const [valid] = validate({
    x,
    y
  }, {
    $default: isOrderable
  });
  if (!valid) return null;
  return isStr(x) ? x.localeCompare(y) : x - y;
};

export { compareTo as c };
//# sourceMappingURL=compareTo-a5e8c5ab.js.map
