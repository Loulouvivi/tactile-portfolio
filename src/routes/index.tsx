import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Marlow — Multimedia Designer" },
      {
        name: "description",
        content:
          "Portfolio of a multimedia designer working across identity, motion, print and spatial work for cultural and independent brands.",
      },
      { property: "og:title", content: "Studio Marlow — Multimedia Designer" },
      {
        property: "og:description",
        content: "Identity, motion, print and spatial work for cultural and independent brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects: Project[] = [
  {
    index: "01",
    title: "Riso Almanac",
    discipline: "Print / Editorial",
    year: "2026",
    blurb: "A quarterly risograph almanac of essays on making, printed in two inks on recycled stock.",
    image: project1,
    alt: "Risograph printed posters in ochre and black layered on warm paper",
  },
  {
    index: "02",
    title: "Nocturne Sessions",
    discipline: "Motion / Sound",
    year: "2025",
    blurb: "Title sequence and generative visuals for a late-night concert series broadcast live.",
    image: project2,
    alt: "Abstract ribbons of deep blue and sand in a grainy motion frame",
  },
  {
    index: "03",
    title: "Maison Évole",
    discipline: "Identity / Craft",
    year: "2025",
    blurb: "A blind-embossed identity for a paper mill, built around one drawn monogram and no colour.",
    image: project3,
    alt: "Blind embossed monogram on cream textured stationery",
  },
  {
    index: "04",
    title: "Room for Language",
    discipline: "Spatial / Type",
    year: "2024",
    blurb: "A wall-scale typographic installation for a museum wing on the history of reading.",
    image: project4,
    alt: "Large typographic wall installation lit by raking daylight in a concrete gallery",
  },
];

const services = [
  { label: "Brand identity", detail: "Marks, type systems, guidelines" },
  { label: "Motion", detail: "Titles, loops, broadcast packages" },
  { label: "Print", detail: "Books, editorial, packaging" },
  { label: "Spatial", detail: "Exhibitions, signage, installation" },
];

function Index() {
  return (
    <div className="paper min-h-screen">
      <header className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-6 sm:flex sm:justify-between sm:px-8">
        <a href="#top" className="min-w-0 truncate font-display text-xl tracking-tight">
          Studio Marlow
        </a>
        <nav className="flex shrink-0 items-center gap-5 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
          <a href="#work" className="transition-colors hover:text-foreground">
            Work
          </a>
          <a href="#studio" className="transition-colors hover:text-foreground">
            Studio
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8 sm:pb-32 sm:pt-20">
          <p className="animate-rise text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
            Multimedia designer — Copenhagen
          </p>
          <h1 className="animate-rise mt-8 font-display text-[clamp(3rem,13vw,10rem)] leading-[0.86] tracking-[-0.03em]">
            Design that
            <br />
            you can <em className="italic text-accent">feel</em>
          </h1>
          <div className="rule-line mt-12 grid gap-8 pt-6 sm:grid-cols-[1.1fr_1fr] sm:gap-16">
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              I work across identity, motion, print and space — building slow, material-minded
              systems for cultural institutions and independent makers.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Currently taking on two projects for winter 2026. Previously with Kontrapunkt and the
              Danish Design Museum.
            </p>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-36">
          <Reveal>
            <div className="rule-line grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 pt-5">
              <h2 className="min-w-0 font-display text-3xl tracking-tight sm:text-5xl">
                Selected work
              </h2>
              <span className="shrink-0 text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                Four of twelve
              </span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-24">
            {projects.map((p, i) => (
              <div key={p.title} className={i % 2 === 1 ? "sm:mt-24" : undefined}>
                <ProjectCard project={p} delay={(i % 2) * 120} />
              </div>
            ))}
          </div>
        </section>

        <section id="studio" className="bg-secondary/60">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-32">
            <div className="grid gap-12 sm:grid-cols-[1fr_1.1fr] sm:gap-20">
              <Reveal>
                <img
                  src={portrait}
                  alt="The designer seated at a paper-covered studio desk in daylight"
                  loading="lazy"
                  width={1000}
                  height={1250}
                  className="aspect-[4/5] w-full object-cover"
                />
              </Reveal>
              <Reveal delay={120}>
                <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-5xl">
                  Paper first, pixels second.
                </h2>
                <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                  Every project begins on a table — sketches, proofs, samples, things to hold. The
                  screen work follows once the physical logic is right, which keeps the digital side
                  quiet, sturdy and easy to live with.
                </p>
                <dl className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                  {services.map((s) => (
                    <div key={s.label} className="bg-background p-5">
                      <dt className="text-[0.7rem] uppercase tracking-[0.24em] text-accent">
                        {s.label}
                      </dt>
                      <dd className="mt-2 text-sm text-muted-foreground">{s.detail}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-36">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
              Say hello
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,9vw,7rem)] leading-[0.9] tracking-[-0.03em]">
              Let's make
              <br />
              something <em className="italic text-accent">solid</em>
            </h2>
            <a
              href="mailto:hello@studiomarlow.dk"
              className="mt-10 inline-block border-b border-foreground pb-1 text-lg transition-colors hover:border-accent hover:text-accent"
            >
              hello@studiomarlow.dk
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
        <div className="rule-line grid grid-cols-[minmax(0,1fr)_auto] gap-4 pt-5 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
          <span className="min-w-0 truncate">Studio Marlow — Copenhagen</span>
          <span className="shrink-0">© 2026</span>
        </div>
      </footer>
    </div>
  );
}
