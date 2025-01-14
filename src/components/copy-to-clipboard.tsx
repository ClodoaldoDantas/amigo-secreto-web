import { Button } from '@/components/ui/button'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useState } from 'react'

export function CopyToClipboard({ value }: { value: string }) {
	const [hasCopied, setHasCopied] = useState(false)

	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText(value)
		setHasCopied(true)

		setTimeout(() => {
			setHasCopied(false)
		}, 2000)
	}

	return hasCopied ? (
		<Button size="sm" disabled variant="outline">
			<CheckIcon className="size-6 text-green-600" />
			Copiado
		</Button>
	) : (
		<Button size="sm" onClick={handleCopyToClipboard} variant="outline">
			<CopyIcon className="size-6" />
			Copiar
		</Button>
	)
}
