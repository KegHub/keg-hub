'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var reactNative = require('react-native');
var jsutils = require('@keg-hub/jsutils');

var defConfig = {
  duration: 1000,
  easing: reactNative.Easing.linear,
  toValue: 0
};
var noAnimate = function noAnimate(toggled, current, _ref) {
  var from = _ref.from,
      to = _ref.to;
  return !toggled && current === from || toggled && current === to;
};
var buildConfig = function buildConfig(config, values) {
  return jsutils.checkCall(config, defConfig, values) || _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, defConfig), jsutils.isObj(config) ? config : {}), {}, {
    toValue: values.to
  });
};
var useToggleAnimate = function useToggleAnimate(props) {
  var config = props.config,
      toggled = props.toggled,
      onFinish = props.onFinish;
  var values = React.useRef(_rollupPluginBabelHelpers._objectSpread2({
    from: 0,
    to: 0
  }, props.values));
  var _useState = React.useState(new reactNative.Animated.Value(values.current.from)),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 1),
      animation = _useState2[0];
  React.useLayoutEffect(function () {
    if (noAnimate(toggled, animation._value, values.current)) return;
    var _values$current = values.current,
        from = _values$current.from,
        to = _values$current.to;
    var aniChanges = toggled ? values.current : {
      from: to,
      to: from
    };
    animation.setValue(aniChanges.from);
    reactNative.Animated.timing(animation, buildConfig(config, aniChanges)).start(function () {
      return jsutils.checkCall(onFinish, props, animation, values);
    });
  }, [toggled]);
  return {
    animation: animation,
    values: values
  };
};

exports.useToggleAnimate = useToggleAnimate;
//# sourceMappingURL=useToggleAnimate.js.map
