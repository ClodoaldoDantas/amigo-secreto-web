import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonGroupList() {
	return (
		<div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
			<Skeleton className="h-28 w-full rounded-md" />
			<Skeleton className="h-28 w-full rounded-md" />
			<Skeleton className="h-28 w-full rounded-md" />
			<Skeleton className="h-28 w-full rounded-md" />
		</div>
	)
}
