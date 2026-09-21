import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import luluviviPosterAsset from "@/assets/LV poster A2 final (1).png";

const project = {
  index: "03",
  title: "LULUVIVI",
  discipline: "Vintage Fashion · Curation · Branding",
  year: "",
  blurb: "",
  image: luluviviPosterAsset,
  alt: "LULUVIVI A2 poster — model holding an oversized garment with layered LULUVIVI typography",
  slug: "luluvivi",
} as const;

export const Route = createFileRoute("/work/luluvivi")({
  head: () => ({
    meta: [{ title: `Louise Riedmann — ${project.title}` }, { name: "description", content: project.blurb }],
  }),
  component: function Luluvivi() {
    return <CaseStudy project={project} />;
  },
});
