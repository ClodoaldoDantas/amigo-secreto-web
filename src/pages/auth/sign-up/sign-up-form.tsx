import { signUp } from '@/api/sign-up'
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
import { handleError } from '@/utils/handle-error'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { z } from 'zod'

const signUpFormSchema = z
	.object({
		email: z.string().email('Digite um email válido'),
		password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
		confirmPassword: z
			.string()
			.min(6, 'A senha deve ter no mínimo 6 caracteres'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'As senhas não conferem',
	})

export type SignUpFormData = z.infer<typeof signUpFormSchema>

export function SignUpForm() {
	const navigate = useNavigate()

	const form = useForm<SignUpFormData>({
		resolver: zodResolver(signUpFormSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	})

	async function handleSubmit({ email, password }: SignUpFormData) {
		try {
			await signUp({ email, password })
			toast.success('Cadastro realizado com sucesso! Faça login para entrar.')
			navigate('/')
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

				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirmar senha</FormLabel>
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
					Cadastrar
				</Button>
			</form>
		</Form>
	)
}
