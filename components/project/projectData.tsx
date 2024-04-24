export interface Project {
	img: string
	title: string
	description: string
	tech_stack: string[]
	github_url: string
	demo_url?: string
	building?: string
}

export const getProjectData = (t: (key: string) => string): Project[] => {
	return [
		{
			img: '/images/SecondRound.svg',
			title: t('common.projects.title2ndRound'),
			description: t('common.projects.description2ndRound'),
			tech_stack: ['Rails', 'Javascript', 'Postgresql', 'Ruby', 'HTML', 'CSS'],
			github_url: 'https://github.com/Bnoure/2ndRound.git',
			demo_url: '',
			building: 'Completed',
		},
		{
			img: '/images/Koalapp.svg',
			title: t('common.projects.titleKoalapp'),
			description: t('common.projects.descriptionKoalapp'),
			tech_stack: ['Rails', 'Javascript', 'Postgresql', 'Ruby', 'HTML', 'CSS'],
			github_url: 'https://github.com/Bnoure/koala.git',
			demo_url: 'https://stackkoala.online/',
			building: 'Completed',
		},
		{
			img: '/images/Arc.svg',
			title: t('common.projects.titleArc'),
			description: t('common.projects.descriptionArc'),
			tech_stack: ['Rails', 'Javascript', 'Postgresql', 'Ruby', 'HTML', 'CSS'],
			github_url: 'https://github.com/Bnoure/Arc.git',
			demo_url: 'https://stackarc.online/',
			building: 'Completed',
		},
		{
			img: '/images/Rental.svg',
			title: t('common.projects.titleRental'),
			description: t('common.projects.descriptionRental'),
			tech_stack: ['Rails', 'Javascript', 'Postgresql', 'Ruby', 'HTML', 'CSS'],
			github_url: 'https://github.com/Bnoure/rental.git',
			demo_url: 'https://www.stackrental.online/',
			building: 'Completed',
		},
	]
}
