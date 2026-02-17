"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, X } from "lucide-react";

import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Garden" },
  { href: "/cv", label: "CV" },
  { href: "/about", label: "About" },
];

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <header className="no-print sticky top-0 z-50">
      <div className="bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link
            href="/"
            className="font-mono text-sm tracking-tight text-white/90 hover:text-white"
          >
            {site.name}
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-sm text-white/70 transition-colors hover:text-white",
                    active && "bg-white/10 text-white"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 text-white/70 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 text-white/70 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={site.socials.x}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 text-white/70 hover:text-white"
              aria-label="X"
            >
              <X className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
