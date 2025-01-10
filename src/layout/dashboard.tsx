import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/use-auth-store'
import { UserPlusIcon, UsersIcon } from 'lucide-react'
import { Link, Navigate, Outlet } from 'react-router'

export function DashboardLayout() {
	const { user } = useAuthStore()

	if (!user) {
		return <Navigate to="/" replace />
	}

	return (
		<>
			<header className="border-b border-zinc-800 py-5">
				<div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
					<Logo />

					<div className="flex items-center gap-2">
						<Button asChild className="text-base" variant="ghost">
							<Link to="/dashboard/groups">
								<UsersIcon className="size-4" />
								Meus Grupos
							</Link>
						</Button>

						<Button asChild className="text-base" variant="ghost">
							<Link to="/dashboard/groups">
								<UserPlusIcon className="size-4" />
								Novo Groupo
							</Link>
						</Button>
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4">
				<Outlet />
			</main>
		</>
	)
}
