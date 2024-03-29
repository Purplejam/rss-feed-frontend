import { AdminPanelStyle } from './wrappers/AdminPanelStyle'
import { AppStateType } from '../reducers/index'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { queryArticlesAction } from '../actions/articlesAction'
import { useEffect } from 'react'
import { IarticleState } from '../reducers/articlesReducer'
import { ArticleSmall } from './ArticleSmall'
import { LoadingGifSmall } from './LoadingIcon'

export const AdminPanel = () => {
	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()
	const { articles, totalArticles, isLoading }: IarticleState = useSelector(
		(state: AppStateType) => state.articles,
	)

	useEffect(() => {
		dispatch(queryArticlesAction({ limit: 40 }))
	}, [])

	return (
		<AdminPanelStyle className="container">
			<h4 className="panel-header">Публікації сайту 1-{totalArticles}</h4>
			{isLoading ? (
				<div className="loading-gif">
					<LoadingGifSmall color="#333" />
				</div>
			) : (
				<div className="panel-articles-feed">
					{articles.map((item) => {
						return <ArticleSmall key={item.guid} guid={item.guid} content={item.contentSnippet} />
					})}
				</div>
			)}
		</AdminPanelStyle>
	)
}
