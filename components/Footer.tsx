import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const navigation = {
	general: [
		{
			name: 'common.footer.navigation.link1',
			title: 'Home Page',
			href: '/',
		},
		{
			name: 'common.footer.navigation.link2',
			title: 'About Page',
			href: '/fr/about',
		},
		{
			name: 'common.footer.navigation.link3',
			title: 'Project Page',
			href: '/fr/projects',
		},
	],
	extra: [
		{
			name: 'common.footer.cv',
			title: 'View my resume',
			href: 'https://drive.google.com/file/d/1cNP5mtvfkT9bMujyY5jqeG8IYolNLode/view',
		},
	],
	social: [
		{
			name: 'LinkedIn',
			title: 'View LinkedIn',
			href: 'https://linkedin.com/in/nbenkerroum',
		},
		{
			name: 'GitHub',
			title: 'View Github',
			href: 'https://github.com/bnoure',
		},
	],
}

const Footer = () => {
	const { t } = useTranslation('common')

	return (
		<footer>
			<div className='py-10 border-t-2 border-gray-200 dark:border-gray-700'>
				<div className='grid grid-cols-3 gap-8'>
					<div className='md:grid col-span-2 md:grid-cols-2 md:gap-8'>
						<div>
							<h3 className='text-sm font-semibold tracking-wider uppercase'>
								Pages
							</h3>
							<div role='list' className='mt-4 flex flex-col items-start'>
								{navigation.general.map((item) => (
									<FooterLink
										key={item.name}
										name={t(item.name)}
										title={item.title}
										href={item.href}
									/>
								))}
							</div>
						</div>
						<div className='mt-12 md:mt-0'>
							<h3 className='text-sm font-semibold tracking-wider uppercase'>
								{t('common.footer.reseau')}
							</h3>
							<div role='list' className='mt-4 flex flex-col items-start'>
								{navigation.social.map((item) => (
									<FooterLink
										key={item.name}
										name={item.name}
										title={item.title}
										href={item.href}
										newTab
									/>
								))}
							</div>
						</div>
					</div>
					<div className='md:grid md:grid-cols-1 md:gap-8'>
						<div>
							<h3 className='text-sm font-semibold tracking-wider uppercase'>
								Extra
							</h3>
							<div role='list' className='mt-4 flex flex-col items-start'>
								{navigation.extra.map((item) => (
									<FooterLink
										key={item.name}
										name={t(item.name)}
										title={item.title}
										href={item.href}
										newTab
									/>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className='flex items-start flex-col mt-12'>
					<p className='text-base font-medium'>
						&copy; {new Date().getFullYear()} Benkerroum Nour-Eddine
					</p>
				</div>
			</div>
		</footer>
	)
}

interface FooterLinkProps {
	href: string
	name: string
	title?: string
	newTab?: boolean
}

const FooterLink = ({ href, name, title, newTab }: FooterLinkProps) => (
	<Link href={href} legacyBehavior>
		<a
			className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mt-2 horizontal-underline tracking-wide'
			aria-label={name}
			title={title}
			{...(newTab
				? {
						target: '_blank',
						rel: 'noopener noreferrer',
				  }
				: {})}
		>
			{name}
		</a>
	</Link>
)

export default Footer
