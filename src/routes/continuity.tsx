import { createFileRoute, Link } from "@tanstack/react-router";
import { REPAIRS } from "@/lib/issue";

export const Route = createFileRoute("/continuity")({ component: Continuity });

function Continuity() {
  return (
    <main className="min-h-dvh bg-void px-5 py-8">
      <div className="mx-auto max-w-2xl">
        <Link
          to="/"
          className="font-sans text-[11px] font-medium tracking-[0.22em] text-mute uppercase"
        >
          SKYBLOOD
        </Link>
        <h1 className="mt-3 font-display text-4xl leading-none text-fog">
          Continuity repair
        </h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-mute">
          Pages 13, 24, 25, 30, and 31 were looping the same four images of the
          night: taking the photograph, arguing about the photograph, hearing
          the title, showing the shadow. Each loop stalled the issue. The
          rewrite gives every flagged page a single job and forbids the others
          from stealing it.
        </p>

        <ol className="mt-10 space-y-10">
          {REPAIRS.map((p) => (
            <li id={`p${p.n}`} key={p.n} className="scroll-mt-8">
              <div className="overflow-hidden rounded-lg border border-line bg-asphalt">
                <img
                  src={p.art}
                  alt={`Page ${p.n}`}
                  className="aspect-[16/9] w-full object-cover object-center"
                />
                <div className="p-5">
                  <p className="font-sans text-[11px] tracking-[0.2em] text-dim uppercase">
                    Page {p.n} · {p.movement}
                  </p>
                  <h2 className="mt-1 font-display text-2xl text-fog">
                    {p.repair?.uniqueJob}
                  </h2>
                  <dl className="mt-4 space-y-3 font-sans text-sm leading-relaxed">
                    <div>
                      <dt className="text-[11px] tracking-[0.16em] text-dim uppercase">
                        Was duplicating
                      </dt>
                      <dd className="mt-1 text-mute">{p.repair?.was}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] tracking-[0.16em] text-dim uppercase">
                        Now does
                      </dt>
                      <dd className="mt-1 text-fog">{p.repair?.now}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] tracking-[0.16em] text-dim uppercase">
                        Forbidden on this page
                      </dt>
                      <dd className="mt-1 text-mute">{p.repair?.kills}</dd>
                    </div>
                  </dl>
                  <Link
                    to="/read"
                    search={{ p: p.n }}
                    className="mt-5 inline-flex h-11 items-center rounded-md bg-fog px-4 font-sans text-sm font-semibold text-void"
                  >
                    Read page {p.n}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <section className="mt-12 border-t border-line pt-8 pb-16">
          <h2 className="font-display text-2xl text-fog">Chain of custody</h2>
          <ul className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-mute">
            <li>
              <span className="text-fog">13 invents the record.</span> Phone
              versus sky. Never again as a gesture.
            </li>
            <li>
              <span className="text-fog">16 is a different photograph</span> —
              Marcus shooting Elias, human head, moonward shadow.
            </li>
            <li>
              <span className="text-fog">21 is social disbelief</span> — live
              screen going soft while they talk, not the prints.
            </li>
            <li>
              <span className="text-fog">24 is forensic disagreement</span> —
              two objects that cannot both be true.
            </li>
            <li>
              <span className="text-fog">25 is attack</span> — copies lose
              different details. The night has an editor.
            </li>
            <li>
              <span className="text-fog">29 speaks the office once.</span>
            </li>
            <li>
              <span className="text-fog">30 misreads it as blessing</span> —
              no voice, no jackal.
            </li>
            <li>
              <span className="text-fog">31 leaks the guardian</span> as a
              visor shadow, one frame.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
