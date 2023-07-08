import {AdminPanelStyle} from './wrappers/AdminPanelStyle'
import {AppStateType} from '../reducers/index'
import {ThunkDispatch} from 'redux-thunk'
import {Action} from 'redux'
import {useSelector, useDispatch} from 'react-redux'
import {IqueryState} from '../reducers/queryReducer'
import {queryArticlesAction} from '../actions/articlesAction'
import {useState, useEffect} from 'react'
import {IarticleState} from '../reducers/articlesReducer'
import {ArticleSmall} from './ArticleSmall'

export const AdminPanel = ({children}: any) => {
	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()
	const {isLogedIn} = useSelector((state: AppStateType) => state.user)
	const {articles, totalArticles}: IarticleState = useSelector((state: AppStateType) => state.articles)

	useEffect(() => {
		dispatch(queryArticlesAction({limit: 40}))
	}, [])
	

	return(
		<AdminPanelStyle className="container">
			<h4 className="panel-header">Публікації сайту 1-{totalArticles}</h4>
			<div className="panel-articles-feed">
				{articles.map(item => {
					return(
						<ArticleSmall
						content={item.contentSnippet}
						/>
						)
				})}
			</div>
		</AdminPanelStyle>
		)
}