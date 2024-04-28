import React from 'react'
import { useTranslation } from 'react-i18next'
import ProjectCard from './projectCard'
import { getProjectData } from './projectData'

const ProjectsList = () => {
	const { t } = useTranslation('common')
	const projects = getProjectData(t)

	return (
		<div className='container mx-auto p-4'>
			<div className='grid grid-cols-2 gap-4 '>
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} index={index} />
				))}
			</div>
		</div>
	)
}

export default ProjectsList
