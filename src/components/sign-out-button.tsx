import { useAuthStore } from '@/store/use-auth-store'
import { LogOutIcon } from 'lucide-react'

export function SignOutButton() {
	const { clearCredentials } = useAuthStore()

	return (
		<button
			type="button"
			onClick={clearCredentials}
			className="flex items-center gap-2 text-sm px-2 py-1.5"
		>
			<LogOutIcon className="size-4" />
			Sair da conta
		</button>
	)
}
