'use strict';

var touchable = require('./touchable.js');
var styleInjector = require('@keg-hub/re-theme/styleInjector');

var Touchable = styleInjector.StyleInjector(touchable.Touchable, {
  maxSelectors: 0,
  kegComponent: true,
  displayName: 'Touchable',
  className: 'keg-touchable',
  important: ['transitionDuration', 'WebkitTransitionDuration']
});
Touchable.propTypes = touchable.Touchable.propTypes;

exports.Touchable = Touchable;
//# sourceMappingURL=touchable-ab081983.js.map
