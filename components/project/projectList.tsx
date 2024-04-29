import React from 'react'
import { useTranslation } from 'react-i18next'
import ProjectCard from './projectCard'
import { getProjectData } from './projectData'

const ProjectsList = () => {
	const { t } = useTranslation('common')
	const projects = getProjectData(t)

	return (
		<div className='container mx-auto pb-4 '>
			<div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
				{projects.map((project, index) => (
					<div key={index} className='min-h-fit'>
						{' '}
						<ProjectCard project={project} />
					</div>
				))}
			</div>
		</div>
	)
}

export default ProjectsList
