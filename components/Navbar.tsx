'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import ThemeSwitch from './ThemeSwitch'
import AnimatedText from './AnimatedText'

import LanguageSwitcher from '../lang/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

import { NAV_ITEMS } from '@/constants'
import React, { Suspense } from 'react'

const NavBar = () => {
	const pathname = usePathname()
	const { t } = useTranslation('common')

	return (
		<Suspense fallback={<div>Loading navigation...</div>}>
			<nav className='fixed top-2 left-1/2 max-w-[44em] w-[96vw] sm:w-[96vw] mx-auto -translate-x-1/2 flex flex-col transition-all rounded-lg p-[10px] bg-primary/10 backdrop-blur-[10px] backdrop-saturate-150 hover:shadow-dark border border-secondary/20 z-10'>
				<div className='h-[40px] bg-transparent py-5 flex items-center justify-between'>
					<div className="flex items-center justify-between'">
						<LanguageSwitcher />
					</div>

					<div className='flex items-center gap-8'>
						<div className='flex gap-8'>
							{NAV_ITEMS.map((item, idx) => {
								const active = pathname === item.page
								return (
									<Link key={idx} href={item.page} legacyBehavior>
										<a
											className={clsx('horizontal-underline', {
												'horizontal-underline-active font-bold': active,
											})}
											aria-label={item.label}
										>
											<span
												className={clsx('tracking-wide', {
													'text-xs sm:text-sm md:text-base': !active,
													'text-base sm:text-lg': active,
													'text-gray-900 dark:text-gray-100': true,
												})}
											>
												<AnimatedText text={t(item.label)} />
											</span>
										</a>
									</Link>
								)
							})}
						</div>
						<ThemeSwitch />
					</div>
				</div>
			</nav>
		</Suspense>
	)
}

export default NavBar
