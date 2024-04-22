import React from 'react'
import ProjectsList from '../components/Project/projectList' // Assurez-vous que le chemin est correct
import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import AnimatedText from '@/components/AnimatedText'
import '../app/globals.css'

const ProjetPage: NextPage = () => {
	const { t } = useTranslation('common')

	return (
		<main>
			<section id='recent-blog'>
				<h1 className='section-heading custom-underline'>
					<AnimatedText text={t('common.projects.title')} />
				</h1>

				<ProjectsList />
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
