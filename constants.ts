import { IconType } from 'react-icons'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { TfiIdBadge } from "react-icons/tfi";



type NavItem = {
	label: string
	page: string
}

export const NAV_ITEMS: Array<NavItem> = [

	{
		label: 'common.footer.navigation.link1',
		page: '/',
	},
	{
		label: 'common.footer.navigation.link2',
		page: '/about',
	},
	{
		label: 'common.footer.navigation.link3',
		page: '/projets',
	},
]

type SocialItem = {
	label: string
	href: string
	icon: IconType
}

export const SOCIAL: Array<SocialItem> = [
	{
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/nbenkerroum',
		icon: FiLinkedin,
	},

	{
		label: 'Github',
		href: 'https://github.com/bnoure',
		icon: FiGithub,
	},
  {
    label: 'CV',
    href: '/NourB.pdf',
    icon: TfiIdBadge,
  },
]
