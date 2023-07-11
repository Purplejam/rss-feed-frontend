import { FormPage } from './wrappers/FormPageWrapper'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState, useEffect } from 'react'
import { validatePassword, validateEmail } from '../lib/validateData'
import Alert from '@mui/material/Alert'
import { setNewUser } from '../actions/userAction'
import { AppStateType } from '../reducers/index'
import { Action } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { throwErrorAction } from '../actions/errorAction'
import { useNavigate } from 'react-router-dom'
import { LoadingGifInline } from './LoadingIcon'
import { customAuthFetch } from '../axios'

interface ILoginValues {
	email: string
	password: string
}

export const LoginPage = () => {
	const initialValues = {
		email: '',
		password: '',
	}
	const [values, setValues] = useState<ILoginValues>(initialValues)
	const [inputError, setInputError] = useState<boolean>(false)
	const [passwordError, setPasswordError] = useState<boolean>(false)
	const [alert, setAlertValue] = useState<string>('')
	const [alertType, setAlertType] = useState<any>('success')
	const [loading, setLoading] = useState<boolean>(false)
	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()
	const navigate = useNavigate()
	const { isLogedIn } = useSelector((state: AppStateType) => state.user)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	const validateData = (values: ILoginValues) => {
		if (!validatePassword(values.password)) {
			setPasswordError(true)
			setLoading(false)
			return false
		}
		if (!validateEmail(values.email)) {
			setInputError(true)
			setLoading(false)
			return false
		}
		return true
	}

	const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		setAlertValue('')
		try {
			if (validateData(values)) {
				const { data } = await customAuthFetch.post('/login', values)
				setPasswordError(false)
				setInputError(false)
				dispatch(setNewUser(data.user))
				setAlertType('success')
				setAlertValue('Done!')
			}
		} catch (error: any) {
			const dataMsg: string = error.response?.data?.msg
			if (dataMsg) {
				dispatch(throwErrorAction(dataMsg))
			} else {
				const message = `Error message: ${error.message}`
				dispatch(throwErrorAction(message))
			}
			setAlertType('error')
			setAlertValue('Error!')
			setLoading(false)
		}
	}

	useEffect(() => {
		if (isLogedIn) {
			const timerId = setTimeout(() => {
				navigate('/admin-panel')
				setLoading(false)
			}, 1000)
			return () => clearTimeout(timerId)
		}
	}, [isLogedIn, dispatch])

	return (
		<FormPage>
			<Box
				className="loginForm"
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 0, width: '100%' },
				}}
				noValidate
				autoComplete="off"
				onSubmit={formSubmit}
			>
				<div>
					{alert.length > 0 && (
						<Alert severity={alertType} className="alert-message">
							{alert}
						</Alert>
					)}
					<h3>Введіть email та пароль</h3>
					<TextField
						autoComplete="email"
						error={inputError ? true : false}
						color="secondary"
						required
						fullWidth
						name="email"
						label="Email"
						type="email"
						size="small"
						helperText={inputError ? 'Enter a valid email' : ''}
						value={values.email}
						onChange={handleChange}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						autoComplete="password"
						error={passwordError ? true : false}
						color="secondary"
						required
						fullWidth
						name="password"
						label="Пароль"
						type="password"
						size="small"
						helperText={passwordError ? 'Password must contain 6 characters or more' : ''}
						value={values.password}
						onChange={handleChange}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</div>
				{loading ? (
					<button className="simple-button">
						<LoadingGifInline color="#4855ab" />
					</button>
				) : (
					<button type="submit" className="simple-button inverse">
						Login
					</button>
				)}
			</Box>
		</FormPage>
	)
}

export default LoginPage
