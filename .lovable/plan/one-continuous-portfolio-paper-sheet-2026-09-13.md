# One Continuous Portfolio Paper Sheet

## Goal
Extend the existing photographed folded-paper surface from the opening composition through Selected Work, Studio, Contact, and the footer, so the full portfolio reads as one uninterrupted physical sheet.

## Changes
- Expand the existing shared paper wrapper to contain every homepage section and the footer.
- Keep one instance of the current folded-paper photograph behind the full page; do not add, replace, or repeat the asset.
- Remove the Studio section’s separate tinted background and any remaining page-level surface changes that interrupt the paper.
- Preserve all content, typography, imagery, navigation, spacing, and current compositions.
- Verify the complete scroll on desktop and mobile, checking every section boundary for seams, resets, white bands, or exposed page background.

## Technical Details
- Update only the structural wrapper in `src/routes/index.tsx` and, if needed, the existing shared-paper CSS in `src/styles.css`.
- Keep the paper image absolutely positioned across the full wrapper with a single continuous crop.