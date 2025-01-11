import { signIn } from '@/api/sign-in'
import { AuthForm, type LoginFormData } from '@/components/auth-form'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { useAuthStore } from '@/store/use-auth-store'
import { handleError } from '@/utils/handle-error'
import { Link, useNavigate } from 'react-router'

export function SignInPage() {
	const { setCredentials } = useAuthStore()
	const navigate = useNavigate()

	async function handleSignIn({ email, password }: LoginFormData) {
		try {
			const response = await signIn({ email, password })
			setCredentials(response.data.user, response.data.token)

			navigate('/dashboard/groups')
		} catch (err) {
			handleError(err)
		}
	}

	return (
		<Card className="w-[400px]">
			<CardHeader>
				<CardTitle className="text-2xl font-semibold">Login</CardTitle>

				<CardDescription className="text-sm">
					Faça login para acessar o sistema
				</CardDescription>
			</CardHeader>
			<CardContent>
				<AuthForm onSubmit={handleSignIn} />
			</CardContent>

			<CardFooter className="justify-center">
				<p className="text-sm text-muted-foreground text-center">
					Ainda não tem uma conta?{' '}
					<Link className="hover:underline" to="/sign-up">
						Cadastre-se
					</Link>
				</p>
			</CardFooter>
		</Card>
	)
}
