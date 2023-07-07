import {combineReducers} from 'redux'
import articlesReducer from './articlesReducer'
import queryReducer from './queryReducer'


const rootReducer = combineReducers({
	articles: articlesReducer,
	query: queryReducer
})

type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>


export default rootReducer