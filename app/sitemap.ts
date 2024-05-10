import { allProjects } from 'contentlayer/generated'

export default async function sitemap() {
	const blogs = allProjects.map((projet) => ({
		url: `https://codeflownb.com/projets/${projet.slug}`,

	}))

	const routes = ['', '/about', '/projets',].map(
		(route) => ({
			url: `https://codeflownb.com${route}`,
			lastModified: new Date().toISOString().split('T')[0],
		})
	)

	return [...routes, ...blogs]
}
