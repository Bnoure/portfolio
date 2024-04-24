import React from 'react'
import { useTranslation } from 'next-i18next'
import ProjectCard from './projectCard'
import { features } from '../bento/bento'

const ProjectsList = () => {
	const { t } = useTranslation('common')
	const projects = features(t)

	return (
		<div className='container mx-auto p-4'>
			<div className='grid grid-cols-1 gap-4 '>
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</div>
	)
}

export default ProjectsList
