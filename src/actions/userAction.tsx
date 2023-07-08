import {customAuthFetch} from '../axios'
import {throwErrorAction} from './errorAction'
import {Action} from 'redux'
import {AppStateType} from '../reducers/index'
import {ThunkDispatch} from 'redux-thunk'

export interface IUserPayload {
	id: string,
	name: string,
	role: string
}

export const setNewUser = (user: IUserPayload) => async (dispatch: ThunkDispatch<AppStateType, void, Action>) => {
	dispatch({type: 'SET_USER', payload: user})
}

export const fetchCurrentUser = () => async (dispatch: ThunkDispatch<AppStateType, void, Action>) => {
	try {
		const {data} = await customAuthFetch.get('/show-me')
		if (data.user) {
			dispatch(setNewUser(data.user))
		}
	} 
	catch(e: any) {
		const message = `Error message: ${e.message}`
		dispatch(throwErrorAction(message))
	}
}

export const logoutAction = () => async (dispatch: ThunkDispatch<AppStateType, void, Action>) => {
	dispatch({type: 'RESET_USER'})
}

