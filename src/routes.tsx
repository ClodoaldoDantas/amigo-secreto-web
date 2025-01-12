import { Route, Routes } from 'react-router'
import { AuthLayout } from './layout/auth'
import { DashboardLayout } from './layout/dashboard'
import { SignInPage } from './pages/auth/sign-in'
import { SignUpPage } from './pages/auth/sign-up'
import { CreateGroup } from './pages/dashboard/create-group'
import { GroupPage } from './pages/dashboard/group'
import { GroupsPage } from './pages/dashboard/groups'

export function MainRoutes() {
	return (
		<Routes>
			<Route path="/" element={<AuthLayout />}>
				<Route index element={<SignInPage />} />
				<Route path="sign-up" element={<SignUpPage />} />
			</Route>

			<Route path="dashboard" element={<DashboardLayout />}>
				<Route path="groups" element={<GroupsPage />} />
				<Route path="groups/create" element={<CreateGroup />} />
				<Route path="groups/:id" element={<GroupPage />} />
			</Route>
		</Routes>
	)
}
