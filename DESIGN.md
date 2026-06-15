---
name: Frenkel Financial Agency
description: A precision-instrument recruiting site — graphite and chrome with a single garnet spark, built around a split-flap departure-board motif.
colors:
  bg: "#06070a"
  surface: "#101215"
  surface-2: "#1b1d21"
  line: "#2b2e32"
  ink: "#f1f2f4"
  ink-2: "#b4b7be"
  ink-3: "#82868e"
  chrome-1: "#f4f5f7"
  chrome-2: "#bec5cd"
  chrome-3: "#858d96"
  garnet: "#a21921"
  garnet-bright: "#e24947"
  paper: "#f3f5f8"
  paper-ink: "#0e0f13"
  paper-ink-2: "#4a4d54"
  paper-line: "#d5d8db"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(40px, 7.2vw, 84px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(30px, 4.5vw, 46px)"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "12.5px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.1em"
rounded:
  sm: "10px"
  md: "18px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "56px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, {colors.chrome-1}, {colors.chrome-2} 55%, {colors.chrome-3})"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "15px 30px"
    fontSize: "14.5px"
    fontWeight: 600
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    border: "1px solid {colors.line}"
    rounded: "{rounded.pill}"
    padding: "15px 30px"
    fontSize: "14.5px"
    fontWeight: 600
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.line}"
    padding: "32px 28px"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.line}"
    rounded: "{rounded.sm}"
    padding: "13px 16px"
    fontSize: "14.5px"
---

## Overview

**Creative North Star: The Private Terminal.** Imagine the departures hall of a private aviation terminal at night — graphite walls, brushed-chrome signage, a single split-flap board clattering through destinations, and exactly one warm light (a garnet "boarding now" glow) cutting through the cool palette. Everything else is precise, quiet, and confident. That's the feeling this site reaches for: a recruiting page for agents who are evaluating whether this agency is a step up, not a landing page hoping to convert tourists.

The agency's pitch is mentorship, momentum, and ownership — careers in motion. The site dramatizes that idea structurally rather than decoratively: the hero headline literally flips between *Mentorship*, *Momentum*, *Opportunity*, and *Leadership* on a mechanical split-flap tile, like a board cycling through destinations. Corner-bracket framing (borrowed from camera viewfinders and precision instruments) marks the few elements worth measuring — the founder's portrait, the scheduling panel. A soft chrome highlight follows the cursor across dark sections, like light catching brushed metal as you move past it. One section — Schedule a Call — breaks into a bright "paper" surface, a deliberate, single beat of contrast that makes the booking step feel like the destination, not another section.

This system deliberately avoids the genres it could easily fall into: it is not a navy-and-gold insurance brochure, not a cream-and-serif "trusted advisor" template, not a SaaS landing page with a hero-metric block and gradient-text headline, and not a crypto/fintech neon dashboard. The palette stays almost monochrome — graphite, chrome, paper — with garnet held back as the *only* saturated color in the entire interface, spent on a handful of meaningful moments (the active nav indicator, hover states, the one "spark" accents). Restraint is the luxury signal.

**Key characteristics:**
- Near-monochrome graphite/chrome base with **garnet as the single saturated accent**, spent deliberately.
- **Bricolage Grotesque** (display, confident geometric character) paired with **Geist** (body/UI, neutral and precise) — one expressive voice, one quiet one.
- Signature motion: a mechanical **split-flap word rotator** in the hero, **corner-bracket framing** on key visual elements, and a **cursor-following chrome glow** on dark surfaces.
- Structure carries depth, not shadows: hairline borders, shared-line grids, and one bright "paper" section as the sole tonal break.
- A custom 16-icon line-icon set (no emoji anywhere) drawn in the same weight as the chrome "F" brand mark.

## Colors

