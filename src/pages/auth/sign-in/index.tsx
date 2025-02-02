import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Link } from 'react-router'
import { SignInForm } from './sign-in-form'

export function SignInPage() {
	return (
		<Card className="w-[400px]">
			<CardHeader>
				<CardTitle className="text-2xl font-semibold">Login</CardTitle>

				<CardDescription className="text-sm">
					Faça login para acessar o sistema
				</CardDescription>
			</CardHeader>
			<CardContent>
				<SignInForm />
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
