import { useState, useEffect } from 'react'
import { AppStateType } from '../reducers/index'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import Pagination from '@mui/material/Pagination'
import { queryObjectAction } from '../actions/queryAction'
import { useDispatch, useSelector } from 'react-redux'
import { IqueryState } from '../reducers/queryReducer'
import { IarticleState } from '../reducers/articlesReducer'

export const FeedPagination = () => {
	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()
	const { isLoading, totalArticles }: IarticleState = useSelector(
		(state: AppStateType) => state.articles,
	)
	const [localPage, setLocalPage] = useState(1)
	const { sorting, searchQuery, category }: IqueryState = useSelector(
		(state: AppStateType) => state.query,
	)

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setLocalPage(value)
	}

	const countPageHandler = () => {
		return Math.ceil(totalArticles / 6)
	}

	useEffect(() => {
		setLocalPage(1)
	}, [sorting, searchQuery, category])

	useEffect(() => {
		dispatch(queryObjectAction({ page: localPage }))
	}, [localPage])

	return (
		<>
			{!isLoading && (
				<Pagination count={countPageHandler()} page={localPage} onChange={handleChange} />
			)}
		</>
	)
}
