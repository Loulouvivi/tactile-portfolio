# Homepage Editorial Artboard

## Goal
Redesign only the homepage header and opening composition as a full-viewport physical editorial spread. Preserve the existing photographed paper asset, typography system, palette, navigation wording, and every part of Selected Work and the rest of the page.

## Composition
- Use the existing folded-paper photograph as the single continuous surface behind the full opening viewport.
- Keep “Studio Marlow” and Work / Studio / Contact understated near the paper edges.
- Recompose “Design that you can feel” into a large, asymmetric four-line serif arrangement, retaining the plum italic treatment on “feel”.
- Place one existing project photograph off-axis as a lightly printed physical object with only a restrained edge and shadow.
- Distribute a few tiny publication-style notes independently, including one vertical note, while keeping both existing supporting statements.
- Preserve generous negative space and avoid cards, grids, panels, equal spacing, and extra decoration.

## Motion
- Build a single 1.5–2 second first-load sequence: navigation, metadata, headline, delayed “feel”, photograph, then supporting copy.
- Use only opacity and small vertical movement, with reduced-motion support.

## Responsive Treatment
- Keep the desktop art-book tension without collisions or clipped navigation.
- On mobile, retain irregular placement and varied scale rather than reverting to a centered conventional hero.
- Keep the next paper-based Selected Work section immediately discoverable below the opening viewport.

## Technical Scope
- Change only the header/hero markup in `src/routes/index.tsx` and add hero-specific rules in `src/styles.css`.
- Reuse `folded-paper-background.png` and one current project asset; do not generate or alter imagery.
- Do not modify Selected Work markup or any existing `.paper-board`, `.work-collage`, or `.collage-*` rules.
- Validate at desktop and mobile widths, check first-load motion, confirm all navigation anchors, and compare Selected Work before and after.
