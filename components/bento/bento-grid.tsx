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
		<div className={cn('grid grid-cols-1 md:grid-cols-4 gap-3', className)}>
			{children}
		</div>
	)
}

const BentoCard = ({
	name,
	className,
	background,
	iconPath,
	description,
	href,
	cta,
}: {
	name: string
	className: string
	background: ReactNode
	iconPath: string
	description: string
	href: string
	cta: string
	imgStyle?: { [key: string]: string } // Ajouter imgStyle dans les props
	textStyle?: { [key: string]: string } // Ajouter textStyle dans les props
}) => (
	<div
		key={name}
		className={cn(
			'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl',
			'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
			'transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
			className
		)}
	>
		<div>{background}</div>
		<div className='pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10'>
			<img
				src={iconPath}
				alt={name}
				className='h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75'
				style={imgStyle}
			/>
			<h3
				style={textStyle}
				className='text-xl font-semibold text-neutral-700 dark:text-neutral-300'
			>
				{name}
			</h3>
			<p className='max-w-lg text-neutral-400'>{description}</p>
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
