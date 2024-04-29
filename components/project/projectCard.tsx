import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { Project } from './projectData'
import InfoSection from './infoSection/infoCard'

import TechStack from './infoSection/infotechStack'

interface ProjectCardProps {
	project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const [showDescription, setShowDescription] = useState(false)
	const [isHovered, setIsHovered] = useState(false)
	const { theme } = useTheme()
	const [borderClass, setBorderClass] = useState('')
	const [backgroundColor, setBackgroundColor] = useState('')
	const [backgroundImageColor, setBackgroundImageColor] = useState('')
	const [backgroundSelectionColor, setBackgroundSelectionColor] = useState('')

	useEffect(() => {
		setBorderClass(theme === 'dark' ? 'border-gray-800' : 'border-gray-200')
		setBackgroundColor(theme === 'dark' ? 'bg-bgcard' : 'bg-light')
		setBackgroundImageColor(theme === 'dark' ? 'bg-light' : 'bg-bgcardimag')
	}, [theme])

	const cardStyles = {
		transform: isHovered ? 'scale(1.005) translateZ(0px)' : 'none',
		transition: 'transform 0.5s ease, height 0.3s ease, z-index 0s',
		zIndex: isHovered ? 50 : 1,
		cursor: 'pointer',

		height: isHovered ? (window.innerWidth < 768 ? '400px' : '250px') : '100px',
	}

	return (
		<div
			className={`flex flex-col rounded-lg shadow-lg   hover:-translate-y-1 hover:shadow-2xl transition-transform- transform-none  duration-500 ${backgroundColor} ${borderClass}`}
		>
			<div className='relative overflow-hidden rounded-t-lg'>
				<div
					className={`${backgroundImageColor}`}
					style={{
						padding: '1rem',

						marginTop: '-1px',

						borderRadius: '10px 10px 0 0',
						position: 'relative',
						...cardStyles,
					}}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<Image
						src={project.img}
						alt={project.title}
						width={800}
						height={450}
						sizes='(min-width: 75em) 33vw, (min-width: 48em) 50vw, 100vw'
						quality={75}
						loading='lazy'
					/>
				</div>
			</div>
			<div className='p-2 dark:text-light hover:bg-preview dark:hover:bg-gray-700 transition-colors duration-300 rounded-b-sm'>
				<div className=' grid grid-cols-3 gap-2  '>
					<InfoSection title='Name' content={project.title} />
					<InfoSection title='Phase' content={project.building || ''} />
					<TechStack techStack={project.tech_stack} />
				</div>
				<div className=''>
					<h5 className='font-bold dark:text-light '>
						What I did for this project:
					</h5>
					<p>test</p>
				</div>

				{showDescription && (
					<div className=''>
						<h5 className='font-bold'>Details</h5>
						<p>{project.description}</p>
					</div>
				)}
				<div
					className='text-center cursor-pointer'
					onClick={() => setShowDescription(!showDescription)}
				>
					<h4 className='font-bold'>
						{showDescription ? 'View Less' : 'View More'}
					</h4>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
