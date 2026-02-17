import Link from "next/link";

import { allBlogPosts } from "contentlayer/generated";

import { formatDate } from "@/lib/format-date";

export default function BlogPage() {
  const posts = allBlogPosts
    .filter((p) => !p.draft)
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Yapping
        </h1>
        <p className="max-w-2xl text-white/60">
          Random thoughts and musings — built to be revisited.
        </p>
      </div>

      <div className="space-y-3">
        {posts.map((p) => (
          <Link
            key={p._id}
            href={p.url}
            className="block rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold text-white">{p.title}</div>
                {p.description ? (
                  <div className="mt-1 text-sm text-white/60">{p.description}</div>
                ) : null}
              </div>
              <div className="text-right text-xs text-white/50">
                <div>{formatDate(p.updated ?? p.date)}</div>
                <div>{(p.readingTime as any)?.text ?? ""}</div>
              </div>
            </div>

            {p.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-xs text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
