"use client";

import { Printer } from "lucide-react";

interface PrintButtonProps {
  label?: string;
}

export const PrintButton = ({ label = "Print / Save PDF" }: PrintButtonProps) => {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
    >
      <Printer className="h-4 w-4" />
      {label}
    </button>
  );
};
