import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { AppStateType } from '../reducers/index'
import axios from 'axios'
import { throwErrorAction } from '../actions/errorAction'

export const queryArticlesAction =
	(body: any) => async (dispatch: ThunkDispatch<AppStateType, void, Action>) => {
		const url = 'https://rss-feed-node.onrender.com/api/v1/feed/articles'

		try {
			dispatch({ type: 'FETCHING_ARTICLES' })
			const { data } = await axios.get(url, { params: { ...body } })
			dispatch({
				type: 'FETCH_CURRENT_ARTICLES',
				payload: { articles: data.articles, totalArticles: data.total },
			})
		} catch (e: any) {
			dispatch(throwErrorAction(e.message))
		}
	}
