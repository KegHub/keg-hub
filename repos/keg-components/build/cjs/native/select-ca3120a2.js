'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var reactNative = require('react-native');
var useClassName_native = require('./useClassName.native-3d1a229b.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["className"];
var Select = React__default["default"].forwardRef(function (_ref, ref) {
  var className = _ref.className,
      props = _rollupPluginBabelHelpers._objectWithoutProperties(_ref, _excluded);
  var classRef = useClassName_native.useClassName('keg-select', className, ref);
  return React__default["default"].createElement(reactNative.Picker, _rollupPluginBabelHelpers._extends({}, props, {
    ref: classRef
  }));
});

exports.Select = Select;
//# sourceMappingURL=select-ca3120a2.js.map
