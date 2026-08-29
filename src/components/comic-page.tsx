import type { ComicPage as ComicPageData } from "@/lib/issue";

const placeClass = {
  tl: "top-3 left-3 max-w-[78%]",
  tr: "top-3 right-3 max-w-[78%] ml-auto",
  bl: "bottom-20 left-3 max-w-[78%]",
  br: "bottom-20 right-3 max-w-[78%] ml-auto",
  mid: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[70%]",
} as const;

export function ComicPageView({ page }: { page: ComicPageData }) {
  return (
    <article className="relative mx-auto aspect-[2/3] w-full max-w-[560px] overflow-hidden rounded-lg bg-asphalt shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
      <img
        src={page.art}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: page.pos ?? "center" }}
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-void/25 via-transparent to-void/80" />

      {page.repair ? (
        <span className="absolute top-3 right-3 z-10 rounded-sm border border-line bg-void/80 px-2 py-1 font-sans text-[10px] font-medium tracking-[0.18em] text-mute uppercase">
          Unique beat
        </span>
      ) : null}

      {page.silent ? (
        <span className="absolute top-3 left-3 z-10 font-display text-lg tracking-widest text-fog/80">
          —
        </span>
      ) : null}

      {page.balloons?.map((b, i) => (
        <div
          key={i}
          className={`absolute z-10 ${placeClass[b.place ?? "bl"] as string}`}
        >
          <div className="rounded-md rounded-bl-xs bg-paper px-3 py-2 text-ink shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
            {b.speaker ? (
              <p className="mb-0.5 font-sans text-[10px] font-semibold tracking-[0.16em] text-dim uppercase">
                {b.speaker}
              </p>
            ) : null}
            <p className="font-display text-[1.05rem] leading-snug font-medium">
              {b.text}
            </p>
          </div>
        </div>
      ))}

      {page.caption ? (
        <footer className="absolute inset-x-0 bottom-0 z-10 p-3 pt-12">
          <p className="rounded-sm bg-void/82 px-3 py-2.5 font-sans text-[13px] leading-relaxed text-fog">
            {page.caption}
          </p>
        </footer>
      ) : null}
    </article>
  );
}
