import { useCallback, useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
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
import strikeAPoseAsset from "@/assets/Strike a Pose, 2018.jpg";
import aftermathAsset from "@/assets/Aftermath, 2018.jpg";
import cocaColaFlowerAsset from "@/assets/Coca Cola Flower, 2018.jpeg";
import goldbergAsset from "@/assets/Goldberg, 2018.jpg";
import horsemanAsset from "@/assets/Horseman, 2018.jpg";
import inCognitoAsset from "@/assets/In Cognito, 2018.jpg";
import lagosLocalsAsset from "@/assets/Lagos Locals, 2017.jpg";
import lagosReflectionAsset from "@/assets/Lagos Reflection, 2018.jpeg";
import lagosSkylineAsset from "@/assets/Lagos Skyline, 2018.jpeg";
import lagosStreetArtAsset from "@/assets/Lagos Street Art, 2018.jpeg";
import lagosStreetHawkerAsset from "@/assets/Lagos Street Hawker, 2018.jpeg";
import lagosYellowAsset from "@/assets/Lagos Yellow.jpeg";
import lagosTrafficAsset from "@/assets/Lagos Traffic.jpg";
import lekkiBeachAsset from "@/assets/Lekki Beach, 2017.jpg";
import lekkiMarketAsset from "@/assets/Lekki Market, 2018.jpg";
import manInPurpleAsset from "@/assets/Man in Purple.jpg";
import nigerianFreshAsset from "@/assets/Nigerian Fresh, 2018.jpg";
import pleaseDontUrinateHereAsset from "@/assets/Please Don't Urinate Here, 2018.jpeg";
import privateBusinessAsset from "@/assets/Private Business, 2017.jpg";
import proudlyAfricanAsset from "@/assets/Proudly African, 2017.jpg";
import schoolChildrenAsset from "@/assets/School Children.jpeg";
import theKillerOfTheGameAsset from "@/assets/_The Killer of the Game_, 2018.jpg";
import womanInGreenAsset from "@/assets/Woman in Green.jpg";
import trafficSurfersAsset from "@/assets/Traffic Surfers, 2018.jpeg";
import theWorldCupAsset from "@/assets/The World Cup, 2018.jpg";
import yellowDanfoAsset from "@/assets/Yellow Danfo.jpg";
import allSmilesAsset from "@/assets/All Smiles, 2014.jpeg";
import cactusAsset from "@/assets/Cactus, 2013.jpg";
import farmhouseKitchenAsset from "@/assets/Farmhouse Kitchen, 2013.jpg";
import kenyanOutbackAsset from "@/assets/Kenyan Outback, 2013.jpg";
import laundryDayAsset from "@/assets/Laundry Day, 2013.jpg";
import roadtripAsset from "@/assets/Roadtrip, 2013.jpg";
import tireAndStickGameAsset from "@/assets/Tire and Stick Game, 2014.jpg";
import upCountryKenyaAsset from "@/assets/Up-Country Kenya.jpg";
import viewPointAsset from "@/assets/View Point, 2013.jpeg";
import chekiMzunguAsset from "@/assets/cheki mzungu.JPG";
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

type NigeriaImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  wide?: boolean;
};

