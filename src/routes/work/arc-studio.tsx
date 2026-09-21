import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import arcPosterAsset from "@/assets/arc-studio-poster.jpg.asset.json";
import arcVideoWebmAsset from "@/assets/arc-studio-stopmotion-web.mp4.asset.json";
import arcVideoAsset from "@/assets/ARC_Studio_stopmotion_compressed.mp4";

const project = {
  index: "02",
  title: "ARC Studio",
  discipline: "Branding · Visual Identity · UX/UI",
  year: "",
  blurb: "",
  image: arcPosterAsset.url,
  video: arcVideoAsset,
  videoWebm: arcVideoWebmAsset.url,
  poster: arcPosterAsset.url,
  alt: "ARC Studio branding and visual identity stop-motion sequence",
  slug: "arc-studio",
} as const;

export const Route = createFileRoute("/work/arc-studio")({
  head: () => ({
    meta: [{ title: `Louise Riedmann — ${project.title}` }, { name: "description", content: project.blurb }],
  }),
  component: function ArcStudio() {
    return <CaseStudy project={project} />;
  },
});
