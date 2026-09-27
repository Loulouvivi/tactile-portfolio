import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "Louise Riedmann — Archive" },
      { name: "description", content: "Archive of styling, graphics and photography." },
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
              <div
                aria-hidden="true"
                className="aspect-[4/3] w-full border border-foreground/15 sm:aspect-[3/2]"
              />
            </section>

            <section className="grid gap-8 sm:grid-cols-[0.72fr_1.28fr] sm:items-start">
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">02 — GRAPHICS</h2>
              <div
                aria-hidden="true"
                className="aspect-[16/10] w-full border border-foreground/15"
              />
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