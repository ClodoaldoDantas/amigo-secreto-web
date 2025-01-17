import { http } from '@/lib/http'

export function deleteGroup(groupId: string): Promise<void> {
	return http.delete(`/groups/${groupId}`)
}
