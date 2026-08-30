import { createFileRoute, Link } from "@tanstack/react-router";
import { ISSUES } from "@/data/catalog";

export const Route = createFileRoute("/")({ component: Library });

function Library() {
  return (
    <main className="min-h-dvh bg-bg text-fg">
      <header className="mx-auto max-w-6xl px-6 pt-8 sm:px-10">
        <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-amber">
          A Memphis cargo myth
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-gold sm:text-5xl">
          SKYBLOOD
        </h1>
        <p className="mt-3 max-w-xl text-pretty font-sans text-sm leading-relaxed text-muted">
          Elias Marrow feels weather before the klaxon. Season One closed.
          Season Two begins. He still cannot command the rain. First read is mute.
        </p>
      </header>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 py-8 sm:grid-cols-2 sm:px-10 lg:grid-cols-3">
        {([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] as const).map((n) => {
          const { meta } = ISSUES[n];
          return (
            <article
              key={n}
              className="overflow-hidden rounded-md border border-line bg-silent"
            >
              <Link to="/read" search={{ i: n, p: 0, g: 0 }} className="block">
                <img
                  src={meta.cover}
                  alt={`${meta.issue}: ${meta.book}`}
                  className="h-40 w-full object-cover object-[center_18%] sm:h-44"
                />
              </Link>
              <div className="flex flex-col gap-2 p-4">
                <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-amber">
                  {meta.issue}
                </p>
                <h2 className="font-display text-xl italic text-fg">{meta.book}</h2>
                <p className="line-clamp-3 text-pretty font-sans text-sm leading-relaxed text-muted">
                  {meta.logline}
                </p>
                <Link
                  to="/read"
                  search={{ i: n, p: 0, g: 0 }}
                  className="mt-1 inline-flex min-h-11 w-fit items-center rounded-md bg-gold px-5 font-sans text-sm font-semibold text-ink"
                >
                  Open {meta.issue}
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
