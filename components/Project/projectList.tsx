import React from 'react'
import { useTranslation } from 'next-i18next'
import ProjectCard from './projectCard'
import { getProjectData } from './projectData' // Assurez-vous que le chemin est correct

const ProjectsList = () => {
	const { t } = useTranslation('common')
	const projects = getProjectData(t)

	return (
		<div className='container mx-auto p-4'>
			<div className='grid md:grid-cols-2 gap-4'>
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</div>
	)
}

export default ProjectsList
