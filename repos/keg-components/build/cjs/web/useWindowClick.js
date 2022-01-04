'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var useWindowClick = function useWindowClick(cb) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var onWindowClick = React.useCallback(cb.bind.apply(cb, [window].concat(args)), [cb].concat(args));
  React.useEffect(function () {
    window.addEventListener('click', onWindowClick);
    return function () {
      return window.removeEventListener('click', onWindowClick);
    };
  }, [onWindowClick]);
};

exports.useWindowClick = useWindowClick;
//# sourceMappingURL=useWindowClick.js.map
