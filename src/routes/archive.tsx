import { createFileRoute, Link } from "@tanstack/react-router";
import kubrix01Asset from "@/assets/kubrix-01.jpg";
import kubrix02Asset from "@/assets/kubrix-02.jpg";
import kubrix03Asset from "@/assets/kubrix-03.jpg";
import kubrix04Asset from "@/assets/kubrix-04.jpg";
import kubrix05Asset from "@/assets/kubrix-05.jpg";
import kubrix06Asset from "@/assets/kubrix-06.jpg";

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "Louise Riedmann — Archive" },
      { name: "description", content: "Archive of styling, graphics and photography." },
    ],
  }),
  component: Archive,
});

function Archive() {
  return (
    <div className="min-h-screen">
      <div className="homepage-paper-sheet">
        <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <nav className="mb-12">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              ← Back
            </Link>
          </nav>

          <h1 className="mb-16 font-display text-6xl leading-[0.9] tracking-[-0.06em] sm:text-7xl">
            Archive
          </h1>

          <div className="space-y-24 sm:space-y-32">
            <section className="grid gap-8 sm:grid-cols-[0.72fr_1.28fr] sm:items-start">
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">01 — STYLING</h2>
              <div>
                <header className="mb-8 border-b border-foreground/15 pb-5">
                  <h3 className="text-[11px] uppercase tracking-[0.24em]">THE KUBRIX</h3>
                  <p className="mt-2 font-display text-xl italic leading-tight text-muted-foreground">
                    2022
                  </p>
                  <p className="mt-2 font-display text-xl italic leading-tight text-muted-foreground">
                    Stylist &amp; Art Director · Music group cover shoot
                  </p>
                </header>

                <div className="space-y-12 sm:space-y-20">
                  <div className="grid grid-cols-2 items-start gap-4 sm:grid-cols-12 sm:gap-6">
                    <ArchiveImage
                      src={kubrix01Asset}
                      alt="THE KUBRIX members in a soft-focus group portrait"
                      width={6000}
                      height={4000}
                      className="col-span-2 sm:col-span-8"
                    />
                    <ArchiveImage
                      src={kubrix02Asset}
                      alt="THE KUBRIX members posed together"
                      width={4000}
                      height={4000}
                      className="col-span-1 col-start-2 sm:col-span-4 sm:col-start-9 sm:mt-14"
                    />
                  </div>

                  <div className="grid grid-cols-2 items-start gap-4 sm:grid-cols-12 sm:gap-6">
                    <ArchiveImage
                      src={kubrix03Asset}
                      alt="THE KUBRIX group portrait against a light backdrop"
                      width={3936}
                      height={2624}
                      className="col-span-1 sm:col-span-5 sm:mt-10"
                    />
                    <ArchiveImage
                      src={kubrix04Asset}
                      alt="THE KUBRIX members gathered closely for the cover shoot"
                      width={5681}
                      height={3787}
                      className="col-span-1 sm:col-span-6 sm:col-start-7"
                    />
                  </div>

                  <div className="grid grid-cols-2 items-start gap-4 sm:grid-cols-12 sm:gap-6">
                    <ArchiveImage
                      src={kubrix05Asset}
                      alt="THE KUBRIX members lying together for a portrait"
                      width={2060}
                      height={3090}
                      className="col-span-1 sm:col-span-4"
                    />
                    <ArchiveImage
                      src={kubrix06Asset}
                      alt="Overhead portrait of THE KUBRIX arranged in a circle"
                      width={2060}
                      height={2060}
                      className="col-span-1 sm:col-span-3 sm:col-start-6 sm:mt-16"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-8 sm:grid-cols-[0.72fr_1.28fr] sm:items-start">
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">02 — GRAPHICS</h2>
              <div
                aria-hidden="true"
                className="aspect-[16/10] w-full border border-foreground/15"
              />
            </section>

            <section className="grid gap-8 sm:grid-cols-[0.72fr_1.28fr] sm:items-start">
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                03 — PHOTOGRAPHY
              </h2>
              <div
                aria-hidden="true"
                className="aspect-[4/5] w-full border border-foreground/15 sm:w-[72%]"
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function ArchiveImage({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}) {
  return (
    <figure className={className}>
      <img src={src} alt={alt} width={width} height={height} className="block h-auto w-full" />
    </figure>
  );
}