# Modern Atelier Studio Section

## Goal
Recompose only “Paper first, pixels second.” as an art-directed studio process arrangement on the portfolio’s existing continuous folded-paper surface.

## Changes
- Keep the current portrait, heading, paragraph, and all four discipline labels and descriptions.
- Treat the portrait as a lightly rotated physical print with a restrained paper edge and soft contact shadow.
- Place the heading, process copy, and discipline notes independently with controlled asymmetry and generous open paper.
- Replace the bordered two-column services block with four small atelier index notes using restrained sans-serif labels and details.
- Preserve La Mericana Light for the heading and the current sans-serif for body text and annotations.
- Add only content-derived studio notation already present in the section; no watermark, frame, decorative marks, or invented facts from the reference prototype.
- Leave the hero, Selected Work, contact, footer, paper asset, colors, content, and existing reveal motion unchanged.

## Responsive Treatment
- Use free placement on desktop without visible rows, columns, cards, or equal distribution.
- Reflow into an irregular but readable mobile sequence, maintaining varied widths, offsets, and whitespace.
- Keep the portrait, copy, and every discipline fully visible without overlap or clipping.

## Validation
- Check the full section at desktop and mobile widths.
- Confirm the shared paper remains uninterrupted above and below the section.
- Confirm the hero and Selected Work are visually unchanged and the page has no build or console errors.

## Technical Details
- Update the Studio markup in `src/routes/index.tsx` with section-specific class names.
- Add only Studio-specific layout and print-treatment rules in `src/styles.css`.
