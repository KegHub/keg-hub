'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var reStyle = require('@keg-hub/re-theme/reStyle');
var view = require('./view-cd2faea4.js');
require('./view.native-a1d03d45.js');
require('react');
require('react-native-web');
require('./useClassName-75c55cf8.js');
require('./updateClassNames.js');
require('./ensureClassArray.js');
require('@keg-hub/jsutils');
require('./handleRefUpdate.js');
require('@keg-hub/re-theme/styleInjector');

var SelectView = reStyle.reStyle(view.View)(function (_, props) {
  return _rollupPluginBabelHelpers._objectSpread2({
    height: props.height
  }, {
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden'
  } );
});

exports.SelectView = SelectView;
//# sourceMappingURL=selectView.js.map
