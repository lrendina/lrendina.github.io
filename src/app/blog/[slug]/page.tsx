import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { allBlogPosts } from "contentlayer/generated";

import { Mdx } from "@/components/Mdx";
import { formatDate } from "@/lib/format-date";
import { site } from "@/lib/site";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () => {
  return allBlogPosts.map((p) => ({ slug: p.slug }));
};

export const generateMetadata = async (
  props: BlogPostPageProps
): Promise<Metadata> => {
  const { slug } = await props.params;
  const post = allBlogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  const title = `${post.title} · ${site.title}`;

  return {
    title,
    description: post.description ?? site.description,
    openGraph: {
      title,
      description: post.description ?? site.description,
      type: "article",
    },
  };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allBlogPosts.find((p) => p.slug === slug);

  if (!post || post.draft) {
    notFound();
  }

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <Link href="/blog" className="text-sm text-white/60 hover:text-white">
          Back to Garden
        </Link>

        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            {post.title}
          </h1>
          {post.description ? (
            <p className="max-w-2xl text-white/60">{post.description}</p>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
          <span>{formatDate(post.date)}</span>
          <span className="text-white/30">/</span>
          <span>Updated {formatDate(post.updated ?? post.date)}</span>
          {(post.readingTime as any)?.text ? (
            <>
              <span className="text-white/30">/</span>
              <span>{(post.readingTime as any).text}</span>
            </>
          ) : null}
        </div>
      </div>

      <Mdx code={post.body.code} />
    </article>
  );
}
