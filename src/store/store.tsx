import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'

//for dev
//@ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

//@ts-ignore
//const composeEnhancers = compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)) )

export default store