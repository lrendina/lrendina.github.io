"use client";

import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer2/hooks";

interface MdxProps {
  code: string;
}

export const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return (
    <div className="prose prose-invert max-w-none prose-a:text-sky-300 prose-a:no-underline hover:prose-a:underline prose-pre:border prose-pre:border-white/10 prose-pre:bg-black/40 prose-pre:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
      <Component
        components={{
          Image,
          a: ({ href, ...props }: any) => {
            const isExternal = typeof href === "string" && href.startsWith("http");
            if (isExternal) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  {...props}
                />
              );
            }
            return <Link href={href ?? "#"} {...props} />;
          },
        }}
      />
    </div>
  );
};
