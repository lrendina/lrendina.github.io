export default function AboutPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          About
        </h1>
        <p className="max-w-2xl text-white/60">
          A quick narrative — the human context behind the work.
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-white/70">
            I’m a Computer Science graduate who gravitates toward building things
            that feel rigorous — from smart contracts to data-driven systems.
            What started as coursework became an obsession with clean interfaces,
            strong guarantees, and elegant trade-offs.
          </p>
          <p className="mt-4 text-white/70">
            Outside of code, I’m into Philosophy (Nietzsche / Plato), Formula 1,
            and marathon running — all different ways of thinking about
            discipline, pace, and what it means to improve.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/60">Currently Listening</div>
          <div className="mt-2 text-white">
            Aphex Twin — Selected Ambient Works
          </div>
          <div className="mt-1 text-sm text-white/50">
            Spotify integration optional (static for now).
          </div>
        </div>
      </div>
    </div>
  );
}
