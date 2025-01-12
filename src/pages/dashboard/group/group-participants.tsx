import { Button } from '@/components/ui/button'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { CopyIcon } from 'lucide-react'

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
				{participans.map((participant) => (
					<TableRow key={participant._id}>
						<TableCell>{participant.name}</TableCell>
						<TableCell>
							<Button variant="outline" size="sm">
								<CopyIcon className="size-4" />
								Copiar
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
