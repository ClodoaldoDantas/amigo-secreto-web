import { Logo } from '@/components/logo'
import { Menu } from '@/components/menu'
import { useAuthStore } from '@/store/use-auth-store'
import { Navigate, Outlet } from 'react-router'

export function DashboardLayout() {
	const { user } = useAuthStore()

	if (!user) {
		return <Navigate to="/" replace />
	}

	return (
		<>
			<header className="border-b py-5">
				<div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
					<Logo />
					<Menu />
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4">
				<Outlet />
			</main>
		</>
	)
}
