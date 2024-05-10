export interface Project {
	img: string
	title: string
	what: string
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
			img: '/images/PortoflioDark.png',
			title: t('common.projects.titlePortfolio'),
			description: t('common.projectDetail.portfolio.title'),
			what: t('common.projectDetail.portfolio.description'),
			tech_stack: [
				'React',
				'Prisma',
				'Next',
				'Typescript',
				'Tailwind',
			] as (keyof TechIconType)[],
			projetSlug: '/projets/portfolio',
			building: t('common.projectDetail.ongoing'),
		},

		{
			img: '/images/Koalapppng.png',
			title: t('common.projects.titleKoalapp'),
			description: t('common.projectDetail.koalapp.title'),
			what: t('common.projectDetail.koalapp.description'),
			tech_stack: [
				'Javascript',
				'Ruby',
				'Rails',
				'Postgresql',
				'Bootstrap',
			] as (keyof TechIconType)[],
			projetSlug: '/projets/koalapp',
			building: t('common.projectDetail.completed'),
		},
		{
			img: '/images/Arc.png',
			title: t('common.projects.titleArc'),
			description: t('common.projectDetail.arc.title'),
			what: t('common.projectDetail.arc.description'),
			tech_stack: [
				'Javascript',
				'Ruby',
				'Rails',
				'Postgresql',
				'Bootstrap',
			] as (keyof TechIconType)[],
			projetSlug: '/projets/arc',
			building: t('common.projectDetail.completed'),
		},
		{
			img: '/images/Rental.png',
			title: t('common.projects.titleRental'),
			description: t('common.projectDetail.rental.title'),
			what: t('common.projectDetail.rental.description'),
			tech_stack: [
				'Javascript',
				'Ruby',
				'Rails',
				'Postgresql',
				'Bootstrap',
			] as (keyof TechIconType)[],
			projetSlug: '/projets/rental',
			building: t('common.projectDetail.completed'),
		},

		{
			img: '/images/2nd.png',
			title: t('common.projects.title2ndRound'),
			description: t('common.projectDetail.secondround.title'),
			what: t('common.projectDetail.secondround.description'),
			tech_stack: [
				'Javascript',
				'Ruby',
				'Rails',
				'Postgresql',
				'Bootstrap',
			] as (keyof TechIconType)[],
			projetSlug: '/projets/secondround',
			building: t('common.projectDetail.completed'),
		},
	]
}
