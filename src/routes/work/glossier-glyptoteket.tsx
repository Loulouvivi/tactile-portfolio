import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import glossierPosterAsset from "@/assets/glossier-glyptoteket.png";

const project = {
  index: "04",
  title: "Glossier × Glyptoteket",
  discipline: "Campaign Concept · Beauty · Art & Culture",
  year: "",
  blurb: "",
  image: glossierPosterAsset,
  alt: "Glossier × Glyptoteket campaign poster — classical statue holding Glossier products on a mauve ground",
  transparent: true,
  slug: "glossier-glyptoteket",
} as const;

export const Route = createFileRoute("/work/glossier-glyptoteket")({
  head: () => ({
    meta: [{ title: `Louise Riedmann — ${project.title}` }, { name: "description", content: project.blurb }],
  }),
  component: function Glossier() {
    return <CaseStudy project={project} />;
  },
});
