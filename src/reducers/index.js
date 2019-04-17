import { combineReducers } from 'redux'
import { translations } from './translations'
import { message } from './message'

export const rootReducer = combineReducers({
  translations,
  message,
})