import type { FetchGroupsResponse } from '@/api/fetch-groups'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'
import { use } from 'react'
import { GroupCard } from './group-card'

type GroupListProps = {
	fetchGroupsPromise: Promise<FetchGroupsResponse>
}

export function GroupList({ fetchGroupsPromise }: GroupListProps) {
	const { groups } = use(fetchGroupsPromise)

	return (
		<>
			{groups.length === 0 && (
				<Alert className="my-6">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle className="text-base">Nenhum grupo encontrado</AlertTitle>
					<AlertDescription>Crie um novo grupo para começar.</AlertDescription>
				</Alert>
			)}

			<div className="my-6 grid grid-cols-4 gap-3">
				{groups.map((group) => (
					<GroupCard key={group._id} group={group} />
				))}
			</div>
		</>
	)
}
