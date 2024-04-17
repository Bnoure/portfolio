import Link from 'next/link'
import { FiMail, FiArrowRight } from 'react-icons/fi'

const Contact = () => {
	return (
		<section id='contact' className='pt-10'>
			<h2 className='section-heading custom-underline'>Get In Touch</h2>
			<p>
				Wooh! You have reached the bottom of the page. Looking to collaborate,
				discuss an opportunity, or just want to say hi? I&apos;m all in! Just
				drop me an email !
			</p>
			<div className='flex gap-16 mt-6'>
				<Link href='mailto:noureddine.benkerroum@gmail.com' legacyBehavior>
					<a
						className='flex items-center gap-2 hover:text-primary transition'
						title='Compose an email to Nitesh'
					>
						<FiMail />
						<div className='flex items-center'>
							<span>Email Me&nbsp;</span>
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
