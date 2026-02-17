import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: true },
    updated: { type: "date", required: false },
    tags: { type: "list", of: { type: "string" }, required: false },
    draft: { type: "boolean", required: false, default: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^blog\//, ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace(/^blog\//, "")}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    impact: { type: "string", required: true },
    techStack: { type: "list", of: { type: "string" }, required: true },
    category: { type: "string", required: true },
    githubUrl: { type: "string", required: false },
    liveUrl: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^projects\//, ""),
    },
    url: {
      type: "string",
      resolve: (doc) =>
        `/projects/${doc._raw.flattenedPath.replace(/^projects\//, "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [BlogPost, Project],
  mdx: {
    remarkPlugins: [remarkGfm as any, remarkMath as any],
    rehypePlugins: [
      rehypeKatex as any,
      [
        rehypePrettyCode as any,
        {
          theme: "github-dark",
          keepBackground: false,
        },
      ],
      rehypeSlug as any,
      [rehypeAutolinkHeadings as any, { behavior: "wrap" }],
    ] as any,
  },
});
