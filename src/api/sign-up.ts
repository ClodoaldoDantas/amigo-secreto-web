import { http } from '@/lib/http'

type SignUpRequest = {
	email: string
	password: string
}

export function signUp({ email, password }: SignUpRequest) {
	return http.post('/register', { email, password })
}
