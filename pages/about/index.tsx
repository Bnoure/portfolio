import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const AboutContent = dynamic(() => import('../../components/about/about'), {
	ssr: false,
})

const LoadingPlaceholder = () => <div>Chargement...</div> // Placeholder pendant le chargement

function AboutPage() {
	return (
		<Suspense fallback={<LoadingPlaceholder />}>
			<AboutContent />
		</Suspense>
	)
}

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])), // Assurez-vous d'inclure tous les namespaces nécessaires
		},
	}
}

export default AboutPage
