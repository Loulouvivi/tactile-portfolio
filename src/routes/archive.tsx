import { useCallback, useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import kubrix01Asset from "@/assets/kubrix-01.jpg";
import kubrix02Asset from "@/assets/kubrix-02.jpg";
import kubrix03Asset from "@/assets/kubrix-03.jpg";
import kubrix04Asset from "@/assets/kubrix-04.jpg";
import kubrix05Asset from "@/assets/kubrix-05.jpg";
import kubrix06Asset from "@/assets/kubrix-06.jpg";
import vousDecidezVideo from "@/assets/stills vous décidez_video.mp4";
import beautyShoot01Asset from "@/assets/beauty-shoot_01.JPG";
import beautyShoot02Asset from "@/assets/beauty-shoot_02.jpg";
import beautyShoot03Asset from "@/assets/beauty-shoot_03.jpg";
import beautyShoot04Asset from "@/assets/beauty-shoot_04.jpg";
import beautyShoot05Asset from "@/assets/bbeauty-shoot_05.jpg";
import beautyShoot06Asset from "@/assets/beauty-shoot_06.jpg";
import beautyShoot07Asset from "@/assets/beauty-shoot_07.jpg";
import myOwnMuse01Asset from "@/assets/my_own_muse_01.png";
import myOwnMuse02Asset from "@/assets/my_own_muse_02.png";
import myOwnMuse03Asset from "@/assets/my_own_muse_03.png";
import myOwnMuse04Asset from "@/assets/my_own_muse_04.png";
import myOwnMuse05Asset from "@/assets/my_own_muse_05.png";
import myOwnMuse06Asset from "@/assets/my_own_muse_06.png";
import myOwnMuse07Asset from "@/assets/my_own_muse_07.png";
import portraitsAmaliesBabyAsset from "@/assets/portraits-Amalies baby.png";
import portraitsBertelVigfusAsset from "@/assets/portraits-Bertel, Vigfus.jpg";
import portraitsCalebAsset from "@/assets/portraits-Caleb.png";
import portraitsDaisyPosterAsset from "@/assets/portraits-Daisy poster.png";
import portraitsDrunkInFinlandAsset from "@/assets/portraits-Drunk in Finland.png";
import portraitsJosefineOliverAsset from "@/assets/portraits-Josefine + Oliver.png";
import portraitsLineartMollyAsset from "@/assets/portraits-Lineart Molly .png";
import portraitsNiall25Asset from "@/assets/portraits-Niall 25.png";
import portraitsNiniYogaAsset from "@/assets/portraits-Nini yoga.png";
import portraitsThinkAsset from "@/assets/portraits-Think.png";
import portraitsTildeAsset from "@/assets/portraits-Tilde.png";
import portraitsUncookedWomenAsset from "@/assets/portraits-Uncooked women.png";
import portraitsCoupleAsset from "@/assets/portraits-couple.png";
import portraitsHolidayModeAsset from "@/assets/portraits-holiday mode.png";
import portraitsLesParentsAnniversaryAsset from "@/assets/portraits-les parents - anniversary.png";
import portraitsMnKissPosterAsset from "@/assets/portraits-m+n kiss poster a3.png";
import luluPrintFinalAsset from "@/assets/lulu-print_01.jpg";
import luluPrintDevelopmentAsset from "@/assets/lulu-print_02.png";
import luluPrintGarmentAsset from "@/assets/lulu-print_03.png";
import verasVintage01Asset from "@/assets/veras_vintage01.png";
import verasVintage02Asset from "@/assets/veras_vintage02.png";
import verasVintage03Asset from "@/assets/veras_vintage03.png";
import verasVintage04Asset from "@/assets/veras_vintage04.png";
import verasVintage05Asset from "@/assets/veras_vintage05.png";
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

const beautyShootImages = [
  {
    src: beautyShoot01Asset,
    alt: "Beauty shoot portrait",
    width: 8272,
    height: 6200,
  },
  {
    src: beautyShoot02Asset,
    alt: "Beauty shoot portrait",
    width: 6200,
    height: 8272,
  },
  {
    src: beautyShoot03Asset,
    alt: "Beauty shoot portrait",
    width: 2448,
    height: 3264,
  },
  {
    src: beautyShoot04Asset,
    alt: "Beauty shoot portrait",
    width: 9300,
    height: 6200,
  },
  {
    src: beautyShoot05Asset,
    alt: "Beauty shoot portrait",
    width: 8272,
    height: 6200,
  },
  {
    src: beautyShoot06Asset,
    alt: "Beauty shoot portrait",
    width: 6200,
    height: 8272,
  },
  {
    src: beautyShoot07Asset,
    alt: "Beauty shoot portrait",
    width: 8272,
    height: 5515,
  },
] as const;

const myOwnMuseImages = [
  { src: myOwnMuse01Asset, alt: "My Own Muse line art", width: 2880, height: 2186 },
  { src: myOwnMuse02Asset, alt: "My Own Muse line art", width: 3369, height: 2373 },
  { src: myOwnMuse03Asset, alt: "My Own Muse line art", width: 3423, height: 2297 },
  { src: myOwnMuse04Asset, alt: "My Own Muse line art", width: 3242, height: 2373 },
  { src: myOwnMuse05Asset, alt: "My Own Muse line art", width: 3423, height: 2356 },
  { src: myOwnMuse06Asset, alt: "My Own Muse line art", width: 3424, height: 2338 },
  { src: myOwnMuse07Asset, alt: "My Own Muse line art", width: 3305, height: 2337 },
] as const;

const lineArtPortraitImages = [
  {
    src: portraitsAmaliesBabyAsset,
    alt: "Line art portrait of Amalies baby",
    width: 2874,
    height: 2098,
  },
  {
    src: portraitsBertelVigfusAsset,
    alt: "Line art portrait of Bertel and Vigfus",
    width: 3252,
    height: 2607,
  },
  { src: portraitsCalebAsset, alt: "Line art portrait of Caleb", width: 2725, height: 2793 },
  {
    src: portraitsDaisyPosterAsset,
    alt: "Daisy line art portrait poster",
    width: 3183,
    height: 2624,
  },
  {
    src: portraitsDrunkInFinlandAsset,
    alt: "Line art portrait titled Drunk in Finland",
    width: 2204,
    height: 3414,
  },
  {
    src: portraitsJosefineOliverAsset,
    alt: "Line art portrait of Josefine and Oliver",
    width: 2150,
    height: 2752,
  },
  { src: portraitsLineartMollyAsset, alt: "Line art portrait of Molly", width: 1191, height: 842 },
  {
    src: portraitsNiall25Asset,
    alt: "Line art portrait for Niall's 25th birthday",
    width: 2188,
    height: 3130,
  },
  {
    src: portraitsNiniYogaAsset,
    alt: "Line art portrait of Nini doing yoga",
    width: 1813,
    height: 2149,
  },
  {
    src: portraitsThinkAsset,
    alt: "Line art illustration titled Think",
    width: 1332,
    height: 2256,
  },
  { src: portraitsTildeAsset, alt: "Line art portrait of Tilde", width: 895, height: 2355 },
  {
    src: portraitsUncookedWomenAsset,
    alt: "Line art portrait titled Uncooked women",
    width: 2298,
    height: 2421,
  },
  { src: portraitsCoupleAsset, alt: "Line art portrait of a couple", width: 1306, height: 3228 },
  {
    src: portraitsHolidayModeAsset,
    alt: "Line art illustration titled Holiday mode",
    width: 2617,
    height: 2681,
  },
  {
    src: portraitsLesParentsAnniversaryAsset,
    alt: "Line art portrait for an anniversary",
    width: 2093,
    height: 2538,
  },
  {
    src: portraitsMnKissPosterAsset,
    alt: "Line art portrait kiss poster",
    width: 2992,
    height: 3630,
  },
] as const;

const luluPrintImages = [
  {
    src: luluPrintDevelopmentAsset,
    alt: "Initial hand-drawn studies and sketches for the Lulu textile print",
    width: 2025,
    height: 1439,
  },
  {
    src: luluPrintFinalAsset,
    alt: "Finished colourful Lulu print developed for Maxjenny S/S17",
    width: 8858,
    height: 8858,
  },
  {
    src: luluPrintGarmentAsset,
    alt: "Finished Lulu print applied to a Maxjenny sports jacket",
    width: 2880,
    height: 1800,
  },
] as const;

const verasVintageImages = [
  {
    src: verasVintage05Asset,
    alt: "Collage of original Veras Vintage hand-drawn sketches and visual development",
    title: "Design Process — Sketching",
    description:
      "I developed the illustrations through hand-drawn sketches, exploring characters, gestures, objects, interfaces and different compositions before developing the final illustrations.",
  },
  {
    src: verasVintage01Asset,
    alt: "Veras Vintage illustration of a girl selecting clothes in front of a wardrobe",
    title: "Find clothes you want to hand in",
    description: "A girl stands in front of a wardrobe while selecting clothes to hand in.",
  },
  {
    src: verasVintage02Asset,
    alt: "Veras Vintage illustration of hands using a laptop to register and pay",
    title: "Register and pay",
    description: "A laptop interface shows the registration process, with hands interacting with the computer.",
  },
  {
    src: verasVintage03Asset,
    alt: "Veras Vintage illustration of hands handing in clothes and receiving points",
    title: "Hand in clothes and get points",
    description: "Hands communicate the physical act of handing in clothes and receiving points.",
  },
  {
    src: verasVintage04Asset,
    alt: "Veras Vintage illustration of a girl outside the store carrying shopping bags",
    title: "Shop for points",
    description: "The same girl appears outside the Veras store, carrying shopping bags after using her points.",
  },
] as const;

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "Louise Riedmann — Archive" },
      { name: "description", content: "Archive of styling, illustrations and photography." },
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
              <div className="space-y-16 sm:space-y-24">
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

                <div>
                  <header className="mb-8 border-b border-foreground/15 pb-5">
                    <h3 className="text-[11px] uppercase tracking-[0.24em]">VOUS DÉCIDEZ</h3>
                    <p className="mt-2 font-display text-xl italic leading-tight text-muted-foreground">
                      2022
                    </p>
                    <p className="mt-2 font-display text-xl italic leading-tight text-muted-foreground">
                      Stylist · Campaign video
                    </p>
                  </header>

                  <video
                    src={vousDecidezVideo}
                    aria-label="VOUS DÉCIDEZ campaign video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="block h-auto w-full"
                  />
                </div>

                <div>
                  <header className="mb-8 border-b border-foreground/15 pb-5">
                    <h3 className="text-[11px] uppercase tracking-[0.24em]">BEAUTY SHOOT</h3>
                    <p className="mt-2 font-display text-xl italic leading-tight text-muted-foreground">
                      2017
                    </p>
                    <p className="mt-2 font-display text-xl italic leading-tight text-muted-foreground">
                      Stylist
                    </p>
                  </header>

                  <BeautyShootCarousel />
                </div>
              </div>
            </section>

            <section className="grid gap-8 sm:grid-cols-[0.72fr_1.28fr] sm:items-start">
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                02 — ILLUSTRATIONS
              </h2>
              <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 sm:gap-y-24">
                <div>
                  <header className="mb-8 border-b border-foreground/15 pb-5">
                    <h3 className="text-[11px] uppercase tracking-[0.24em]">MY OWN MUSE</h3>
                    <p className="mt-2 font-display text-xl italic leading-tight text-muted-foreground">
                      Illustrator · Freelance — Line Art
                    </p>
                  </header>

                  <MyOwnMuseCarousel />
                </div>
                <div>
                  <header className="mb-8 border-b border-foreground/15 pb-5">
                    <h3 className="text-[11px] uppercase tracking-[0.24em]">LINE ART PORTRAITS</h3>
                    <p className="mt-2 font-display text-xl italic leading-tight text-muted-foreground">
                      Illustration · Line Art
                    </p>
                  </header>

                  <LineArtPortraitsCarousel />
                </div>
                <div>
                  <header className="mb-8 border-b border-foreground/15 pb-5">
                    <h3 className="text-[11px] uppercase tracking-[0.24em]">
                      MAXJENNY S/S17 — LULU PRINT
                    </h3>
                    <p className="mt-2 font-display text-xl italic leading-tight text-muted-foreground">
                      Textile / Print Design · Illustration · Pattern Development
                    </p>
                  </header>

                  <LuluPrintCarousel />
                </div>
                <div>
                  <header className="mb-8 border-b border-foreground/15 pb-5">
                    <h3 className="text-[11px] uppercase tracking-[0.24em]">VERAS VINTAGE</h3>
                    <p className="mt-2 font-display text-xl italic leading-tight text-muted-foreground">
                      2022
                    </p>
                    <p className="mt-2 font-display text-xl italic leading-tight text-muted-foreground">
                      Illustration · UX/UI · Digital Experience · Secondhand Fashion
                    </p>
                  </header>

                  <VerasVintageCarousel />
                </div>
              </div>
            </section>

            <section className="grid gap-8 sm:grid-cols-[0.72fr_1.28fr] sm:items-start">
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">03 — PHOTOGRAPHY</h2>
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
              className={currentIndex === index ? "pl-0" : "h-0 overflow-hidden pl-0"}
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

