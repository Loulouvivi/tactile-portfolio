import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Reveal } from "@/components/Reveal";
import { ProjectImage, ProjectMeta, type Project } from "@/components/ProjectCard";
import risoPrint from "@/assets/project-1.jpg";
import processBts from "@/assets/IMG_7170_web.mp4?url";
import handsOn from "@/assets/hands-on.jpg";
import foldedPaper from "@/assets/folded-paper-background.png";
import amoodeMixmatchAsset from "@/assets/mix-match.png";
import luluviviPosterAsset from "@/assets/LV poster A2 final (1).png";
import glossierPosterAsset from "@/assets/glossier-glyptoteket.png";
import arcVideoWebmAsset from "@/assets/arc-studio-stopmotion-web.mp4.asset.json";
import arcVideoAsset from "@/assets/ARC_Studio_stopmotion_compressed.mp4";
import arcPosterAsset from "@/assets/arc-studio-poster.jpg.asset.json";
import photoboothPortraitAsset from "@/assets/louise-photobooth.png";
import louiseLogoAsset from "@/assets/Louise Riedmann icon.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Louise Riedmann — Multimedia Designer" },
      {
        name: "description",
        content:
          "Portfolio of a multimedia designer working across identity, motion, print and spatial work for cultural and independent brands.",
      },
      { property: "og:title", content: "Louise Riedmann — Multimedia Designer" },
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
    title: "Amoode",
    discipline: "Fashion · E-commerce · Digital Experience",
    year: "",
    blurb: "",
    image: amoodeMixmatchAsset,
    slug: "amoode",
    transparent: true,
    alt: "Amoode mix and match garment composition",
  },
  {
    index: "02",
    title: "ARC Studio",
    discipline: "Branding · Visual Identity · UX/UI",
    year: "",
    blurb: "",
    image: arcPosterAsset.url,
    video: arcVideoAsset,
    videoWebm: arcVideoWebmAsset.url,
    poster: arcPosterAsset.url,
    slug: "arc-studio",
    alt: "ARC Studio branding and visual identity stop-motion sequence",
  },
  {
    index: "03",
    title: "LULUVIVI",
    discipline: "Vintage Fashion · Curation · Branding",
    year: "",
    blurb: "",
    image: luluviviPosterAsset,
    slug: "luluvivi",
    alt: "LULUVIVI A2 poster — model holding an oversized garment with layered LULUVIVI typography",
  },
  {
    index: "04",
    title: "Glossier × Glyptoteket",
    discipline: "Campaign Concept · Beauty · Art & Culture",
    year: "",
    blurb: "",
    image: glossierPosterAsset,    alt: "Glossier × Glyptoteket campaign poster — classical statue holding Glossier products on a mauve ground",
    transparent: true,
    slug: "glossier-glyptoteket",
  },
];

