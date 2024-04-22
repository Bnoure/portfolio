import React from 'react'
import ProjectsList from '../components/Project/projectList' // Assurez-vous que le chemin est correct
import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const ProjetPage: NextPage = () => {
	const { t } = useTranslation('common')

	return (
		<main>
			<h1>{t('common.projects.title')}</h1>
			<ProjectsList />
		</main>
	)
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
})

export default ProjetPage
