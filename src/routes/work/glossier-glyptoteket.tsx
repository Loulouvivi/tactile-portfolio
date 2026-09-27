import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import glossierHeroAsset from "@/assets/Glyptoteket x Glossier. 2020_Page_1.png";
import glossierStatueAsset from "@/assets/Glyptoteket x Glossier. 2020_Page_2.png";
import glossierCampaignOneAsset from "@/assets/Glyptoteket x Glossier. 2020_Page_3.png";
import glossierCampaignTwoAsset from "@/assets/Glyptoteket x Glossier. 2020_Page_4.png";
import glossierBuildingAsset from "@/assets/glossier-glyptoteket.png";
import glossierStreetAsset from "@/assets/Glyptoteket x Glossier. 2020_Page_6.png";
import glossierMuseumDigitalAsset from "@/assets/Glyptoteket x Glossier. 2020_Page_7.png";
import glossierBrandDigitalAsset from "@/assets/Glyptoteket x Glossier. 2020_Page_8.png";
import glossierSocialAsset from "@/assets/Glyptoteket x Glossier. 2020_Page_9.png";

const project = {
  index: "04",
  title: "Glossier × Glyptoteket",
  discipline: "Campaign concept · Art direction · Visual communication · Digital experience",
  year: "Independent project",
  blurb: "Contemporary beauty culture meets classical ideals of beauty.",
  image: glossierHeroAsset,
  alt: "Glossier × Glyptoteket campaign visual",
  transparent: true,
  slug: "glossier-glyptoteket",
} as const;

