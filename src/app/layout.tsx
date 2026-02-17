import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { NavBar } from "@/components/NavBar";
import { PageTransition } from "@/components/PageTransition";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s · ${site.title}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[radial-gradient(1000px_circle_at_10%_10%,rgba(52,211,153,0.10),transparent_60%),radial-gradient(900px_circle_at_90%_20%,rgba(56,189,248,0.12),transparent_55%)] antialiased`}
      >
        <NavBar />
        <main className="mx-auto w-full max-w-6xl px-4 py-10">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
