import { createGroup } from '@/api/create-group'
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
import { PlusIcon, TrashIcon } from 'lucide-react'
import { useFieldArray, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { z } from 'zod'

const createGroupFormSchema = z.object({
	name: z.string().min(3, 'O nome do grupo deve ter no mínimo 3 caracteres'),
	participants: z
		.array(
			z.object({
				name: z
					.string()
					.min(3, 'O nome do participante deve ter no mínimo 3 caracteres'),
			}),
		)
		.min(3, 'O grupo deve ter no mínimo 3 participantes'),
})

export type CreateGroupFormData = z.infer<typeof createGroupFormSchema>

export function CreateGroupForm() {
	const navigate = useNavigate()

	const form = useForm<CreateGroupFormData>({
		resolver: zodResolver(createGroupFormSchema),
		defaultValues: {
			name: '',
			participants: [{ name: '' }, { name: '' }, { name: '' }],
		},
	})

	const { fields, append, remove } = useFieldArray({
		control: form.control,
		name: 'participants',
	})

	function addNewParticipant() {
		append({ name: '' })
	}

	function removeParticipant(index: number) {
		remove(index)
	}

	async function handleCreateGroup(values: CreateGroupFormData) {
		const data = {
			name: values.name,
			participants: values.participants.map((participant) => participant.name),
		}

		try {
			await createGroup(data)
			toast.success('Grupo criado com sucesso!')

			navigate('/dashboard/groups')
		} catch (err) {
			handleError(err)
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleCreateGroup)}>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nome do Grupo</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex items-center justify-between mt-10 mb-4">
					<span className="block text-xl">Participantes</span>

					<Button
						type="button"
						size="sm"
						variant="outline"
						onClick={addNewParticipant}
					>
						<PlusIcon className="size-5" />
						Adicionar Participante
					</Button>
				</div>

				<div className="space-y-4">
					{fields.map((field, index) => (
						<FormField
							key={field.id}
							control={form.control}
							name={`participants.${index}.name`}
							render={({ field }) => (
								<div className="flex items-start gap-2">
									<FormItem className="flex-1">
										<FormControl>
											<Input {...field} placeholder="Nome" />
										</FormControl>
										<FormMessage />
									</FormItem>

									{fields.length > 3 && (
										<Button
											type="button"
											size="icon"
											variant="outline"
											onClick={() => removeParticipant(index)}
										>
											<TrashIcon className="size-5" />
										</Button>
									)}
								</div>
							)}
						/>
					))}
				</div>

				<Button
					type="submit"
					className="w-full mt-4"
					disabled={form.formState.isSubmitting}
				>
					Criar Grupo
				</Button>
			</form>
		</Form>
	)
}
