import { BentoCard, BentoGrid } from './bento-grid'

const features = [
	// Grande carte en haut à gauche
	{
		iconPath: '/images/Arc.svg',
		name: 'common.projects.titlePortfolio',
		description: 'common.projects.descriptionPortfolio',
		href: '/',
		cta: 'Learn more',

		className:
			'grid md:auto-rows-[18rem] grid-cols-1  max-w-7xl mx-auto lg:col-span-2 lg:row-span-2',
	},
	// Petite carte en haut à droite
	{
		iconPath: 'images/SecondRound.svg',
		name: 'common.projects.title2ndRound',
		description: 'common.projects.description2ndRound',
		href: 'https://github.com/Bnoure/2ndRound.git',
		cta: 'Learn more',

		className:
			'grid md:auto-rows-[6rem] grid-cols-1 md:grid-cols-2  max-w-7xl mx-auto lg:col-span-2 lg:row-span-1',
	},
	// Petite carte au milieu à droite
	{
		iconPath: 'images/Arc.svg',
		name: 'common.projects.titleArc',
		description: 'common.projects.descriptionArc',
		href: 'https://github.com/Bnoure/Arc.git',
		cta: 'Learn more',

		className:
			'grid md:auto-rows-[6rem] grid-cols-1  max-w-7xl mx-auto lg:relative lg:col-span-2 lg:row-span-1',
	},
	// Petite carte en bas à droite
	{
		iconPath: 'images/Rental.svg',
		name: 'common.projects.titleRental',
		description: 'common.projects.descriptionRental',
		href: 'https://github.com/Bnoure/rental.git',
		cta: 'Learn more',

		className:
			'grid md:auto-rows-[18rem] grid-cols-1  max-w-7xl mx-auto lg:col-span-1',
	},
	// Petite carte en bas à gauche sous la grande carte
	{
		iconPath: 'images/Koalapp.svg',
		name: 'common.projects.titleKoalapp',
		description: 'common.projects.descriptionKoalapp',
		href: 'https://github.com/Bnoure/koala.git',
		cta: 'Learn more',

		className:
			'grid md:auto-rows-[18rem] grid-cols-2  max-w-7xl mx-auto lg:col-span-3',
	},
]

export function BentoDemo() {
	return (
		<div className='container '>
			<BentoGrid className='lg:grid-rows-2'>
				{features.map((feature) => (
					<BentoCard key={feature.name} {...feature} />
				))}
			</BentoGrid>
		</div>
	)
}