function Index() {
  const [p1, p2, p3, p4] = projects as [Project, Project, Project, Project];

  return (
    <div className="min-h-screen">
      <header className="hero-header">
        <a href="#top" className="hero-brand font-display text-xl">
          <img
            src={louiseLogoAsset}
            alt="Louise Riedmann"
            width={4491}
            height={1093}
            className="inline-block h-auto w-[229px] align-middle sm:w-[291px]"
          />
        </a>
        <nav className="hero-nav text-[0.76rem] uppercase text-muted-foreground" aria-label="Primary navigation">
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

      <div className="homepage-paper-sheet">
        <img src={foldedPaper} alt="" aria-hidden="true" className="homepage-paper-texture" />

        <main id="top">

          <section className="hero-artboard" aria-labelledby="hero-title">

          <p className="hero-note hero-note-place">Multimedia designer — Copenhagen</p>

          <h1 id="hero-title" className="hero-title font-display">
            <span className="hero-word hero-word-design">Design with</span>
            <span className="hero-word hero-word-that">a point of</span>
            <em className="hero-word hero-word-feel text-accent">view.</em>
          </h1>

          <figure className="hero-print">
            <video
              src={processBts}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Process behind the scenes"
              width={1200}
              height={1500}
              className="hero-print-image"
            />
            <figcaption className="hero-print-caption">Process — BTS</figcaption>
          </figure>

          <p className="hero-copy hero-copy-primary">
            I'm drawn to the stories hidden in the details — a piece of clothing, a brand, an
            image, even the things most people overlook.
          </p>
          <p className="hero-copy hero-copy-secondary">
            I create concepts and visual worlds through design, styling, colour, typography and
            atmosphere, bringing together concept, aesthetics and storytelling.
          </p>
          </section>

          <section id="work" className="pb-24 sm:pb-36">
            <div className="relative px-5 py-14 sm:p-0">
            <div className="work-collage relative flex flex-col gap-16 sm:block sm:aspect-[1400/1920]">
              <Reveal className="collage-heading">
                <h2 className="font-display text-3xl tracking-tight sm:text-5xl">Selected work</h2>
              </Reveal>
              <ProjectImage
                project={p1}
                ratio="aspect-[33/20]"
                className="collage-p1-image"
              />
              <ProjectMeta
                project={p1}
                delay={120}
                className="collage-p1-meta"
              />

              <ProjectImage
                project={p2}
                ratio="aspect-[5/4]"
                className="collage-p2-image"
              />
              <ProjectMeta
                project={p2}
                delay={120}
                className="collage-p2-meta"
              />

              <ProjectImage
                project={p3}
                ratio="aspect-[1358/1920]"
                className="collage-p3-image"
              />
              <ProjectMeta
                project={p3}
                delay={120}
                className="collage-p3-meta"
              />

              <ProjectImage
                project={p4}
                ratio="aspect-[1265/1795]"
                className="collage-p4-image"
              />
              <ProjectMeta
                project={p4}
                delay={120}
                className="collage-p4-meta"
              />
            </div>
            <div className="mt-8 flex flex-col items-end text-right">
              <Link
                to="/archive"
                className="text-[0.78rem] uppercase tracking-[0.24em] text-accent transition-colors hover:text-foreground"
              >
                Archive →
              </Link>
              <p className="mt-2 font-display text-sm italic text-muted-foreground">
                More work, experiments &amp; visual studies.
              </p>
            </div>
            </div>
          </section>
        <section id="studio" className="studio-section" aria-labelledby="studio-title">
          <div className="studio-sequence">
            <Reveal className="studio-heading">
              <p className="studio-eyebrow">
                Fashion · Styling · Photography · Art direction · Visual identity · Graphic &amp;
                digital design
              </p>
              <h2 id="studio-title" className="font-display studio-statement">
                Fashion, image,
                <br />
                design.
              </h2>
            </Reveal>

            <Reveal delay={80} className="studio-image-object">
              <figure className="studio-print">
                <img
                  src={handsOn}
                  alt="Louise styling a lime-green garment on a fashion shoot"
                  loading="lazy"
                  width={1707}
                  height={2560}
                  className="studio-image"
                />
                <figcaption className="studio-image-caption">On set — working with clothing</figcaption>
              </figure>
            </Reveal>

            <div className="studio-entries">
              <Reveal delay={120} className="studio-entry studio-entry-process">
                <p className="studio-entry-head">
                  <span aria-hidden="true"></span> Process
                </p>
                <p className="studio-copy text-muted-foreground">
                  I look closely, collect references and work with clothing on set. Styling,
                  photography, composition, colour and typography help me find a direction before
                  I translate it into visual identity, graphic and digital design.
                </p>
              </Reveal>

              <Reveal delay={160} className="studio-entry studio-entry-materials">
                <p className="studio-entry-head">
                  <span aria-hidden="true"></span> Materials
                </p>
                <p className="studio-copy text-muted-foreground">
                  Clothing, texture, colour, images, type and objects all find their way into the
                  work. I return to physical references throughout, letting what I have seen and
                  handled shape what appears on screen.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="about-sequence">
            <div className="about-marker">
              <p id="about-title" className="about-eyebrow">
                <span aria-hidden="true"></span> About
              </p>
            </div>

            <div className="about-introduction-object">
              <p className="about-introduction font-display">
                Louise Riedmann is a multimedia designer based in Copenhagen, working across
                fashion, visual identity, graphic design and art direction.
              </p>
            </div>

            <div className="about-portrait-object">
              <figure className="about-portrait">
                <img
                  src={photoboothPortraitAsset}
                  alt="Black-and-white photobooth portrait of Louise Riedmann"
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="about-portrait-image"
                />
              </figure>
              <div className="about-meta">
                <p>Copenhagen / 2026</p>
              </div>
            </div>

            <div className="about-running-line">
              <p>
                Louise Riedmann — Copenhagen — Multimedia Design — Fashion — Image — Graphic
                Design — Art Direction
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-sequence">
            <Reveal className="contact-marker">
              <p className="contact-eyebrow">
                <span aria-hidden="true"></span> Contact
              </p>
            </Reveal>

            <Reveal delay={80} className="contact-statement-object">
              <h2 id="contact-title" className="font-display contact-statement">
                Have something
                <br />
                <em className="italic text-accent">in mind?</em>
              </h2>
            </Reveal>

            <Reveal delay={140} className="contact-email-object">
              <p className="contact-note">
                Open to new projects &amp; collaborations.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="contact-email font-display">
                    lou.riedmann@gmail.com
                  </button>
                </DialogTrigger>
                <DialogContent
                  className="contact-dialog-content"
                  overlayClassName="contact-dialog-overlay"
                >
                  <DialogTitle className="contact-dialog-address">
                    lou.riedmann@gmail.com
                  </DialogTitle>
                  <DialogClose asChild>
                    <a className="contact-dialog-open" href="mailto:lou.riedmann@gmail.com">
                      Open email
                    </a>
                  </DialogClose>
                </DialogContent>
              </Dialog>
            </Reveal>
          </div>
        </section>
        </main>

        <footer className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
          <div className="rule-line grid grid-cols-[minmax(0,1fr)_auto] gap-4 pt-5 text-[0.76rem] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="min-w-0 truncate">Louise Riedmann — Copenhagen</span>
            <span className="shrink-0">© 2026</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
