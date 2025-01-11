import type { Group } from '@/api/fetch-groups'
import { formatDate } from '@/utils/format-date'
import { CalendarIcon } from 'lucide-react'
import { Link } from 'react-router'

export function GroupCard({ group }: { group: Group }) {
	return (
		<Link to={`/dashboard/groups/${group._id}`}>
			<div className="p-6 border rounded-md">
				<h2 className="font-semibold text-xl mb-2">{group.name}</h2>
				<div className="flex items-center gap-2 text-muted-foreground">
					<CalendarIcon className="size-5" />
					<span>{formatDate(group.createdAt)}</span>
				</div>
			</div>
		</Link>
	)
}
