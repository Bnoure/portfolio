import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Project } from './projectData'
import { TechIcons } from '../teckstack'
import { TfiAngleDoubleDown, TfiAngleDoubleUp } from 'react-icons/tfi'

interface ProjectCardProps {
	project: Project
	index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const isEven = index % 2 === 0

	const imageVariants = {
		hover: {
			x: isEven ? 20 : -20, // Déplacer l'image vers le texte pour 'entrer' dans la carte
			rotate: isEven ? 3 : -3, // Rotation légère pour dynamiser l'effet
			transition: {
				type: 'spring',
				stiffness: 260,
				damping: 20,
			},
		},
	}

	return (
		<div
			className={`row-span-1 rounded-xl overflow-hidden group hover:shadow-xl transition-shadow duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex ${
				isEven ? 'flex-row' : 'flex-row-reverse'
			}  gap-4 space-x-4 space-x-reverse`}
		>
			<motion.div
				className='relative w-2/4' // Réduit la largeur pour que 75% soit visible
				variants={imageVariants}
				whileHover='hover'
			>
				<Image
					className='rounded-lg object-cover'
					src={project.img}
					alt={project.title}
					width={500}
					height={300}
				/>
			</motion.div>
			<div className='w-1/2 flex flex-col justify-between'>
				<div>
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
					<div className='flex space-x-2 size-500'>
						{project.tech_stack.map((tech) => (
							<TechIcons key={tech} tech={tech} />
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
