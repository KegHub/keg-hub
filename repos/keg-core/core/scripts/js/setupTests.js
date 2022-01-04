import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { Mocks } from 'KegMocks'

global.testMocks = global.testMocks || {}
Mocks.defaultMocks()

Enzyme.configure({ adapter: new Adapter() })
