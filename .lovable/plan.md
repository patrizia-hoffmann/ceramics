# Mobile homepage refinement

## Changes
- Replace the cramped mobile header with a compact, accessible menu while keeping cart access visible.
- Rebalance the opening section for small screens so the headline, call-to-action, image, and technical tiles fit without clipping.
- Give editorial and material images stable mobile aspect ratios and keep captions readable within their bounds.
- Stack dense headings, product details, playground tiles, journal rows, and footer links cleanly at narrow widths.
- Preserve the current OXID colours, imagery, typography, section order, and placeholder content.

## Validation
- Check the homepage at mobile width for overflow, overlaps, legibility, menu behavior, image cropping, and tap targets.
- Confirm the preview remains clean on desktop and that the project still builds without errors.

## Technical details
- Use responsive Tailwind classes and a small React menu state inside the existing homepage.
- Keep all changes presentation-only; no shopping or content logic will be added.
