import { BentoCard, BentoGrid } from './bento-grid'
import {
	BellIcon,
	CalendarIcon,
	FileTextIcon,
	GlobeIcon,
	InputIcon,
} from '@radix-ui/react-icons'

const features = [
	{
		iconPath: '/images/Arc.svg',
		name: 'Save your files',
		description: 'We automatically save your files as you type.',
		href: '/',
		cta: 'Learn more',
		background: <img className='absolute -right-20 -top-20 opacity-60' />,
		className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
		imgStyle: { width: '100%', height: '100%', right: '10px', top: '10px' }, // Styles pour l'image
		textStyle: { color: 'red', fontSize: '20px' }, // Styles pour le texte
	},
	{
		iconPath: 'images/SecondRound.svg',
		name: 'Full text search',
		description: 'Search through all your files in one place.',
		href: '/',
		cta: 'Learn more',
		background: <img className='absolute -right-20 -top-20 opacity-60' />,
		className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
		imgStyle: { width: '100%', height: '100%', right: '10px', top: '10px' },
	},
	{
		iconPath: 'images/Arc.svg',
		name: 'Multilingual',
		description: 'Supports 100+ languages and counting.',
		href: '/',
		cta: 'Learn more',
		background: <img className='absolute -right-20 -top-20 opacity-60' />,
		className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
		imgStyle: { width: '100%', height: '100%', right: '10px', top: '10px' },
	},
	{
		iconPath: 'images/Rental.svg',
		name: 'Calendar',
		description: 'Use the calendar to filter your files by date.',
		href: '/',
		cta: 'Learn more',
		background: <img className='absolute -right-20 -top-20 opacity-60' />,
		className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
		imgStyle: { width: '100%', height: '100%', right: '10px', top: '10px' },
	},
	{
		iconPath: 'images/Koalapp.svg',
		name: 'Notifications',
		description:
			'Get notified when someone shares a file or mentions you in a comment.',
		href: '/',
		cta: 'Learn more',
		background: <img className='absolute -right-20 -top-20 opacity-60' />,
		className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
		imgStyle: { width: '100%', height: '100%', right: '10px', top: '10px' },
	},
]

export function BentoDemo() {
	return (
		<BentoGrid className='lg:grid-rows-3'>
			{features.map((feature) => (
				<BentoCard key={feature.name} {...feature} />
			))}
		</BentoGrid>
	)
}
