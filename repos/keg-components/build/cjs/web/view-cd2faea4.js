'use strict';

var view_native = require('./view.native-a1d03d45.js');
var styleInjector = require('@keg-hub/re-theme/styleInjector');

var View = styleInjector.StyleInjector(view_native.View, {
  displayName: 'View',
  className: 'keg-view'
});
View.propTypes = view_native.View.propTypes;

exports.View = View;
//# sourceMappingURL=view-cd2faea4.js.map
