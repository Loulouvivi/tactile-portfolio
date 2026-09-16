import { useEffect, useRef } from "react";

import { Reveal } from "./Reveal";

export type Project = {
  index: string;
  title: string;
  discipline: string;
  year: string;
  blurb: string;
  image: string;
  alt: string;
  video?: string;
  videoWebm?: string;
  poster?: string;
  transparent?: boolean;
};

function ProjectVisual({ project, ratio }: { project: Project; ratio: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!project.video) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      const video = videoRef.current;
      if (!video) return;

      if (motionPreference.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play().catch(() => undefined);
      }
    };

    updatePlayback();
    motionPreference.addEventListener("change", updatePlayback);
    return () => motionPreference.removeEventListener("change", updatePlayback);
  }, [project.video]);

  if (project.video && project.poster) {
    return (
      <>
        <video
          ref={videoRef}
          poster={project.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={(event) => {
            if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
              void event.currentTarget.play().catch(() => undefined);
            }
          }}
          aria-label={project.alt}
          className={`project-motion ${ratio} w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]`}
        >
          {project.videoWebm ? <source src={project.videoWebm} type="video/webm" /> : null}
          <source src={project.video} type="video/mp4" />
        </video>
        <img
          src={project.poster}
          alt={project.alt}
          loading="lazy"
          width={1440}
          height={1080}
          className={`project-motion-fallback ${ratio} w-full object-cover`}
        />
      </>
    );
  }

  if (project.transparent) {
    return (
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        className="w-full h-auto object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <img
      src={project.image}
      alt={project.alt}
      loading="lazy"
      width={1200}
      height={1500}
      className={`${ratio} w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]`}
    />
  );
}

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
        <span className="absolute -top-6 left-0 z-10 font-sans text-[0.72rem] uppercase tracking-[0.28em] text-muted-foreground">
          {project.index}
        </span>
        <div
          className={
            project.transparent
              ? "relative"
              : "relative overflow-hidden bg-muted shadow-[0_18px_40px_-34px_rgba(0,0,0,0.5)]"
          }
        >
          <ProjectVisual project={project} ratio={ratio} />
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
        <span className="text-[0.72rem] uppercase tracking-[0.28em] text-muted-foreground">
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
        <span className="mt-4 inline-block text-[0.8rem] uppercase tracking-[0.24em] text-accent">
          {project.discipline}
        </span>
      </a>
    </Reveal>
  );
}
