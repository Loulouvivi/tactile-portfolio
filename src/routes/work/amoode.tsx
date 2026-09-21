import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import amoodeMixmatchAsset from "@/assets/mix-match.png";

const project = {
  index: "01",
  title: "Amoode",
  discipline: "Fashion · E-commerce · Digital Experience",
  year: "",
  blurb: "",
  image: amoodeMixmatchAsset,
  alt: "Amoode mix and match garment composition",
  slug: "amoode",
} as const;

export const Route = createFileRoute("/work/amoode")({
  head: () => ({
    meta: [{ title: `Louise Riedmann — ${project.title}` }, { name: "description", content: project.blurb }],
  }),
  component: function Amoode() {
    return <CaseStudy project={project} />;
  },
});
