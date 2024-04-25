// techIcons.tsx
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import {
	SiRubyonrails,
	SiJavascript,
	SiPostgresql,
	SiHtml5,
	SiCss3,
} from 'react-icons/si'

import { JavascriptOriginal } from 'devicons-react'

const techIconStyles = 'rounded-full hover:bg-gray-200 p-1 transition-colors'

export const TechIcons = ({ tech }: { tech: string }) => {
	switch (tech) {
		case 'React':
			return <FaReact className={techIconStyles} />
		case 'Node.js':
			return <FaNodeJs className={techIconStyles} />
		case 'Database':
			return <FaDatabase className={techIconStyles} />
		case 'Rails':
			return <SiRubyonrails className={techIconStyles} />
		case 'Javascript':
			return <JavascriptOriginal className={techIconStyles} />
		case 'Postgresql':
			return <SiPostgresql className={techIconStyles} />
		// case 'Ruby':
		// 	// Remplacez ceci par l'icône appropriée
		// 	return <div>Ruby</div>
		case 'HTML':
			return <SiHtml5 className={techIconStyles} />
		case 'CSS':
			return <SiCss3 className={techIconStyles} />
		default:
			return null
	}
}
