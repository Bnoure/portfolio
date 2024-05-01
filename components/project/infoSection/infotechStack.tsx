import { TechIcons } from '../../teckstack'
import Tooltip from '@mui/material/Tooltip'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

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

const TechStack = ({ techStack }: { techStack: any }) => {
	const [borderColor, setBorderColor] = useState('')
	const { theme } = useTheme()
	useEffect(() => {
		setBorderColor(
			theme === 'dark' ? 'border-borderblack' : 'border-borderlight'
		)
	}, [theme])

	return (
		<div className={`flex flex-col  border-b ${borderColor} `}>
			<h5 className='font-bold mt-2 ml-2 '>Stack</h5>
			<div className='flex'>
				{techStack.map((tech: string, idx: number) => (
					<div
						key={idx}
						className='z-[1]  p-2'
						style={{
							marginLeft: idx === 0 ? '0px' : '-20px',
							zIndex: techStack.length - idx,
						}}
						onMouseEnter={(e) => (e.currentTarget.style.zIndex = '100')}
						onMouseLeave={(e) =>
							(e.currentTarget.style.zIndex = (
								techStack.length - idx
							).toString())
						}
					>
						<Tooltip
							title={
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<TechIcons tech={tech as keyof TechIconType} />
									<span>{tech}</span>
								</div>
							}
							arrow
							placement='top'
							sx={{
								bgcolor: 'background.paper',
								boxShadow: 1,
								borderRadius: 2,
								p: 2,
								minWidth: 300,
							}}
						>
							<div>
								<TechIcons tech={tech as keyof TechIconType} />
							</div>
						</Tooltip>
					</div>
				))}
			</div>
		</div>
	)
}

export default TechStack
