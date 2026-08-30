import { useEffect, useCallback } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, BookOpen, Eye, EyeOff } from "lucide-react";
import { getIssue } from "@/data/catalog";
import type { ComicPage, Balloon } from "@/data/types";

function BalloonView({ b }: { b: Balloon }) {
  if (b.kind === "caption") {
    return (
      <p className="max-w-md rounded-sm bg-ink/80 px-3 py-2 font-display text-sm italic leading-snug text-paper sm:text-base">
        {b.text}
      </p>
    );
  }
  if (b.kind === "sfx") {
    return (
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-amber">
        {b.text}
      </p>
    );
  }
  return (
    <div className="max-w-xs rounded-md bg-paper px-3 py-2 text-ink shadow-md">
      {b.speaker ? (
        <p className="mb-1 font-sans text-[10px] font-semibold uppercase tracking-widest text-amber">
          {b.speaker}
        </p>
      ) : null}
      <p className="text-pretty font-sans text-sm leading-snug">{b.text}</p>
    </div>
  );
}

function PageArt({ page, study }: { page: ComicPage; study: boolean }) {
  const silent = Boolean(page.silent);
  return (
    <div className="flex flex-col gap-3">
      {page.panels.map((panel, i) => (
        <figure
          key={`${page.id}-${i}`}
          className="relative overflow-hidden rounded-md border border-line bg-silent"
        >
          <img
            src={panel.art}
            alt=""
            className={`w-full object-cover ${
              page.layout === "spread"
                ? "max-h-[78vh]"
                : page.layout === "splash"
                  ? "max-h-[62vh]"
                  : "max-h-[42vh]"
            }`}
            style={{ objectPosition: panel.position ?? "center" }}
          />
          {panel.balloons.length > 0 ? (
            <figcaption className={`flex flex-col gap-2 p-3 sm:p-4 ${silent ? "bg-silent" : "bg-bg"}`}>
              {panel.balloons
                .filter((b) => !(silent && b.kind === "sfx"))
                .map((b, j) => (
                  <BalloonView key={j} b={b} />
                ))}
            </figcaption>
          ) : null}
        </figure>
      ))}
      {study && page.gems && page.gems.length > 0 ? (
        <aside className="rounded-md border border-amber/40 bg-ink/60 px-3 py-3 sm:px-4">
          <p className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-amber">
            Study — hidden
          </p>
          <ul className="flex flex-col gap-2">
            {page.gems.map((g) => (
              <li
                key={g}
                className="font-display text-sm italic leading-snug text-paper/90"
              >
                {g}
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </div>
  );
}

export function ComicReader({
  issue,
  index,
  study,
}: {
  issue: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40;
  index: number;
  study: boolean;
}) {
  const navigate = useNavigate();
  const { meta, pages } = getIssue(issue);
  const last = pages.length - 1;
  const safe = Math.min(Math.max(index, 0), last);
  const page = pages[safe];
  const prev = safe > 0 ? safe - 1 : null;
  const next = safe < last ? safe + 1 : null;
  const g = study ? 1 : 0;

  const go = useCallback(
    (to: number | null, nextStudy = study) => {
      if (to === null) return;
      void navigate({
        to: "/read",
        search: { i: issue, p: to, g: nextStudy ? 1 : 0 },
      });
      window.scrollTo({ top: 0, behavior: "instant" });
    },
    [navigate, issue, study],
  );

  const toggleStudy = useCallback(() => {
    void navigate({
      to: "/read",
      search: { i: issue, p: safe, g: study ? 0 : 1 },
    });
  }, [navigate, issue, safe, study]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "g" || e.key === "G") {
        e.preventDefault();
        toggleStudy();
        return;
      }
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(next);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(prev);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, next, prev, toggleStudy]);

  return (
    <div className={`min-h-dvh ${page.silent ? "bg-silent" : "bg-bg"} text-fg`}>
      <header className="sticky top-0 z-10 flex items-center justify-between gap-2 border-b border-line bg-bg/90 px-3 py-2 backdrop-blur-md sm:px-5">
        <Link
          to="/"
          className="flex min-h-11 items-center gap-2 font-display text-lg tracking-wide text-gold"
        >
          <BookOpen className="size-4" />
          {meta.title}
        </Link>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleStudy}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-md border border-line px-2.5 font-sans text-[11px] uppercase tracking-[0.16em] text-muted"
            aria-pressed={study}
          >
            {study ? <Eye className="size-4 text-amber" /> : <EyeOff className="size-4" />}
            Study
          </button>
          <p className="hidden font-sans text-[11px] uppercase tracking-[0.2em] text-muted sm:block">
            {meta.issue} · p. {page.number}
          </p>
          <button
            type="button"
            aria-label="Previous page"
            disabled={prev === null}
            onClick={() => go(prev)}
            className="inline-flex size-11 items-center justify-center rounded-md border border-line text-fg disabled:opacity-30"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next page"
            disabled={next === null}
            onClick={() => go(next)}
            className="inline-flex size-11 items-center justify-center rounded-md bg-gold text-ink disabled:opacity-30"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-3 py-4 pb-28 sm:px-4 sm:py-6">
        <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-amber">
          {page.act}
          {page.silent ? "  ·  no sound" : ""}
        </p>
        <PageArt page={page} study={study} />

        <nav
          className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 border-t border-line bg-bg/95 px-3 py-2 backdrop-blur-md"
          style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
        >
          {prev !== null ? (
            <Link
              to="/read"
              search={{ i: issue, p: prev, g }}
              className="inline-flex min-h-11 min-w-11 items-center gap-1 rounded-md border border-line px-4 font-sans text-sm text-fg"
            >
              <ChevronLeft className="size-4" />
              Back
            </Link>
          ) : (
            <Link
              to="/"
              className="inline-flex min-h-11 items-center rounded-md border border-line px-4 font-sans text-sm text-muted"
            >
              Issues
            </Link>
          )}
          <span className="font-sans text-xs tabular-nums text-muted">
            {safe + 1} / {pages.length}
          </span>
          {next !== null ? (
            <Link
              to="/read"
              search={{ i: issue, p: next, g }}
              className="inline-flex min-h-11 min-w-11 items-center gap-1 rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              Continue
              <ChevronRight className="size-4" />
            </Link>
          ) : issue === 1 ? (
            <Link
              to="/read"
              search={{ i: 2, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              Issue #2
            </Link>
          ) : issue === 2 ? (
            <Link
              to="/read"
              search={{ i: 3, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              Issue #3
            </Link>
          ) : issue === 3 ? (
            <Link
              to="/read"
              search={{ i: 4, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              Issue #4
            </Link>
          ) : issue === 4 ? (
            <Link
              to="/read"
              search={{ i: 5, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              Issue #5
            </Link>
          ) : issue === 5 ? (
            <Link
              to="/read"
              search={{ i: 6, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              Issue #6
            </Link>
          ) : issue === 6 ? (
            <Link
              to="/read"
              search={{ i: 7, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              Issue #7
            </Link>
          ) : issue === 7 ? (
            <Link
              to="/read"
              search={{ i: 8, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              Issue #8
            </Link>
          ) : issue === 8 ? (
            <Link
              to="/read"
              search={{ i: 9, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              Issue #9
            </Link>
          ) : issue === 9 ? (
            <Link
              to="/read"
              search={{ i: 10, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              Issue #10
            </Link>
          ) : issue === 10 ? (
            <Link
              to="/read"
              search={{ i: 11, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              Issue #11
            </Link>
          ) : issue === 11 ? (
            <Link
              to="/read"
              search={{ i: 12, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              Issue #12
            </Link>
          ) : issue === 12 ? (
            <Link
              to="/read"
              search={{ i: 13, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              Issue #13
            </Link>
          ) : issue === 13 ? (
            <Link
              to="/read"
              search={{ i: 14, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              Season Two
            </Link>
          ) : issue === 14 ? (
            <Link
              to="/read"
              search={{ i: 15, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S2 · #2
            </Link>
          ) : issue === 15 ? (
            <Link
              to="/read"
              search={{ i: 16, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S2 · #3
            </Link>
          ) : issue === 16 ? (
            <Link
              to="/read"
              search={{ i: 17, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S2 · #4
            </Link>
          ) : issue === 17 ? (
            <Link
              to="/read"
              search={{ i: 18, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S2 · #5
            </Link>
          ) : issue === 18 ? (
            <Link
              to="/read"
              search={{ i: 19, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S2 · #6
            </Link>
          ) : issue === 19 ? (
            <Link
              to="/read"
              search={{ i: 20, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S2 · #7
            </Link>
          ) : issue === 20 ? (
            <Link
              to="/read"
              search={{ i: 21, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S2 · #8
            </Link>
          ) : issue === 21 ? (
            <Link
              to="/read"
              search={{ i: 22, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S2 · #9
            </Link>
          ) : issue === 22 ? (
            <Link
              to="/read"
              search={{ i: 23, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S2 · #10
            </Link>
          ) : issue === 23 ? (
            <Link
              to="/read"
              search={{ i: 24, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S2 · #11
            </Link>
          ) : issue === 24 ? (
            <Link
              to="/read"
              search={{ i: 25, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S2 · #12
            </Link>
          ) : issue === 25 ? (
            <Link
              to="/read"
              search={{ i: 26, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S2 · #13
            </Link>
          ) : issue === 26 ? (
            <Link
              to="/read"
              search={{ i: 27, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              Bridge
            </Link>
          ) : issue === 27 ? (
            <Link
              to="/read"
              search={{ i: 28, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S3 · #1
            </Link>
          ) : issue === 28 ? (
            <Link
              to="/read"
              search={{ i: 29, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S3 · #2
            </Link>
          ) : issue === 29 ? (
            <Link
              to="/read"
              search={{ i: 30, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S3 · #3
            </Link>
          ) : issue === 30 ? (
            <Link
              to="/read"
              search={{ i: 31, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S3 · #4
            </Link>
          ) : issue === 31 ? (
            <Link
              to="/read"
              search={{ i: 32, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S3 · #5
            </Link>
          ) : issue === 32 ? (
            <Link
              to="/read"
              search={{ i: 33, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S3 · #6
            </Link>
          ) : issue === 33 ? (
            <Link
              to="/read"
              search={{ i: 34, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S3 · #7
            </Link>
          ) : issue === 34 ? (
            <Link
              to="/read"
              search={{ i: 35, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S3 · #8
            </Link>
          ) : issue === 35 ? (
            <Link
              to="/read"
              search={{ i: 36, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S3 · #9
            </Link>
          ) : issue === 36 ? (
            <Link
              to="/read"
              search={{ i: 37, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S3 · #10
            </Link>
          ) : issue === 37 ? (
            <Link
              to="/read"
              search={{ i: 40, p: 0, g }}
              className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 font-sans text-sm font-medium text-ink"
            >
              S3 · #11
            </Link>
          ) : (
            <span className="font-display text-sm italic text-gold">Season Three</span>
          )}
        </nav>
      </main>
    </div>
  );
}
