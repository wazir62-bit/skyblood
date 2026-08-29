import { createFileRoute, Link } from "@tanstack/react-router";
import { ISSUE, PAGES, REPAIRS } from "@/lib/issue";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="min-h-dvh bg-void">
      <div className="relative overflow-hidden">
        <img
          src="/skyblood/cover.jpg"
          alt=""
          className="h-[72dvh] w-full object-cover object-[center_30%] md:h-[78dvh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-void/20" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-5 pb-10">
          <p className="mb-2 font-sans text-[11px] font-medium tracking-[0.28em] text-mute uppercase">
            {ISSUE.series} · Issue {String(ISSUE.number).padStart(2, "0")}
          </p>
          <h1 className="font-display text-5xl leading-none font-semibold tracking-tight text-fog md:text-7xl">
            {ISSUE.title}
          </h1>
          <p className="mt-4 max-w-xl font-sans text-[15px] leading-relaxed text-mute">
            {ISSUE.logline}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/read"
              search={{ p: 1 }}
              className="inline-flex h-12 items-center rounded-md bg-fog px-5 font-sans text-sm font-semibold text-void transition-transform duration-150 hover:bg-paper active:scale-[0.98]"
            >
              Open issue
            </Link>
            <Link
              to="/continuity"
              className="inline-flex h-12 items-center rounded-md border border-line bg-asphalt px-5 font-sans text-sm font-medium text-fog transition-colors duration-150 hover:border-mute"
            >
              Continuity repair
            </Link>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-5 py-12">
        <p className="font-sans text-[11px] font-medium tracking-[0.22em] text-dim uppercase">
          {ISSUE.locale}
        </p>
        <p className="mt-3 font-display text-2xl leading-snug text-fog italic">
          {ISSUE.out}
        </p>
        <p className="mt-6 max-w-2xl font-sans text-sm leading-relaxed text-mute">
          Thirty-two pages. Lettering sits on the art, not in it. Pages 13, 24, 25,
          30, and 31 were restaging the same night — the photograph, the argument,
          the title, the shadow — until the plot could not move. Each of those
          pages now has one job.
        </p>

        <h2 className="mt-12 font-display text-2xl text-fog">Repaired beats</h2>
        <ul className="mt-4 grid gap-3">
          {REPAIRS.map((p) => (
            <li key={p.n}>
              <Link
                to="/read"
                search={{ p: p.n }}
                className="flex gap-4 rounded-lg border border-line bg-asphalt p-3 transition-colors hover:border-mute"
              >
                <img
                  src={p.art}
                  alt=""
                  className="h-24 w-16 shrink-0 rounded-xs object-cover"
                />
                <div className="min-w-0">
                  <p className="font-sans text-[11px] tracking-[0.18em] text-dim uppercase">
                    Page {p.n} · {p.movement}
                  </p>
                  <p className="mt-1 font-sans text-sm text-fog">{p.repair?.uniqueJob}</p>
                  <p className="mt-1 truncate font-sans text-xs text-mute">
                    {p.repair?.kills}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 font-display text-2xl text-fog">Issue map</h2>
        <div className="mt-4 grid grid-cols-4 gap-2 md:grid-cols-8">
          {PAGES.map((p) => (
            <Link
              key={p.n}
              to="/read"
              search={{ p: p.n }}
              className={`group relative overflow-hidden rounded-sm ${
                p.repair ? "ring-1 ring-fog/40" : ""
              }`}
            >
              <img src={p.art} alt={`Page ${p.n}`} className="aspect-[2/3] w-full object-cover" />
              <span className="absolute inset-x-0 bottom-0 bg-void/70 py-0.5 text-center font-sans text-[10px] tabular-nums text-fog">
                {p.n}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
