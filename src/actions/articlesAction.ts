import {ThunkDispatch} from 'redux-thunk'
import {Action} from 'redux'
import {AppStateType} from '../reducers/index'
import axios from 'axios'


export const queryArticlesAction = (body: any) => async (dispatch: ThunkDispatch<AppStateType, void, Action>) => {
	const url = 'http://localhost:5000/api/v1/feed/articles'

	try {
		dispatch({type: 'FETCHING_ARTICLES'})
		const {data} = await axios.get(url, {params: {...body}})
		dispatch({type: 'FETCH_CURRENT_ARTICLES', payload: {articles: data.articles, totalArticles: data.total}})
	} 
	catch(e: any) {
		console.log(e.message)
	}
}