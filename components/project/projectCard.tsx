import React, { useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { Project } from './projectData'
import { TechIcons } from '../teckstack'

interface ProjectCardProps {
	project: Project
}

type TechIconType = {
	Typescript: JSX.Element
	React: JSX.Element
	Ruby: JSX.Element
	Postgresql: JSX.Element
	Javascript: JSX.Element
	Next: JSX.Element
	Tailwind: JSX.Element
	Bootstrap: JSX.Element
	Rails: JSX.Element
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const [showDescription, setShowDescription] = useState(false)
	const [isHovered, setIsHovered] = useState(false)
	const { theme } = useTheme()

	const borderClass = theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
	const backgroundColor = theme === 'dark' ? 'bg-brand-900' : 'bg-slate-500'

	const cardStyles = {
		transform: isHovered ? 'scale(1.005) translateZ(0px)' : 'none',
		transition: 'transform 0.5s ease, height 0.3s ease, z-index 0s',
		zIndex: isHovered ? 50 : 1,
		cursor: 'pointer',
		// Dynamiquement ajuster la hauteur basée sur le survol et si les détails sont affichés
		height: isHovered ? (window.innerWidth < 768 ? '400px' : '250px') : '100px',
	}

	return (
		<div
			className={`flex flex-col rounded-lg shadow-lg   hover:-translate-y-1 hover:shadow-2xl transition-transform- transform-none  duration-500 ${backgroundColor} ${borderClass}`}
		>
			<div className='relative overflow-hidden rounded-t-lg'>
				<div
					style={{
						padding: '1rem',
						backgroundColor: 'var(--preview-color)',
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
			<div className='p-2 dark:text-light'>
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

const InfoSection = ({
	title,
	content,
}: {
	title: string
	content: string
}) => (
	<div className='flex flex-col  '>
		<h5 className='font-bold'>{title}</h5>
		<p>{content}</p>
	</div>
)

const TechStack = ({ techStack }: { techStack: any }) => (
	<div className='flex flex-col '>
		<h5 className='font-bold'>Stack</h5>
		<div className='flex -space-x-4'>
			{techStack.map((tech: string, idx: number): {} => (
				<div
					key={idx}
					className='z-10 p-1'
					onMouseEnter={(e) => (e.currentTarget.style.zIndex = '20')}
					onMouseLeave={(e) => (e.currentTarget.style.zIndex = '10')}
				>
					<TechIcons tech={tech as keyof TechIconType} />
				</div>
			))}
		</div>
	</div>
)

export default ProjectCard
