import { Navigate } from 'react-router-dom'
import { AppStateType } from '../reducers/index'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { customAuthFetch } from '../axios'
import { setNewUser } from '../actions/userAction'
import { LoadingGifSmall } from './LoadingIcon'

interface IProtectedRoute {
	children: any
	redirect: string
}

export const ProtectedRoute = ({ children, redirect }: IProtectedRoute) => {
	const { isLogedIn } = useSelector((state: AppStateType) => state.user)
	const [loadingUser, setLoadingUser] = useState(true)
	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()

	const userHandler = async () => {
		try {
			const { data } = await customAuthFetch.get('/show-me')
			if (data.user) {
				dispatch(setNewUser(data.user))
			} else if (!data.user) {
				setLoadingUser(false)
			}
		} catch (e: any) {
			setLoadingUser(false)
			console.log(e)
		}
	}

	useEffect(() => {
		if (isLogedIn) {
			setLoadingUser(false)
		}
	}, [isLogedIn])

	useEffect(() => {
		if (!isLogedIn && loadingUser) {
			userHandler()
		}
	}, [loadingUser])

	if (!isLogedIn && !loadingUser) {
		return <Navigate to={redirect} replace />
	}

	return loadingUser ? (
		<div className="container">
			<h4 className="loading-gif">
				<LoadingGifSmall color="#333" />
			</h4>
		</div>
	) : (
		children
	)
}

export default ProtectedRoute
