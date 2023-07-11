import { combineReducers } from 'redux'
import articlesReducer from './articlesReducer'
import queryReducer from './queryReducer'
import userReducer from './userReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({
	articles: articlesReducer,
	query: queryReducer,
	user: userReducer,
	error: errorReducer,
})

type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>

export default rootReducer
