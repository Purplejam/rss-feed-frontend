import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'

const composeEnhancers =
	//@ts-ignore
	(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
