import { d as _objectWithoutProperties, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default from 'react';
import { u as useClassName } from './useClassName-52067a95.js';

var _excluded = ["className"];
var Input = React__default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);
  var classRef = useClassName('keg-input', className, ref);
  return React__default.createElement("input", _extends({
    ref: classRef
  }, props));
});

export { Input as I };
//# sourceMappingURL=input.web-2c668800.js.map
