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
	const project = getProjectData(t).find(
		(p) => p.title.replace(/\s+/g, '-').toLowerCase() === slug
	)

	return (
		<div className='container mx-auto px-4'>
			<Head>
				<title>
					{project
						? `Portfolio de Nour-Eddine - ${project.title}`
						: 'Project not found'}
				</title>
				<meta
					name='description'
					content={`Détails du projet ${project?.title}`}
				/>
			</Head>

			{project ? (
				<main className='mt-8'>
					<h1 className='text-3xl font-bold'>{project.title}</h1>
					<p className='mt-4 text-lg text-gray-700'>{project.description}</p>
					<div className='mt-8'>
						<Image
							src={project.img}
							alt='Project Cover'
							width={800}
							height={450}
							layout='responsive'
						/>
						<Link href='/projets' legacyBehavior>
							<a className='mt-4 inline-block px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
								Retour à la liste des projets
							</a>
						</Link>
					</div>
				</main>
			) : (
				<p>Project not found.</p>
			)}
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
