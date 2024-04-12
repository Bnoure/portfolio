'use client'

import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import AnimatedText from '../AnimatedText'
import ProjectList from '../Project/projectList'

const ProjectsSection = () => {
	return (
		<section id='recent-blog'>
			<h2 className='section-heading custom-underline'>
				<AnimatedText text='Recent Projects' />
			</h2>
			<ProjectList />
			<div className='mt-6'>
				<Link href='/projects'>
					<button className='flex items-center'>
						<span className='link'>See All Projects&nbsp;</span>
						<span className='animate-bounce-right'>
							<FiArrowRight />
						</span>
					</button>
				</Link>
			</div>
		</section>
	)
}

export default ProjectsSection
