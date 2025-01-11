import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router'
import { MainRoutes } from './routes'

export function App() {
	return (
		<BrowserRouter>
			<MainRoutes />
			<Toaster />
		</BrowserRouter>
	)
}
