import { http } from '@/lib/http'

export type RevealSecretFriendResponse = {
	secret_friend: string
}

export async function revealSecretFriend(code: string) {
	const response = await http.get<RevealSecretFriendResponse>(
		`secret-friend/${code}`,
	)

	return response.data
}
