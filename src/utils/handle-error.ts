import { isAxiosError } from 'axios'
import toast from 'react-hot-toast'

export function handleError(err: unknown) {
	if (isAxiosError(err) && err.response) {
		toast.error(err.response.data.message)
	} else {
		toast.error('Ocorreu um erro inesperado')
	}

	console.error(err)
}
