import type { RevealSecretFriendResponse } from '@/api/reveal-secret-friend'
import { HandHeart } from 'lucide-react'
import { use } from 'react'

type SecretFriendValueProps = {
	revealSecretFriendPromise: Promise<RevealSecretFriendResponse>
}

export function SecretFriendValue({
	revealSecretFriendPromise,
}: SecretFriendValueProps) {
	const { secret_friend } = use(revealSecretFriendPromise)

	return (
		<div className="flex items-center gap-2">
			<HandHeart className="size-6" />
			<p className="text-xl">
				Seu amigo secreto é{' '}
				<strong className="text-red-400">{secret_friend}</strong>
			</p>
		</div>
	)
}
