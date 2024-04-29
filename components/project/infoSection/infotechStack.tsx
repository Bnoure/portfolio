import { TechIcons } from '../../teckstack'
import { Tooltip } from 'react-tooltip'

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
	<div className='flex flex-col'>
		<h5 className='font-bold'>Stack</h5>
		<div className='flex'>
			{techStack.map((tech: string, idx: number) => (
				<div
					data-tooltip-id={`${tech}-${idx}`}
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
					<TechIcons tech={tech as keyof TechIconType} />
					<Tooltip
						place='top'
						id={`${tech}-${idx}`}
						content={
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<TechIcons tech={tech as keyof TechIconType} />
								<span>{tech}</span>
							</div>
						}
						style={{
							backgroundColor: 'rgb(0, 255, 30)',
							color: '#222',
							fontWeight: '700',
							zIndex: 1000,
						}}
					/>
				</div>
			))}
		</div>
	</div>
)

export default TechStack
