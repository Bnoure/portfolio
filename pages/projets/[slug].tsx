import React from 'react'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getProjectData } from '../../components/project/projectData'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const ProjectDetails = () => {
	const { t } = useTranslation('common')
	const router = useRouter()
	const { slug } = router.query
	const projects = getProjectData(t)
	const projectIndex = getProjectData(t).findIndex(
		(p) => p.title.replace(/\s+/g, '-').toLowerCase() === slug
	)
	const project = projects[projectIndex]
	const nextProject = projects[projectIndex + 1]
	const prevProject = projects[projectIndex - 1]

	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<Head>
				<title>
					{project ? `${project.title} | Project Details` : 'Project not found'}
				</title>
				<meta
					name='description'
					content={
						project
							? `Learn more about ${project.title}`
							: 'Project description not available'
					}
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center'>
				<h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
					{project ? project.title : 'Project not found'}
				</h1>
				<Image
					src={project ? project.img : '/images/default.png'}
					alt='Project image'
					width={750}
					height={500}
					className='rounded-lg mb-6'
				/>
				<p className='text-lg text-gray-700 dark:text-gray-300 mb-6'>
					{project ? project.description : 'No additional details available.'}
				</p>

				<div className='flex justify-between items-center w-full mt-4'>
					{prevProject && (
						<Link href={`/${prevProject.projetSlug}`} legacyBehavior>
							<a className='text-blue-500 hover:underline'>
								Previous Project - {prevProject.title}
							</a>
						</Link>
					)}
					{nextProject && (
						<Link href={`/${nextProject.projetSlug}`} legacyBehavior>
							<a className='text-blue-500 hover:underline'>
								Next Project - {nextProject.title}
							</a>
						</Link>
					)}
				</div>
			</main>
		</div>
	)
}
export const getStaticPaths = async () => {
	const projects = [
		{ slug: 'portfolio' },
		{ slug: 'secondround' },
		{ slug: 'arc' },
		{ slug: 'rental' },
		{ slug: 'koalapp' },
	]

	const paths = projects.map((project) => ({
		params: { slug: project.slug },
	}))

	return { paths, fallback: 'blocking' }
}
export const getStaticProps = async ({
	locale,
	params,
}: {
	locale: string
	params: { slug: string }
}) => {
	type TranslationContent = {
		[key: string]: string
	}

	type Translations = {
		[locale: string]: TranslationContent
	}

	const fakeTranslations: Translations = {
		en: {
			'common.projects.titlePortfolio': 'Portfolio',
		},
		fr: {
			'common.projects.titlePortfolio': 'Portefeuille',
		},
	}

	const t = (key: string) => {
		const translationByLocale = fakeTranslations[locale]
		if (translationByLocale) {
			return translationByLocale[key] || key
		}
		return key
	}

	const projects = getProjectData(t)
	const project = projects.find(
		(p) => p.projetSlug.replace('/projets/', '') === params.slug
	)

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			project: project || null,
		},
	}
}

export default ProjectDetails
