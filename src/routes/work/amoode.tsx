import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import mixMatchAsset from "@/assets/mix-match.png";
import mixMatchVideo from "@/assets/mix-and-match-loop.mov";
import amoodeFullWebVideo from "@/assets/Amoode full web.mov";
import moodboardAsset from "@/assets/amoode moodboard.png";
import visualWebProductsAsset from "@/assets/visual web products.png";
import styletileAsset from "@/assets/amoode styletile.png";
import wireframesAsset from "@/assets/amoode wireframes.png";
import logoAsset from "@/assets/amoode logo.png";

const project = {
  index: "01",
  title: "Amoode",
  discipline: "Digital brand experience · UX/UI · Concept · Communication",
  year: "2025 · Group project",
  blurb: "From brand to universe.",
  image: mixMatchAsset,
  alt: "Amoode Mix & Match visual",
  slug: "amoode",
} as const;

export const Route = createFileRoute("/work/amoode")({
  head: () => ({
    meta: [
      { title: `Louise Riedmann — ${project.title}` },
      { name: "description", content: project.blurb },
    ],
  }),
  component: function Amoode() {
    return (
      <CaseStudy project={project} hideHeader allowSticky>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:gap-16">
          <aside className="self-start lg:sticky lg:top-8">
            <div className="border-b border-foreground/15 pb-8">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                {project.index} / {project.title}
              </p>
              <h1 className="mt-7 font-display text-6xl leading-[0.85] tracking-[-0.06em] sm:text-7xl">
                {project.title}
              </h1>
              <p className="mt-7 max-w-[25ch] text-[11px] uppercase leading-[1.8] tracking-[0.18em] text-muted-foreground">
                {project.discipline}
              </p>
              <p className="mt-6 font-display text-xl leading-tight">{project.blurb}</p>
            </div>
            <div className="pt-6 text-[11px] uppercase leading-[1.8] tracking-[0.16em] text-muted-foreground">
              <p>{project.year}</p>
            </div>
          </aside>

          <div className="min-w-0 space-y-16 sm:space-y-24">
            <section className="pt-2">
              <div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    01 — INTRO
                  </p>
                  <p className="mt-5 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    In Amoode For…
                  </p>
                  <h1 className="mt-3 font-display text-3xl leading-[1.02] tracking-[-0.04em] sm:text-4xl">
                    From brand to universe.
                  </h1>
                  <p className="mt-6 max-w-[58ch] text-sm leading-relaxed text-muted-foreground">
                    Amoode is a Danish womenswear brand built around quality, longevity and
                    conscious consumption. The challenge was to create a stronger digital presence
                    that could communicate more of the brand’s creative personality — across
                    webshop, social media and the wider brand experience.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-2">
              <figure>
                <img
                  src={mixMatchAsset}
                  alt="Mix & Match visual"
                  className="block h-auto w-full object-contain"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Mix &amp; Match visual
                </figcaption>
              </figure>
            </section>

            <section className="pt-4">
              <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                    02 — THE CHALLENGE
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-tight">
                    How can Amoode become more than a clothing brand?
                  </h2>
                </div>

                <div className="prose text-muted-foreground">
                  <p>
                    Amoode already had strong qualities: a clear aesthetic, focus on quality and a
                    conscious approach to fashion.
                  </p>
                  <p>
                    But these qualities were not always communicated as one cohesive experience. The
                    project became about collecting and strengthening what was already there —
                    rather than creating an entirely new Amoode.
                  </p>
                  <p className="mt-4">
                    <strong>The goal:</strong>
                    <br />
                    Create a digital concept that makes Amoode’s DNA not only understood, but
                    experienced.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-8">
              <div className="space-y-8">
                <div className="prose">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                    03 — THE CONCEPT
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-tight">
                    We didn't invent a new Amoode. We amplified the one that was already there.
                  </h3>
                  <p className="mt-5 text-muted-foreground">
                    Research showed us that sustainability alone wasn't enough to create
                    differentiation. The brand also needed to communicate its quality, aesthetics,
                    personality and transparency more clearly.
                  </p>
                  <p className="mt-4">
                    <strong>IN AMOODE FOR…</strong> — A recurring concept designed to give the brand
                    a recognisable voice across touchpoints.
                  </p>
                </div>

                <figure className="w-full min-w-0">
                  <img
                    src={moodboardAsset}
                    alt="Amoode moodboard"
                    className="block h-auto w-full max-w-none object-contain"
                  />
                  <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    MOODBOARD
                  </figcaption>
                </figure>
              </div>
            </section>

            <section className="pt-6">
              <div className="space-y-8">
                <div className="prose">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                    04 — MIX &amp; MATCH
                  </p>
                  <h3 className="mt-4">MIX &amp; MATCH</h3>
                  <h4>Mix &amp; Match — to fit your mood.</h4>
                  <p>
                    Instead of pushing users directly towards a product, we created an experience
                    around <strong>styling and inspiration</strong>. The user moves through a series
                    of choices and receives styling suggestions based on their preferences.
                  </p>
                  <p>
                    The experience was designed around the idea that fewer pieces can create more
                    possibilities — supporting Amoode's focus on thoughtful consumption.
                  </p>
                  <p>
                    <strong>9 styling proposals</strong>
                    <br />
                    Everyday → festive
                    <br />
                    Individual pieces → complete looks
                  </p>
                </div>

                <figure className="w-full min-w-0">
                  <video
                    src={mixMatchVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    preload="auto"
                    className="block h-auto w-full max-w-none bg-transparent"
                  />
                  <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Mix &amp; Match visual
                  </figcaption>
                </figure>
              </div>
            </section>

            <section className="pt-6">
              <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                    05 — AUDIENCE / RESEARCH
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-tight">
                    Fewer, better choices.
                  </h3>
                  <p className="mt-4">
                    Our research led us to sharpen the existing audience rather than simply expand
                    it. We focused on women who value{" "}
                    <strong>quality, aesthetics, authenticity and meaning</strong> over trends and
                    quantity.
                  </p>
                </div>

                <div className="pl-0 md:border-l md:border-muted-foreground/20 md:pl-8">
                  <h5 className="font-display text-lg">Mette, 39</h5>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Communication consultant · Kolding · Quality-conscious · Aesthetically driven
                  </p>
                  <p className="mt-4">
                    She is looking for clothing that fits into an established life — pieces she can
                    connect with, style in different ways and keep for longer.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-8">
              <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                06 — PROCESS
              </div>
              <div className="grid gap-6 md:grid-cols-[1.25fr_0.75fr] md:items-end">
                <figure>
                  <img
                    src={wireframesAsset}
                    alt="Wireframes"
                    className="block h-auto w-full max-w-full"
                  />
                  <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Wireframes and prototype screens
                  </figcaption>
                </figure>
                <figure className="md:mb-10">
                  <img
                    src={styletileAsset}
                    alt="Amoode style tile"
                    className="block h-auto w-full max-w-full"
                  />
                  <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Style tile
                  </figcaption>
                </figure>
              </div>

              <div className="mt-8 max-w-[900px] prose">
                <h3 className="font-display text-3xl leading-tight">FROM IDEA TO EXPERIENCE</h3>
                <p>
                  <strong>
                    RESEARCH → DIRECTION → WIREFRAMES → STYLE TILE → PROTOTYPE → WEBSITE
                  </strong>
                </p>
                <p>
                  Turning the concept into a cohesive digital experience meant moving continuously
                  between strategy, visual direction and interaction.
                </p>
              </div>
            </section>

            <section className="pt-6">
              <div className="max-w-[720px]">
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  07 — BEYOND THE WEBSHOP
                </p>
                <h3 className="mt-4 font-display text-2xl leading-tight">BEYOND THE WEBSHOP</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>
                    <strong>STUDIO</strong> — Behind-the-scenes content showing the people, design
                    process and production.
                  </li>
                  <li>
                    <strong>BOARD</strong> — #AmoodeBoard turns the community into part of the
                    visual universe through shared styling and inspiration.
                  </li>
                  <li>
                    <strong>EVENTS</strong> — Workshops and physical experiences around making,
                    repairing and working with leftover materials.
                  </li>
                </ul>
              </div>
            </section>

            <section className="pt-8">
              <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                08 — THE RESULT
              </div>
              <figure>
                <img
                  src={visualWebProductsAsset}
                  alt="Visual web products"
                  className="block h-auto w-full max-w-full"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  VISUAL WEB PRODUCTS
                </figcaption>
              </figure>

              <div className="mt-8 max-w-[760px] prose">
                <h3 className="font-display text-3xl leading-tight">THE RESULT</h3>
                <p>
                  <strong>From brand to universe.</strong>
                </p>
                <p>
                  <strong>In Amoode For…</strong> — A recurring communication concept
                </p>
                <p>
                  <strong>Mix &amp; Match</strong> — An interactive styling experience
                </p>
                <p>
                  <strong>#AmoodeBoard</strong> — A community and inspiration layer
                </p>
              </div>

              <div className="mt-10 max-w-[1200px]">
                <video
                  src={amoodeFullWebVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  preload="auto"
                  className="block h-auto w-full bg-transparent"
                />
                <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  AMOODE — WEBSITE / FULL EXPERIENCE
                </div>
              </div>
            </section>

            <section className="pt-6">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div className="prose">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                    09 — MY CONTRIBUTION
                  </p>
                  <h3 className="mt-4">MY CONTRIBUTION</h3>
                  <p>
                    <strong>
                      Research · Concept development · Brand development · Visual design · Mix &amp;
                      Match
                    </strong>
                  </p>
                  <p>
                    I worked primarily with the research, concept and brand development, alongside
                    the visual direction of the Mix &amp; Match experience — including creating and
                    pairing the product combinations.
                  </p>
                </div>

                <div className="space-y-10 prose">
                  <div>
                    <h3>WHAT I LEARNED</h3>
                    <p>
                      <strong>The strongest design decision wasn't adding more.</strong> It was
                      recognising what was already there.
                    </p>
                    <p>
                      This project changed how I think about brand development. It also reinforced
                      the relationship between aesthetic direction and UX.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </CaseStudy>
    );
  },
});
