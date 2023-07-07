import {IArticle} from '../components/interfaces/Article.interface'
import { Reducer } from 'redux'
import { queryArticlesAction } from '../actions/articlesAction'

export interface IqueryState {
	page: number,
	category: string, 
	sorting: string,
	searchQuery: string,
}

const initialState: IqueryState = {
	page: 1,
	category: '',
	sorting: '',
	searchQuery: ''
}

const queryReducer = (state: IqueryState = initialState, 
	action: {
		type: string, 
		payload: {
			page: number,
			category: string,
			sorting: string,
			searchQuery: string		
		}}) => {
	switch(action.type) {
		case 'RESET_QUERY' : {
			return {
				...initialState
			}
		}
		case 'FETCHING_QUERY' : {
			return {
				...state, 
				...action.payload
			}
		}

		default : 
			return {
				...state,
			}
	}
}

export default queryReducer