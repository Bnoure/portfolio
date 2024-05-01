import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa'
import { Project } from './projectData'
import InfoSection from './infoSection/infoCard'
import { useTranslation } from 'react-i18next'
import TechStack from './infoSection/infotechStack'
import Link from 'next/link'

interface ProjectCardProps {
	project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const { t } = useTranslation()
	const [showDescription, setShowDescription] = useState(false)
	const [isHovered, setIsHovered] = useState(false)
	const { theme } = useTheme()
	const [borderClass, setBorderClass] = useState('')
	const [backgroundColor, setBackgroundColor] = useState('')
	const [backgroundImageColor, setBackgroundImageColor] = useState('')

	const [borderColor, setBorderColor] = useState('')

	useEffect(() => {
		setBackgroundColor(theme === 'dark' ? 'bg-bgcard' : 'bg-light')
		setBackgroundImageColor(theme === 'dark' ? 'bg-light' : 'bg-preview')
		setBorderColor(
			theme === 'dark' ? 'border-borderblack' : 'border-borderlight'
		)
	}, [theme])

	const cardStyles = {
		transform: isHovered ? 'scale(1.005) translateZ(0px)' : 'none',
		transition: 'transform 0.2s ease, height 0.2s ease, z-index 0s',
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
						margin: '1px',
						borderRadius: '10px 10px 0 0',
						position: 'relative',
						...cardStyles,
					}}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<Link href={project.projetSlug}>
						<Image
							src={project.img}
							alt={project.title}
							width={800}
							height={450}
							sizes='(min-width: 75em) 33vw, (min-width: 48em) 50vw, 100vw'
							quality={75}
							loading='lazy'
							className='scale-100 rounded-t-3xl'
						/>
					</Link>
				</div>
			</div>
			<div
				className={` border-r-2 ${borderColor} border-b-2 border-l-2 dark:text-light hover:bg-preview dark:hover:bg-gray-700 transition-colors duration-300 rounded-b-sm hover-rounded `}
			>
				<div
					className=' grid grid-cols-3
          border-b-slate-100 '
				>
					<InfoSection
						title={t('common.projectDetail.name')}
						content={project.title}
					/>
					<InfoSection
						title={t('common.projectDetail.phase')}
						content={project.building || ''}
						project={project}
					/>

					<TechStack techStack={project.tech_stack} />
				</div>
				<div className={`mt-2 border-b ${borderColor}`}>
					<h5 className='font-bold dark:text-light ml-2  mb-2 '>
						{t('common.projectDetail.about')}
					</h5>
					<p className='ml-2 mb-2 font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 '>
						{t(project.description)}
					</p>
				</div>

				{showDescription && (
					<div className={`mt-2 border-b ${borderColor}`}>
						<h5 className='font-bold ml-2 mb-2'>
							{' '}
							{t('common.projectDetail.detail')}
						</h5>
						<p className='ml-2 font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb-2'>
							{t(project.what)}
						</p>
					</div>
				)}
				<div
					className=' text-center cursor-pointer mt-4 '
					onClick={() => setShowDescription(!showDescription)}
				>
					<h4 className='font-bold mb-2 flex justify-center items-center'>
						{showDescription ? (
							<>
								<FaLongArrowAltUp className='mr-2' />{' '}
								{t('common.projectDetail.hide')}
							</>
						) : (
							<>
								<FaLongArrowAltDown className='mr-2' />{' '}
								{t('common.projectDetail.show')}
							</>
						)}
					</h4>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
