import { PrintButton } from "@/components/PrintButton";

export default function CvPage() {
  return (
    <div className="space-y-10">
      <div className="no-print flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            CV
          </h1>
          <p className="mt-2 text-white/60">
            A printable view of professional history.
          </p>
        </div>
        <PrintButton />
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-6 print:border-black/10 print:bg-white print:text-black">
        <div className="space-y-8">
          <section>
            <h2 className="text-lg font-semibold">Education</h2>
            <div className="mt-3 space-y-2 text-sm">
              <div>
                <div className="font-medium">University of Miami</div>
                <div className="text-white/60 print:text-black/60">
                  Bachelor of Science, Computer Science
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Experience</h2>
            <div className="mt-3 space-y-2 text-sm">
              <div>
                <div className="font-medium">Bonsai Applied Computations Group</div>
                <div className="text-white/60 print:text-black/60">
                  Quantitative Research Analyst
                </div>
                <div className="text-white/60 print:text-black/60">
                  September 2024 - October 2025
                </div>
                <div className="mt-2 text-white/60 print:text-black/60">
                  Developed and deployed trading systems for Arbitrage opportunities on Ethereum DEX's.
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Certifications</h2>
            <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              <div className="rounded-md border border-white/10 bg-black/30 p-3 print:border-black/10 print:bg-white">
                <div className="font-medium">AWS Certified Cloud Practitioner</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Key Skills</h2>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {[
                "Ethereum",
                "Solidity",
                "Python",
                "Smart Contracts"
              ].map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-white/10 bg-black/30 px-3 py-1 text-white/80 print:border-black/10 print:bg-white print:text-black"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
