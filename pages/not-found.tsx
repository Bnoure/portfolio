import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'next-i18next'

export default function NotFound() {
	const { t } = useTranslation()
	return (
		<div className='h-[calc(100vh-400px)] mt-10'>
			<h2 className='heading'>
				<p>{t('common.errorWithCode')} </p>
				<p>{t('common.errorTitle')}</p>
			</h2>
			<p className='mb-10'>{t('common.oopsMessage')}</p>
			<p>
				{t('common.nonExistentPage')}
				<Link href='/' legacyBehavior>
					<a className='link'>{t('common.siteLink')}</a>
				</Link>
				{t('common.turnDetour')}
			</p>
		</div>
	)
}
