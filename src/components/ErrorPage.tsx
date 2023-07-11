import { useDispatch } from 'react-redux'
import { AppStateType } from '../reducers/index'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { useSelector } from 'react-redux'
import Modal from '@mui/material/Modal'
import { useState, useEffect } from 'react'
import { clearErrorAction } from '../actions/errorAction'
import { ErrorModal } from './wrappers/ErrorPageStyles'

export const ErrorPage = () => {
	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()
	const { errorMessage } = useSelector((state: AppStateType) => state.error)

	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => {
		dispatch(clearErrorAction())
	}

	useEffect(() => {
		if (errorMessage) {
			setOpen(true)
		} else {
			setOpen(false)
		}
	}, [errorMessage])

	return (
		<div>
			{errorMessage ? (
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<ErrorModal>
						<h3>Error!</h3>
						<span>{errorMessage}</span>
						<button onClick={handleClose} className="simple-button">
							Back
						</button>
					</ErrorModal>
				</Modal>
			) : null}
		</div>
	)
}

export default ErrorPage
