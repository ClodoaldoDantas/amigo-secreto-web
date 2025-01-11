import { AuthForm, type LoginFormData } from '@/components/auth-form'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { http } from '@/lib/http'
import { isAxiosError } from 'axios'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router'

export function SignUpPage() {
	const navigate = useNavigate()

	async function handleSignUp({ email, password }: LoginFormData) {
		try {
			await http.post('register', { email, password })
			navigate('/')
		} catch (err) {
			if (isAxiosError(err) && err.response) {
				toast.error(err.response.data.message)
			}

			console.error(err)
		}
	}

	return (
		<Card className="w-[400px]">
			<CardHeader>
				<CardTitle className="text-2xl font-semibold">Cadastro</CardTitle>

				<CardDescription className="text-sm">
					Faça seu cadastro para acessar o sistema
				</CardDescription>
			</CardHeader>
			<CardContent>
				<AuthForm onSubmit={handleSignUp} />
			</CardContent>
			<CardFooter className="justify-center">
				<p className="text-sm text-muted-foreground text-center">
					Já tem uma conta?{' '}
					<Link className="hover:underline" to="/">
						Faça login
					</Link>
				</p>
			</CardFooter>
		</Card>
	)
}
