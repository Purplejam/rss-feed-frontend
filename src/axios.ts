import axios from 'axios'


export const customAuthFetch = axios.create({
  baseURL: 'http://localhost:5000/api/v1/auth',
  headers: {'Content-Type': 'application/json'},
  withCredentials: true 
})
