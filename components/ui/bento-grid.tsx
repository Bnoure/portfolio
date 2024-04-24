import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

import { FiGithub } from 'react-icons/fi'
import { TfiZoomIn } from 'react-icons/tfi'

import Link from 'next/link'

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string
	children?: React.ReactNode
}) => {
	return (
		<div
			className={cn(
				'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
				className
			)}
		>
			{children}
		</div>
	)
}

export const BentoGridItem = ({
	name,
	className,
	iconPath,
	description,
	href,
	imgStyle,
	textStyle,
	projetSlug,
}: {
	name: string
	className?: string
	iconPath: string
	description: string
	href: string
	projetSlug: string
	imgStyle?: any
	textStyle?: any
}) => {
	const { t } = useTranslation()

	return (
		<div
			className={cn(
				' row-span-1 rounded-xl group/bento  dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
				className
			)}
		>
			<img src={iconPath} alt='' style={imgStyle} />
			<div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 flex justify-between items-center'>
				<span>{t(name)}</span>
				<div className='flex space-x-2 items-center'>
					<Link href={`/projets/${projetSlug.replace('/projets/', '')}`}>
						{' '}
						<TfiZoomIn size={20} />
					</Link>
					<a href={href} aria-label='GitHub'>
						{' '}
						<FiGithub size={16} />
					</a>
				</div>
			</div>
			<p
				className='font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300'
				style={textStyle}
			>
				{t(description)}
			</p>
		</div>
	)
}
