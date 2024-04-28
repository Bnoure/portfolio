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
	const [showDescription, setShowDescription] = useState(false)
	const [isHovered, setIsHovered] = useState(false)
	return (
		<div className='flex flex-col  rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl'>
			<div
				className='relative overflow-hidden rounded-t-lg'
				style={{
					padding: '1rem',
					backgroundColor: 'var(--preview-color)',
					marginTop: '-1px',
					borderRadius: '10px 10px 0px 0px',
					position: 'relative',
					height: isHovered ? '300px' : '100px', // Contrôle de la hauteur basé sur l'état de survol
					transition: 'height 0.3s ease-in-out', // Transition pour la hauteur
				}}
				onMouseEnter={() => {
					setIsHovered(true) // Mettre à jour l'état lors du survol
				}}
				onMouseLeave={() => {
					setIsHovered(false) // Réinitialiser l'état après le survol
				}}
			>
				<Image
					src={project.img}
					alt={project.title}
					layout='fill'
					objectFit='cover'
					sizes='(min-width: 75em) 33vw, (min-width: 48em) 50vw, 100vw'
					quality={75}
					loading='lazy'
				/>
			</div>
			<div className=' flex-grow'>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(3, 1fr)',
						alignItems: 'center',
					}}
				>
					{/* Name section */}
					<div
						id='nameSection'
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							borderRight: '1px solid var(--caret-color)',
							borderBottom: '1px solid var(--caret-color)',
							padding: '0.5rem 1rem',
						}}
					>
						<h5
							className='text-lg font-bold'
							style={{ color: 'var(--main-color)', margin: '0 1px 0 0' }}
						>
							name
						</h5>
						<p style={{ margin: 0 }}>{project.title}</p>
					</div>
					{/* Building section */}
					<div
						id='buildingSection'
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							borderRight: '1px solid var(--caret-color)',
							borderBottom: '1px solid var(--caret-color)',
							padding: '0.5rem 1rem',
						}}
					>
						<h5
							className='text-lg font-bold'
							style={{ color: 'var(--main-color)', margin: 0 }}
						>
							phase
						</h5>
						<p style={{ margin: 0 }}>{project.building}</p>
					</div>
					{/* Stack section */}
					<div
						id='stackSection'
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							borderBottom: '1px solid var(--caret-color)',
							padding: '5px',
						}}
					>
						<h5
							className='text-lg font-bold'
							style={{ color: 'var(--main-color)', margin: 0 }}
						>
							stack
						</h5>
						<div className='flex -space-x-4 z-0'>
							{project.tech_stack.map((tech, idx) => (
								<div
									className='z-[1] p-1'
									key={idx}
									onMouseEnter={(e) => (e.currentTarget.style.zIndex = '10')}
									onMouseLeave={(e) => (e.currentTarget.style.zIndex = '1')}
								>
									<TechIcons tech={tech} />
								</div>
							))}
						</div>
					</div>
				</div>

				<div
					className={`p-4 mt-4 transition-all duration-300 ease-in-out

					`}
				>
					<h5
						className='text-lg font-bold'
						style={{ color: 'var(--main-color)' }}
					>
						What
					</h5>
					<p>I did this project for </p>
				</div>

				<div className='p-4 mt-4'>
					<div
						className={`  transition-all duration-300 ease-in-out ${
							showDescription ? 'max-h-screen' : 'max-h-0 overflow-hidden'
						}`}
					>
						<h5
							className='text-lg font-bold'
							style={{ color: 'var(--main-color)' }}
						>
							Details
						</h5>
						<p>{project.description}</p>
					</div>
				</div>
			</div>
			<div
				className='p-4 text-center cursor-pointer rounded-b-lg'
				onClick={() => setShowDescription(!showDescription)}
			>
				<h4 className='text-lg font-bold'>
					{showDescription ? 'View Less' : 'View More'}
				</h4>
			</div>
		</div>
	)
}

export default ProjectCard
