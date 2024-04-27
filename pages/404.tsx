import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'next-i18next'

interface ErrorPageProps {
	statusCode: number | undefined
}

export default function Custom404({ statusCode }: ErrorPageProps) {
	const { t } = useTranslation()
	return (
		<div className='h-[calc(100vh-400px)] mt-10'>
			<h2 className='heading'>
				{statusCode
					? t('common.errorWithCode', { statusCode })
					: t('common.errorTitle')}
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
