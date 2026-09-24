import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import arcLogoAsset from "@/assets/ARC studio logo green clear - chosen.png";
import arcWebVideoAsset from "@/assets/ARC-studio-web-compressed.mp4";
import arcStopmotionAsset from "@/assets/ARC_Studio_stopmotion_compressed.mp4";
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

const label = "text-[10px] uppercase tracking-[0.24em] text-muted-foreground";
const copy = "text-sm leading-[1.7] text-muted-foreground";
const caption = "mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground";

function ArcImage({
  src,
  alt,
  captionText,
  className = "",
  contain = false,
  eager = false,
}: {
  src: string;
  alt: string;
  captionText?: string;
  className?: string;
  contain?: boolean;
  eager?: boolean;
}) {
  return (
    <figure>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className={`block h-auto w-full ${contain ? "object-contain" : "object-cover"} ${className}`}
      />
      {captionText ? <figcaption className={caption}>{captionText}</figcaption> : null}
    </figure>
  );
}

function ArcVideo({
  src = arcWebVideoAsset,
  className = "",
}: {
  src?: string;
  className?: string;
}) {
  return (
    <video
      src={src}
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
      <CaseStudy project={project} hideHeader allowSticky>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:gap-16">
          <aside className="self-start lg:sticky lg:top-8">
            <div className="border-b border-foreground/15 pb-8">
              <p className={label}>02 / ARC Studio</p>
              <h1 className="mt-7 font-display text-6xl leading-[0.85] tracking-[-0.06em] sm:text-7xl">
                ARC <span className="text-[0.72em]">studio</span>
              </h1>
              <p className="mt-7 max-w-[25ch] text-[11px] uppercase leading-[1.8] tracking-[0.18em] text-muted-foreground">
                Branding · Visual identity · UX/UI · Web design
              </p>
              <p className="mt-6 font-display text-xl leading-tight">
                Original design with intent.
              </p>
            </div>

            <div className="pt-6 text-[11px] uppercase leading-[1.8] tracking-[0.16em] text-muted-foreground">
              <p>2026 · Group project</p>
              <div className="mt-8 border-t border-foreground/15 pt-4">
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
          </aside>

          <div className="min-w-0 space-y-24 sm:space-y-32">
            <section className="space-y-5">
              <p className={label}>01 — Opening visual</p>
              <ArcImage
                src={arcScreenshotAsset}
                alt="ARC Studio shoes image"
                captionText="Behind the scenes / visual reference"
                eager
                contain
                className="aspect-[1.25/1] sm:aspect-[1.4/1]"
              />
              <p className={`max-w-[42ch] ${copy}`}>
                A studio for aesthetically oriented brands within culture, fashion and creative
                industries. The visual story begins with the material world around the work.
              </p>
            </section>

            <section className="grid gap-8 sm:grid-cols-[0.7fr_1.3fr] sm:items-center">
              <div>
                <p className={label}>02 — The idea</p>
                <h2 className="mt-5 font-display text-4xl leading-[0.9] sm:text-6xl">
                  Strategy × aesthetics.
                </h2>
                <p className={`mt-6 ${copy}`}>
                  ARC brings strategic design and expressive creative practice together in one
                  coherent experience.
                </p>
                <p className="mt-6 font-display text-xl leading-tight">
                  Strategic aesthetics for contemporary brands.
                </p>
              </div>
              <img
                src={arcBrownSymbolAsset}
                alt="ARC symbol"
                loading="lazy"
                className="mx-auto w-[70%] object-contain sm:w-full"
              />
            </section>

            <section className="space-y-7">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className={label}>03 — The audience</p>
                  <h2 className="mt-5 font-display text-4xl leading-none sm:text-5xl">
                    For brands with something to say.
                  </h2>
                </div>
              </div>
              <ArcImage
                src={arcFlowersAsset}
                alt="ARC Studio visual research and tactile references"
                captionText="Visual research / a language for brands with something to say"
              />
              <div className="max-w-[45ch] border-l border-foreground/20 pl-5">
                <p className="font-display text-2xl">SOF</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Target audience persona
                  <br />
                  Creative decision-maker
                </p>
                <p className={`mt-2 ${copy}`}>
                  Aesthetically driven, values artistic quality, and chooses collaborators through
                  trust, aesthetic understanding and personal fit.
                </p>
              </div>
            </section>

            <section className="space-y-7">
              <div>
                <p className={label}>04 — The visual world</p>
                <h2 className="mt-5 font-display text-4xl leading-none sm:text-6xl">
                  Structure meets exploration.
                </h2>
              </div>
              <ArcImage
                src={arcBoardAsset}
                alt="ARC Studio visual world and reference board"
                className="aspect-[1.18/1]"
              />
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="text-[11px] uppercase leading-[1.8] tracking-[0.15em]">
                  <strong className="font-medium">Structure</strong>
                  <p className="mt-2 text-muted-foreground">
                    Clear hierarchy
                    <br />
                    Editorial layouts
                    <br />
                    Controlled typography
                  </p>
                </div>
                <div className="text-[11px] uppercase leading-[1.8] tracking-[0.15em]">
                  <strong className="font-medium">Exploration</strong>
                  <p className="mt-2 text-muted-foreground">
                    Collage
                    <br />
                    Stop-motion
                    <br />
                    Analogue references
                  </p>
                </div>
              </div>
              <ArcImage
                src={arcCouchAsset}
                alt="ARC Studio physical design process"
                captionText="The process stays visible"
              />
            </section>

            <section className="space-y-7">
              <div>
                <p className={label}>05 — The identity</p>
                <h2 className="mt-5 font-display text-4xl leading-none sm:text-6xl">
                  A system built around the ARC.
                </h2>
              </div>
              <ArcImage
                src={arcLogoAsset}
                alt="ARC Studio primary wordmark"
                captionText="WORDMARK / primary identity"
                contain
                eager
                className="bg-white"
              />
              <div className="grid grid-cols-2 gap-5">
                <ArcImage
                  src={arcBrownSymbolAsset}
                  alt="ARC Studio icon variation"
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
              <p className={`max-w-[48ch] ${copy}`}>
                The logo combines a primary wordmark with a graphic icon based on a stylised ARC
                form. Typography balances character and clarity, giving the identity a visual voice
                without losing readability.
                <br />
                <br />
                The arc bridges the gap between structure and exploration — a form that reflects the
                studio’s ability to connect ideas and turn them into something tangible.
              </p>
            </section>

            <section className="space-y-7">
              <div>
                <p className={label}>06 — From identity to digital</p>
                <h2 className="mt-5 font-display text-4xl leading-none sm:text-6xl">
                  The website became the brand experience.
                </h2>
              </div>
              <p className={`max-w-[48ch] ${copy}`}>
                The identity was translated directly into the digital experience rather than treated
                as a separate application.
              </p>
              <div className="grid gap-5 border-y border-foreground/15 py-5 text-[11px] uppercase tracking-[0.15em] sm:grid-cols-3">
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
            </section>

            <section className="space-y-7">
              <div>
                <p className={label}>07 — The website</p>
                <h2 className="mt-5 font-display text-4xl leading-none sm:text-6xl">
                  A first impression with movement.
                </h2>
              </div>
              <p className={`max-w-[48ch] ${copy}`}>
                Large-scale imagery, animation, typography and short information make the homepage
                less static than a conventional agency website.
              </p>
              <figure>
                <ArcVideo src={arcStopmotionAsset} className="aspect-video" />
                <figcaption className={caption}>ARC Studio — digital experience</figcaption>
              </figure>
            </section>

            <section className="space-y-8 border-t border-foreground/15 pt-8">
              <div>
                <p className={label}>08 — UX / testing</p>
                <h2 className="mt-5 font-display text-4xl leading-none sm:text-6xl">
                  Creative doesn’t mean unclear.
                </h2>
              </div>
              <div className="grid border-t border-foreground/15">
                {[
                  [
                    "01 — Clear hierarchy",
                    "The visual expression did not compete with the content.",
                  ],
                  [
                    "02 — Recognisable navigation",
                    "Users could move between collaboration, work and information.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="grid gap-3 border-b border-foreground/15 py-5 sm:grid-cols-[0.7fr_1.3fr]"
                  >
                    <p className="text-[11px] uppercase tracking-[0.14em]">{title}</p>
                    <p className={copy}>{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-7">
              <div>
                <p className={label}>09 — The result</p>
                <h2 className="mt-5 max-w-[22ch] font-display text-4xl leading-tight sm:text-5xl">
                  A digital identity as intentional as the work it represents.
                </h2>
              </div>
              <ArcVideo className="aspect-video" />
              <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.15em] text-muted-foreground sm:grid-cols-3">
                <span>Brand strategy</span>
                <span>Visual identity</span>
                <span>UX/UI</span>
                <span>Web design</span>
                <span>Visual storytelling</span>
              </div>
            </section>

            <section className="grid gap-8 border-t border-foreground/15 pt-8 sm:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className={label}>10 — Reflection</p>
                <h2 className="mt-5 max-w-[24ch] font-display text-3xl leading-tight sm:text-4xl">
                  A strong aesthetic needs a strong structure underneath it.
                </h2>
              </div>
              <div className={copy}>
                <p>
                  Working on ARC reinforced how closely visual expression and strategy need to work
                  together. The final experience depended on decisions that aren't immediately
                  visible — positioning, audience, hierarchy and navigation.
                </p>
                <p className="mt-8 font-display text-xl leading-tight text-foreground">
                  A design can feel clear to its creator and still need to be questioned by someone
                  seeing it for the first time.
                </p>
              </div>
            </section>
          </div>
        </div>
      </CaseStudy>
    );
  },
});
