'use client'
import { ReactElement } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

import RoundedImage from '../RoundedImage'
import AnimatedText from '../AnimatedText'
import { useTranslation } from 'next-i18next'
import { Trans } from 'react-i18next'
import { useRouter } from 'next/router'

export default function Hero(): ReactElement {
	const { t } = useTranslation('common')
	const { locale } = useRouter()
	const aboutUrl = `/${locale}/about`
	console.log('Current locale: ', locale)
	console.log('Constructed URL: ', aboutUrl)
	return (
		<section>
			<h1 className='sr-only'>
				<Trans
					i18nKey='common.hero.introductionSmallScreen'
					components={{ 0: <strong style={{ color: 'red !important' }} /> }}
				/>
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
							<AnimatedText text='Benkerroum Nour-Eddine' />
						</h1>
						<h4 className='text-base lg:text-lg'>
							{t('common.navigation.About')}
						</h4>
					</div>
				</div>
				<div className='flex flex-col gap-8 pt-8'>
					<p className='text-base md:text-lg'>
						<Trans
							i18nKey='common.hero.introduction'
							components={{ 0: <b /> }}
						/>
					</p>
					<Link href={aboutUrl} legacyBehavior>
						<a className='flex items-center'>
							<span className='link'>{t('common.navigation.Learn')}&nbsp;</span>
							<FiArrowRight className='animate-bounce-right' />
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
}
