import { createStore, applyMiddleware, combineReducers } from 'redux'
import weatherReducer from './weather-reducer'
import thunk from 'redux-thunk'

let reducers = combineReducers({
     weather: weatherReducer,
})


let store = createStore(reducers, applyMiddleware(thunk))
window.store = store

export default store
