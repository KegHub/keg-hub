'use strict';

var isStr = require('./isStr-8a57710e.js');
var not = require('./not-16fa9c85.js');
var validate = require('./validate-23297ec2.js');

const compareTo = (x, y) => {
  const [valid] = validate.validate({
    x,
    y
  }, {
    $default: not.isOrderable
  });
  if (!valid) return null;
  return isStr.isStr(x) ? x.localeCompare(y) : x - y;
};

exports.compareTo = compareTo;
//# sourceMappingURL=compareTo-d69e4abf.js.map
