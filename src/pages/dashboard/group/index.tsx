import { fetchGroupById } from '@/api/fetch-group-by-id'
import { Suspense } from 'react'
import { useParams } from 'react-router'
import { GroupDetails } from './group-details'

import { SkeletonGroupDetails } from './skeleton-group-details'

export function GroupPage() {
	const { id: groupId } = useParams()
	const fetchGroupPromise = fetchGroupById(groupId!)

	return (
		<div className="mt-28 mb-10 flex justify-center">
			<Suspense fallback={<SkeletonGroupDetails />}>
				<GroupDetails fetchGroupPromise={fetchGroupPromise} />
			</Suspense>
		</div>
	)
}
