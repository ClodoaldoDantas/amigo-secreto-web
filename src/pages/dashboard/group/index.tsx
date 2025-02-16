import { fetchGroupById } from '@/api/fetch-group-by-id'
import { Suspense } from 'react'
import { useParams } from 'react-router'
import { GroupDetails } from './group-details'

import { DeleteGroupButton } from './delete-group-button'
import { SkeletonGroupDetails } from './skeleton-group-details'

export function GroupPage() {
	const { id: groupId } = useParams()
	const fetchGroupPromise = fetchGroupById(groupId!)

	return (
		<div className="max-w-[660px] mt-8 md:mt-16 mb-10 mx-auto flex flex-col">
			<div className="self-end mb-4">
				<DeleteGroupButton groupId={groupId} />
			</div>

			<Suspense fallback={<SkeletonGroupDetails />}>
				<GroupDetails fetchGroupPromise={fetchGroupPromise} />
			</Suspense>
		</div>
	)
}
