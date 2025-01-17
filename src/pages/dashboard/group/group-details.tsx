import type { FetchGroupByIdResponse } from '@/api/fetch-group-by-id'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { use } from 'react'
import { GroupParticipants } from './group-participants'

type GroupDetailsProps = {
	fetchGroupPromise: Promise<FetchGroupByIdResponse>
}

export function GroupDetails({ fetchGroupPromise }: GroupDetailsProps) {
	const { group } = use(fetchGroupPromise)

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle className="text-2xl">{group.name}</CardTitle>
				<CardDescription className="text-base">
					Informações do grupo e participantes
				</CardDescription>
			</CardHeader>

			<CardContent>
				<h2 className="text-xl">Participantes</h2>
				<GroupParticipants participans={group.participants} />
			</CardContent>
		</Card>
	)
}
