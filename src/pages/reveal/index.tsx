import { revealSecretFriend } from '@/api/reveal-secret-friend'
import { Logo } from '@/components/logo'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Suspense } from 'react'
import { useParams } from 'react-router'
import { SecretFriendValue } from './secret-friend-value'

export function RevealPage() {
	const { code } = useParams()
	const revealSecretFriendPromise = revealSecretFriend(code!)

	return (
		<div className="h-screen w-full flex items-center justify-center">
			<Card className="w-[400px]">
				<CardHeader>
					<Logo />
				</CardHeader>

				<CardContent>
					<Suspense fallback={<Skeleton className="w-full h-7" />}>
						<SecretFriendValue
							revealSecretFriendPromise={revealSecretFriendPromise}
						/>
					</Suspense>
				</CardContent>
			</Card>
		</div>
	)
}
