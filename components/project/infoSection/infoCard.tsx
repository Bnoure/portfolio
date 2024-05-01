import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

interface InfoSectionProps {
	title: string
	content: string
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, content }) => {
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
			<p className='mt-2 ml-2 font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300'>
				{content}
			</p>
		</div>
	)
}

export default InfoSection
