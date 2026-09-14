# La Mericana Typography Test

## Goal
Replace Aktiv Grotesk with the Adobe kit’s exact `la-mericana` family while preserving the portfolio’s existing composition and measurements.

## Changes
- Keep the existing Adobe Fonts stylesheet linked globally.
- Set the display typography token to `la-mericana` at its kit-provided Light weight 300.
- Apply La Mericana to the hero headline and major editorial headings already using the display token.
- Keep Work Sans for navigation, body copy, metadata, labels, and small text.
- Preserve italic emphasis on “feel” and “solid” without changing their size, colour, placement, or content. The supplied kit contains La Mericana Light only and no separate La Mericana italic font file, so italic styling will use the available La Mericana face rather than substitute another typeface.
- Remove every remaining Aktiv Grotesk reference.
- Make no layout, spacing, sizing, imagery, colour, paper, positioning, content, animation, or responsive changes.

## Verification
- Confirm La Mericana is the rendered family for the hero and major headings.
- Confirm navigation and supporting text remain Work Sans.
- Confirm no Aktiv Grotesk references remain and desktop/mobile compositions are unchanged.
