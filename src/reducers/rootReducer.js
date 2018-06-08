import { combineReducers } from 'redux'

import header from './header'
import homepage from './homepage'

const rootReducer = combineReducers({
  header,
  homepage
})

export default rootReducer
