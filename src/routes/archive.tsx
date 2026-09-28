import { useCallback, useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import kubrix01Asset from "@/assets/kubrix-01.jpg";
import kubrix02Asset from "@/assets/kubrix-02.jpg";
import kubrix03Asset from "@/assets/kubrix-03.jpg";
import kubrix04Asset from "@/assets/kubrix-04.jpg";
import kubrix05Asset from "@/assets/kubrix-05.jpg";
import kubrix06Asset from "@/assets/kubrix-06.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const kubrixImages = [
  {
    src: kubrix01Asset,
    alt: "THE KUBRIX members in a soft-focus group portrait",
    width: 6000,
    height: 4000,
  },
  {
    src: kubrix02Asset,
    alt: "THE KUBRIX members posed together",
    width: 4000,
    height: 4000,
  },
  {
    src: kubrix03Asset,
    alt: "THE KUBRIX group portrait against a light backdrop",
    width: 3936,
    height: 2624,
  },
  {
    src: kubrix04Asset,
    alt: "THE KUBRIX members gathered closely for the cover shoot",
    width: 5681,
    height: 3787,
  },
  {
    src: kubrix05Asset,
    alt: "THE KUBRIX members lying together for a portrait",
    width: 2060,
    height: 3090,
  },
  {
    src: kubrix06Asset,
    alt: "Overhead portrait of THE KUBRIX arranged in a circle",
    width: 2060,
    height: 2060,
  },
] as const;

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

                <KubrixCarousel />
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

function KubrixCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSetApi = useCallback((carouselApi: CarouselApi) => {
    if (carouselApi) {
      setApi(carouselApi);
    }
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateIndex = () => setCurrentIndex(api.selectedScrollSnap());
    updateIndex();
    api.on("select", updateIndex);

    return () => {
      api.off("select", updateIndex);
    };
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={handleSetApi}
        opts={{ loop: true, duration: 25 }}
        aria-label="THE KUBRIX cover shoot images"
      >
        <CarouselContent className="ml-0">
          {kubrixImages.map((image, index) => (
            <CarouselItem
              key={image.src}
              className="pl-0"
              aria-label={`${String(index + 1).padStart(2, "0")} of ${String(kubrixImages.length).padStart(2, "0")}`}
            >
              <figure>
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="block h-auto w-full"
                />
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="ghost"
          aria-label="Previous image"
          className="left-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-background/70 text-foreground/75 shadow-none hover:bg-background/90 sm:left-4"
        />
        <CarouselNext
          variant="ghost"
          aria-label="Next image"
          className="right-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-background/70 text-foreground/75 shadow-none hover:bg-background/90 sm:right-4"
        />
      </Carousel>
      <p
        aria-live="polite"
        aria-atomic="true"
        className="mt-3 text-right text-[10px] tabular-nums tracking-[0.18em] text-muted-foreground"
      >
        {String(currentIndex + 1).padStart(2, "0")} / {String(kubrixImages.length).padStart(2, "0")}
      </p>
    </div>
  );
}