import { http } from '@/lib/http'

type SignInRequest = {
	email: string
	password: string
}

type SignInResponse = {
	user: {
		id: 'string'
		email: 'string'
	}
	token: 'string'
}

export function signIn({ email, password }: SignInRequest) {
	return http.post<SignInResponse>('/login', { email, password })
}
