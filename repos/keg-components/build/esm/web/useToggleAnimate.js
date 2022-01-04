import { _ as _objectSpread2, b as _slicedToArray } from './_rollupPluginBabelHelpers-eca9940e.js';
import { useRef, useState, useLayoutEffect } from 'react';
import { Easing, Animated } from 'react-native-web';
import { checkCall, isObj } from '@keg-hub/jsutils';

var defConfig = {
  duration: 1000,
  easing: Easing.linear,
  toValue: 0
};
var noAnimate = function noAnimate(toggled, current, _ref) {
  var from = _ref.from,
      to = _ref.to;
  return !toggled && current === from || toggled && current === to;
};
var buildConfig = function buildConfig(config, values) {
  return checkCall(config, defConfig, values) || _objectSpread2(_objectSpread2(_objectSpread2({}, defConfig), isObj(config) ? config : {}), {}, {
    toValue: values.to
  });
};
var useToggleAnimate = function useToggleAnimate(props) {
  var config = props.config,
      toggled = props.toggled,
      onFinish = props.onFinish;
  var values = useRef(_objectSpread2({
    from: 0,
    to: 0
  }, props.values));
  var _useState = useState(new Animated.Value(values.current.from)),
      _useState2 = _slicedToArray(_useState, 1),
      animation = _useState2[0];
  useLayoutEffect(function () {
    if (noAnimate(toggled, animation._value, values.current)) return;
    var _values$current = values.current,
        from = _values$current.from,
        to = _values$current.to;
    var aniChanges = toggled ? values.current : {
      from: to,
      to: from
    };
    animation.setValue(aniChanges.from);
    Animated.timing(animation, buildConfig(config, aniChanges)).start(function () {
      return checkCall(onFinish, props, animation, values);
    });
  }, [toggled]);
  return {
    animation: animation,
    values: values
  };
};

export { useToggleAnimate };
//# sourceMappingURL=useToggleAnimate.js.map
