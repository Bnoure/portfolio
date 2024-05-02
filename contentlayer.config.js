
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: '**/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    img: { type: 'string', required: true }
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
  disableImportAliasWarning: true // Ajoutez cette ligne
});
