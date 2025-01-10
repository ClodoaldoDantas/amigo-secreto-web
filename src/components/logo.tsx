import { GiftIcon } from 'lucide-react'
import { Link } from 'react-router'

export function Logo() {
	return (
		<Link className="flex items-center gap-1" to="/dashboard/groups">
			<GiftIcon className="size-6 text-red-400" />

			<p className="text-xl">
				<strong>Amigo</strong>Secreto
			</p>
		</Link>
	)
}
