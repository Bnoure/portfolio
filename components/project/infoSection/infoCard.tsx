import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Project } from '../projectData'

interface InfoSectionProps {
	title: string
	content: string
	project?: Project
}

const InfoSection: React.FC<InfoSectionProps> = ({
	title,
	content,
	project,
}) => {
	const [borderColor, setBorderColor] = useState('')
	const { theme } = useTheme()
	useEffect(() => {
		setBorderColor(
			theme === 'dark' ? 'border-borderblack' : 'border-borderlight'
		)
	}, [theme])

	return (
		<div className={`flex flex-col border-r  ${borderColor}  border-b`}>
			<h5 className='font-bold mt-2 ml-2'>{title}</h5>
			<div className=' flex flex-row justify-between'>
				<p className='mt-2 ml-2 font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300'>
					{content}
				</p>
				{project && (
					<span
						className={`inline-block mt-3 mr-4 w-3 h-3 rounded-full ${
							project.building === 'Ongoing' || project.building === 'En cours'
								? 'bg-ongoing'
								: project.building === 'Completed' ||
								  project.building === 'Terminé'
								? 'bg-completed'
								: 'bg-pending'
						}`}
					></span>
				)}
			</div>
		</div>
	)
}

export default InfoSection
