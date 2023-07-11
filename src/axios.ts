import axios from 'axios'

export const customAuthFetch = axios.create({
	baseURL: '/api/v1/auth',
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
})
