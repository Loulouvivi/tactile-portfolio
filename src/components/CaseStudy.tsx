import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import type { Project } from "./ProjectCard";

export function CaseStudy({
  project,
  children,
  titleContent,
  hideHeader = false,
  allowSticky = false,
}: {
  project: Project;
  children?: ReactNode;
  titleContent?: ReactNode;
  hideHeader?: boolean;
  allowSticky?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
  return (
    <div className="min-h-screen">
      <div
        className="homepage-paper-sheet"
        style={allowSticky ? { overflow: "visible" } : undefined}
      >
        <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <nav className="mb-8">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              ← Back
            </Link>
          </nav>

          {hideHeader ? null : (
            <header className="mb-12">
              <h1 className="font-display leading-none tracking-[-0.06em]">
                {titleContent ?? <span className="text-6xl sm:text-7xl">{project.title}</span>}
              </h1>
              <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-accent">
                {project.discipline}
              </p>
            </header>
          )}

          {children ? (
            <div className="mb-12">{children}</div>
          ) : (
            <>
              <section className="prose mb-12">
                <h2>Project introduction</h2>
                <p>[Case study introduction]</p>
              </section>

              <section className="prose mb-12">
                <h3>Context / Brief</h3>
                <p>[Context and brief]</p>
              </section>

              <section className="prose mb-12">
                <h3>Process</h3>
                <p>[Process — sketches, iterations, decision points]</p>
              </section>

              <section className="prose mb-12">
                <h3>Research / Findings</h3>
                <p>[Research insights and findings]</p>
              </section>

              <section className="prose mb-12">
                <h3>Design development</h3>
                <p>[Design development and explorations]</p>
              </section>

              <section className="prose mb-12">
                <h3>Final result</h3>
                <p>[Final result and outcomes]</p>
                {project.video ? (
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
                      className="mt-6 max-w-full object-cover"
                    >
                      {project.videoWebm ? (
                        <source src={project.videoWebm} type="video/webm" />
                      ) : null}
                      <source src={project.video} type="video/mp4" />
                    </video>
                    {project.poster ? (
                      // poster fallback for browsers that don't show video
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.poster}
                        alt={project.alt}
                        className="mt-6 max-w-full object-cover hidden"
                      />
                    ) : null}
                  </>
                ) : project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="mt-6 max-w-full object-cover"
                  />
                ) : null}
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default CaseStudy;
