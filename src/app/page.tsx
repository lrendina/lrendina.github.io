import Link from "next/link";

import { TerminalTyping } from "@/components/TerminalTyping";

export default function Home() {
  return (
    <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
          Technical Elegance
          <span className="h-1 w-1 rounded-full bg-emerald-300/80" />
          Swiss-minimal meets terminal-native
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Building high-signal software
          <span className="text-white/60"> for web3 and beyond.</span>
        </h1>

        <p className="max-w-2xl text-base leading-7 text-white/60">
          Portfolio + digital garden. Focused on clean interfaces, strong
          guarantees, and pragmatic performance.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-emerald-300/90 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-300"
          >
            View Projects
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
          >
            Read Blog
          </Link>
        </div>
      </div>

      <TerminalTyping
        lines={[
          "Computer Science Graduate | Blockchain | Quant Finance",
          "Ethereum · TypeScript · Python",
          "Shipping minimal, fast, and correct",
        ]}
      />
    </div>
  );
}
