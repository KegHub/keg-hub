/**
 * IMPORTANT -- Uses internal react-native-web methods to keep bundle size down
 *   - If this code is ever removed from react-native-web
 *   - We'll need to add it into ReTheme, or come up with a different solution
 */
import prefixStyles from 'react-native-web/dist/modules/prefixStyles'
import createReactDOMStyle from 'react-native-web/dist/exports/StyleSheet/createReactDOMStyle'
import preprocess from 'react-native-web/dist/exports/StyleSheet/preprocess'

export { prefixStyles, createReactDOMStyle, preprocess }
