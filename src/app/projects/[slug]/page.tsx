import Link from "next/link";
import { notFound } from "next/navigation";

import { allProjects } from "contentlayer/generated";

import { Mdx } from "@/components/Mdx";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () => {
  return allProjects.map((p) => ({ slug: p.slug }));
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Link href="/projects" className="text-sm text-white/60 hover:text-white">
          Back to Projects
        </Link>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            {project.title}
          </h1>
          {project.description ? (
            <p className="max-w-2xl text-white/60">{project.description}</p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm text-white/70">Impact</div>
        <div className="mt-2 text-white">{project.impact}</div>
      </div>

      <Mdx code={project.body.code} />
    </div>
  );
}
