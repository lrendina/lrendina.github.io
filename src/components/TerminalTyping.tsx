"use client";

import { useEffect, useMemo, useState } from "react";

interface TerminalTypingProps {
  lines: string[];
}

export const TerminalTyping = ({ lines }: TerminalTypingProps) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const current = useMemo(() => lines[lineIndex] ?? "", [lines, lineIndex]);
  const done = charIndex >= current.length;

  useEffect(() => {
    const t = window.setTimeout(
      () => {
        if (!done) {
          setCharIndex((c) => c + 1);
          return;
        }

        window.setTimeout(() => {
          setLineIndex((i) => (i + 1) % lines.length);
          setCharIndex(0);
        }, 800);
      },
      done ? 200 : 35
    );

    return () => window.clearTimeout(t);
  }, [charIndex, done, lines.length]);

  return (
    <div className="rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-sm text-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="text-[11px] text-white/40">terminal</span>
      </div>

      <div className="text-white/60">
        <span className="text-emerald-300">lorenzo</span>
        <span className="text-white/40">@</span>
        <span className="text-sky-300">garden</span>
        <span className="text-white/40">:</span>
        <span className="text-purple-300">~</span>
        <span className="text-white/40">$</span>
        <span className="ml-2 text-white/90">{current.slice(0, charIndex)}</span>
        <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-white/70 align-middle" />
      </div>
    </div>
  );
};
