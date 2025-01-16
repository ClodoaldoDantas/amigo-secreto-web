import { http } from '@/lib/http'

interface CreateGroupRequest {
	name: string
	participants: string[]
}

export function createGroup(data: CreateGroupRequest): Promise<void> {
	return http.post('groups', data)
}
