# Implementation Plan: World-Class Frontend & Motion Redesign (Taste-Skill)

Transform the Genesis landing page into an Awwwards-tier, editorial luxury clinical healthcare experience powered by the newly installed `taste-skill` and `high-end-visual-design` systems.

## Design Read & Dials

> **Design Read**: Reading this as a high-end women's healthcare and clinical obstetrics & gynecology sanctuary landing page for expectant mothers, women, and families seeking compassionate, senior clinical care, with an **editorial luxury and ethereal clinical calm** language, leaning toward **Tailwind v4 + Motion spring physics + nested double-bezel architecture**.

* **`DESIGN_VARIANCE: 7`** - Asymmetrical bento grid, editorial split typography, dual-arched image showcase, avoiding repetitive 3-column identical cards.
* **`MOTION_INTENSITY: 6`** - Fluid Motion (`motion/react`) spring physics, nested button-in-button interactive kinetics, gentle scroll reveal fades (`whileInView`), smooth floating navigation transitions, reduced-motion compliance.
* **`VISUAL_DENSITY: 4`** - Luxurious medical sanctuary breathing room (`py-20` to `py-28`), unhurried typography, double-bezel hardware-level card framing, generous spatial hierarchy.

---

## User Review Required

> [!IMPORTANT]
> **Strict Anti-Slop & Taste-Skill Guardrails Enforced:**
> 1. **Zero Em-Dashes (`—` or `–`)**: Strict enforcement of Section 9.G. All em-dashes and en-dashes across headlines, copy, badges, and metadata will be replaced with natural punctuation (commas, colons, or clean phrasing).
> 2. **No Image Pill Overlays / Decoration Badges**: Clean up artificial badge stickers overlaid directly on photos.
> 3. **Eyebrow Restraint**: Maximum 1 eyebrow per 3 sections (max 3 across the entire landing page).
> 4. **Double-Bezel Card Architecture**: Machined nested containers (outer subtle ring/shell + concentric inner core) for clinical sanctuary depth.
> 5. **Button-in-Button CTA Kinetics**: Interactive pill buttons with nested trailing icon circles that translate diagonally on hover.
> 6. **Cohesive Canvas Palette**: Harmonize the landing page flow using Genesis's signature deep plum (`#240A28`, `#331137`), warm rose gold/pink accents (`#C26E92`), and soft luminous canvas (`#FAF6F9`), removing harsh banded gradient dividers.

---

## Proposed Changes

### 1. Motion & Animation Foundation

#### [NEW] [motion-wrapper.tsx](file:///Users/dharanshsingh/GENESIS/components/ui/motion-wrapper.tsx)
- Reusable, lightweight client islands for GPU-safe scroll reveals (`FadeIn`, `StaggerContainer`, `MagneticPill`, `DoubleBezelCard`).
- Respects `prefers-reduced-motion` automatically via `useReducedMotion()`.
- Standardizes spring physics: `{ type: "spring", stiffness: 100, damping: 20 }` and custom ease `[0.16, 1, 0.3, 1]`.

---

### 2. Navigation & Header

#### [MODIFY] [navbar.tsx](file:///Users/dharanshsingh/GENESIS/components/navbar.tsx)
- Upgrade floating glass pill navbar into an ethereal floating island with subtle inner border highlight (`shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]`).
- Replace `window.addEventListener('scroll')` state churn with throttled, smooth scroll physics.
- Add fluid hamburger morph into an 'X' and full-screen glass overlay with staggered navigation links.
- Button-in-button treatment for the "Book Consultation" nav action.

---

### 3. Hero Section

#### [MODIFY] [hero.tsx](file:///Users/dharanshsingh/GENESIS/components/hero.tsx)
- Clean up text stack to strict 4-element limit: Eyebrow badge, Headline (max 2 lines), Subtext (under 20 words), Dual CTAs with Button-in-Button interactive arrow.
- Apply double-bezel concentric frame to the primary care team photograph.
- Smooth staggered entrance animation for headline, metric pill, and visual anchor.
- Descender clearance and zero em-dashes.

---

