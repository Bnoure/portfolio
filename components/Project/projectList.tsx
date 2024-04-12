import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Project, getProjectData } from './projectData'
import useTrans from '../../hooks/useTrans' // Utilisation du hook personnalisé

const FadeUp = dynamic(() => import('../animations/FadeUp'), {
	ssr: false, // Désactiver le rendu côté serveur pour ce composant
})

const ProjectList = () => {
	const t = useTrans() // Utilisation du hook pour obtenir la fonction de traduction
	const [projects, setProjects] = useState<Project[]>([])

	useEffect(() => {
		const loadedProjects = getProjectData(t) // Passer la fonction `t` à getProjectData
		setProjects(loadedProjects)
	}, [t])

	return (
		<ul>
			{!projects.length && 'No projects found.'}
			{projects.map((project, idx) => {
				const { title, description, github_url, demo_url, img } = project
				return (
					<FadeUp duration={0.2} delay={0.1 * idx} key={title}>
						<li key={title} className='py-4'>
							<article className='space-y-3'>
								<div className='flex space-x-4'>
									<img
										src={img}
										alt={title}
										className='h-20 w-20 object-cover rounded-lg'
									/>
									<div>
										<h3 className='text-lg font-semibold'>
											<Link href={github_url} passHref>
												<a className='hover:text-primary transition'>{title}</a>
											</Link>
										</h3>
										<p>{description}</p>
										{demo_url && (
											<a
												href={demo_url}
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
				)
			})}
		</ul>
	)
}

export default ProjectList
