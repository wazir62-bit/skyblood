import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef } from "react";
import { z } from "zod";
import { ComicPageView } from "@/components/comic-page";
import { ISSUE, PAGES } from "@/lib/issue";

const searchSchema = z.object({
  p: z.coerce.number().int().min(1).max(PAGES.length).catch(1),
});

export const Route = createFileRoute("/read")({
  validateSearch: searchSchema,
  component: Read,
});

function Read() {
  const { p } = Route.useSearch();
  const navigate = Route.useNavigate();
  const startX = useRef<number | null>(null);
  const page = useMemo(() => PAGES[p - 1] ?? PAGES[0], [p]);

  const go = (n: number) => {
    const next = Math.min(PAGES.length, Math.max(1, n));
    if (next === p) return;
    void navigate({ search: { p: next } });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(p + 1);
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(p - 1);
      }
      if (e.key === "Home") go(1);
      if (e.key === "End") go(PAGES.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [p]);

  return (
    <main className="flex min-h-dvh flex-col bg-void">
      <header className="flex items-center justify-between gap-3 px-4 py-3">
        <Link
          to="/"
          className="font-sans text-[11px] font-medium tracking-[0.22em] text-mute uppercase"
        >
          {ISSUE.series}
        </Link>
        <p className="truncate font-display text-sm tracking-wide text-fog">
          #{ISSUE.number} · {ISSUE.title}
        </p>
        <Link
          to="/continuity"
          hash={`p${page.n}`}
          className="font-sans text-[11px] tracking-[0.16em] text-dim uppercase"
        >
          Repair
        </Link>
      </header>

      <div
        className="relative flex flex-1 items-center justify-center px-3 pb-3"
        onPointerDown={(e) => {
          startX.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (startX.current == null) return;
          const dx = e.clientX - startX.current;
          startX.current = null;
          if (Math.abs(dx) > 40) go(dx < 0 ? p + 1 : p - 1);
        }}
      >
        <button
          type="button"
          aria-label="Previous page"
          className="absolute inset-y-0 left-0 z-20 w-[22%] cursor-w-resize bg-transparent"
          onClick={() => go(p - 1)}
        />
        <ComicPageView page={page} />
        <button
          type="button"
          aria-label="Next page"
          className="absolute inset-y-0 right-0 z-20 w-[22%] cursor-e-resize bg-transparent"
          onClick={() => go(p + 1)}
        />
      </div>

      <nav className="flex items-center gap-3 px-4 pt-1 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <button
          type="button"
          onClick={() => go(p - 1)}
          disabled={p <= 1}
          className="h-11 rounded-md border border-line px-4 font-sans text-sm text-fog disabled:opacity-30"
        >
          Back
        </button>
        <div className="min-w-0 flex-1">
          <p className="text-center font-sans text-[11px] tracking-[0.16em] text-dim uppercase">
            {page.movement}
          </p>
          <p className="text-center font-sans text-xs tabular-nums text-mute">
            {p} / {PAGES.length}
          </p>
        </div>
        <button
          type="button"
          onClick={() => go(p + 1)}
          disabled={p >= PAGES.length}
          className="h-11 rounded-md bg-fog px-4 font-sans text-sm font-semibold text-void disabled:opacity-30"
        >
          Next
        </button>
      </nav>
    </main>
  );
}