### 4. Icon & Value Strip

#### [MODIFY] [icon-strip.tsx](file:///Users/dharanshsingh/GENESIS/components/icon-strip.tsx)
- Upgrade icon cards with double-bezel architecture, delicate Phosphor/line icons, and subtle hover elevation.
- Fluid staggered scroll reveal with unhurried typography.

---

### 5. About & Clinical Story

#### [MODIFY] [about-section.tsx](file:///Users/dharanshsingh/GENESIS/components/about-section.tsx)
- Replace all em-dashes with graceful prose.
- Dual-arched photography gallery with subtle parallax scale on hover and refined double-bezel metric cards.
- Restrain eyebrow usage to maintain the 1-per-3 section ratio.

---

### 6. Specialist Profile & Genesis Origins

#### [MODIFY] [split-specialist.tsx](file:///Users/dharanshsingh/GENESIS/components/split-specialist.tsx)
- Asymmetrical split layout with double-bezel nested story card and Dr. Uma Sheshgiri clinical credentials.
- Refined button-in-button consultation action with magnetic micro-physics.

---

### 7. Services Bento & Care Pathways

#### [MODIFY] [services-grid.tsx](file:///Users/dharanshsingh/GENESIS/components/services-grid.tsx)
- Transform from basic 6-box grid into an asymmetrical bento grid with visual variety (feature card + interactive pathway cards).
- Remove AI-slop numbered tags ("01", "02") and replace with genuine clinical context.
- Double-bezel concentric cards with inner light borders and diagonal trailing icon hover effects.

---

### 8. Sanctuary Distinction ("Why Choose Us")

#### [MODIFY] [why-choose-us.tsx](file:///Users/dharanshsingh/GENESIS/components/why-choose-us.tsx)
- Deep plum sanctuary canvas (`#331137`) with refined layered photography.
- Remove image pill overlays (`Maternity Care`) to respect taste-skill Section 9.F.
- Double-bezel architectural frame for the newborn & mother photograph.

---

### 9. Testimonials & Social Proof

#### [MODIFY] [testimonials.tsx](file:///Users/dharanshsingh/GENESIS/components/testimonials.tsx)
- Fluid staggered testimonial cards with verified patient photography.
- Strict 3-line quote rule and zero em-dashes in attributions.
- Concentric double-bezel avatars with subtle glowing hover ring.

---

### 10. Final Call to Action & Footer

#### [MODIFY] [final-cta.tsx](file:///Users/dharanshsingh/GENESIS/components/final-cta.tsx)
- Magnetic button-in-button primary CTA ("Book Consultation" with nested right-arrow pill).
- Warm sanctuary background with ambient radial glow.

#### [MODIFY] [footer.tsx](file:///Users/dharanshsingh/GENESIS/components/footer.tsx)
- Remove all en-dashes (`–`) and em-dashes (`—`) in address, descriptions, and metadata.
- Clean typography and micro-interactions on contact links.

---

### 11. Page Shell & Styling

#### [MODIFY] [app/page.tsx](file:///Users/dharanshsingh/GENESIS/app/page.tsx)
- Unify canvas transitions: replace multiple harsh 16px striped gradient bridges with seamless, elegant atmospheric transitions.

#### [MODIFY] [app/globals.css](file:///Users/dharanshsingh/GENESIS/app/globals.css)
- Add double-bezel utilities, custom spring cubic-beziers, and liquid glass approximation tokens.

---

## Verification Plan

### Automated Tests
- Run `npm run build` to verify Next.js 16 + React 19 compilation, TypeScript types, and SSG generation.
- Run `npm run lint` to ensure ESLint passes cleanly.

### Manual / Browser Verification
- Verify 60fps smooth animations and transitions on scroll and hover.
- Check responsive collapse on mobile (<768px): single column, no horizontal overflow, no touch target collisions.
- Check Reduced Motion: ensure animations degrade gracefully to instant states when `prefers-reduced-motion: reduce` is enabled.
- Audit for ZERO em-dashes (`—` or `–`) across all text strings.
- Audit contrast ratios (WCAG AA min 4.5:1).
