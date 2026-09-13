# Independent Editorial Scatter

## Goal
Make Selected Work read as four physical photographs and captions placed independently on one photographed sheet, without changing the paper asset or any other part of the site.

## Changes
- Reposition every project image and caption independently, removing shared horizontal and vertical axes and any predictable reading pattern.
- Give all four images clearly different scales, edge distances, and surrounding whitespace.
- Reduce Project 04 from a large horizontal anchor to a smaller peer within the scattered composition.
- Place captions at varied relationships to their images: adjacent, offset above, offset below, or tucked close beside them.
- Add only restrained overlaps where they strengthen the physical print-on-paper effect without obscuring imagery or text.
- Preserve the existing paper photograph, folds, typography, colours, content, navigation, and all sections outside Selected Work.
- Keep mobile intentionally irregular through varied widths, side offsets, spacing, and caption proximity while preserving a clear reading order.

## Validation
- Check desktop and mobile for four visible projects, clear image-caption associations, no clipping, and no text obscuring imagery.
- Confirm there are no repeated alignment axes, equal visual bands, predictable sequence, or oversized Project 04 anchor.
- Confirm the site builds without errors.

## Technical details
- Change only the Selected Work positioning rules in `src/styles.css`; retain the current markup and paper asset.
- Continue using freeform absolute positioning on desktop and an irregular flow on mobile, without grid or masonry primitives.