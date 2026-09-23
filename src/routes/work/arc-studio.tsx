import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import arcLogoAsset from "@/assets/ARC studio logo green clear - chosen.png";
import arcWebVideoAsset from "@/assets/ARC-studio-web-compressed.mp4";
import arcScreenshotAsset from "@/assets/arc screenshot.png";
import arcBoardAsset from "@/assets/board.png";
import arcBrownSymbolAsset from "@/assets/brown arc symbol.png";
import arcFlowersAsset from "@/assets/flowers-pics.png";
import arcCouchAsset from "@/assets/pc-couch.jpg";
import arcColourSymbolsAsset from "@/assets/multicolour arc's symbol.png";

const project = {
  index: "02",
  title: "ARC studio",
  discipline: "Brand strategy · Visual identity · UX/UI · Web design",
  year: "2026 · Group project",
  blurb: "Original design with intent.",
  image: arcLogoAsset,
  video: arcWebVideoAsset,
  alt: "ARC Studio identity and digital experience",
  slug: "arc-studio",
} as const;

const sectionLabel = "text-[11px] uppercase tracking-[0.28em] text-muted-foreground";
const bodyCopy = "text-sm leading-[1.75] text-muted-foreground";
const caption = "mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground";

function ArcImage({
  src,
  alt,
  captionText,
  className = "",
  contain = false,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  captionText?: string;
  className?: string;
  contain?: boolean;
  loading?: "lazy" | "eager";
}) {
  return (
    <figure>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`block h-auto w-full ${contain ? "object-contain" : "object-cover"} ${className}`}
      />
      {captionText ? <figcaption className={caption}>{captionText}</figcaption> : null}
    </figure>
  );
}

function ArcWebVideo({ className = "" }: { className?: string }) {
  return (
    <video
      src={arcWebVideoAsset}
      autoPlay
      loop
      muted
      playsInline
      controls={false}
      preload="auto"
      aria-label="ARC Studio website screen recording"
      className={`block h-auto w-full object-contain ${className}`}
    />
  );
}

