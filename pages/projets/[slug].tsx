import React from 'react'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { allProjects, Project } from '.contentlayer/generated'
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
		return <div>Project not found</div>
	}

	const projectIndex = allProjects.findIndex((p: Project) => p.slug === slug)
	const nextProject = allProjects[projectIndex + 1] || null
	const prevProject = allProjects[projectIndex - 1] || null

	return (
		<div className='flex flex-col items-center text-justify min-h-screen py-2'>
			<Head>
				<title>{`${project.title} | Project Details`}</title>
				<meta
					name='description'
					content={`Learn more about ${project.title}`}
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<article className='prose prose-quoteless prose-neutral dark:prose-invert mb-2 text-justify '>
				<main className='  rounded-lg shadow p-8 text-center'>
					<h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6 '>
						{project.title}
					</h1>

					<div className='text-justify'>
						{project && project.mdxBody && <MDXRemote {...project.mdxBody} />}
					</div>
					<Image
						src={project.img}
						alt='Project image'
						width={750}
						height={500}
						className='rounded-lg mb-6  '
					/>
					<div className='flex justify-between items-center w-full mt-4'>
						{prevProject && (
							<Link href={`/projets/${prevProject.slug}`} legacyBehavior>
								<a className='text-blue-500 hover:underline'>
									{prevProject.sumtitle}
								</a>
							</Link>
						)}
						{nextProject && (
							<Link href={`/projets/${nextProject.slug}`} legacyBehavior>
								<a className='text-blue-500 hover:underline'>
									{nextProject.sumtitle}
								</a>
							</Link>
						)}
					</div>
				</main>
			</article>
		</div>
	)
}

export const getStaticPaths = async () => {
	const locales = ['en', 'fr'] // Définissez vos locales ici
	let paths: { params: { slug: string }; locale: string }[] = []

	for (const locale of locales) {
		const localeProjects = allProjects.filter(
			(project) => project._raw.sourceFileDir === locale
		)
		const localePaths = localeProjects.map((project) => ({
			params: { slug: project.slug },
			locale,
		}))
		paths = paths.concat(localePaths)
	}

	return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ locale, params }: StaticProps) => {
	const project = allProjects.find(
		(p) => p.slug === params.slug && p._raw.sourceFileDir === locale
	)
	if (!project) {
		return { notFound: true }
	}

	const mdxBody = await serialize(project.body.raw || '')

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			project: { ...project, mdxBody },
		},
	}
}

export default ProjectDetails
