import React from 'react'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { allProjects, Project } from '.contentlayer/generated' // Assurez-vous que le chemin est correct
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

interface StaticProps {
	locale: string
	params: { slug: string }
}

interface Props {
	project: Project & { mdxBody: MDXRemoteSerializeResult }
}

const ProjectDetails: React.FC<Props> = ({ project }) => {
	const { t } = useTranslation('common')
	const router = useRouter()
	const { slug } = router.query as { slug: string }

	if (!project) {
		return <div>Project not found</div> // Gérer le cas où aucun projet n'est trouvé
	}

	const projectIndex = allProjects.findIndex((p: Project) => p.slug === slug)
	const nextProject = allProjects[projectIndex + 1] || null
	const prevProject = allProjects[projectIndex - 1] || null

	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<Head>
				<title>{`${project.title} | Project Details`}</title>
				<meta
					name='description'
					content={`Learn more about ${project.title}`}
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='  rounded-lg shadow p-8 text-center'>
				<h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
					{project.title}
				</h1>
				<Image
					src={project.img}
					alt='Project image'
					width={750}
					height={500}
					className='rounded-lg mb-6'
				/>
				{project && project.mdxBody && <MDXRemote {...project.mdxBody} />}
				<p className='text-lg text-gray-700 dark:text-gray-300 mb-6'>
					{project.description}
				</p>

				<div className='flex justify-between items-center w-full mt-4'>
					{prevProject && (
						<Link href={`/projets/${prevProject.slug}`} legacyBehavior>
							<a className='text-blue-500 hover:underline'>
								{prevProject.title}
							</a>
						</Link>
					)}
					{nextProject && (
						<Link href={`/projets/${nextProject.slug}`} legacyBehavior>
							<a className='text-blue-500 hover:underline'>
								{nextProject.title}
							</a>
						</Link>
					)}
				</div>
			</main>
		</div>
	)
}

export const getStaticPaths = async () => {
	const paths = allProjects.map((project: Project) => ({
		params: { slug: project.slug },
	}))

	return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ locale, params }: StaticProps) => {
	const project = allProjects.find((p) => p.slug === params.slug)
	if (!project) {
		return {
			notFound: true,
		}
	}

	// Serialize the raw markdown/MDX content
	const mdxBody = await serialize(project.body.raw || '')

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			project: { ...project, mdxBody }, // Pass serialized body for MDXRemote
		},
	}
}

export default ProjectDetails
