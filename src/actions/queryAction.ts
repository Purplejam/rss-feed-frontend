import {ThunkDispatch} from 'redux-thunk'
import {Action} from 'redux'
import {AppStateType} from '../reducers/index'


export const queryObjectAction = (body: any) => async (dispatch: ThunkDispatch<AppStateType, void, Action>) => {
	try {
		dispatch({type: 'FETCHING_QUERY', payload: {...body}})
	} 
	catch(e: any) {
		console.log(e.message)
	}
}