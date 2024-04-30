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

	imageClassName?: string
	textSyle?: {
		fontSize: string
	}
	techStack?: any
	longDescription?: string
}

const Skeleton = () => (
	<div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black'></div>
)

export const features = (t = (key: string) => key): Feature[] => [
	// Grande carte en haut à gauche
	{
		header: <Skeleton />,
		iconPath: '/images/PortoflioDark.png',
		name: t('common.projects.titlePortfolio'),
		description: t('common.projects.descriptionPortfolio'),
		href: '/',
		projetSlug: '/projets/portfolio',
		className: 'md:col-span-2',

		imageClassName: 'object-fill w-full h-4/5',
		longDescription:
			'Portfolio de Nour-Eddine, développeur web fullstack. Vous y trouverez mes projets, mes compétences et mes coordonnées.',
		textSyle: { fontSize: '1.5rem' },
		techStack: ['React', 'Javascript', 'Next', 'Typescript', 'Tailwind'],
	},
	// Petite carte en haut à droite
	{
		header: <Skeleton />,
		iconPath: '/images/2nd.png',
		name: t('common.projects.title2ndRound'),
		description: t('common.projects.description2ndRound'),
		href: 'https://github.com/Bnoure/2ndRound.git',
		projetSlug: '/projets/2nd-round',
		className: 'md:col-span-1',
		imageClassName: 'object-fill w-full h-3/5',
		techStack: ['Javascript', 'Ruby', 'Rails', 'Postgresql', 'Bootstrap'],
	},
	// Petite carte  à gauche
	{
		header: <Skeleton />,
		iconPath: '/images/Arc.png',
		name: t('common.projects.titleArc'),
		description: t('common.projects.descriptionArc'),
		href: 'https://github.com/Bnoure/Arc.git',
		projetSlug: '/projets/arc',
		className: 'md:col-span-1',
		imageClassName: 'object-fill w-full h-3/5',
		techStack: ['Javascript', 'Ruby', 'Rails', 'Postgresql', 'Bootstrap'],
	},
	// Grande carte milieu à droite
	{
		header: <Skeleton />,
		iconPath: 'images/Rental.png',
		name: t('common.projects.titleRental'),
		description: t('common.projects.descriptionRental'),
		href: 'https://github.com/Bnoure/rental.git',
		projetSlug: '/projets/rental',
		imageClassName: 'object-fill w-full h-4/5',

		className: 'md:col-span-2',
		techStack: ['Javascript', 'Ruby', 'Rails', 'Postgresql', 'Bootstrap'],
	},
	// Grande carte dernière ligne
	{
		header: <Skeleton />,
		iconPath: 'images/Koalapppng.png',
		name: t('common.projects.titleKoalapp'),
		description: t('common.projects.descriptionKoalapp'),
		href: 'https://github.com/Bnoure/koala.git',
		projetSlug: '/projets/koalapp',
		className: 'md:col-span-3',
		imageClassName: 'object-fill w-full h-4/5',
		techStack: ['Javascript', 'Ruby', 'Rails', 'Postgresql', 'Bootstrap'],
	},
]

export function BentoDemo() {
	const { t } = useTranslation()
	return (
		<div className='container '>
			<BentoGrid className='max-w-4xl mx-auto md:auto-rows-[20rem]'>
				{features(t).map((feature) => (
					<BentoGridItem
						key={feature.name}
						{...feature}
						techStack={feature.techStack}
					/>
				))}
			</BentoGrid>
		</div>
	)
}
