import { _ as _objectSpread2 } from './_rollupPluginBabelHelpers-eca9940e.js';
import { reStyle } from '@keg-hub/re-theme/reStyle';
import { V as View } from './view-86879139.js';
import './view.native-f56118b2.js';
import 'react';
import 'react-native-web';
import './useClassName-52067a95.js';
import './updateClassNames.js';
import './ensureClassArray.js';
import '@keg-hub/jsutils';
import './handleRefUpdate.js';
import '@keg-hub/re-theme/styleInjector';

var SelectView = reStyle(View)(function (_, props) {
  return _objectSpread2({
    height: props.height
  }, {
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden'
  } );
});

export { SelectView };
//# sourceMappingURL=selectView.js.map
