import Link from "next/link";

import { allProjects } from "contentlayer/generated";

import { ProjectsGrid } from "@/components/ProjectsGrid";

export default function ProjectsPage() {
  const projects = allProjects
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Projects
        </h1>
        <p className="max-w-2xl text-white/60">
          A focused selection of work across blockchain, AI, and full stack.
        </p>
        <div>
          <Link href="/" className="text-sm text-white/60 hover:text-white">
            Back home
          </Link>
        </div>
      </div>

      <ProjectsGrid projects={projects} />
    </div>
  );
}
