import { useCallback, useEffect } from 'react';

var useWindowClick = function useWindowClick(cb) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var onWindowClick = useCallback(cb.bind.apply(cb, [window].concat(args)), [cb].concat(args));
  useEffect(function () {
    window.addEventListener('click', onWindowClick);
    return function () {
      return window.removeEventListener('click', onWindowClick);
    };
  }, [onWindowClick]);
};

export { useWindowClick };
//# sourceMappingURL=useWindowClick.js.map
