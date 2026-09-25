import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import glossierPosterAsset from "@/assets/glossier-glyptoteket.png";

const project = {
  index: "04",
  title: "Glossier × Glyptoteket",
  discipline: "Campaign Concept · Beauty · Art & Culture",
  year: "2025 · Campaign concept",
  blurb: "A collision between everyday beauty and ancient form.",
  image: glossierPosterAsset,
  alt: "Glossier × Glyptoteket campaign poster — classical statue holding Glossier products on a mauve ground",
  transparent: true,
  slug: "glossier-glyptoteket",
} as const;

export const Route = createFileRoute("/work/glossier-glyptoteket")({
  head: () => ({
    meta: [{ title: `Louise Riedmann — ${project.title}` }, { name: "description", content: project.blurb }],
  }),
  component: function Glossier() {
    return (
      <CaseStudy project={project} hideHeader allowSticky>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:gap-16">
          <aside className="self-start lg:sticky lg:top-8">
            <div className="border-b border-foreground/15 pb-8">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">04 / GLOSSIER × GLYPTOTEK</p>
              <h1 className="mt-7 max-w-[8ch] font-display text-6xl leading-[0.85] tracking-[-0.06em] sm:text-7xl">Glossier <span className="text-[0.62em]">×</span> Glyptoteket</h1>
              <p className="mt-7 max-w-[25ch] text-[11px] uppercase leading-[1.8] tracking-[0.18em] text-muted-foreground">Campaign concept · Beauty · Art &amp; culture</p>
              <p className="mt-6 font-display text-xl leading-tight">Softness, made monumental.</p>
            </div>
            <div className="pt-6 text-[11px] uppercase leading-[1.8] tracking-[0.16em] text-muted-foreground">
              <p>{project.year}</p>
              <div className="mt-8 border-t border-foreground/15 pt-4">
                <p className="text-foreground">My contribution</p>
                <p className="mt-3">Campaign concept<br />Art direction<br />Visual composition</p>
              </div>
            </div>
          </aside>

          <div className="min-w-0 space-y-24 sm:space-y-32">
            <section className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">01 — Opening visual</p>
              <figure>
                <img src={glossierPosterAsset} alt={project.alt} className="block h-auto w-full object-contain" />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Campaign poster / beauty in the museum</figcaption>
              </figure>
              <p className="max-w-[44ch] text-sm leading-[1.7] text-muted-foreground">What happens when a contemporary beauty ritual enters a room built for permanence? This campaign concept places Glossier’s familiar objects in conversation with the sculpture collection at Glyptoteket.</p>
            </section>

            <section className="grid gap-8 sm:grid-cols-[0.72fr_1.28fr] sm:items-start">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">02 — The proposition</p>
                <h2 className="mt-5 font-display text-4xl leading-[0.9] sm:text-6xl">Everyday products. Eternal gestures.</h2>
              </div>
              <div className="prose text-muted-foreground">
                <p>Glossier and Glyptoteket share an interest in the face, the body and the rituals that shape how we present ourselves. The concept uses that common ground to make beauty feel cultural rather than disposable.</p>
                <p>The contrast is intentional: polished product packaging against weathered stone, soft colour against the authority of the classical figure.</p>
              </div>
            </section>

            <section className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">03 — Art direction</p>
                <h2 className="mt-5 max-w-[17ch] font-display text-4xl leading-[0.92] sm:text-6xl">A new kind of beauty study.</h2>
              </div>
              <div className="grid gap-8 border-y border-foreground/15 py-7 sm:grid-cols-3">
                <div><p className="font-display text-2xl">01</p><p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Contrast</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Newness meets patina, without flattening either world.</p></div>
                <div><p className="font-display text-2xl">02</p><p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Scale</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Small objects become monumental through placement.</p></div>
                <div><p className="font-display text-2xl">03</p><p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Tone</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Playful, quiet and a little uncanny.</p></div>
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="prose lg:pr-8">
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">04 — The image system</p>
                <h3 className="mt-4 font-display text-3xl leading-tight">Beauty as an object of study.</h3>
                <p className="mt-5 text-muted-foreground">The visual system borrows from museum display: considered framing, a restrained palette and an almost ceremonial relationship between hand, face and object.</p>
                <p className="mt-4"><strong>Concept · research · art direction · image-making · typography</strong></p>
              </div>
              <figure>
                <img src={glossierPosterAsset} alt="Glossier products arranged with a classical sculpture" className="block h-auto w-full object-contain" />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Product as artefact / artefact as companion</figcaption>
              </figure>
            </section>

            <section className="border-t border-foreground/15 pt-8">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">05 — Reflection</p>
              <h3 className="mt-4 max-w-[18ch] font-display text-4xl leading-[0.95] sm:text-5xl">The museum became part of the ritual.</h3>
              <p className="mt-6 max-w-[52ch] text-sm leading-[1.7] text-muted-foreground">The campaign reframes both partners through their shared attention to surfaces, gesture and care. Glossier gains a sense of history; the museum becomes unexpectedly intimate and contemporary.</p>
            </section>
          </div>
        </div>
      </CaseStudy>
    );
  },
});
