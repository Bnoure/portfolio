export interface Project {
	img: string
	title: string
	description: string
	tech_stack: string[]
	projetSlug: string

	building?: string
}

export const getProjectData = (t: (key: string) => string): Project[] => {
	return [
		{
			img: '/images/Arcgrand.png',
			title: t('common.projects.titlePortfolio'),
			description: t('common.projects.descriptionPortfolio'),
			tech_stack: ['React', 'Node.js', 'CSS'],
			projetSlug: '/projets/portfolio',
			building: 'Completed',
		},

		{
			img: '/images/2nd.jpeg',
			title: t('common.projects.title2ndRound'),
			description: t('common.projects.description2ndRound'),
			tech_stack: ['Rails', 'Javascript', 'Postgresql', 'Ruby', 'HTML', 'CSS'],
			projetSlug: '/projets/2nd-round',
			building: 'Completed',
		},
		{
			img: '/images/Koalapp.svg',
			title: t('common.projects.titleKoalapp'),
			description: t('common.projects.descriptionKoalapp'),
			tech_stack: ['Rails', 'Javascript', 'Postgresql', 'Ruby', 'HTML', 'CSS'],
			projetSlug: '/projets/koalapp',
			building: 'Completed',
		},
		{
			img: '/images/Arc.svg',
			title: t('common.projects.titleArc'),
			description: t('common.projects.descriptionArc'),
			tech_stack: ['Rails', 'Javascript', 'Postgresql', 'Ruby', 'HTML', 'CSS'],
			projetSlug: '/projets/arc',
			building: 'Completed',
		},
		{
			img: '/images/Rental.svg',
			title: t('common.projects.titleRental'),
			description: t('common.projects.descriptionRental'),
			tech_stack: ['Rails', 'Javascript', 'Postgresql', 'Ruby', 'HTML', 'CSS'],
			projetSlug: '/projets/rental',
			building: 'Completed',
		},
	]
}
