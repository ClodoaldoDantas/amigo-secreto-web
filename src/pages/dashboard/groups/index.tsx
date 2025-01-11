import { GroupCard } from './group-card'

export function GroupsPage() {
	return (
		<div className="my-6 grid grid-cols-4 gap-3">
			<GroupCard />
			<GroupCard />
			<GroupCard />
			<GroupCard />
		</div>
	)
}
