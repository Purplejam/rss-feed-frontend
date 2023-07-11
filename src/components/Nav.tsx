import { NavStyle, Logo } from './wrappers/NavStyles'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeed } from '@fortawesome/free-solid-svg-icons'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { AppStateType } from '../reducers/index'
import { useDispatch, useSelector } from 'react-redux'
import { queryArticlesAction } from '../actions/articlesAction'
import { IqueryState } from '../reducers/queryReducer'

export const Nav = () => {
	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()
	const { page, sorting, searchQuery, category, limit }: IqueryState = useSelector(
		(state: AppStateType) => state.query,
	)
	const userIcon = <FontAwesomeIcon icon={faFeed} />

	const updateFeedHandler = () => {
		const body = { page, sorting, searchQuery, category, limit }
		dispatch(queryArticlesAction(body))
	}

	return (
		<NavStyle>
			<Link to="/" onClick={() => updateFeedHandler()}>
				<Logo>
					<span>{userIcon}</span>
					<span>NewsFeed</span>
				</Logo>
			</Link>

			<div>
				<ul>
					<li>
						<Link
							to="/admin-panel"
							onClick={() => {
								dispatch({ type: 'FETCHING_ARTICLES' })
							}}
						>
							Admin panel
						</Link>
					</li>
				</ul>
			</div>
		</NavStyle>
	)
}
