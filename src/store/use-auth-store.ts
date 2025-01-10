import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
	id: string
	email: string
}

type AuthState = {
	user: User | null
	token: string | null
	setCredentials: (user: User, token: string) => void
	clearCredentials: () => void
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			user: null,
			token: null,
			setCredentials: (user, token) => set({ user, token }),
			clearCredentials: () => set({ user: null, token: null }),
		}),
		{
			name: 'auth-storage',
		},
	),
)
