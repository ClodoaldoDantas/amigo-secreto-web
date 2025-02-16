import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { CreateGroupForm } from './create-group-form'

export function CreateGroupPage() {
	return (
		<div className="mt-8 md:mt-16 mb-10 flex justify-center">
			<Card className="w-[660px]">
				<CardHeader>
					<CardTitle className="text-2xl font-semibold">Novo Grupo</CardTitle>
					<CardDescription className="text-base">
						Crie um grupo com os seus amigos.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<CreateGroupForm />
				</CardContent>
			</Card>
		</div>
	)
}
