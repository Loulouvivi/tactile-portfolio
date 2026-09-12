# Photographed Paper Refinement

## Goal
Replace the synthetic folded-paper effect with one realistic photographed paper sheet while preserving the existing projects, imagery, typography, colours, navigation, and surrounding page.

## Changes
- Use the attached moodboard as the source direction for a clean photographic paper background with visible fibres, speckles, tonal variation, imperfect edges, and physical fold shadows.
- Remove the CSS-generated grain and crease elements so no digital lines or repeating texture remain.
- Keep the work area as one continuous sheet and place the existing project images and captions loosely above it.
- Refine only the work composition: varied image scale, subtle offsets, and generous empty paper without cards or panel borders.
- Preserve the current single-column mobile reading order and ensure every caption remains legible.

## Validation
- Check the full work sheet at desktop and mobile sizes.
- Confirm folds never overlay project imagery as CSS effects, content does not overlap, and the page builds without errors.

## Technical details
- Add one optimized local photographic paper asset derived from the supplied reference.
- Import it into the work route and render it as the sheet’s background layer.
- Simplify the paper CSS to edge clipping, photographic image sizing, and a restrained outer shadow only.
