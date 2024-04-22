import React, { useState } from 'react'
import { Project } from './projectData' // Assurez-vous que le chemin est correct
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { TechIcons } from '../teckstack' // Mettez à jour avec le chemin réel de vos icônes

const ProjectCard = ({ project }: { project: Project }) => {
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<div className='max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4'>
			<div className='md:flex'>
				<div className='md:flex-shrink-0'>
					<img
						className='h-48 w-full object-cover md:h-full md:w-48'
						src={project.img}
						alt={project.title}
					/>
				</div>
				<div className='p-8'>
					<div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
						{project.title}
					</div>
					<a
						href='#'
						className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
					>
						{project.title}
					</a>
					<p className='mt-2 text-gray-500'>
						{isExpanded
							? project.description
							: `${project.description.substring(0, 100)}...`}
					</p>
					<div className='flex justify-between items-center mt-4'>
						<div className='flex space-x-2'>
							{/* Ici, vous pouvez mapper vos icônes de technologies */}
							{project.tech_stack.map((tech, index) => (
								<TechIcons key={index} tech={tech} />
							))}
						</div>
						<button
							onClick={() => setIsExpanded(!isExpanded)}
							className='text-indigo-500 hover:text-indigo-600 transition duration-150 ease-in-out'
						>
							{isExpanded ? 'Voir moins' : 'Voir plus'}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
