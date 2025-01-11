import { fetchGroups } from '@/api/fetch-groups'
import { Suspense } from 'react'
import { GroupList } from './group-list'
import { SkeletonGroupList } from './skeleton-group-list'

export function GroupsPage() {
	const fetchGroupsPromise = fetchGroups()

	return (
		<Suspense fallback={<SkeletonGroupList />}>
			<GroupList fetchGroupsPromise={fetchGroupsPromise} />
		</Suspense>
	)
}
