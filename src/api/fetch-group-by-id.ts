import { http } from '@/lib/http'

export type FetchGroupByIdResponse = {
	group: {
		_id: string
		name: string
		participants: {
			_id: string
			name: string
		}[]
	}
}

export async function fetchGroupById(id: string) {
	const response = await http.get<FetchGroupByIdResponse>(`groups/${id}`)
	return response.data
}
