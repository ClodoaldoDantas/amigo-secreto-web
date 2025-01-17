import { deleteGroup } from '@/api/delete-group'
import { Button } from '@/components/ui/button'
import { TrashIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

type DeleteGroupButtonProps = {
	groupId?: string
}

export function DeleteGroupButton({ groupId }: DeleteGroupButtonProps) {
	const navigate = useNavigate()

	async function handleDeleteGroup() {
		if (!groupId) {
			return
		}

		const canRemoveGroup = confirm('Tem certeza que deseja deletar o grupo?')

		if (!canRemoveGroup) {
			return
		}

		const toastId = toast.loading('Deletando grupo...')

		try {
			await deleteGroup(groupId)
			toast.success('Grupo deletado com sucesso!', { id: toastId })

			navigate('/dashboard/groups')
		} catch (err) {
			console.log(err)

			toast.error(
				'Não foi possível deletar o grupo. Tente novamente mais tarde.',
				{ id: toastId },
			)
		}
	}

	return (
		<Button type="button" variant="destructive" onClick={handleDeleteGroup}>
			<TrashIcon className="size-6" />
			Deletar grupo
		</Button>
	)
}
