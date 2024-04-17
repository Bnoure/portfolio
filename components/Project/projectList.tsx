import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Project, getProjectData } from './projectData'

const FadeUp = dynamic(() => import('../animations/FadeUp'), {
	ssr: false,
})

const ProjectList = () => {
	const { t, i18n } = useTranslation('common')
	const [projects, setProjects] = useState<Project[]>([])

	useEffect(() => {
		setProjects(getProjectData(t))
	}, [t]) // t est une dépendance de useEffect

	return (
		<ul>
			{!projects.length && 'No projects found.'}
			{projects.map((project, idx) => (
				<FadeUp duration={0.2} delay={0.1 * idx} key={project.title}>
					<li className='py-4'>
						<article className='space-y-3'>
							<div className='flex space-x-4'>
								<img
									src={project.img}
									alt={project.title}
									className='h-20 w-20 object-cover rounded-lg'
								/>
								<div>
									<h3 className='text-lg font-semibold'>
										<Link href={project.github_url} passHref legacyBehavior>
											<a className='hover:text-primary transition'>
												{project.title}
											</a>
										</Link>
									</h3>
									<p>{project.description}</p>
									{project.demo_url && (
										<a
											href={project.demo_url}
											target='_blank'
											rel='noopener noreferrer'
											className='text-blue-500 hover:text-blue-700 transition'
										>
											View Demo
										</a>
									)}
								</div>
							</div>
						</article>
					</li>
				</FadeUp>
			))}
		</ul>
	)
}

export default ProjectList
