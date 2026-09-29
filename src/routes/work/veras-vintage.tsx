import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import verasVintage01Asset from "@/assets/veras_vintage01.png";
import verasVintage02Asset from "@/assets/veras_vintage02.png";
import verasVintage03Asset from "@/assets/veras_vintage03.png";
import verasVintage04Asset from "@/assets/veras_vintage04.png";
import verasVintage05Asset from "@/assets/veras_vintage05.png";

const project = {
  index: "06",
  title: "Veras Vintage",
  discipline: "Illustration · UX/UI · Digital Experience · Secondhand Fashion",
  year: "Illustration project",
  blurb:
    "This project explores a series of hand-drawn illustrations created for a secondhand fashion website.",
  image: verasVintage01Asset,
  alt: "Veras Vintage illustration of a girl choosing clothes in front of a wardrobe",
  slug: "veras-vintage",
} as const;

const finalIllustrations = [
  {
    src: verasVintage01Asset,
    step: "01",
    title: "Find clothes you want to hand in",
    description: "A girl stands in front of a wardrobe while selecting clothes to hand in.",
    alt: "Veras Vintage illustration of a girl selecting clothes in front of a wardrobe",
  },
  {
    src: verasVintage02Asset,
    step: "02",
    title: "Register and pay",
    description: "A laptop interface shows the registration process, with hands interacting with the computer.",
    alt: "Veras Vintage illustration of hands using a laptop to register and pay",
  },
  {
    src: verasVintage03Asset,
    step: "03",
    title: "Hand in clothes and get points",
    description: "Hands communicate the physical act of handing in clothes and receiving points.",
    alt: "Veras Vintage illustration of hands handing in clothes and receiving points",
  },
  {
    src: verasVintage04Asset,
    step: "04",
    title: "Shop for points",
    description: "The same girl appears outside the Veras store, carrying shopping bags after using her points.",
    alt: "Veras Vintage illustration of a girl outside the store carrying shopping bags",
  },
] as const;

export const Route = createFileRoute("/work/veras-vintage")({
  head: () => ({
    meta: [
      { title: `Louise Riedmann — ${project.title}` },
      { name: "description", content: project.blurb },
    ],
  }),
  component: function VerasVintage() {
    return (
      <CaseStudy project={project} hideHeader allowSticky>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:gap-16">
          <aside className="self-start lg:sticky lg:top-8">
            <div className="border-b border-foreground/15 pb-8">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                06 / VERAS VINTAGE
              </p>
              <h1 className="mt-7 font-display text-6xl leading-[0.85] tracking-[-0.06em] sm:text-7xl">
                Veras Vintage
              </h1>
              <p className="mt-7 max-w-[28ch] text-[11px] uppercase leading-[1.8] tracking-[0.18em] text-muted-foreground">
                {project.discipline}
              </p>
              <p className="mt-6 font-display text-xl leading-tight">
                A playful illustrated journey through secondhand fashion.
              </p>
            </div>
            <div className="pt-6 text-[11px] uppercase leading-[1.8] tracking-[0.16em] text-muted-foreground">
              <p>{project.year}</p>
              <div className="mt-8 border-t border-foreground/15 pt-4">
                <p className="text-foreground">The project</p>
                <p className="mt-3">
                  Hand-drawn illustration
                  <br />
                  UX/UI storytelling
                  <br />
                  Digital experience
                </p>
              </div>
            </div>
          </aside>

          <div className="min-w-0 space-y-24 sm:space-y-32">
            <section className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                00 — Introduction / project overview
              </p>
              <figure>
                <img
                  src={verasVintage01Asset}
                  alt={project.alt}
                  className="block h-auto w-full object-contain"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Veras Vintage / illustrated user journey
                </figcaption>
              </figure>
              <p className="max-w-[52ch] text-sm leading-[1.7] text-muted-foreground">
                This project explores a series of hand-drawn illustrations created for a secondhand
                fashion website. The illustrations guide users from selecting and registering
                clothes to earning points and shopping for secondhand pieces.
              </p>
            </section>

            <section className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-[0.72fr_1.28fr] sm:items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    01 — Design Process
                  </p>
                  <h2 className="mt-5 font-display text-4xl leading-[0.9] sm:text-6xl">
                    Design Process — Sketching
                  </h2>
                </div>
                <p className="max-w-[38ch] text-sm leading-[1.7] text-muted-foreground">
                  I developed the illustrations through hand-drawn sketches, exploring characters,
                  gestures, objects, interfaces and different compositions before developing the
                  final illustrations.
                </p>
              </div>
              <figure>
                <img
                  src={verasVintage05Asset}
                  alt="Collage of original Veras Vintage hand-drawn sketches and visual development"
                  className="block h-auto w-full object-contain"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Characters, gestures, objects and compositions / original sketches
                </figcaption>
              </figure>
            </section>

            <section className="space-y-12">
              <div className="grid gap-8 sm:grid-cols-[0.72fr_1.28fr] sm:items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    02 — Final Illustrations
                  </p>
                  <h2 className="mt-5 font-display text-4xl leading-[0.9] sm:text-6xl">
                    One journey, four illustrated steps.
                  </h2>
                </div>
                <p className="max-w-[38ch] text-sm leading-[1.7] text-muted-foreground">
                  The recurring character and hand-drawn visual language connect each moment of the
                  Veras Vintage experience into one continuous story.
                </p>
              </div>

              <div className="space-y-16 sm:space-y-24">
                {finalIllustrations.map((illustration) => (
                  <figure key={illustration.step} className="space-y-4">
                    <img
                      src={illustration.src}
                      alt={illustration.alt}
                      className="block h-auto w-full object-contain"
                    />
                    <figcaption className="grid gap-2 sm:grid-cols-[0.25fr_0.75fr] sm:gap-6">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                        {illustration.step} / 04
                      </p>
                      <div>
                        <h3 className="font-display text-2xl leading-tight sm:text-3xl">
                          {illustration.title}
                        </h3>
                        <p className="mt-2 max-w-[42ch] text-sm leading-[1.7] text-muted-foreground">
                          {illustration.description}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </CaseStudy>
    );
  },
});