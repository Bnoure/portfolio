import React, { useState } from 'react'
import { Feature } from '../bento/bento'
import Image from 'next/image'
import { TechIcons } from '../teckstack'
import { TfiAngleDoubleDown, TfiAngleDoubleUp } from 'react-icons/tfi'
import { Img } from '@/components/atoms/img'

interface ProjectCardProps {
	project: Feature
	isInitiallyExpanded?: boolean // Assurez-vous que cette ligne est présente
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	project,
	isInitiallyExpanded = false, // Utilisation d'une valeur par défaut de 'false'
}) => {
	const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded)

	return (
		<div className='row-span-1 rounded-xl group hover:shadow-xl transition-shadow duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4'>
			<div className='md:flex-shrink-0'>
				<Img
					className='h-48 w-full object-cover md:h-full md:w-48 rounded-t-lg'
					src={project.iconPath}
					alt={project.name}
					width={800}
					height={300}
				/>
			</div>
			<div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 flex justify-between items-center'>
				<span>{project.name}</span>
				<div className='flex space-x-2'>
					{project.techStack?.map((tech) => (
						<TechIcons key={tech} tech={tech} />
					))}
				</div>
			</div>
			<p className='font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300'>
				{isExpanded
					? project.description
					: `${project.description.substring(0, 100)}...`}
			</p>
			<div className='border-t border-gray-200 pt-2 flex justify-between items-center'>
				<button
					onClick={() => setIsExpanded(!isExpanded)}
					className='text-neutral-600 dark:text-neutral-200 transition duration-150 ease-in-out flex items-center'
				>
					{isExpanded ? (
						<TfiAngleDoubleUp size={20} />
					) : (
						<TfiAngleDoubleDown size={20} />
					)}
				</button>
			</div>
		</div>
	)
}

export default ProjectCard
