import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { ISSUES, SEASONS, issuesInSeason } from "@/lib/catalog";

const searchSchema = z.object({
  s: z.coerce.number().int().min(1).max(3).catch(3),
});

export const Route = createFileRoute("/")({
  validateSearch: searchSchema,
  component: Home,
});

function Home() {
  const { s } = Route.useSearch();
  const season = SEASONS[s - 1] ?? SEASONS[2];
  const issues = issuesInSeason(season.n);
  const recovered = ISSUES.filter((i) => i.recovered).length;

  return (
    <main className="min-h-dvh bg-void">
      <div className="relative overflow-hidden">
        <img
          src="/skyblood/issues/s3i13.jpg"
          alt=""
          className="h-[58dvh] w-full object-cover object-[center_30%] md:h-[64dvh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/25" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-5 pb-8">
          <p className="mb-2 font-sans text-[11px] font-medium tracking-[0.28em] text-mute uppercase">
            SKYBLOOD · Three seasons · Thirteen issues each
          </p>
          <h1 className="font-display text-5xl leading-none font-semibold tracking-tight text-fog md:text-7xl">
            SKYBLOOD
          </h1>
          <p className="mt-4 max-w-xl font-sans text-[15px] leading-relaxed text-mute">
            A Memphis cargo myth. Elias Marrow feels weather before the klaxon.
            He still cannot command the rain. {recovered} issues recovered from
            the Friday library. Season Two #12–13 and all of Season Three were
            restored from the last canon line: the face in the opening is not him.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="flex flex-wrap gap-2">
          {SEASONS.map((sea) => (
            <Link
              key={sea.n}
              to="/"
              search={{ s: sea.n }}
              className={`inline-flex h-11 items-center rounded-md px-4 font-sans text-sm transition-colors ${
                sea.n === season.n
                  ? "bg-fog font-semibold text-void"
                  : "border border-line bg-asphalt text-fog hover:border-mute"
              }`}
            >
              {sea.title}
            </Link>
          ))}
        </div>

        <p className="mt-6 font-display text-2xl leading-snug text-fog italic">
          {season.line}
        </p>
        <p className="mt-2 font-sans text-[11px] tracking-[0.2em] text-dim uppercase">
          {issues.length} issues · first read is mute
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {issues.map((issue) => (
            <li key={`${issue.season}-${issue.number}`}>
              <Link
                to="/read"
                search={{ s: issue.season, i: issue.number, p: 1 }}
                className="group block overflow-hidden rounded-lg border border-line bg-asphalt transition-colors hover:border-mute"
              >
                <img
                  src={issue.cover}
                  alt=""
                  className="aspect-[2/3] w-full object-cover object-[center_18%]"
                />
                <div className="p-3">
                  <p className="font-sans text-[10px] tracking-[0.18em] text-dim uppercase">
                    S{issue.season} · #{String(issue.number).padStart(2, "0")}
                    {issue.recovered ? " · recovered" : " · restored"}
                  </p>
                  <h2 className="mt-1 font-display text-lg leading-tight text-fog">
                    {issue.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 font-sans text-xs leading-relaxed text-mute">
                    {issue.synopsis}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl font-sans text-xs leading-relaxed text-dim">
          Recovered copy is the Friday 4:44pm library, word for word. Restored
          issues continue from Season Two #11 — record count 1, body count 2,
          the face in the opening is not him. Season Three is the refusal: he
          was never the way.
        </p>
      </section>
    </main>
  );
}
