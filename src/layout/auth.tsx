import { Outlet } from 'react-router'

export function AuthLayout() {
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<Outlet />
		</div>
	)
}
