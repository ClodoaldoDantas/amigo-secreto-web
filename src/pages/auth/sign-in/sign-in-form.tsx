import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAuthStore } from '@/store/use-auth-store'
import { handleError } from '@/utils/handle-error'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { z } from 'zod'

const signUpFormSchema = z.object({
	email: z.string().email('Digite um email válido'),
	password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

export type SignInFormData = z.infer<typeof signUpFormSchema>

export function SignInForm() {
	const { setCredentials } = useAuthStore()
	const navigate = useNavigate()

	const form = useForm<SignInFormData>({
		resolver: zodResolver(signUpFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	async function handleSubmit({ email, password }: SignInFormData) {
		try {
			const response = await signIn({ email, password })
			setCredentials(response.data.user, response.data.token)

			navigate('/dashboard/groups')
		} catch (err) {
			handleError(err)
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>E-mail</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Senha</FormLabel>
							<FormControl>
								<Input type="password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					className="w-full"
					disabled={form.formState.isSubmitting}
				>
					Acessar
				</Button>
			</form>
		</Form>
	)
}
