import { d as _objectWithoutProperties, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default from 'react';
import { Picker } from 'react-native';
import { u as useClassName } from './useClassName.native-32e8827d.js';

var _excluded = ["className"];
var Select = React__default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);
  var classRef = useClassName('keg-select', className, ref);
  return React__default.createElement(Picker, _extends({}, props, {
    ref: classRef
  }));
});

export { Select as S };
//# sourceMappingURL=select-3df74998.js.map
