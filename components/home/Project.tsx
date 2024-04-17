'use client'

import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import AnimatedText from '../AnimatedText'
import ProjectList from '../Project/projectList'
import { useTranslation } from 'next-i18next'
import { BentoDemo } from '@/components/bento/bento'

const ProjectsSection = () => {
	const { t } = useTranslation('common')
	return (
		<section id='recent-blog'>
			<h2 className='section-heading custom-underline'>
				<AnimatedText text={t('common.navigation.Project')} />
			</h2>
			<BentoDemo />
			<ProjectList />
			<div className='mt-6'>
				<Link href='/projects' legacyBehavior>
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
