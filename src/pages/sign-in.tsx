import { AuthForm, type LoginFormData } from '@/components/auth-form'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Link } from 'react-router'

export function SignInPage() {
	function handleLogin(values: LoginFormData) {
		console.log(values)
	}

	return (
		<div className="h-screen w-full flex items-center justify-center">
			<Card className="w-[400px]">
				<CardHeader>
					<CardTitle className="text-2xl font-semibold">Login</CardTitle>

					<CardDescription className="text-sm">
						Faça login para acessar o sistema
					</CardDescription>
				</CardHeader>
				<CardContent>
					<AuthForm onSubmit={handleLogin} />
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
		</div>
	)
}
