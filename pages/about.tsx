import AnimatedText from '@/components/AnimatedText'
import Timeline from '@/components/Timeline'
import FadeDown from '@/components/animations/FadeDown'
import FadeUp from '@/components/animations/FadeUp'
import Photo from '../app/about/photo'

import { useTranslation } from 'react-i18next'

export default function About() {
	const getHighlightedText = (fullText: string, highlight: string) => {
		const parts = fullText.split(highlight)
		return (
			<>
				{parts[0]}
				<strong className='font-bold'>{highlight}</strong>
				{parts[1]}
			</>
		)
	}

	const { t } = useTranslation()
	const boldtext = t('common.about.namebold')
	const intro = t('common.about.mePart1', { bold: boldtext })
	return (
		<>
			<section className='prose  prose-neutral dark:prose-invert my-10'>
				<FadeDown duration={0.4}>
					<h1 className='section-heading custom-underline'>
						<AnimatedText text={t('common.about.title')} />
					</h1>
					<Photo />

					<p className='text-justify'>{getHighlightedText(intro, boldtext)}</p>
					<p className='text-justify'>{t('common.about.mePart2')}</p>
					<br />
					<h4 className='text-lg md:text-xl font-medium dark:text-light text-dark'>
						{t('common.about.not_at_desk')}
					</h4>
					<br />
					<p className='text-justify'>{t('common.about.balance_work_play')}</p>
				</FadeDown>
				<FadeUp duration={0.4}>
					<h2 className=' section-heading custom-underline text-xl md:text-2xl text-dark dark:text-light'>
						<AnimatedText text='Timeline' />
					</h2>

					<Timeline />
				</FadeUp>
			</section>
		</>
	)
}
