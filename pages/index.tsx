import Hero from '@/components/home/Hero'
import ProjectsSection from '@/components/home/Project'
import Contact from '@/components/home/Contact'
import FadeDown from '@/components/animations/FadeDown'
import FadeUp from '@/components/animations/FadeUp'
import Head from '../components/Head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
	return (
		<main className='flex flex-col gap-20 my-10'>
			<Head title='Benkerroum Nour-Eddine' />
			<FadeDown duration={0.4} delay={0}>
				<Hero />
			</FadeDown>
			<FadeUp duration={0.4} delay={0}>
				<ProjectsSection />
			</FadeUp>
			<Contact />
		</main>
	)
}

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	}
}
