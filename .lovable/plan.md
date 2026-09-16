# Simplified Personal About Section

## Goal
Add one quiet, personal About section immediately between Studio and Contact. It should read as a short introduction printed directly onto the existing continuous paper, not as an abstract manifesto or a conventional website layout.

## Changes
- Add the section label `04 — ABOUT`.
- Set the supplied introduction exactly as written as one strong, medium-scale text block with generous surrounding empty paper.
- Use the newly uploaded black-and-white photobooth portrait as the only image, with a restrained physical-photo treatment and subtle asymmetrical placement.
- Add only `COPENHAGEN / 2026` as supporting metadata.
- Add the exact continuous text line along the bottom at an extremely small, understated size.
- Keep the existing Contact content unchanged below the new section.

## Composition
- Avoid a balanced two-column arrangement: place the introduction and portrait independently on the paper with deliberate separation and substantial negative space.
- Keep the portrait’s existing analogue border visible; use only a minimal paper lift so it feels placed rather than framed.
- Use the current typography, muted palette, and subtle reveal behavior without adding decorative type, labels, grids, cards, or extra copy.
- Keep the full section legible and composed on desktop, the current 873×642 viewport, and mobile.

## Technical Details
- Store the uploaded portrait through the project’s asset flow and import its URL into the homepage.
- Add only the new About markup in `src/routes/index.tsx` and scoped About styles in `src/styles.css`.
- Reuse the existing continuous paper wrapper; do not add or alter any background asset.
- Verify the new section and its boundaries with Studio and Contact, plus the project build and browser console.