const nigeriaImages: NigeriaImage[] = [
  {
    src: aftermathAsset,
    alt: "Aftermath, 2018 — dominant opening photograph of the series",
    caption: "Aftermath, 2018",
    width: 2991,
    height: 2444,
    wide: true,
  },
  {
    src: cocaColaFlowerAsset,
    alt: "Coca Cola Flower, 2018 photograph",
    caption: "Coca Cola Flower, 2018",
    width: 1950,
    height: 1462,
  },
  {
    src: lagosLocalsAsset,
    alt: "Lagos Locals, 2017 photograph",
    caption: "Lagos Locals, 2017",
    width: 2440,
    height: 1696,
  },
  {
    src: lagosReflectionAsset,
    alt: "Lagos Reflection, 2018 photograph",
    caption: "Lagos Reflection, 2018",
    width: 2782,
    height: 2448,
  },
  {
    src: lagosSkylineAsset,
    alt: "Lagos Skyline, 2018 photograph",
    caption: "Lagos Skyline, 2018",
    width: 3264,
    height: 2448,
  },
  {
    src: lagosStreetArtAsset,
    alt: "Lagos Street Art, 2018 photograph",
    caption: "Lagos Street Art, 2018",
    width: 3264,
    height: 2448,
    wide: true,
  },
  {
    src: lagosStreetHawkerAsset,
    alt: "Lagos Street Hawker, 2018 photograph",
    caption: "Lagos Street Hawker, 2018",
    width: 1183,
    height: 1751,
  },
  {
    src: lagosYellowAsset,
    alt: "Lagos Yellow photograph",
    caption: "Lagos Yellow",
    width: 1418,
    height: 1895,
  },
  {
    src: lekkiMarketAsset,
    alt: "Lekki Market, 2018 photograph",
    caption: "Lekki Market, 2018",
    width: 2350,
    height: 2952,
  },
  {
    src: pleaseDontUrinateHereAsset,
    alt: "Please Don't Urinate Here, 2018 photograph",
    caption: "Please Don't Urinate Here, 2018",
    width: 2448,
    height: 3264,
  },
  {
    src: lagosTrafficAsset,
    alt: "Lagos Traffic photograph",
    caption: "Lagos Traffic",
    width: 3750,
    height: 5250,
  },
  {
    src: manInPurpleAsset,
    alt: "Man in Purple photograph",
    caption: "Man in Purple",
    width: 3750,
    height: 5250,
  },
  {
    src: privateBusinessAsset,
    alt: "Private Business, 2017 photograph",
    caption: "Private Business, 2017",
    width: 1024,
    height: 787,
  },
  {
    src: lekkiBeachAsset,
    alt: "Lekki Beach, 2017 photograph",
    caption: "Lekki Beach, 2017",
    width: 2448,
    height: 3264,
  },
  {
    src: nigerianFreshAsset,
    alt: "Nigerian Fresh, 2018 photograph",
    caption: "Nigerian Fresh, 2018",
    width: 1477,
    height: 2185,
  },
  {
    src: schoolChildrenAsset,
    alt: "School Children photograph",
    caption: "School Children",
    width: 2298,
    height: 3064,
  },
  {
    src: proudlyAfricanAsset,
    alt: "Proudly African, 2017 photograph",
    caption: "Proudly African, 2017",
    width: 2335,
    height: 3115,
  },
  {
    src: strikeAPoseAsset,
    alt: "Strike a Pose, 2018 photograph",
    caption: "Strike a Pose, 2018",
    width: 917,
    height: 1378,
  },
  {
    src: goldbergAsset,
    alt: "Goldberg, 2018 photograph",
    caption: "Goldberg, 2018",
    width: 2145,
    height: 3023,
  },
  {
    src: horsemanAsset,
    alt: "Horseman, 2018 photograph",
    caption: "Horseman, 2018",
    width: 1716,
    height: 2448,
  },
  {
    src: inCognitoAsset,
    alt: "In Cognito, 2018 photograph",
    caption: "In Cognito, 2018",
    width: 975,
    height: 1323,
  },
  {
    src: theWorldCupAsset,
    alt: "The World Cup, 2018 environmental photograph",
    caption: "The World Cup, 2018",
    width: 3136,
    height: 2352,
    wide: true,
  },
  {
    src: trafficSurfersAsset,
    alt: "Traffic Surfers, 2018 photograph",
    caption: "Traffic Surfers, 2018",
    width: 555,
    height: 822,
  },
  {
    src: womanInGreenAsset,
    alt: "Woman in Green photograph",
    caption: "Woman in Green",
    width: 750,
    height: 1334,
  },
  {
    src: theKillerOfTheGameAsset,
    alt: "The Killer of the Game, 2018 photograph",
    caption: "The Killer of the Game, 2018",
    width: 2400,
    height: 3242,
  },
  {
    src: yellowDanfoAsset,
    alt: "Yellow Danfo — closing photograph of the series",
    caption: "Yellow Danfo",
    width: 3750,
    height: 5250,
  },
];

