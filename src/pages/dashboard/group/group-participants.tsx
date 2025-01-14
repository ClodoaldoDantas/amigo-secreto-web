import { CopyToClipboard } from '@/components/copy-to-clipboard'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

type GroupParticipantsProps = {
	participans: {
		_id: string
		name: string
	}[]
}

export function GroupParticipants({ participans }: GroupParticipantsProps) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[400px]">Nome</TableHead>
					<TableHead>Ações</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{participans.map((participant) => {
					const origin = window.location.origin
					const url = new URL(`/reveal/${participant._id}`, origin).toString()
					const textoToCopy = `Acesse o link a seguir para revelar o seu amigo secreto: ${url}`

					return (
						<TableRow key={participant._id}>
							<TableCell>{participant.name}</TableCell>
							<TableCell>
								<CopyToClipboard value={textoToCopy} />
							</TableCell>
						</TableRow>
					)
				})}
			</TableBody>
		</Table>
	)
}