**Primary — Garnet.** `garnet` (#a21921) and `garnet-bright` (#e24947) are the agency's single spark: the active nav underline, the pulse dot in the hero status pill, hover accents on icons and links, the checklist marks on the paper section, and focus rings. This is **The Single Spark Rule** — garnet never fills a surface and never appears twice in the same glance without reason. If a screen has more than one garnet element competing for attention, that's a bug, not richness.

**Neutral — Graphite (dark surfaces).** `bg` (#06070a), `surface` (#101215), and `surface-2` (#1b1d21) form a three-step depth ladder for the dominant dark mode: page background, raised panels (cards, inputs' siblings), and the most-raised elements (flap tiles, avatar plate). `line` (#2b2e32) is the hairline that separates all of them — borders, dividers, the grid seams in the agency-stats and "why join" sections.

**Neutral — Chrome (the metallic motif).** `chrome-1` (#f4f5f7) → `chrome-2` (#bec5cd) → `chrome-3` (#858d96) is the gradient family used for primary buttons and the cursor-glow highlight, and echoes the chrome gradient baked into the "F" brand mark itself. It's the "brushed metal" register — cool, bright, never warm.

**Neutral — Ink (text on dark).** `ink` (#f1f2f4) for headings and primary text, `ink-2` (#b4b7be) for body copy and secondary text, `ink-3` (#82868e) for the quietest labels (marquee text, hints, faint values). All three clear 4.5:1 against `bg` and `surface`.

**Neutral — Paper (the one bright section).** `paper` (#f3f5f8), `paper-ink` (#0e0f13), `paper-ink-2` (#4a4d54), and `paper-line` (#d5d8db) exist *only* for the Schedule section. This is the single deliberate light/dark inversion in the whole site — it exists to make booking a call feel like arriving somewhere, not to start a light-mode variant. Don't introduce a second bright section; it would cancel the effect.

## Typography

**Bricolage Grotesque** (display) carries personality — confident, slightly architectural letterforms for the hero headline, section headlines, card titles, and the brand wordmark replacement (stat labels, contact values). **Geist** (body/label) is the workhorse — body copy, nav, buttons, form fields, marquee text, and uppercase labels. The pairing is one expressive voice against one neutral one; never mix in a third family.

**Hierarchy:**
- **Display** — `clamp(40px, 7.2vw, 84px)`, 600, line-height 1.08, letter-spacing -0.02em. The hero `<h1>` only. Splits into per-word reveal masks.
- **Headline** — `clamp(30px, 4.5vw, 46px)`, 600, line-height 1.18, letter-spacing -0.015em. Every section `<h2>` (`.section h2`), using the same word-wipe reveal as the hero.
- **Title** — 17–19px, 600, letter-spacing -0.01em, Bricolage Grotesque. Card headings (`.card h3`), agency stat labels (`.agency-stat .label`), contact values (`.contact-item .value`).
- **Body** — 14.5–16.5px, 400, line-height 1.65–1.7, Geist. Paragraphs, descriptions, card copy. Capped implicitly by column widths (`.section .desc` max 640px, `.about-grid p` reads within a ~620px column).
- **Label** — 12–13px, 600–700, uppercase, letter-spacing 0.06–0.16em, Geist. Contact field labels, contact-item eyebrows, the marquee strip, the hero status pill.

**Named rule — "No Gradient Letters."** Headings are always a single solid `ink` or `paper-ink`. Emphasis comes from Bricolage Grotesque's weight and the display scale, never from `background-clip: text` gradients or multi-color headline spans. Letter-spacing on display/headline text never goes tighter than -0.02em — it stays *confident*, not cramped.

## Elevation

This system is almost flat by design — **the hairline border is the primary depth cue**, not shadow. `line` (on dark) and `paper-line` (on the paper section) draw every seam: card grids share a single 1px line as their gap color, the agency-stats row is one bordered strip divided into cells, and the header/footer are separated from content by a single border-bottom/top rather than a shadow.

Soft directional shadows exist for exactly two situations — floating UI and the one inverted section:
- `shadow-sm` — `0 10px 28px -16px oklch(0% 0 0 / .55)`. Used on the contact form panel: a small, grounding lift for compact elements.
- `shadow` — `0 24px 60px -24px oklch(0% 0 0 / .6)`. Used on the avatar plate and the Calendly panel (inside its `.bracket-frame`): larger panels that should visually "float" slightly above the page.

**Named rule — "The Hairline Rule."** If you're reaching for a box-shadow to separate two adjacent blocks, reach for a 1px `line`/`paper-line` border or a shared-background grid gap instead. Shadows are reserved for things that genuinely lift off the page (buttons on press, the avatar, the Calendly card) — never for routine section or card separation.

**The bracket frame** (`.bracket-frame`) is the structural framing device for "this is worth a second look": four corner brackets in `chrome-2`, offset outside the element's box, used on the founder's avatar and the Calendly embed. It borrows from camera viewfinders and precision-instrument readouts — a deliberate, repeatable signature rather than a one-off flourish.

## Components

**Buttons** — pill-shaped (`rounded.pill`), 15px/30px padding, 14.5px/600 Geist.
- *Primary* (`.btn-primary`): the chrome gradient (`chrome-1` → `chrome-2` → `chrome-3`) on `bg`-colored text, with a diagonal sheen sweep on hover and a 2px lift. This is the only place the full chrome gradient appears as a fill — it reads as "polished metal," reserved for the primary action.
- *Ghost* (`.btn-ghost`): transparent with a `line` border and `ink` text; brightens border and background fractionally on hover. Used for secondary actions (header CTA pairing, hero secondary link).

**Navigation** — sticky header with a translucent/blurred backdrop that gains a hairline shadow on scroll (`.scrolled`). The active section is marked by a `nav-indicator` — a thin garnet underline that slides horizontally beneath the active link via `moveIndicator()`. Mobile collapses into a slide-down panel.

**Cards & containers**
- *Why Join grid* (`.cards-grid` / `.card`): a hairline-divided grid — cards share `line`-colored 1px gaps instead of individual borders, shadows, or radii. Each card carries one of the 16 custom line icons (28px, `currentColor`), which shifts to `garnet-bright` with a scale/rotate on hover — the icon is the only per-card accent.
- *Agency stats* (`.agency-grid` / `.agency-stat`): a single bordered strip divided into flexible cells by `line` borders — a spec sheet, not four separate cards.
- *Calendly panel* (`#schedule .calendly-wrap`): wrapped in `.bracket-frame`, sitting on the `paper` surface — the bracket marks it as the page's "destination."

**Inputs & forms** — `.contact-form` is a `surface` panel (`shadow-sm`) holding `bg`-colored fields with `line` borders and `radius-sm` (10px) corners; labels are 12.5px/700 uppercase Geist with 0.08em tracking. Focus state should use a garnet-tinted ring — the only place focus styling and the accent color meet outside the nav indicator.

**Signature component — Split-Flap Rotator** (`.flap` / `.flap-tile#flapTile`): the hero's second line ends in a mechanical tile that flips through *Mentorship → Momentum → Opportunity → Leadership* on a timer, mimicking an airport departure board. The tile auto-sizes to the widest word via `sizeTile()` so layout never jumps, and is disabled under `prefers-reduced-motion` (the word simply stays on the first value). This is the single most "ownable" visual idea in the system — don't duplicate the flip mechanic elsewhere; it stays special by staying rare.

**Signature component — Cursor Glow** (`.cursor-glow`): a soft `radial-gradient` chrome highlight that tracks the pointer across dark sections via `--mx`/`--my` custom properties, blended with `mix-blend-mode: soft-light` at low opacity. It's atmosphere, not a spotlight — confidence without flash. Disabled for touch (`pointer: fine` check) and reduced motion.

## Do's and Don'ts

- **Do** keep garnet to one purposeful element per view — nav indicator, one hover accent, one focus ring. **Don't** let two garnet elements compete in the same viewport.
- **Do** use hairline borders and shared-background grid gaps for separation. **Don't** add box-shadows to routine cards or section dividers — shadows are for the avatar, Calendly panel, and contact form only.
- **Do** keep headings solid-color Bricolage Grotesque. **Don't** use `background-clip: text` gradients on any heading or number.
- **Don't** add `border-left`/`border-right` accent stripes to cards, list items, or callouts — rewrite with full borders, icon leads, or background tints.
- **Don't** add a small uppercase tracked "kicker" (ABOUT / PROCESS / etc.) above every section — this system already removed those; the section `<h2>` carries the section on its own.
- **Don't** introduce a second bright/light section beyond Schedule — the paper surface is a single deliberate beat, not the start of a light-mode pattern.
- **Do** keep the "Why Join" grid as a shared hairline grid of six. **Don't** turn it into individually-bordered, shadowed, rounded "feature cards" — that's the generic SaaS template this system was built to avoid.
- **Do** reserve the split-flap rotator and corner-bracket frame as singular, recognizable motifs. **Don't** reuse the flip animation on other text, or add bracket frames to every image — both lose their signal if repeated.
- **Do** respect `prefers-reduced-motion` everywhere motion is added (flap rotator, cursor glow, reveals, 3D card tilt all already branch on it). **Don't** ship a new animation without a reduced-motion fallback.
- **Don't** avoid garnet because the palette feels safe without it — graphite + chrome alone is correct restraint; garnet's rarity is what makes it read as a "spark," not a missing accent.
