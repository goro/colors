import { combineReducers } from 'redux'
import ColorReducer from './ColorReducer'

const ColorsApp = combineReducers({
  color: ColorReducer
})

export default ColorsApp
