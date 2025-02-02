import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Link } from 'react-router'
import { SignUpForm } from './sign-up-form'

export function SignUpPage() {
	return (
		<Card className="w-[400px]">
			<CardHeader>
				<CardTitle className="text-2xl font-semibold">Cadastro</CardTitle>

				<CardDescription className="text-sm">
					Faça seu cadastro para acessar o sistema
				</CardDescription>
			</CardHeader>
			<CardContent>
				<SignUpForm />
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
