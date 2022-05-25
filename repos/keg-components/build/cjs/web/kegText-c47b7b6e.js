'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var jsutils = require('@keg-hub/jsutils');
var kegText_native = require('./kegText.native-d2f2e1a3.js');
var styleInjector = require('@keg-hub/re-theme/styleInjector');
var useTextStyles = require('./useTextStyles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var KegText = function KegText(element) {
  var Text = styleInjector.StyleInjector(kegText_native.KegText(element), {
    maxSelectors: 0,
    kegComponent: true,
    className: "keg-".concat(element),
    displayName: jsutils.capitalize(element)
  });
  return React__default["default"].forwardRef(function (props, ref) {
    var textStyles = useTextStyles.useTextStyles(element);
    return React__default["default"].createElement(Text, _rollupPluginBabelHelpers._extends({}, props, {
      style: [textStyles, props.style],
      ref: ref
    }));
  });
};

exports.KegText = KegText;
//# sourceMappingURL=kegText-c47b7b6e.js.map
