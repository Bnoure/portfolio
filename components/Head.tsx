import React from 'react'
import NextHead from 'next/head'
import { createMetadata } from '../lib/metadata'

interface HeadProps {
	title?: string
	description?: string
	imageUrl?: string
	name?: string
}

const Head = ({ title, description, imageUrl }: HeadProps) => {
	// Appel de createMetadata avec les props spécifiques
	const metadata = createMetadata({
		title: title || 'Benkerroum Nour-Eddine',
		description: description || 'Full-Stack Developer and Enthusiast geek',
		exactUrl:
			typeof window !== 'undefined'
				? window.location.href
				: 'https://codeflownb.com', // Utiliser window.location.href si disponible, sinon URL par défaut
		image: imageUrl,
	})

	return (
		<NextHead>
			<title>{metadata.title}</title>
			<meta name='description' content={metadata.description} />
			{metadata.openGraph && (
				<>
					<meta property='og:site_name' content={metadata.openGraph.siteName} />
					<meta property='og:url' content={metadata.openGraph.url} />
					<meta property='og:type' content={metadata.openGraph.type} />
					<meta property='og:title' content={metadata.openGraph.title} />
					<meta
						property='og:description'
						content={metadata.openGraph.description}
					/>
					{metadata.openGraph.images &&
						metadata.openGraph.images.map((image, index) => (
							<meta key={index} property='og:image' content={image.url} />
						))}
				</>
			)}
			<link rel='icon' href={metadata.favicon} />
			<link rel='canonical' href={metadata.metadataBase.href} />
		</NextHead>
	)
}

export default Head
