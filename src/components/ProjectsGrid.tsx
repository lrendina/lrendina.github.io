"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import type { Project } from "contentlayer/generated";

import { cn } from "@/lib/cn";

interface ProjectsGridProps {
  projects: Project[];
}

const filters = ["All", "Blockchain", "AI", "Full Stack"] as const;

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-3 py-1 text-sm transition-colors",
              active === f
                ? "border-white/20 bg-white/10 text-white"
                : "border-white/10 bg-transparent text-white/60 hover:border-white/20 hover:text-white"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((p) => (
          <div
            key={p._id}
            className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-white">
                  <span>{p.title}</span>
                </h3>
                {p.description ? (
                  <p className="mt-1 text-sm text-white/60">{p.description}</p>
                ) : null}
              </div>

              <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-xs text-white/70">
                {p.category}
              </span>
            </div>

            <p className="mt-4 text-sm text-white/70">{p.impact}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              {p.githubUrl ? (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  GitHub
                </a>
              ) : null}
              {p.liveUrl ? (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Live
                </a>
              ) : null}
              <Link href={p.url} className="text-white/70 hover:text-white">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
