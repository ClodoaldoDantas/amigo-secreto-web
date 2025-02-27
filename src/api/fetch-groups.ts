import { http } from '@/lib/http'

export type Group = {
	_id: string
	name: string
	createdAt: string
}

export type FetchGroupsResponse = {
	groups: Group[]
}

export async function fetchGroups() {
	const response = await http.get<FetchGroupsResponse>('groups')
	return response.data
}
