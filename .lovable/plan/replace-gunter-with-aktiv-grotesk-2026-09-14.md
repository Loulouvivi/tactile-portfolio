# Replace Gunter with Aktiv Grotesk

## Goal
Replace Gunter completely with the exact non-extended Aktiv Grotesk family declared by the existing Adobe Fonts kit, without changing any other design decision.

## Changes
- Keep the global Adobe Fonts stylesheet `https://use.typekit.net/kic5zun.css` already linked in the document head.
- Remove the remaining `gunter` display-font reference.
- Set the existing display typography token to the kit’s exact family name, `aktiv-grotesk`.
- Preserve Work Sans for body copy and metadata, and Instrument Serif for italic “feel” and “solid.”
- Make no layout, spacing, sizing, weight, imagery, colour, paper, position, animation, or content changes.

## Verification
- Confirm no Gunter references remain in the project.
- Confirm Aktiv Grotesk loads and is used by the wordmark, navigation, hero heading, section headings, and project titles.
- Confirm body and italic typography remain unchanged on desktop and mobile.
