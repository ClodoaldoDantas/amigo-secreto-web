import { useAuthStore } from '@/store/use-auth-store'
import axios, { isAxiosError } from 'axios'

export const http = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
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

http.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		if (isAxiosError(error) && error.response?.status === 401) {
			useAuthStore.getState().clearCredentials()
			window.location.href = '/'
		}

		return Promise.reject(error)
	},
)
