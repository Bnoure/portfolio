'use client'
import { ReactElement } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import RoundedImage from '../RoundedImage'
import AnimatedText from '../AnimatedText'
import { useTranslation } from 'next-i18next'

import { useRouter } from 'next/router'

export default function Hero(): ReactElement {
	const { t } = useTranslation('common')
	const { locale } = useRouter()
	const aboutUrl = `/${locale}/about`
	const { theme } = useTheme()

	const isDark = theme === 'dark'
	const isLight = theme === 'light'

	const darkGradientStyle = {
		backgroundImage: '-webkit-linear-gradient(-45deg, #48cb8a, #8353e2)',
		backgroundClip: 'text',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		textFillColor: 'transparent',
	}

	const lightGradientStyle = {
		backgroundImage: 'linear-gradient(to right, #240b36, #c31432)',
		backgroundClip: 'text',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		textFillColor: 'transparent',
	}

	const getHighlightedText = (fullText: string, highlight: string) => {
		const parts = fullText.split(highlight)
		return (
			<>
				{parts[0]}
				<strong
					style={isDark ? darkGradientStyle : isLight ? lightGradientStyle : {}}
				>
					{highlight}
				</strong>
				{parts[1]}
			</>
		)
	}

	const boldText = t('common.hero.introductionBold')
	const introduction = t('common.hero.introduction', { bold: boldText })
	const introductionSmall = t('common.hero.introductionSmallScreen', {
		bold: boldText,
	})

	return (
		<section>
			<h1 className='sr-only'>
				{getHighlightedText(introductionSmall, boldText)}
			</h1>
			<div className='flex cursor-default flex-col justify-center'>
				<div className='flex gap-8'>
					<RoundedImage
						src='/Nourcartonn.png'
						alt='profile picture'
						quality={95}
						priority={true}
						width={64}
						height={64}
						style={{ objectFit: 'contain' }}
					/>
					<div className='flex flex-col justify-center'>
						<h1 className='text-3xl lg:text-4xl font-medium text-dark dark:text-light name-highlight'>
							<AnimatedText
								text='Benkerroum Nour-Eddine'
								style={
									isDark ? darkGradientStyle : isLight ? lightGradientStyle : {}
								}
							/>
						</h1>
						<h4 className='text-base lg:text-lg'>
							{t('common.navigation.About')}
						</h4>
					</div>
				</div>
				<div className='flex flex-col gap-8 pt-8'>
					<p className='text-base md:text-lg'>
						{getHighlightedText(introduction, boldText)}
					</p>
					<Link href={aboutUrl} legacyBehavior>
						<a>
							<div className='flex items-center'>
								<span className='link'>
									{t('common.navigation.Learn')}&nbsp;
								</span>
								<span className='animate-bounce-right'>
									<FiArrowRight />
								</span>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
}
