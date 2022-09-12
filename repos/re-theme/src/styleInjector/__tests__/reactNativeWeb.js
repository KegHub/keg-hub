jest.resetModules()
jest.resetAllMocks()

const {
  createReactDOMStyle,
  preprocess,
  prefixStyles,
} = require('../reactNativeWeb')

describe('reactNativeWeb', () => {
  test(`react-native-web imports should be function`, () => {
    expect(typeof createReactDOMStyle).toBe('function')
    expect(typeof preprocess).toBe('function')
    expect(typeof prefixStyles).toBe('function')
  })
})
