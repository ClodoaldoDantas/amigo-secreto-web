import { useAuthStore } from '@/store/use-auth-store'
import { Navigate, Outlet } from 'react-router'

export function AuthLayout() {
	const { user } = useAuthStore()

	if (user) {
		return <Navigate to="/dashboard/groups" replace />
	}

	return (
		<div className="h-dvh w-full flex items-center justify-center px-4">
			<Outlet />
		</div>
	)
}