export const Route = createFileRoute("/work/arc-studio")({
  head: () => ({
    meta: [
      { title: `Louise Riedmann — ${project.title}` },
      { name: "description", content: project.blurb },
    ],
  }),
  component: function ArcStudio() {
    return (
      <CaseStudy project={project}>
        <div className="space-y-20 sm:space-y-32">
          <section className="grid gap-12 pt-2 sm:grid-cols-[0.7fr_1.3fr] sm:items-end">
            <div className="order-2 sm:order-1 sm:pb-10">
              <p className={sectionLabel}>01 — Intro / Hero</p>
              <p className="mt-7 font-display text-2xl leading-tight sm:text-3xl">
                Original design with intent.
              </p>
              <p className="mt-6 max-w-[28ch] text-[11px] uppercase leading-[1.9] tracking-[0.18em] text-muted-foreground">
                Brand strategy · Visual identity · UX/UI · Web design
              </p>
              <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                2026 · Group project
              </p>
              <div className="mt-10 border-t border-foreground/15 pt-4 text-[11px] uppercase leading-[1.8] tracking-[0.16em] text-muted-foreground">
                <p className="text-foreground">My contribution</p>
                <p className="mt-3">
                  Logo &amp; visual identity
                  <br />
                  Stop-motion video
                  <br />
                  Photography / recording
                </p>
              </div>
            </div>
            <ArcImage
              src={arcLogoAsset}
              alt="ARC Studio logo and identity composition"
              captionText="ARC Studio — opening visual"
              contain
              loading="eager"
              className="order-1 bg-white sm:order-2"
            />
          </section>

          <section className="relative grid gap-10 border-t border-foreground/15 pt-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <p className={sectionLabel}>02 — The idea</p>
              <h2 className="mt-6 font-display text-5xl leading-[0.9] sm:text-7xl">
                Strategy × aesthetics.
              </h2>
              <p className={`mt-8 max-w-[43ch] ${bodyCopy}`}>
                ARC Studio was developed as a design studio for aesthetically oriented brands within
                culture, fashion and creative industries. The ambition was to bring strategic design
                and expressive creative practice together in one coherent experience.
              </p>
              <p className="mt-8 font-display text-2xl leading-tight">
                Strategic aesthetics for contemporary brands.
              </p>
            </div>
            <div className="relative flex justify-end">
              <img
                src={arcBrownSymbolAsset}
                alt="ARC symbol"
                loading="lazy"
                className="w-[70%] max-w-[440px] object-contain"
              />
              <span className="absolute bottom-4 left-0 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                The ARC / a bridge between intention and expression
              </span>
            </div>
          </section>

          <section className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-start">
            <ArcImage
              src={arcFlowersAsset}
              alt="ARC Studio visual research and tactile references"
              captionText="Visual research / a language for brands with something to say"
            />
            <div className="md:pt-14">
              <p className={sectionLabel}>03 — The audience</p>
              <h2 className="mt-6 font-display text-4xl leading-none sm:text-5xl">
                For brands with something to say.
              </h2>
              <p className={`mt-7 ${bodyCopy}`}>
                ARC was designed for smaller, owner-led brands within culture, fashion and the
                creative industries, where visual identity plays an important role in how they are
                perceived.
              </p>
              <div className="mt-8 border-l border-foreground/20 pl-5">
                <p className="font-display text-2xl">Sof</p>
                <p className="mt-2 text-xs uppercase leading-[1.8] tracking-[0.12em] text-muted-foreground">
                  Creative decision-maker · aesthetically driven · values artistic quality · chooses
                  collaborators through trust and fit.
                </p>
              </div>
              <p className="mt-8 font-display text-xl leading-tight">
                The website needed to communicate more than services. It needed to communicate how
                ARC thinks.
              </p>
            </div>
          </section>

          <section>
            <div className="mb-8 grid gap-8 sm:grid-cols-[0.75fr_1.25fr] sm:items-end">
              <div>
                <p className={sectionLabel}>04 — The visual world</p>
                <h2 className="mt-6 font-display text-4xl leading-none sm:text-6xl">
                  Structure meets exploration.
                </h2>
              </div>
              <p className={`max-w-[48ch] ${bodyCopy}`}>
                The visual identity draws from editorial design, visual culture and creative
                processes. The work moves between clear hierarchy and tactile discovery.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-[1.4fr_0.6fr] sm:items-end">
              <ArcImage
                src={arcBoardAsset}
                alt="ARC Studio visual world and reference board"
                className="aspect-[1.26/1]"
              />
              <div className="space-y-8 sm:pb-12">
                <div className="grid grid-cols-2 gap-4 text-[11px] uppercase leading-[1.8] tracking-[0.15em]">
                  <p>
                    <strong className="font-medium">Structure</strong>
                    <span className="mt-2 block text-muted-foreground">
                      Clear hierarchy
                      <br />
                      Editorial layouts
                      <br />
                      Controlled typography
                    </span>
                  </p>
                  <p>
                    <strong className="font-medium">Exploration</strong>
                    <span className="mt-2 block text-muted-foreground">
                      Collage
                      <br />
                      Stop-motion
                      <br />
                      Analogue references
                    </span>
                  </p>
                </div>
                <ArcImage
                  src={arcCouchAsset}
                  alt="ARC Studio physical design process"
                  captionText="The process stays visible"
                />
              </div>
            </div>
          </section>

          <section>
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className={sectionLabel}>05 — The identity</p>
                <h2 className="mt-6 font-display text-5xl leading-[0.9] sm:text-7xl">
                  A system built around the ARC.
                </h2>
              </div>
              <p className="hidden max-w-[18ch] text-right text-[11px] uppercase leading-[1.8] tracking-[0.15em] text-muted-foreground sm:block">
                Wordmark / icon / colour system / expressive type
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-[1.1fr_0.9fr] sm:items-start">
              <ArcImage
                src={arcLogoAsset}
                alt="ARC Studio primary wordmark"
                captionText="WORDMARK / primary identity"
                contain
                className="bg-white"
              />
              <div className="grid grid-cols-2 gap-6">
                <ArcImage
                  src={arcBrownSymbolAsset}
                  alt="ARC Studio brown icon variation"
                  captionText="ICON"
                  contain
                  className="bg-white"
                />
                <ArcImage
                  src={arcColourSymbolsAsset}
                  alt="ARC Studio colour system"
                  captionText="COLOUR SYSTEM"
                  contain
                  className="bg-white"
                />
              </div>
            </div>
            <div className="mt-8 grid gap-8 border-t border-foreground/15 pt-5 sm:grid-cols-[0.5fr_1.5fr]">
              <p className="text-[11px] uppercase tracking-[0.16em]">
                Expressive type / editorial composition
              </p>
              <p className={bodyCopy}>
                The logo combines a primary wordmark with a graphic icon based on a stylised ARC
                form. Typography balances character and clarity, giving the identity a visual voice
                without losing readability.
              </p>
            </div>
          </section>

          <section className="grid gap-8 border-t border-foreground/15 pt-8 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <div>
              <p className={sectionLabel}>06 — From identity to digital</p>
              <h2 className="mt-6 font-display text-4xl leading-none sm:text-6xl">
                The website became the brand experience.
              </h2>
            </div>
            <div>
              <p className={`max-w-[52ch] ${bodyCopy}`}>
                The identity was translated directly into the digital experience rather than treated
                as a separate application.
              </p>
              <div className="mt-8 grid gap-5 border-t border-foreground/15 pt-5 text-[11px] uppercase tracking-[0.16em] sm:grid-cols-3">
                <p>
                  <strong className="block font-medium">Create with us</strong>
                  <span className="mt-2 block text-muted-foreground">How to work with ARC</span>
                </p>
                <p>
                  <strong className="block font-medium">Work of ARC</strong>
                  <span className="mt-2 block text-muted-foreground">Projects and cases</span>
                </p>
                <p>
                  <strong className="block font-medium">Inside ARC</strong>
                  <span className="mt-2 block text-muted-foreground">People and thinking</span>
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-8 grid gap-8 sm:grid-cols-[0.7fr_1.3fr] sm:items-end">
              <div>
                <p className={sectionLabel}>07 — The website</p>
                <h2 className="mt-6 font-display text-4xl leading-none sm:text-6xl">
                  A first impression with movement.
                </h2>
              </div>
              <p className={`max-w-[50ch] ${bodyCopy}`}>
                The homepage combines large-scale imagery, animation, typography and short
                information. The visual language is deliberately less static than a conventional
                agency website.
              </p>
            </div>
            <figure>
              <ArcWebVideo className="aspect-video" />
              <figcaption className={caption}>ARC Studio — digital experience</figcaption>
            </figure>
            <div className="mt-8 grid gap-6 sm:grid-cols-[1.35fr_0.65fr] sm:items-start">
              <ArcImage
                src={arcScreenshotAsset}
                alt="ARC Studio website screenshot"
                captionText="Website / structure becomes image"
              />
              <ArcImage
                src={arcFlowersAsset}
                alt="ARC Studio website detail and visual interaction"
                captionText="Detail / visual storytelling"
              />
            </div>
          </section>

          <section className="grid gap-10 border-t border-foreground/15 pt-8 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className={sectionLabel}>08 — UX / testing</p>
              <h2 className="mt-6 font-display text-4xl leading-none sm:text-6xl">
                Creative doesn’t mean unclear.
              </h2>
              <p className={`mt-7 max-w-[34ch] ${bodyCopy}`}>
                The visual expression could be experimental, but the underlying structure needed to
                remain easy to navigate.
              </p>
            </div>
            <div className="grid border-t border-foreground/15">
              {[
                [
                  "01 — Clear hierarchy",
                  "Information was structured so the visual expression did not compete with the content.",
                ],
                [
                  "02 — Recognisable navigation",
                  "Users could move between collaboration, work and information about the studio.",
                ],
                [
                  "03 — Project presentation",
                  "Cases communicate both the studio’s capabilities and its aesthetic position.",
                ],
                [
                  "04 — Clear contact paths",
                  "Users can move from discovering ARC to considering a collaboration.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="grid gap-3 border-b border-foreground/15 py-5 sm:grid-cols-[0.7fr_1.3fr]"
                >
                  <p className="text-[11px] uppercase tracking-[0.14em]">{title}</p>
                  <p className={bodyCopy}>{text}</p>
                </div>
              ))}
              <div className="mt-10 border-l border-foreground/25 pl-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Think Aloud / testing
                </p>
                <p className="mt-5 font-display text-3xl leading-tight">
                  Does the experience make sense to someone outside the process?
                </p>
                <p className={`mt-5 ${bodyCopy}`}>
                  The participant understood ARC as a multidisciplinary creative studio. One
                  concrete issue emerged during testing:
                </p>
                <p className="mt-6 font-display text-2xl leading-tight">
                  THE LOGO LACKED SUFFICIENT CONTRAST AGAINST THE BEIGE BACKGROUND.
                </p>
                <p className={`mt-5 ${bodyCopy}`}>
                  The finding gave us a concrete visual adjustment rather than a purely subjective
                  reaction to the design.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-8 grid gap-8 sm:grid-cols-[0.7fr_1.3fr] sm:items-end">
              <div>
                <p className={sectionLabel}>09 — The result</p>
                <h2 className="mt-6 font-display text-5xl leading-[0.9] sm:text-7xl">
                  A digital identity designed to feel as intentional as the work it represents.
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.15em] text-muted-foreground sm:grid-cols-3">
                <span>Brand strategy</span>
                <span>Visual identity</span>
                <span>UX/UI</span>
                <span>Web design</span>
                <span>Visual storytelling</span>
              </div>
            </div>
            <ArcWebVideo className="aspect-video" />
            <p className={`mt-7 max-w-[58ch] ${bodyCopy}`}>
              The result is a brand and digital platform where the strategic and visual sides of the
              studio are designed to work together.
            </p>
          </section>

          <section className="grid gap-10 border-t border-foreground/15 pt-8 md:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className={sectionLabel}>10 — Reflection</p>
              <h2 className="mt-6 font-display text-4xl leading-none sm:text-6xl">
                A strong aesthetic needs a strong structure underneath it.
              </h2>
            </div>
            <div className={`max-w-[56ch] ${bodyCopy}`}>
              <p>
                Working on ARC reinforced the relationship between visual expression and strategy.
              </p>
              <p className="mt-5">
                The project began from a very visual ambition, but the final experience depended on
                decisions that were not immediately visible: positioning, audience, hierarchy,
                navigation and testing.
              </p>
              <p className="mt-8 font-display text-xl leading-tight text-foreground">
                A design can feel clear to its creator and still need to be questioned by someone
                seeing it for the first time.
              </p>
            </div>
          </section>
        </div>
      </CaseStudy>
    );
  },
});
