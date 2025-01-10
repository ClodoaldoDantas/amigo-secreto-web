import { useAuthStore } from '@/store/use-auth-store'
import { LogOutIcon } from 'lucide-react'
import { Button } from './ui/button'

export function SignOutButton() {
	const { clearCredentials } = useAuthStore()

	return (
		<Button onClick={clearCredentials} className="text-base" variant="ghost">
			<LogOutIcon className="size-4" />
			Sair da conta
		</Button>
	)
}
