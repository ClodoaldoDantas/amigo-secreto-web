import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuthStore } from '@/store/use-auth-store'
import { MailIcon, MenuIcon, UserPlusIcon, UsersIcon } from 'lucide-react'
import { useNavigate } from 'react-router'
import { SignOutButton } from './sign-out-button'
import { Button } from './ui/button'

export function Menu() {
	const { user } = useAuthStore()
	const navigate = useNavigate()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					<MenuIcon className="size-4" />
					Menu
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel className="flex items-center gap-2">
					<MailIcon className="size-4" />
					{user?.email}
				</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuItem onSelect={() => navigate('/dashboard/groups')}>
					<UsersIcon className="size-4" />
					Meus Grupos
				</DropdownMenuItem>

				<DropdownMenuItem onSelect={() => navigate('/dashboard/groups/create')}>
					<UserPlusIcon className="size-4" />
					Novo Groupo
				</DropdownMenuItem>

				<DropdownMenuItem asChild>
					<SignOutButton />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
