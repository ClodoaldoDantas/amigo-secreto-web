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

export function SignUpPage() {
	function handleSignUp(values: LoginFormData) {
		console.log(values)
	}

	return (
		<div className="h-screen w-full flex items-center justify-center">
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
		</div>
	)
}
