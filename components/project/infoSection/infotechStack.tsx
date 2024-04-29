import { TechIcons } from '../../teckstack'
import Tooltip from '@mui/material/Tooltip'

import { createTheme } from '@mui/system'

const theme = createTheme({
	palette: {
		background: {
			paper: '#fff',
		},
		text: {
			primary: '#173A5E',
			secondary: '#46505A',
		},
		action: {
			active: '#001E3C',
		},
		success: {
			dark: '#009688',
		},
	},
})

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

const TechStack = ({ techStack }: { techStack: any }) => (
	<div className='flex flex-col  border-b border-borderblack  '>
		<h5 className='font-bold ml-2 '>Stack</h5>
		<div className='flex'>
			{techStack.map((tech: string, idx: number) => (
				<div
					key={idx}
					className='z-[1] p-2'
					style={{
						marginLeft: idx === 0 ? '0px' : '-20px',
						zIndex: techStack.length - idx,
					}} // Plus haute z-index pour l'élément à gauche
					onMouseEnter={(e) => (e.currentTarget.style.zIndex = '100')} // Temporairement augmenter z-index au survol
					onMouseLeave={(e) =>
						(e.currentTarget.style.zIndex = (techStack.length - idx).toString())
					} // Remettre le z-index initial après survol
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

export default TechStack
