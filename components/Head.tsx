import React from 'react'
import NextHead from 'next/head'
import { metadata } from '../lib/metadata' // Assurez-vous que le chemin est correct

interface HeadProps {
	title?: string
	description?: string
}

const Head = ({ title, description }: HeadProps) => {
	const fullTitle = title ? `${title} | ${metadata.title}` : metadata.title
	const fullDescription = description || metadata.description

	return (
		<NextHead>
			<title>{fullTitle}</title>
			<meta name='description' content={fullDescription} />
			<meta property='og:url' content={metadata.openGraph.url} />
			<meta property='og:type' content={metadata.openGraph.type} />
			<meta property='og:title' content={metadata.openGraph.title} />
			<meta
				property='og:description'
				content={metadata.openGraph.description}
			/>
			<link rel='icon' href={metadata.icons.shortcut} />
		</NextHead>
	)
}

export default Head