export const Route = createFileRoute("/work/glossier-glyptoteket")({
  head: () => ({
    meta: [
      { title: `Louise Riedmann — ${project.title}` },
      { name: "description", content: project.blurb },
    ],
  }),
  component: function Glossier() {
    return (
      <CaseStudy project={project} hideHeader allowSticky>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:gap-16">
          <aside className="self-start lg:sticky lg:top-8">
            <div className="pb-8">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                04 / CAMPAIGN CONCEPT
              </p>
              <h1 className="mt-7 max-w-[8ch] font-display text-6xl leading-[0.85] tracking-[-0.06em] sm:text-7xl">
                Glossier <span className="text-[0.62em]">×</span> Glyptoteket
              </h1>
              <p className="mt-6 font-display text-xl leading-tight">
                Contemporary beauty × classical art.
              </p>
            </div>
            <div className="pt-6 text-[11px] uppercase leading-[1.8] tracking-[0.16em] text-muted-foreground">
              <p>{project.discipline}</p>
              <p className="mt-4 border-t border-foreground/15 pt-4">{project.year}</p>
              <div className="mt-8 border-t border-foreground/15 pt-4">
                <p className="text-foreground">My contribution</p>
                <p className="mt-3">
                  Concept development
                  <br />
                  Visual direction
                  <br />
                  Campaign design
                  <br />
                  Digital &amp; social applications
                </p>
              </div>
            </div>
          </aside>

          <div className="min-w-0 space-y-24 sm:space-y-32">
            <section className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Glossier × Glyptoteket
              </p>
              <figure>
                <img
                  src={project.image}
                  alt={project.alt}
                  className="block h-auto w-full object-contain"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Campaign poster / Skin First. Makeup Second. For All, Always.
                </figcaption>
              </figure>
              <div className="max-w-[48ch] space-y-3 text-sm leading-[1.7] text-muted-foreground">
                <p>
                  What happens when contemporary beauty culture meets classical ideals of beauty?
                </p>
                <p>
                  A fictional collaboration between Glossier and Copenhagen’s Ny Carlsberg Glyptotek
                  brings the brand’s contemporary, inclusive approach into dialogue with the
                  museum’s classical sculptures.
                </p>
                <p>
                  Marble figures, soft colour and recognisable products create a playful contrast
                  between ancient ideals and everyday beauty.
                </p>
              </div>
            </section>

            <section className="grid gap-8 sm:grid-cols-[0.72fr_1.28fr] sm:items-start">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  01 — From research to concept
                </p>
                <h2 className="mt-5 font-display text-4xl leading-[0.9] sm:text-6xl">
                  A brand experience beyond the screen.
                </h2>
              </div>
              <div className="prose text-muted-foreground">
                <p>
                  Research combined a consumer survey, competitor analysis, website review, SWOT
                  analysis and an interview with a Glossier consumer.
                </p>
                <p>
                  It highlighted Glossier’s visual identity, social presence and community,
                  alongside opportunities around sustainability, transparency, physical experiences
                  and inclusion. This became the starting point for a cultural experience around the
                  brand.
                </p>
              </div>
            </section>

            <section className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  02 — The concept
                </p>
                <h2 className="mt-5 max-w-[17ch] font-display text-4xl leading-[0.92] sm:text-6xl">
                  Two ideas of beauty. One visual dialogue.
                </h2>
                <p className="mt-6 max-w-[48ch] text-sm leading-[1.7] text-muted-foreground">
                  Classical sculpture has long represented ideals of the human body; Glossier
                  approaches beauty as contemporary and everyday. Here, sculptures become models and
                  products become unexpected contemporary objects.
                </p>
              </div>
              <div className="grid gap-8 border-y border-foreground/15 py-7 sm:grid-cols-3">
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    “Skin First. Makeup Second. For All, Always.”
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    The familiar message meets the permanence of classical sculpture.
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    An everyday beauty statement, seen through a new cultural lens.
                  </p>
                </div>
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="prose lg:pr-8">
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  03 — Art direction
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight">
                  Ancient figures, contemporary beauty icons.
                </h3>
                <p className="mt-5 text-muted-foreground">
                  Sculptures are isolated against soft graphic backgrounds and paired with Glossier
                  products. Pink, muted green and neutral tones connect the two visual worlds while
                  keeping the collection at the centre.
                </p>
              </div>
              <figure>
                <img
                  src={glossierCampaignOneAsset}
                  alt="Glossier × Glyptoteket campaign poster"
                  className="block h-auto w-full object-contain"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Campaign poster / sculpture and product
                </figcaption>
              </figure>
              <figure>
                <img
                  src={glossierCampaignTwoAsset}
                  alt="Glossier × Glyptoteket campaign poster variation"
                  className="block h-auto w-full object-contain"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Campaign poster / visual variation
                </figcaption>
              </figure>
              <figure>
                <img
                  src={glossierStatueAsset}
                  alt="Classical statue with Glossier products"
                  className="block h-auto w-full object-contain"
                />
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Classical sculpture and contemporary beauty
                </figcaption>
              </figure>
            </section>

            <section className="grid gap-8 sm:grid-cols-[0.72fr_1.28fr] sm:items-start">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  04 — Campaign
                </p>
                <h2 className="mt-5 font-display text-4xl leading-[0.9] sm:text-6xl">
                  A special exhibition, imagined across the city.
                </h2>
              </div>
              <div className="prose text-muted-foreground">
                <p>
                  The concept developed into campaign posters for the museum and Copenhagen,
                  presenting the collaboration as a temporary special exhibition.
                </p>
                <p>
                  <strong>18.08.2020 — 01.11.2020</strong>
                </p>
              </div>
              <div className="not-prose space-y-6 sm:col-span-2">
                <figure>
                  <img
                    src={glossierBuildingAsset}
                    alt="Glossier × Glyptoteket campaign installed on the museum building"
                    className="block h-auto w-full object-contain"
                  />
                  <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Campaign on the Glyptoteket building
                  </figcaption>
                </figure>
                <div className="grid gap-6 sm:grid-cols-2 sm:items-start">
                  <figure>
                    <img
                      src={glossierMuseumDigitalAsset}
                      alt="Glyptoteket digital exhibition experience concept"
                      className="block h-auto w-full object-contain"
                    />
                    <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Glyptoteket / digital experience
                    </figcaption>
                  </figure>
                  <figure>
                    <img
                      src={glossierStreetAsset}
                      alt="Glossier × Glyptoteket campaign in a street display context"
                      className="block h-auto w-full object-contain"
                    />
                    <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Campaign in the city
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="prose lg:pr-8">
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  05 — Digital experience
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight">
                  From exhibition to digital touchpoints.
                </h3>
                <p className="mt-5 text-muted-foreground">
                  Website concepts introduced the collaboration as a special exhibition, while
                  Glossier’s digital environment and Instagram carried the campaign between both
                  communities.
                </p>
                <p className="mt-4">
                  <strong>
                    #glossierhasnogender
                    <br />
                    #glyptotekethasnogender
                  </strong>
                </p>
              </div>
              <div className="space-y-6 border-y border-foreground/15 py-5 text-[11px] uppercase tracking-[0.15em]">
                <figure>
                  <img
                    src={glossierSocialAsset}
                    alt="Glossier × Glyptoteket social media campaign"
                    className="block h-auto w-full object-contain"
                  />
                  <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Social campaign
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={glossierBrandDigitalAsset}
                    alt="Glossier digital campaign application"
                    className="block h-auto w-full object-contain"
                  />
                  <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Glossier / digital application
                  </figcaption>
                </figure>
              </div>
            </section>

            <section className="pt-8">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                06 — Outcome
              </p>
              <h3 className="mt-4 max-w-[18ch] font-display text-4xl leading-[0.95] sm:text-5xl">
                Contemporary beauty × classical art.
              </h3>
              <p className="mt-6 max-w-[52ch] text-sm leading-[1.7] text-muted-foreground">
                The campaign uses the contrast between beauty culture and classical art as its
                central creative device. The collection is more than a backdrop: its character
                shapes a playful, contemporary visual identity.
              </p>
            </section>
          </div>
        </div>
      </CaseStudy>
    );
  },
});
