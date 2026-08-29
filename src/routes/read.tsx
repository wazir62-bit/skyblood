import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { z } from "zod";
import { ComicPageView } from "@/components/comic-page";
import { SEASONS, getIssue } from "@/lib/catalog";
import { pagesFor } from "@/lib/issue";

const searchSchema = z.object({
  s: z.coerce.number().int().min(1).max(3).catch(1),
  i: z.coerce.number().int().min(1).max(13).catch(1),
  p: z.coerce.number().int().min(1).catch(1),
});

export const Route = createFileRoute("/read")({
  validateSearch: searchSchema,
  component: Read,
});

function Read() {
  const { s, i, p: rawP } = Route.useSearch();
  const navigate = Route.useNavigate();
  const startX = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [narrating, setNarrating] = useState(false);
  const [narrationMissing, setNarrationMissing] = useState(false);
  const issue = getIssue(s, i) ?? getIssue(1, 1)!;
  const pages = useMemo(() => pagesFor(issue.season, issue.number), [issue]);
  const p = Math.min(pages.length, Math.max(1, rawP));
  const page = pages[p - 1] ?? pages[0];
  const season = SEASONS[issue.season - 1];
  const narrationSrc = `/audio/s${issue.season}/i${String(issue.number).padStart(2, "0")}/p${String(page.n).padStart(2, "0")}.mp3`;

  const stopNarration = () => {
    audioRef.current?.pause();
    if (audioRef.current) audioRef.current.currentTime = 0;
    setNarrating(false);
  };

  const toggleNarration = async () => {
    const audio = audioRef.current;
    if (!audio || narrationMissing) return;
    if (!audio.paused) {
      audio.pause();
      setNarrating(false);
      return;
    }
    try {
      await audio.play();
      setNarrating(true);
    } catch {
      setNarrating(false);
    }
  };

  const go = (n: number) => {
    const next = Math.min(pages.length, Math.max(1, n));
    if (next === p) return;
    stopNarration();
    void navigate({ search: { s: issue.season, i: issue.number, p: next } });
  };

  const goIssue = (delta: number) => {
    let ns = issue.season;
    let ni = issue.number + delta;
    if (ni > 13) {
      if (ns === 3) return;
      ns = (ns + 1) as 1 | 2 | 3;
      ni = 1;
    }
    if (ni < 1) {
      if (ns === 1) return;
      ns = (ns - 1) as 1 | 2 | 3;
      ni = 13;
    }
    stopNarration();
    void navigate({ search: { s: ns, i: ni, p: 1 } });
  };

  useEffect(() => {
    setNarrationMissing(false);
    setNarrating(false);
  }, [narrationSrc]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        if (p >= pages.length) goIssue(1);
        else go(p + 1);
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        if (p <= 1) goIssue(-1);
        else go(p - 1);
      }
      if (e.key === "Home") go(1);
      if (e.key === "End") go(pages.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [p, pages.length, issue.season, issue.number]);

  return (
    <main className="flex min-h-dvh flex-col bg-void">
      <header className="flex items-center justify-between gap-3 px-4 py-3">
        <Link
          to="/"
          search={{ s: issue.season }}
          className="font-sans text-[11px] font-medium tracking-[0.22em] text-mute uppercase"
        >
          SKYBLOOD
        </Link>
        <p className="truncate font-display text-sm tracking-wide text-fog">
          {season?.title} · #{String(issue.number).padStart(2, "0")} · {issue.title}
        </p>
        {issue.fullComic ? (
          <Link
            to="/continuity"
            hash={`p${page.n}`}
            className="font-sans text-[11px] tracking-[0.16em] text-dim uppercase"
          >
            Repair
          </Link>
        ) : (
          <span className="font-sans text-[11px] tracking-[0.16em] text-dim uppercase">
            {issue.recovered ? "Recovered" : "Restored"}
          </span>
        )}
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
          if (Math.abs(dx) > 40) {
            if (dx < 0) {
              if (p >= pages.length) goIssue(1);
              else go(p + 1);
            } else if (p <= 1) goIssue(-1);
            else go(p - 1);
          }
        }}
      >
        <button
          type="button"
          aria-label="Previous page"
          className="absolute inset-y-0 left-0 z-20 w-[22%] cursor-w-resize bg-transparent"
          onClick={() => (p <= 1 ? goIssue(-1) : go(p - 1))}
        />
        <ComicPageView page={page} />
        <button
          type="button"
          aria-label="Next page"
          className="absolute inset-y-0 right-0 z-20 w-[22%] cursor-e-resize bg-transparent"
          onClick={() => (p >= pages.length ? goIssue(1) : go(p + 1))}
        />
      </div>

      <audio
        ref={audioRef}
        src={narrationSrc}
        preload="metadata"
        onPlay={() => setNarrating(true)}
        onPause={() => setNarrating(false)}
        onEnded={() => setNarrating(false)}
        onError={() => {
          setNarrationMissing(true);
          setNarrating(false);
        }}
      />

      <div className="px-4 pb-2">
        <button
          type="button"
          onClick={() => void toggleNarration()}
          disabled={narrationMissing}
          className="w-full rounded-md border border-line px-4 py-2 font-sans text-xs font-medium tracking-[0.14em] text-fog uppercase disabled:cursor-not-allowed disabled:opacity-40"
        >
          {narrationMissing ? "Narration coming soon" : narrating ? "Pause narration" : "Narrate page"}
        </button>
      </div>

      <nav className="flex items-center gap-3 px-4 pt-1 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <button
          type="button"
          onClick={() => (p <= 1 ? goIssue(-1) : go(p - 1))}
          className="h-11 rounded-md border border-line px-4 font-sans text-sm text-fog"
        >
          Back
        </button>
        <div className="min-w-0 flex-1">
          <p className="text-center font-sans text-[11px] tracking-[0.16em] text-dim uppercase">
            {page.movement}
          </p>
          <p className="text-center font-sans text-xs tabular-nums text-mute">
            {p} / {pages.length}
          </p>
        </div>
        <button
          type="button"
          onClick={() => (p >= pages.length ? goIssue(1) : go(p + 1))}
          className="h-11 rounded-md bg-fog px-4 font-sans text-sm font-semibold text-void"
        >
          Next
        </button>
      </nav>
    </main>
  );
}
