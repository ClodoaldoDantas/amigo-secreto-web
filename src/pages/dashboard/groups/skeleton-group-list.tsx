import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonGroupList() {
	return (
		<div className="my-6 grid grid-cols-4 gap-3">
			<Skeleton className="h-28 w-full rounded-md" />
			<Skeleton className="h-28 w-full rounded-md" />
			<Skeleton className="h-28 w-full rounded-md" />
			<Skeleton className="h-28 w-full rounded-md" />
		</div>
	)
}
