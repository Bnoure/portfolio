import { BentoGridItem, BentoGrid } from '../ui/bento-grid'
import { useTranslation } from 'react-i18next'

export interface Feature {
	iconPath: string
	name: string
	description: string

	header: React.ReactNode
	href: string
	projetSlug: string
	className?: string
	imgStyle: {
		width: string
		height: string
		margin: string
		borderRadius?: string
	}
	textSyle?: {
		fontSize: string
	}
	techStack?: string[]
	longDescription?: string
}

const Skeleton = () => (
	<div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black'></div>
)

export const features = (t = (key: string) => key): Feature[] => [
	// Grande carte en haut à gauche
	{
		header: <Skeleton />,
		iconPath: '/images/Arcgrand.png',
		name: t('common.projects.titlePortfolio'),
		description: t('common.projects.descriptionPortfolio'),
		href: '/',
		projetSlug: '/projets/portfolio',
		className: 'md:col-span-2',
		imgStyle: {
			width: '100%',
			height: '60%',
			margin: 'auto',
			borderRadius: '8px',
		},
		longDescription:
			'Portfolio de Nour-Eddine, développeur web fullstack. Vous y trouverez mes projets, mes compétences et mes coordonnées.',
		textSyle: { fontSize: '1.5rem' },
		techStack: ['React', 'Node.js', 'CSS'],
	},
	// Petite carte en haut à droite
	{
		header: <Skeleton />,
		iconPath: '/images/2nd.jpeg',
		name: t('common.projects.title2ndRound'),
		description: t('common.projects.description2ndRound'),
		href: 'https://github.com/Bnoure/2ndRound.git',
		projetSlug: '/projets/portfolio',
		className: 'md:col-span-1',
		imgStyle: {
			width: '120%',
			height: '50%',
			margin: 'auto',
			borderRadius: '12px',
		},
		techStack: ['React', 'Node.js', 'CSS'],
	},
	// Petite carte  à gauche
	{
		header: <Skeleton />,
		iconPath: '/images/Arcgrand.png',
		name: t('common.projects.titleArc'),
		description: t('common.projects.descriptionArc'),
		href: 'https://github.com/Bnoure/Arc.git',
		projetSlug: '/projets/portfolio',
		className: 'md:col-span-1',
		imgStyle: { width: '70%', height: '30%', margin: 'auto' },
		techStack: ['React', 'Node.js', 'CSS'],
	},
	// Grande carte milieu à droite
	{
		header: <Skeleton />,
		iconPath: 'images/Rental.svg',
		name: t('common.projects.titleRental'),
		description: t('common.projects.descriptionRental'),
		href: 'https://github.com/Bnoure/rental.git',
		projetSlug: '/projets/portfolio',
		imgStyle: { width: '90%', height: '50%', margin: 'auto' },

		className: 'md:col-span-2',
		techStack: ['React', 'Node.js', 'CSS'],
	},
	// Grande carte dernière ligne
	{
		header: <Skeleton />,
		iconPath: 'images/Koalapp.svg',
		name: t('common.projects.titleKoalapp'),
		description: t('common.projects.descriptionKoalapp'),
		href: 'https://github.com/Bnoure/koala.git',
		projetSlug: '/projets/portfolio',
		className: 'md:col-span-3',
		imgStyle: { width: '90%', height: '50%', margin: 'auto' },
	},
]

export function BentoDemo() {
	const { t } = useTranslation()
	return (
		<div className='container '>
			<BentoGrid className='max-w-4xl mx-auto md:auto-rows-[20rem]'>
				{features(t).map((feature) => (
					<BentoGridItem key={feature.name} {...feature} />
				))}
			</BentoGrid>
		</div>
	)
}
