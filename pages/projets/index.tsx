import React from 'react'
import ProjectsList from '../../components/project/projectList'
import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import AnimatedText from '@/components/AnimatedText'
import '../../app/globals.css'
import NotFound from '../not-found'

const ProjetPage: NextPage = () => {
	const { t } = useTranslation('common')
	const projectsFound = true
	return (
		<main>
			<section id='all-projets'>
				<h1 className='section-heading custom-underline'>
					<AnimatedText text={t('common.projects.title')} />
				</h1>

				{projectsFound ? <ProjectsList /> : <NotFound />}
			</section>
		</main>
	)
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
})

export default ProjetPage
