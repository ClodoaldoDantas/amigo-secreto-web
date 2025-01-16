import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonGroupDetails() {
	return (
		<Card className="w-[660px]">
			<CardHeader className="space-y-2">
				<CardTitle>
					<Skeleton className="h-8 w-48 bg-zinc-800" />
				</CardTitle>
				<CardDescription>
					<Skeleton className="h-4 w-72 bg-zinc-800" />
				</CardDescription>
			</CardHeader>
			<CardContent>
				<h2 className="text-xl">Participantes</h2>

				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[400px]">Nome</TableHead>
							<TableHead>Ações</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{Array.from({ length: 5 }).map((_, index) => (
							<TableRow key={String(index)}>
								<TableCell>
									<Skeleton className="h-4 w-24 bg-zinc-800" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-8 w-20 bg-zinc-800 rounded-md" />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}
