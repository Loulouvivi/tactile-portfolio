# Studio Section — Studio Philosophy Restructure

## Goal
Rework the "Paper first, pixels second." section into a quiet studio-philosophy sequence: tiny numbered categories, thin horizontal rules, short poetic statements, generous negative space, the photograph integrated as part of the editorial rhythm. Preserve the continuous paper, La Mericana, palette, hero, and Selected Work.

## Proposed structure

A vertical editorial sequence on the existing continuous paper sheet — not a grid, no cards:

```text
────────────────────────────────────────────
00  STUDIO — A WORKING PRACTICE            (tiny index label, top rule)

    short intro statement (Work Sans, small, 2–3 lines)
    + "Paper first, pixels second." stays — now a modest
      La Mericana statement, mid-sequence, not the dominant heading

01  PROCESS
    ────────────────────────────────────────   (thin rule)
    one short poetic line + a sentence of supporting copy

[photograph]  — physical studio print, placed within the
                sequence between 01 and 02, slightly off-axis,
                overlapping the rhythm rather than beside a heading

02  MATERIALS
    ────────────────────────────────────────
    short statement + copy

03  DISCIPLINES
    ────────────────────────────────────────
    the four existing disciplines (BRAND IDENTITY / MOTION /
    PRINT / SPATIAL) as a numbered index list under rules,
    one row each — no absolute scatter
```

## Key moves
- Keep the section on the same `homepage-paper-sheet`; no new backgrounds, no cards, borders beyond hairline rules (`1px` muted-foreground at low opacity).
- Thin horizontal rules act as the structure instead of boxes — full measure of the section's text column, left-aligned, with small right-aligned numbers (01 / 02 / 03) above each rule.
- "Paper first, pixels second." reduces from section heading to one quiet La Mericana statement in the flow; section label becomes the tiny "00 — STUDIO" index.
- Photograph keeps its `studio-print` physical treatment (paper edge, soft contact shadow, slight rotation) but moves into the editorial column between statements, at a smaller scale, off-axis — part of the scroll rhythm.
- Copy blocks stay Work Sans, small, muted, narrow measure (~34ch); statements in La Mericana Light.
- Generous vertical spacing between numbered entries so the section breathes and scrolls slowly; controlled asymmetry via slight left offsets per entry — but no absolute-position collage like Selected Work.
- Existing copy retained as placeholder (user will rewrite later); wording unchanged.
- Mobile: same sequence stacks with the same rhythm and spacing, photograph inline, rules full width.

## Technical details
- Edit `src/routes/index.tsx` (restructure the `#studio` markup: index label, rule+statement entries, print placed in sequence) and `src/styles.css` (replace `.studio-artboard` absolute positioning with the rule-based flow; keep `.studio-print` treatment; remove scattered `.studio-discipline-*` absolute positions in favour of the numbered index list).
- No new fonts, images, colours, or animations beyond the existing `Reveal` fade.
- Verify desktop 1280×1800 and mobile 390×844: paper continuity, no overlap, quiet rhythm; hero and Selected Work untouched.
