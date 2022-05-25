import { Touchable as Touchable$1 } from './touchable.js';
import { StyleInjector } from '@keg-hub/re-theme/styleInjector';

var Touchable = StyleInjector(Touchable$1, {
  maxSelectors: 0,
  kegComponent: true,
  displayName: 'Touchable',
  className: 'keg-touchable',
  important: ['transitionDuration', 'WebkitTransitionDuration']
});
Touchable.propTypes = Touchable$1.propTypes;

export { Touchable as T };
//# sourceMappingURL=touchable-07dd63ff.js.map
