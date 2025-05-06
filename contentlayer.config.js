import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.md`,
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    summary: {
      type: "string",
      required: false,
    },
    slug: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    slugAsParams: {
      type: "string",
      resolve: (post) => post.slug,
    },
  },
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
})
