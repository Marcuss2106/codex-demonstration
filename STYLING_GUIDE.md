# Random Frontend Styling Guide

An intentionally eclectic set of ideas for giving a frontend a little character. Pick a few that fit together; treat the rest as prompts for experimentation.

## A visual direction: midnight market

- **Canvas:** warm charcoal (`#171717`) with a faint paper grain or subtle radial glow.
- **Main accent:** electric lime (`#C7F36B`); use sparingly for primary actions and key numbers.
- **Supporting color:** dusty lilac (`#B8A6E8`) for secondary highlights.
- **Typography:** pair a sturdy grotesk for interface text with a readable serif for occasional editorial headings.
- **Shapes:** mostly crisp rectangles, with one recurring rounded element such as a pill badge or circular icon.
- **Texture:** use thin rules, tiny labels, or a small amount of noise instead of adding more gradients.

## Layout ideas

1. Give the page a narrow reading column, then let one image, chart, or colored panel break out of its edges.
2. Build a hero with an oversized headline, a short supporting sentence, and one unmistakable action.
3. Let cards vary in size: one featured card, two compact cards, and a full-width strip can feel more lively than a uniform grid.
4. Use generous space around sections, but keep related controls close together.
5. Align small metadata labels consistently so the composition still feels deliberate.

## Small details worth trying

- Add a `1px` border with low-contrast color to separate dark surfaces.
- Use a short accent rule beside section titles instead of boxing every heading.
- Give buttons a clear hover state: slightly brighter background, a `2px` upward shift, and a quick transition.
- Keep focus rings visible and high contrast; keyboard navigation should be easy to follow.
- Use tabular numerals for counters, prices, and timestamps.
- Reserve all-caps text for short labels, with extra letter spacing and a smaller size.

## Motion, lightly applied

- Fade and move content by a few pixels on entry; avoid large, distracting travel.
- Make hover transitions quick (about `150–220ms`) and respect `prefers-reduced-motion`.
- Prefer one purposeful animation per component over several competing effects.

## A quick CSS starting point

```css
:root {
  color-scheme: dark;
  --color-canvas: #171717;
  --color-surface: #222221;
  --color-text: #f4f1e9;
  --color-muted: #aaa79f;
  --color-accent: #c7f36b;
  --color-secondary: #b8a6e8;
  --radius-card: 14px;
  --space-section: clamp(3rem, 8vw, 7rem);
}

body {
  background: var(--color-canvas);
  color: var(--color-text);
  font-family: var(--font-sans), system-ui, sans-serif;
  line-height: 1.55;
}

.card {
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: var(--radius-card);
  background: var(--color-surface);
  padding: clamp(1.25rem, 3vw, 2rem);
}

.button-primary {
  border: 0;
  border-radius: 999px;
  background: var(--color-accent);
  color: #171717;
  padding: 0.75rem 1.1rem;
  font-weight: 700;
  transition: transform 180ms ease, filter 180ms ease;
}

.button-primary:hover {
  transform: translateY(-2px);
  filter: brightness(1.06);
}

.button-primary:focus-visible {
  outline: 3px solid var(--color-secondary);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Final pass

- Check the page at a narrow mobile width and a wide desktop width.
- Make sure body text and controls have enough contrast against their surfaces.
- Keep spacing, radii, and colors tied to a small set of reusable tokens.
- If a decorative flourish competes with the content, remove it.
