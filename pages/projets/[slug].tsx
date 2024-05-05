import React from 'react'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { allProjects, Project } from '.contentlayer/generated'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NotFound from '../not-found'
import { Mdx } from '../../components/mdx'
import FadeDown from '../../components/animations/FadeDown'
import FadeUp from '../../components/animations/FadeUp'

interface StaticProps {
	locale: string
	params: { slug: string }
}

interface Props {
	project: Project
}

const ProjectDetails: React.FC<Props> = ({ project }) => {
	const { t } = useTranslation('common')
	const router = useRouter()
	const { slug } = router.query as { slug: string }

	if (!project) {
		NotFound()
	}

	const projectIndex = allProjects.findIndex((p: Project) => p.slug === slug)
	const nextProject = allProjects[projectIndex + 1] || null
	const prevProject = allProjects[projectIndex - 1] || null

	return (
		<>
			<Head>
				<title>{`${project.title} | Project Details`}</title>
				<meta
					name='description'
					content={`Learn more about ${project.title}`}
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<article className=' prose prose-quoteless prose-neutral dark:prose-invert mb-2 mr-2 p-2 justify-center text-center '>
				<FadeDown duration={0.4}>
					<h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
						{project.title}
					</h1>
					<div className='item-center text-justify'>
						<Mdx code={project.body.code} />
					</div>
					<Image
						src={project.img}
						alt='Project image'
						width={750}
						height={500}
						className='rounded-lg mb-6 max-w-full h-auto'
					/>
					<div className='flex flex-col sm:flex-row justify-between items-center w-full mt-4'>
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
				</FadeDown>
			</article>
		</>
	)
}

export const getStaticPaths = async () => {
	const locales = ['en', 'fr']
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

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			project,
		},
	}
}

export default ProjectDetails
