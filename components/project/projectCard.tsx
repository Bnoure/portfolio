import React, { useState } from 'react'
import Image from 'next/image'
import { Project } from './projectData'
import { TechIcons } from '../teckstack'
import { TfiAngleDoubleDown, TfiAngleDoubleUp } from 'react-icons/tfi'

interface ProjectCardProps {
	project: Project
	index: number
}

interface TechIconType {
	React: Element
	Javascript: Element
	Next: Element
	Typescript: Element
	Tailwind: Element
	Ruby: Element
	Rails: Element
	Postgresql: Element
	Bootstrap: Element
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const isEven = index % 2 === 0

	return (
		<div
			className={`row-span-1 rounded-xl overflow-hidden group hover:shadow-xl transition-shadow duration-200 shadow-input dark:shadow-none dark:bg-black bg-white border border-transparent flex ${
				isEven ? 'flex-row' : 'flex-row-reverse'
			} gap-4 space-x-4 space-x-reverse`}
		>
			<Image
				className='relative w-2/4 rounded-lg object-cover'
				src={project.img}
				alt={project.title}
				width={500}
				height={300}
				loading='eager'
			/>

			<div className='w-1/2 flex flex-col justify-between p-5'>
				<div className='relative'>
					<h3 className='font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2'>
						{project.title}
					</h3>

					<p className='font-sans text-neutral-600 text-sm dark:text-neutral-300'>
						{isExpanded
							? project.description
							: `${project.description.substring(0, 100)}...`}
					</p>
				</div>
				<div className='flex flex-col space-y-2'>
					<div className='flex space-x-2' style={{ marginLeft: '-0.6rem' }}>
						{project.tech_stack.map((tech) => (
							<TechIcons key={tech} tech={tech as keyof TechIconType} />
						))}
					</div>
					<button
						onClick={() => setIsExpanded(!isExpanded)}
						className='self-start text-neutral-600 dark:text-neutral-200 transition duration-150 ease-in-out flex items-center'
					>
						{isExpanded ? (
							<TfiAngleDoubleUp size={20} />
						) : (
							<TfiAngleDoubleDown size={20} />
						)}
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
