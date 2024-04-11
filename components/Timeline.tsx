import Link from 'next/link'
import { HiBadgeCheck } from 'react-icons/hi'

interface YearProps {
	children: React.ReactNode
}

const Year = ({ children }: YearProps) => (
	<h4 className='font-medium text-base md:text-lg mb-4 text-dark dark:text-light'>
		{children}
	</h4>
)

interface CheckpointProps {
	title: string
	children?: React.ReactNode
}

const Checkpoint = ({ title, children }: CheckpointProps) => (
	<>
		<div className='flex items-start mb-1'>
			<div className='text-green-700 dark:text-green-300 mt-1'>
				<HiBadgeCheck className='h-5 w-5' />
			</div>
			<h5 className='font-medium text-base ml-2 text-dark dark:text-light'>
				{title}
			</h5>
		</div>
		<li className='pb-4 ml-2 border-solid border-l-2 border-gray-200 dark:border-gray-800 last:border-0 last:pb-0'>
			<p className='ml-5 text-base'>{children}</p>
		</li>
	</>
)

const FullTimeline = () => (
	<div className='text-gray-900 dark:text-gray-400 timeline'>
		<Year>2024</Year>
		<ul>
			<Checkpoint title='Full-Stack Developer Graduation from Le Wagon 🎓'>
				Successfully completed a rigorous bootcamp at Le Wagon, earning a
				Bachelor’s level certification in web development. Now fully equipped
				with skills in Ruby on Rails, JavaScript, React, HTML, and CSS, I'm
				diving into the world of full-stack development with enthusiasm and a
				rich background in IT project management.
			</Checkpoint>
		</ul>
		<Year>2020 - 2024</Year>
		<ul>
			<Checkpoint title='IT Project Manager at Atos for an External Client 🚀'>
				Led a complex IT migration program for Opel and PCD to PSA environments,
				managing over 40 application deployments across Europe. Excelled in
				project coordination and team leadership in an international setting.
			</Checkpoint>
		</ul>
		<Year>2019 - 2020</Year>
		<ul>
			<Checkpoint title='Product Management Officer at Atos for an External Client'>
				Provided crucial support in cybersecurity project management for Airbus,
				enhancing project and security processes, and facilitating effective
				team communication.
			</Checkpoint>
		</ul>
		<Year>2019</Year>
		<ul>
			<Checkpoint title='Master’s in Aeronautics and Industrial Management from Toulouse Business School'>
				Graduated with a Master’s degree, sharpening my management skills and
				laying a solid foundation for my career in the high-stakes world of
				aeronautics and industry.
			</Checkpoint>
		</ul>
		<Year>2015</Year>
		<ul>
			<Checkpoint title='BTS in International Trade at Cahors'>
				Completed my BTS in International Trade, gaining crucial knowledge and
				experience in global commerce dynamics.
			</Checkpoint>
		</ul>
		<Year>1995</Year>
		<ul>
			<Checkpoint title='Birth of a Newbie 👶' />
		</ul>
	</div>
)

const Timeline = () => <FullTimeline />

export default Timeline
