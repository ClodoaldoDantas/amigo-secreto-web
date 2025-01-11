import { useAuthStore } from '@/store/use-auth-store'
import axios from 'axios'

export const http = axios.create({
	baseURL: 'http://localhost:3333/',
})

http.interceptors.request.use(
	(config) => {
		const token = useAuthStore.getState().token

		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}

		return config
	},
	(error) => {
		return Promise.reject(error)
	},
)
