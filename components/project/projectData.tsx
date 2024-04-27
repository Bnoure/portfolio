export interface Project {
	img: string
	title: string
	description: string
	tech_stack: (keyof TechIconType)[]
	projetSlug: string
	imgStyle?: string

	building?: string
}

interface TechIconType {
	React: Element
	Javascript: Element
	Next: Element
	Typescript: Element
	Tailwind: Element
	Ruby: Element
	Rails: Element
	Postgresql: Element
	Bootstrap: Element
}

export const getProjectData = (t: (key: string) => string): Project[] => {
	return [
		{
			img: '/images/Arcgrand.png',
			title: t('common.projects.titlePortfolio'),
			description: t('common.projects.descriptionPortfolio'),
			tech_stack: [
				'React',
				'Javascript',
				'Next',
				'Typescript',
				'Tailwind',
			] as (keyof TechIconType)[],
			projetSlug: '/projets/portfolio',
			building: 'Completed',
		},

		{
			img: '/images/2nd.jpeg',
			title: t('common.projects.title2ndRound'),
			description: t('common.projects.description2ndRound'),
			tech_stack: [
				'Javascript',
				'Ruby',
				'Rails',
				'Postgresql',
				'Bootstrap',
			] as (keyof TechIconType)[],
			projetSlug: '/projets/2nd-round',
			building: 'Completed',
			imgStyle: 'rounded-none rounded-r',
		},
		{
			img: '/images/Koalapp.svg',
			title: t('common.projects.titleKoalapp'),
			description: t('common.projects.descriptionKoalapp'),
			tech_stack: [
				'Javascript',
				'Ruby',
				'Rails',
				'Postgresql',
				'Bootstrap',
			] as (keyof TechIconType)[],
			projetSlug: '/projets/koalapp',
			building: 'Completed',
		},
		{
			img: '/images/Arc.svg',
			title: t('common.projects.titleArc'),
			description: t('common.projects.descriptionArc'),
			tech_stack: [
				'Javascript',
				'Ruby',
				'Rails',
				'Postgresql',
				'Bootstrap',
			] as (keyof TechIconType)[],
			projetSlug: '/projets/arc',
			building: 'Completed',
		},
		{
			img: '/images/Rental.svg',
			title: t('common.projects.titleRental'),
			description: t('common.projects.descriptionRental'),
			tech_stack: [
				'Javascript',
				'Ruby',
				'Rails',
				'Postgresql',
				'Bootstrap',
			] as (keyof TechIconType)[],
			projetSlug: '/projets/rental',
			building: 'Completed',
		},
	]
}
