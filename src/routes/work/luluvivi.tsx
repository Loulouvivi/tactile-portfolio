import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import luluviviPosterAsset from "@/assets/LV poster A2 final (1).png";
import luluviviCollageAsset from "@/assets/LuluVivi collage.png";
import luluviviLogoCollageAsset from "@/assets/LuluVivi photocollage logo.png";
import luluviviLineupAsset from "@/assets/LV line-up.png";
import luluviviShootAsset from "@/assets/LV shoot.png";
import luluviviVisualAsset from "@/assets/LV.png";
import luluviviSectionFiveShootAsset from "@/assets/lv shoot.jpeg";
import luluviviSectionFivePosterAsset from "@/assets/poster lv.png";
import luluviviInstagramAsset from "@/assets/IG LV (1).jpg";

const project = {
  index: "03",
  title: "LULUVIVI",
  discipline: "Vintage Fashion · Curation · Branding",
  year: "Independent project",
  blurb:
    "A curated second-hand fashion project shaped through styling, image-making and digital commerce.",
  image: luluviviPosterAsset,
  alt: "LULUVIVI A2 poster — model holding an oversized garment with layered LULUVIVI typography",
  slug: "luluvivi",
} as const;

export const Route = createFileRoute("/work/luluvivi")({
  head: () => ({
    meta: [
      { title: `Louise Riedmann — ${project.title}` },
      { name: "description", content: project.blurb },
    ],
  }),
  component: function Luluvivi() {
    return (
      <CaseStudy project={project} hideHeader allowSticky>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:gap-16">
          <aside className="self-start lg:sticky lg:top-8">
            <div className="border-b border-foreground/15 pb-8">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                03 / LULUVIVI
              </p>
              <h1 className="mt-7 font-display text-6xl leading-[0.85] tracking-[-0.06em] sm:text-7xl">
                LULUVIVI
              </h1>
              <p className="mt-7 max-w-[25ch] text-[11px] uppercase leading-[1.8] tracking-[0.18em] text-muted-foreground">
                Vintage fashion · Curation · Branding
              </p>
              <p className="mt-6 font-display text-xl leading-tight">
                A wardrobe with a past, styled for now.
              </p>
            </div>
            <div className="pt-6 text-[11px] uppercase leading-[1.8] tracking-[0.16em] text-muted-foreground">
              <p>{project.year}</p>
              <div className="mt-8 border-t border-foreground/15 pt-4">
                <p className="text-foreground">My contribution</p>
                <p className="mt-3">
                  Concept &amp; art direction
                  <br />
                  Curation &amp; styling
                  <br />
                  Poster design
                </p>
              </div>
            </div>
          </aside>

          <div className="min-w-0 space-y-24 sm:space-y-32">
            <section className="space-y-6">
              <figure>
                <img
                  src={luluviviPosterAsset}
                  alt={project.alt}
                  className="block h-auto w-full object-contain"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  LULUVIVI / editorial introduction
                </figcaption>
              </figure>
            </section>

            <section className="grid gap-8 sm:grid-cols-[0.72fr_1.28fr] sm:items-start">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  01 — The concept
                </p>
                <h2 className="mt-5 font-display text-4xl leading-[0.9] sm:text-6xl">
                  A world around the selection.
                </h2>
              </div>
              <div className="prose text-muted-foreground">
                <p>
                  LULUVIVI is an independent curated second-hand fashion project. I wanted to find
                  distinctive pieces, bring them together as a coherent wardrobe and present them
                  through styling and visual storytelling.
                </p>
                <p>
                  The project is less about listing individual garments and more about creating a
                  point of view people can enter.
                </p>
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <figure>
                <img
                  src={luluviviVisualAsset}
                  alt="LULUVIVI clothing selection and styling"
                  className="block h-auto w-full object-contain"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Selection in context / clothing rack
                </figcaption>
              </figure>
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  02 — Curation / selection
                </p>
                <h2 className="mt-5 max-w-[16ch] font-display text-4xl leading-[0.92] sm:text-6xl">
                  A wardrobe, not a catalogue.
                </h2>
                <p className="mt-6 max-w-[38ch] text-sm leading-[1.7] text-muted-foreground">
                  Garments, colours, textures and silhouettes are selected as an image and a
                  feeling. The styling work gives the pieces a relationship to one another.
                </p>
              </div>
            </section>

            <section className="space-y-8">
              <figure>
                <img
                  src={luluviviCollageAsset}
                  alt="LULUVIVI outfit and clothing collage"
                  className="block h-auto w-full object-contain"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Garments, detail and silhouette / curated selection
                </figcaption>
              </figure>
            </section>

            <section className="grid gap-8 sm:grid-cols-[0.7fr_1.3fr] sm:items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  03 — Visual identity / art direction
                </p>
                <h2 className="mt-5 font-display text-4xl leading-[0.92] sm:text-6xl">
                  A graphic signature for a tactile wardrobe.
                </h2>
                <p className="mt-6 max-w-[36ch] text-sm leading-[1.7] text-muted-foreground">
                  Vintage fashion references meet a contemporary, playful editorial feeling through
                  logo, typography, colour and image.
                </p>
              </div>
              <figure>
                <img
                  src={luluviviLogoCollageAsset}
                  alt="LULUVIVI logo and graphic language applied to fashion imagery"
                  className="block h-auto w-full object-contain"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Logo and graphic language / applied sparingly
                </figcaption>
              </figure>
            </section>

            <section className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  04 — Product
                </p>
                <h2 className="mt-5 max-w-[15ch] font-display text-4xl leading-[0.92] sm:text-6xl">
                  Selected garments, presented as a line-up.
                </h2>
              </div>
              <figure>
                <img
                  src={luluviviLineupAsset}
                  alt="LULUVIVI selected garments and models shown in a horizontal line-up"
                  className="block h-auto w-full object-contain"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Styling, silhouette and colour / selected garments
                </figcaption>
              </figure>
            </section>

            <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="prose lg:pr-8">
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  05 — Digital / shop experience
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight">
                  From physical selection to online shop.
                </h3>
                <p className="mt-5 text-muted-foreground">
                  The digital experience carries the same sense of selection into the shop: a
                  focused presentation of pieces, styling and the visual world around them.
                </p>
              </div>
              <figure>
                <img
                  src={luluviviSectionFiveShootAsset}
                  alt="LULUVIVI digital shop visual"
                  className="block h-auto w-full object-contain"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  LULUVIVI / digital shop material
                </figcaption>
              </figure>
              <figure>
                <img
                  src={luluviviSectionFivePosterAsset}
                  alt="LULUVIVI digital shop poster"
                  className="block h-auto w-full object-contain"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  LULUVIVI / digital shop material
                </figcaption>
              </figure>
            </section>

            <section className="grid gap-8 sm:grid-cols-[1.1fr_0.9fr] sm:items-start">
              <figure>
                <img
                  src={luluviviInstagramAsset}
                  alt="LULUVIVI Instagram content grid"
                  className="block h-auto w-full object-contain"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Instagram / content direction
                </figcaption>
              </figure>
              <div className="prose sm:pt-8">
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  06 — Styling + content
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight">
                  A curated wardrobe becomes a visual world.
                </h3>
                <p className="mt-5 text-muted-foreground">
                  Styling, location, colour and photography build continuity between the shop and
                  its social presence, keeping the pieces personal and recognisable.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                07 — The shoot
              </p>
              <figure>
                <img
                  src={luluviviShootAsset}
                  alt="LULUVIVI editorial shoot and styling image"
                  className="block h-auto max-h-[80vh] w-full object-contain object-left"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Art Direction / Styling / Photography / Content
                </figcaption>
              </figure>
            </section>

            <section className="border-t border-foreground/15 pt-8">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                08 — Outcome / reflection
              </p>
              <h3 className="mt-4 max-w-[18ch] font-display text-4xl leading-[0.95] sm:text-5xl">
                More than a second-hand shop.
              </h3>
              <p className="mt-6 max-w-[52ch] text-sm leading-[1.7] text-muted-foreground">
                LULUVIVI became a space for fashion curation, image-making, branding and digital
                commerce. The project brings together curation, art direction, styling, visual
                storytelling and e-commerce/social content in one coherent world.
              </p>
            </section>
          </div>
        </div>
      </CaseStudy>
    );
  },
});
