import { defineDocumentType, makeSource } from 'contentlayer/source-files';

import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';



/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {


	structuredData: {
		type: 'object',
		resolve: (doc) => ({
			'@context': 'https://schema.org',
			'@type': 'Project',
			headline: doc.title,
			datePublished: doc.publishedAt,
			dateModified: doc.publishedAt,
			description: doc.summary,

			url: `https://codeflownb.com/projets/${doc._raw.flattenedPath}`,
			author: {
				'@type': 'Person',
				name: 'Benkerroum Nour-Eddine',
			},
		}),
	},
}



const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    img: { type: 'string', required: true },
    sumtitle: { type: 'string', required: true },

  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project],
  mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: 'one-dark-pro',
					onVisitLine(node) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: 'text', value: ' ' }]
						}
					},
					onVisitHighlightedLine(node) {
						node.properties.className.push('line--highlighted')
					},
					onVisitHighlightedWord(node) {
						node.properties.className = ['word--highlighted']
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['anchor'],
					},
				},
			],
		],
	},
})
