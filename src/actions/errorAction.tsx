import {ThunkDispatch} from 'redux-thunk'
import {Action} from 'redux'
import {AppStateType} from '../reducers/index'


export const throwErrorAction = (error: string) => async (dispatch: ThunkDispatch<AppStateType, void, Action>) => {
	dispatch({type: 'THROW_ERROR', payload: {
		error
	}})
}


export const clearErrorAction = () => async (dispatch: ThunkDispatch<AppStateType, void, Action>) => {
	dispatch({type: 'CLEAR_ERROR'})
}