import React from 'react'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ProjectCard from '../../components/project/projectCard'
import { features } from '../../components/bento/bento'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const ProjectDetails = () => {
	const { t } = useTranslation('common')
	const router = useRouter()
	const { slug } = router.query
	const project = features(t).find((p) => `${slug}` === p.projetSlug)

	return (
		<div className='container mx-auto px-4'>
			<Head>
				<title>Portfolio de Nour-Eddine - {project?.name}</title>
				<meta
					name='description'
					content={`Détails du projet ${project?.name}`}
				/>
			</Head>

			<main className='mt-8'>
				<h1 className='text-3xl font-bold'>{project?.name}</h1>
				<p className='mt-4 text-lg text-gray-700'>{project?.description}</p>
				<p className='mt-4 text-lg text-gray-700'>{project?.longDescription}</p>
				<p className='mt-4 text-lg text-gray-700'>{project?.techStack}</p>

				<div className='mt-8'>
					<Image
						src={project?.iconPath || '/chemin/vers/image/par/defaut.png'}
						alt='Project Cover'
						width={800}
						height={450}
					/>
					<p className='mt-4'>{project?.description}</p>
					<Link
						href='/projets'
						className='mt-4 inline-block px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'
					>
						<p>Retour à la liste des projets</p>
					</Link>
				</div>
			</main>
		</div>
	)
}

export const getStaticPaths = async () => {
	const paths = features().map((feature) => ({
		params: { slug: feature.projetSlug.replace('/projets/', '') },
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
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	}
}

export default ProjectDetails
