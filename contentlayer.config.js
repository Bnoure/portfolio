
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'


/**@type {import('@contentlayer/source-files').ComputedFields} */

const computedFields = {
  projectId: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/')[1]
  },
  body: {
    type: 'string',
    resolve: (doc) => doc.body
  }
}

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: '**/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    img: { type: 'string', required: true },
    sumtitle : { type: 'string', required: true }
  },
  computedFields: {
    projectId: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/')[1]
    },
    body: {
      type: 'string',
      resolve: (doc) => doc.body
    }
  }
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project],
  mdxBody: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
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
});
