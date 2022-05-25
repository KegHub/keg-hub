'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var view_native = require('./view.native-a1d03d45.js');
var styleInjector = require('@keg-hub/re-theme/styleInjector');
require('./_rollupPluginBabelHelpers-d23df5c1.js');
require('react');
require('react-native-web');
require('./useClassName-75c55cf8.js');
require('./updateClassNames.js');
require('./ensureClassArray.js');
require('@keg-hub/jsutils');
require('./handleRefUpdate.js');

var View = styleInjector.StyleInjector(view_native.View, {
  maxSelectors: 0,
  kegComponent: true,
  displayName: 'View',
  className: 'keg-view'
});
View.propTypes = view_native.View.propTypes;

exports.View = View;
//# sourceMappingURL=view.js.map
