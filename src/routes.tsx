import { Route, Routes } from 'react-router'
import { SignInPage } from './pages/sign-in'
import { SignUpPage } from './pages/sign-up'

export function MainRoutes() {
	return (
		<Routes>
			<Route index element={<SignInPage />} />
			<Route path="sign-up" element={<SignUpPage />} />
		</Routes>
	)
}
