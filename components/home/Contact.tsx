import Link from 'next/link'
import { FiMail, FiArrowRight } from 'react-icons/fi'
import { useTranslation } from 'next-i18next'

const Contact = () => {
	const { t } = useTranslation('common')
	return (
		<section id='contact' className='pt-10'>
			<h2 className='section-heading custom-underline'>
				{t('common.contact.title')}{' '}
			</h2>
			<p>
				<span>{t('common.contact.bottomtext')} </span>
			</p>
			<div className='flex gap-16 mt-6'>
				<Link href='mailto:noureddine.benkerroum@gmail.com' legacyBehavior>
					<a
						className='flex items-center gap-2 hover:text-primary transition'
						title='Compose an email to Nitesh'
					>
						<FiMail />
						<div className='flex items-center'>
							<span>{t('common.contact.sendEmail')}&nbsp;</span>
							<span className='animate-bounce-right'>
								<FiArrowRight />
							</span>
						</div>
					</a>
				</Link>
			</div>
		</section>
	)
}

export default Contact
