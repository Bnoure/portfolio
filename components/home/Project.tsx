'use client'

import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import AnimatedText from '../AnimatedText'

import { useTranslation } from 'next-i18next'
import { BentoDemo } from '@/components/bento/bento'
import { useRouter } from 'next/router'

const ProjectsSection = () => {
	const { t } = useTranslation('common')
	const { locale } = useRouter()
	const aboutUrl = `/${locale}/projets`
	return (
		<section id='recent-blog'>
			<h2 className='section-heading custom-underline text-3xl'>
				<AnimatedText text={t('common.navigation.Project')} />
			</h2>

			<BentoDemo />

			<div className='mt-6'>
				<Link href={aboutUrl} legacyBehavior>
					<a className='flex items-center gap-2 hover:text-primary transition'>
						<span className='link'>
							{t('common.navigation.Projects')}&nbsp;
						</span>
						<FiArrowRight className='animate-bounce-right' />
					</a>
				</Link>
			</div>
		</section>
	)
}

export default ProjectsSection
