import { fetchGroups } from '@/api/fetch-groups'
import { Suspense } from 'react'
import { GroupList } from './group-list'

export function GroupsPage() {
	const fetchGroupsPromise = fetchGroups()

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<GroupList fetchGroupsPromise={fetchGroupsPromise} />
		</Suspense>
	)
}