const kenyaImages: NigeriaImage[] = [
  {
    src: allSmilesAsset,
    alt: "All Smiles, 2014 — opening photograph of the Kenya series",
    caption: "All Smiles, 2014",
    width: 1655,
    height: 2386,
  },
  {
    src: cactusAsset,
    alt: "Cactus, 2013 photograph",
    caption: "Cactus, 2013",
    width: 1636,
    height: 2247,
  },
  {
    src: farmhouseKitchenAsset,
    alt: "Farmhouse Kitchen, 2013 photograph",
    caption: "Farmhouse Kitchen, 2013",
    width: 3204,
    height: 2372,
    wide: true,
  },
  {
    src: kenyanOutbackAsset,
    alt: "Kenyan Outback, 2013 photograph",
    caption: "Kenyan Outback, 2013",
    width: 2033,
    height: 3009,
  },
  {
    src: laundryDayAsset,
    alt: "Laundry Day, 2013 photograph",
    caption: "Laundry Day, 2013",
    width: 3264,
    height: 2206,
  },
  {
    src: roadtripAsset,
    alt: "Roadtrip, 2013 photograph",
    caption: "Roadtrip, 2013",
    width: 3264,
    height: 2448,
  },
  {
    src: tireAndStickGameAsset,
    alt: "Tire and Stick Game, 2014 photograph",
    caption: "Tire and Stick Game, 2014",
    width: 2448,
    height: 3264,
  },
  {
    src: upCountryKenyaAsset,
    alt: "Up-Country Kenya photograph",
    caption: "Up-Country Kenya",
    width: 2527,
    height: 2037,
  },
  {
    src: viewPointAsset,
    alt: "View Point, 2013 photograph",
    caption: "View Point, 2013",
    width: 3264,
    height: 2448,
    wide: true,
  },
  {
    src: chekiMzunguAsset,
    alt: "Cheki Mzungu — closing photograph of the Kenya series",
    caption: "Cheki Mzungu",
    width: 2504,
    height: 1618,
  },
];

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
              <div className="space-y-16 sm:space-y-24">
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
              <div className="space-y-24 sm:space-y-32">
                <PhotographyProject
                  title="NIGERIA"
                  date="2017/2018"
                  medium="Photography"
                  images={nigeriaImages}
                />
                <PhotographyProject
                  title="KENYA"
                  date="2013/2014"
                  medium="Photography"
                  images={kenyaImages}
                />
              </div>
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

const nigeriaFlowWidths = [
  "sm:w-[68%] sm:self-start",
  "sm:w-[52%] sm:self-end",
  "sm:w-[40%] sm:self-start",
  "sm:w-[58%] sm:self-center",
  "sm:w-[46%] sm:self-end",
  "sm:w-[64%] sm:self-start",
];

function PhotographyProject({
  title,
  date,
  medium,
  images,
}: {
  title: string;
  date: string;
  medium: string;
  images: NigeriaImage[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const goToPrevious = useCallback(() => {
    setOpenIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setOpenIndex((current) => (current === null ? null : (current + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openIndex, goToPrevious, goToNext]);

  const activeImage = openIndex === null ? null : images[openIndex];

  return (
    <div className="group">
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-foreground/15 pb-4">
        <h3 className="text-[11px] uppercase tracking-[0.24em]">{title}</h3>
        <p className="font-display text-base italic leading-tight text-muted-foreground">
          {date}
        </p>
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{medium}</p>
        <p className="text-[11px] text-muted-foreground">{images.length} photographs</p>
      </header>

      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-out group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden group-hover:overflow-visible">
          <div className="flex flex-col gap-16 pt-10 opacity-0 -translate-y-4 transition-[opacity,transform] duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:gap-24">
            {images.map((image, index) => (
              <div
                key={image.src}
                className={
                  image.wide
                    ? "w-full"
                    : `w-full ${nigeriaFlowWidths[index % nigeriaFlowWidths.length]}`
                }
              >
                <figure className="relative z-0 hover:z-20">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    aria-label={`Open ${image.caption} in full view`}
                    className="block w-full cursor-pointer"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="block h-auto w-full transition-transform duration-500 ease-out hover:scale-110"
                    />
                  </button>
                  <figcaption className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {image.caption}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog
        open={openIndex !== null}
        onOpenChange={(next) => {
          if (!next) {
            setOpenIndex(null);
          }
        }}
      >
        <DialogContent
          overlayClassName="bg-background/95"
          className="flex items-center justify-center border-none bg-transparent p-0 shadow-none sm:rounded-none"
        >
          {activeImage ? (
            <>
              <DialogTitle className="sr-only">{activeImage.caption}</DialogTitle>
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="block max-h-[85vh] max-w-[85vw] w-auto h-auto object-contain"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Previous photograph"
                onClick={goToPrevious}
                className="fixed left-4 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-background/70 text-foreground/75 shadow-none hover:bg-background/90 sm:left-8"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Next photograph"
                onClick={goToNext}
                className="fixed right-4 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-background/70 text-foreground/75 shadow-none hover:bg-background/90 sm:right-8"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
