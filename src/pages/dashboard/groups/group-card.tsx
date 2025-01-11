import { CalendarIcon } from 'lucide-react'
import { Link } from 'react-router'

export function GroupCard() {
	return (
		<Link to="/dashboard/groups">
			<div className="p-6 border rounded-md">
				<h2 className="font-semibold text-xl mb-2">Família Soares</h2>
				<div className="flex items-center gap-2 text-muted-foreground">
					<CalendarIcon className="size-5" />
					<span>13/12/2024</span>
				</div>
			</div>
		</Link>
	)
}
