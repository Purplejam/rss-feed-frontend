export interface IUserState {
	id: string,
	role: string,
	name: string,
	isLogedIn: boolean
}

const initialState = {
	id: '',
	role: '',
	name: '',
	isLogedIn: false
}

const userReducer = (state: IUserState = initialState, action: {type: string, payload: {id: string, role: string, name: string}}) => {
	switch(action.type) {
		case 'RESET_USER' : {
			return {
				...initialState
			}
		}
		case 'SET_USER' : {
			return {
				isLogedIn: true, 
				...action.payload
			}
		}
		default : 
			return {
				...state,
			}
	}
}

export default userReducer;