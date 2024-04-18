import AnimatedText from '@/components/AnimatedText'
import Timeline from '@/components/Timeline'
import FadeDown from '@/components/animations/FadeDown'
import FadeUp from '@/components/animations/FadeUp'

// voici le chemin de metada /home/bnoure/code/nourport/lib/metadata.js

const About = () => {
	return (
		<section className='prose  prose-neutral dark:prose-invert my-10'>
			<FadeDown duration={0.4}>
				<h1 className='heading custom-underline'>
					<AnimatedText text='About me' />
				</h1>
				<p>
					Hello! I&apos;m <b>Nour-Eddine Benkerroum</b>, deeply fascinated by
					the digital world and fully committed to the journey of being a
					full-stack developer. Formerly an IT project manager in an
					international setting, I&apos;ve honed my leadership and communication
					skills—assets I&apos;m now eager to leverage in the dynamic field of
					software development.
				</p>
				<p>
					My shift to full-stack development was driven by a desire for new
					challenges and a dedication to innovation. My training has equipped me
					with a solid grasp of technologies like Ruby on Rails, JavaScript,
					React, HTML, and CSS, integrating me into a vibrant and supportive
					community.
				</p>

				<h4 className='text-lg md:text-xl font-medium dark:text-light text-dark'>
					When I&apos;m not at my desk...
				</h4>
				<p>
					Don&apos;t be fooled by all the coding talk—I firmly believe in the
					importance of balancing work and play. That&apos;s why you might find
					me at the gym staying fit, hanging out with friends, or enjoying a
					good Netflix session. I&apos;m always up for an adventure.
				</p>
			</FadeDown>
			<FadeUp duration={0.4}>
				<h2 className='text-xl md:text-2xl text-dark dark:text-light'>
					<AnimatedText text='Timeline' />
				</h2>
				<Timeline />
			</FadeUp>
		</section>
	)
}

export default About
