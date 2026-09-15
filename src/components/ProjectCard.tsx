import { Reveal } from "./Reveal";

export type Project = {
  index: string;
  title: string;
  discipline: string;
  year: string;
  blurb: string;
  image: string;
  alt: string;
};

/** A single photograph laid onto a panel of the folded sheet. */
export function ProjectImage({
  project,
  delay = 0,
  ratio = "aspect-[4/5]",
  className = "",
}: {
  project: Project;
  delay?: number;
  ratio?: string;
  className?: string;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <a href="#work" className="group relative block">
        <span className="absolute -top-6 left-0 z-10 font-sans text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
          {project.index}
        </span>
        <div className="relative overflow-hidden bg-muted shadow-[0_18px_40px_-34px_rgba(0,0,0,0.5)]">
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            width={1200}
            height={1500}
            className={`${ratio} w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]`}
          />
        </div>
      </a>
    </Reveal>
  );
}

/** The caption for a project, sitting on its own area of paper. */
export function ProjectMeta({
  project,
  delay = 0,
  className = "",
}: {
  project: Project;
  delay?: number;
  className?: string;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <a href="#work" className="block max-w-xs">
        <span className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
          {project.index}
        </span>
        <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight sm:text-3xl">
          {project.title}
        </h3>
        {project.year ? (
          <span className="mt-1 block text-xs tracking-[0.2em] text-muted-foreground">
            {project.year}
          </span>
        ) : null}
        {project.blurb ? (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.blurb}</p>
        ) : null}
        <span className="mt-4 inline-block text-[0.7rem] uppercase tracking-[0.24em] text-accent">
          {project.discipline}
        </span>
      </a>
    </Reveal>
  );
}
