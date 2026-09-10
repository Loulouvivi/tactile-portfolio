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

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="group">
        <a href="#work" className="block">
          <div className="relative overflow-hidden bg-muted">
            <img
              src={project.image}
              alt={project.alt}
              loading="lazy"
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
            <span className="absolute left-4 top-4 font-sans text-[0.65rem] uppercase tracking-[0.28em] text-primary-foreground mix-blend-difference">
              {project.index}
            </span>
          </div>

          <div className="rule-line mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 pt-4">
            <h3 className="min-w-0 font-display text-2xl leading-tight tracking-tight sm:text-3xl">
              {project.title}
            </h3>
            <span className="shrink-0 text-xs tracking-[0.2em] text-muted-foreground">
              {project.year}
            </span>
          </div>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            {project.blurb}
          </p>
          <span className="mt-3 inline-block text-[0.7rem] uppercase tracking-[0.24em] text-accent">
            {project.discipline}
          </span>
        </a>
      </article>
    </Reveal>
  );
}
