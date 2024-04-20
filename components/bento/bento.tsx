import { BentoGridItem, BentoGrid } from '../ui/bento-grid'

const Skeleton = () => (
	<div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black'></div>
)

const features = [
	// Grande carte en haut à gauche
	{
		header: <Skeleton />,
		iconPath: '/images/Arc.svg',
		name: 'common.projects.titlePortfolio',
		description: 'common.projects.descriptionPortfolio',
		href: '/',
		cta: 'Learn more',
		className: 'md:col-span-2',
		imgStyle: { width: '50%', height: '50%', margin: 'auto' },
	},
	// Petite carte en haut à droite
	{
		header: <Skeleton />,

		iconPath: 'images/SecondRound.svg',
		name: 'common.projects.title2ndRound',
		description: 'common.projects.description2ndRound',
		href: 'https://github.com/Bnoure/2ndRound.git',
		cta: 'Learn more',
		className: 'md:col-span-1',
		imgStyle: { width: '50%', height: '50%', margin: 'auto' },
	},
	// Petite carte  à gauche
	{
		header: <Skeleton />,
		iconPath: 'images/Arc.svg',
		name: 'common.projects.titleArc',
		description: 'common.projects.descriptionArc',
		href: 'https://github.com/Bnoure/Arc.git',
		cta: 'Learn more',
		className: 'md:col-span-1',
		imgStyle: { width: '50%', height: '50%', margin: 'auto' },
	},
	// Grande carte milieu à droite
	{
		header: <Skeleton />,

		iconPath: 'images/Rental.svg',
		name: 'common.projects.titleRental',
		description: 'common.projects.descriptionRental',
		href: 'https://github.com/Bnoure/rental.git',
		cta: 'Learn more',

		className: 'md:col-span-2',
	},
	// Grande carte dernière ligne
	{
		header: <Skeleton />,
		iconPath: 'images/Koalapp.svg',
		name: 'common.projects.titleKoalapp',
		description: 'common.projects.descriptionKoalapp',
		href: 'https://github.com/Bnoure/koala.git',
		cta: 'Learn more',
		className: 'md:col-span-3',
		imgStyle: { width: '50%', height: '50%', margin: 'auto' },
	},
]

export function BentoDemo() {
	return (
		<div className='container '>
			<BentoGrid className='max-w-4xl mx-auto md:auto-rows-[20rem]'>
				{features.map((feature) => (
					<BentoGridItem key={feature.name} {...feature} />
				))}
			</BentoGrid>
		</div>
	)
}
