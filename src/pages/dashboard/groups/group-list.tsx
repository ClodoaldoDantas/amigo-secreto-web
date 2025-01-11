import type { FetchGroupsResponse } from '@/api/fetch-groups'
import { use } from 'react'
import { GroupCard } from './group-card'

type GroupListProps = {
	fetchGroupsPromise: Promise<FetchGroupsResponse>
}

export function GroupList({ fetchGroupsPromise }: GroupListProps) {
	const { groups } = use(fetchGroupsPromise)

	return (
		<div className="my-6 grid grid-cols-4 gap-3">
			{groups.map((group) => (
				<GroupCard key={group._id} group={group} />
			))}
		</div>
	)
}