function BeautyShootCarousel() {
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
        aria-label="BEAUTY SHOOT images"
      >
        <CarouselContent className="ml-0">
          {beautyShootImages.map((image, index) => (
            <CarouselItem
              key={image.src}
              className={currentIndex === index ? "pl-0" : "h-0 overflow-hidden pl-0"}
              aria-label={`${String(index + 1).padStart(2, "0")} of ${String(beautyShootImages.length).padStart(2, "0")}`}
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
        {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(beautyShootImages.length).padStart(2, "0")}
      </p>
    </div>
  );
}

function MyOwnMuseCarousel() {
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
        aria-label="My Own Muse line art images"
      >
        <CarouselContent className="ml-0">
          {myOwnMuseImages.map((image, index) => (
            <CarouselItem
              key={image.src}
              className={currentIndex === index ? "pl-0" : "h-0 overflow-hidden pl-0"}
              aria-label={`${String(index + 1).padStart(2, "0")} of ${String(myOwnMuseImages.length).padStart(2, "0")}`}
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
        {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(myOwnMuseImages.length).padStart(2, "0")}
      </p>
    </div>
  );
}

function LineArtPortraitsCarousel() {
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
        aria-label="Line Art Portraits images"
      >
        <CarouselContent className="ml-0">
          {lineArtPortraitImages.map((image, index) => (
            <CarouselItem
              key={image.src}
              className={currentIndex === index ? "pl-0" : "h-0 overflow-hidden pl-0"}
              aria-label={`${String(index + 1).padStart(2, "0")} of ${String(lineArtPortraitImages.length).padStart(2, "0")}`}
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
        {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(lineArtPortraitImages.length).padStart(2, "0")}
      </p>
    </div>
  );
}

function LuluPrintCarousel() {
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
        aria-label="Maxjenny S/S17 Lulu print development images"
      >
        <CarouselContent className="ml-0">
          {luluPrintImages.map((image, index) => (
            <CarouselItem
              key={image.src}
              className={currentIndex === index ? "pl-0" : "h-0 overflow-hidden pl-0"}
              aria-label={`${String(index + 1).padStart(2, "0")} of ${String(luluPrintImages.length).padStart(2, "0")}`}
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
        {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(luluPrintImages.length).padStart(2, "0")}
      </p>
    </div>
  );
}

function VerasVintageCarousel() {
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
        aria-label="Veras Vintage illustration images"
      >
        <CarouselContent className="ml-0">
          {verasVintageImages.map((image, index) => (
            <CarouselItem
              key={image.src}
              className={currentIndex === index ? "pl-0" : "h-0 overflow-hidden pl-0"}
              aria-label={`${String(index + 1).padStart(2, "0")} of ${String(verasVintageImages.length).padStart(2, "0")}`}
            >
              <figure>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block h-auto w-full"
                />
                <figcaption className="mt-3">
                  <p className="text-[11px] uppercase tracking-[0.24em]">{image.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{image.description}</p>
                </figcaption>
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
        {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(verasVintageImages.length).padStart(2, "0")}
      </p>
    </div>
  );
}
