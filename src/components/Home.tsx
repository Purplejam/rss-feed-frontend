import {useState, useEffect} from 'react'
import {HomeStyles} from './wrappers/HomeStyles'
import {SearchBox} from './SearchBox'
import {ArticlesFeed} from './ArticlesFeed'
import {ThunkDispatch} from 'redux-thunk'
import {Action} from 'redux'
import {AppStateType} from '../reducers/index'
import {useDispatch, useSelector} from 'react-redux'
import {IqueryState} from '../reducers/queryReducer'
import {queryArticlesAction} from '../actions/articlesAction'
import {FeedPagination} from './Pagination'
import {IarticleState} from '../reducers/articlesReducer'

export const Home = () => {
	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()
	const {totalArticles}: IarticleState = useSelector((state: AppStateType) => state.articles)
	const {page, sorting, searchQuery, category}: IqueryState = useSelector((state: AppStateType) => state.query)


	useEffect(() => {
		const body = {page, sorting, searchQuery, category}
		dispatch(queryArticlesAction(body))
	}, [page, sorting, searchQuery, category])

	return(
		<HomeStyles className="container">
			<h2>Новини України Та Світу</h2>
			<h4 className="total-items-count">Знайдено {totalArticles} новин за вашим запитом</h4>	
			<SearchBox/>
			<ArticlesFeed/>
			<FeedPagination/>
		</HomeStyles>
		)
}