import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from '@radix-ui/react-icons'

import { useTranslation } from 'next-i18next'

const BentoGrid = ({
	children,
	className,
}: {
	children?: React.ReactNode
	className?: string
}) => {
	return (
		<div className={cn('grid grid-cols-4 gap-3 ', className)}>{children}</div>
	)
}

const BentoCard = ({
	name,
	className,

	iconPath,
	description,
	href,
	cta,
	imgStyle, // Ajouter imgStyle dans les props
	textStyle, // Ajouter textStyle dans les props
}: {
	name: string
	className?: string

	iconPath: string
	description: string
	href: string
	cta: string
	imgStyle?: { [key: string]: string } // Ajouter imgStyle dans les props
	textStyle?: { [key: string]: string } // Ajouter textStyle dans les props
}) => {
	const { t } = useTranslation()
	return (
		<div
			key={name}
			className={cn(
				'relative rounded-xl overflow- shadow-md',

				'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl',
				'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
				'transform-gpu dark:bg-black dark:border-gray-300 dark:shadow-lg dark:text-black',
				className
			)}
		>
			<div className='pointer-events-none z-10 flex transform-gpu flex-col  gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10'>
				<img
					src={iconPath}
					alt={name}
					className=' origin-center transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75'
					style={imgStyle}
				/>
				<h3
					style={textStyle}
					className='text-xl font-semibold text-neutral-700 dark:text-neutral-300'
				>
					{t(name)}
				</h3>
				<p className='max-w-lg text-neutral-400'>{t(description)}</p>
			</div>

			<div
				className={cn(
					'pointer-events-none absolute bottom-0 flex w-full translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
				)}
			>
				<Button
					variant='ghost'
					asChild
					size='sm'
					className='pointer-events-auto'
				>
					<a href={href}>
						{cta}
						<ArrowRightIcon className='ml-2 h-4 w-4' />
					</a>
				</Button>
			</div>
			<div className='pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10' />
		</div>
	)
}

export { BentoCard, BentoGrid }
