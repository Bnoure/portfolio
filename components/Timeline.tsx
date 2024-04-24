import { HiBadgeCheck } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

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
const FullTimeline = () => {
	const { t } = useTranslation()

	return (
		<div className='text-gray-900 dark:text-gray-400 timeline'>
			<Year>2024</Year>
			<ul>
				<Checkpoint title={t('common.checkpoints.title1')}>
					{t('common.checkpoints.description1')}
				</Checkpoint>
			</ul>
			<Year>2019 - 2024</Year>
			<ul>
				<Checkpoint title={t('common.checkpoints.title2')}>
					{t('common.checkpoints.description2')}
				</Checkpoint>

				<Checkpoint title={t('common.checkpoints.title3')}>
					{t('common.checkpoints.description3')}
				</Checkpoint>
			</ul>
			<Year>2015 - 2019</Year>
			<ul>
				<Checkpoint title={t('common.checkpoints.title4')}>
					{t('common.checkpoints.description4')}
				</Checkpoint>

				<Checkpoint title={t('common.checkpoints.title5')}>
					{t('common.checkpoints.description5')}
				</Checkpoint>
			</ul>
			<Year>1995</Year>
			<ul>
				<Checkpoint title={t('common.checkpoints.title6')} />
			</ul>
		</div>
	)
}

const Timeline = () => <FullTimeline />

export default Timeline
