# Implementation Plan: VCUS Genesis Landing Page (Next.js + Tailwind CSS + shadcn/ui)

Set up a high-performance, best-in-class Next.js (App Router, TypeScript) frontend codebase styled with Tailwind CSS and shadcn/ui, meticulously replicating the refined, humanized aesthetic of the **Nascere** obstetric/gynecology design reference.

---

## User Review Required

> [!IMPORTANT]
> **Aesthetic & Brand Palette Alignment**
> The design will mirror the provided Nascere reference:
> - **Primary Brand Tone**: Warm organic eucalyptus / sage green (`#4A6B5D`, `#3D594D`), soft powder mist blue (`#DCE7E7`, `#C7D8D8`), warm cream/sand background (`#FAF8F5`), and warm charcoal text (`#1F2923`).
> - **Typography**: Editorial Serif (`Playfair Display` or `Cormorant Garamond`) paired with modern legible sans (`Plus Jakarta Sans`).
> - **Layout & Visual Architecture**: Arch/pill photo frames, circular icon badges, split dual-panel specialist feature, rounded card matrices, dark sage feature banner, and clean editorial testimonials.

> [!NOTE]
> **Interactivity & Functionality**
> In addition to direct `tel:+919900098736` links, clicking "Book a Consultation" will trigger an interactive **Consultation Booking Modal / Sheet** with options to:
> 1. Instantly Call (`+91 99000 98736`) or open WhatsApp.
> 2. Submit a Quick Appointment / Callback Request (Name, Phone, Service, Preferred Time) with client-side validation and toast confirmation.

---

## Proposed Architecture & Structure

```
/Users/dharanshsingh/GENESIS
├── app/
│   ├── layout.tsx               # Root layout, Google Fonts (Cormorant Garamond & Plus Jakarta Sans), SEO meta
│   ├── page.tsx                 # Main landing page assembling all sections
│   └── globals.css              # Custom Tailwind variables, smooth scrolling, editorial styles
├── components/
│   ├── ui/                      # shadcn/ui primitives (button, dialog, card, badge, sheet, input, etc.)
│   ├── navbar.tsx               # Sticky header with logo wordmark, nav links, and CTA
│   ├── hero.tsx                 # Hero section with eyebrow, serif headline, subhead, CTA, and arched visual
│   ├── icon-strip.tsx           # 4-item circular icon strip (Warmth, Care, Safety, Expertise)
│   ├── about-section.tsx        # "More than a clinic" editorial section with dual pill images
│   ├── split-specialist.tsx     # Split story panel + Dr. Uma Sheshgiri profile card & care tags
│   ├── services-grid.tsx        # 6 services cards with visual and micro-interactions
│   ├── why-choose-us.tsx        # Deep sage green highlight section with check points & imagery
│   ├── testimonials.tsx         # Patient experiences with quote cards and avatar badges
│   ├── final-cta.tsx            # Dramatic organic dark sage CTA banner with quick booking
│   ├── booking-modal.tsx        # Interactive Consultation / Callback modal with WhatsApp & direct call
│   └── footer.tsx               # Contact details, address, hours, and legal links
├── lib/
│   └── utils.ts                 # shadcn clsx/tailwind-merge helper
├── public/
│   └── images/                  # High-resolution clinic, doctor, and maternity imagery assets
├── tailwind.config.ts           # Custom colors (sage, mist, cream, sand), borders, typography
├── components.json              # shadcn/ui configuration
└── package.json                 # Next.js 14/15, Tailwind CSS, Lucide icons, Framer Motion
```

---

## Proposed Changes

### Phase 1: Project Scaffolding & Dependencies
- Initialize Next.js 14/15 with TypeScript, Tailwind CSS, ESLint, and App Router.
- Configure `shadcn/ui` foundation (Radix primitives, Lucide React, class-variance-authority, clsx, tailwind-merge).
- Add `framer-motion` for smooth reveal micro-animations.

### Phase 2: Design System & Color Tokens
- Configure `tailwind.config.ts` and `app/globals.css` with exact brand tokens:
  - Cream/Sand base: `bg-[#FAF8F5]` / `bg-[#F5F2EB]`
  - Sage green accent: `brand-sage` (`#4A6B5D`), `brand-sage-dark` (`#364F44`), `brand-sage-light` (`#6B8F80`)
  - Mist Blue accent: `brand-mist` (`#DCE7E7`), `brand-mist-subtle` (`#EAF1F1`)
  - Warm Charcoal: `brand-charcoal` (`#1F2923`), `brand-muted` (`#5E6D64`)
- Set up Google Fonts: `Playfair Display` / `Cormorant Garamond` for headings and `Plus Jakarta Sans` for body copy.

### Phase 3: High-Fidelity Component Implementation (Nascere Alignment)
1. **Header & Navigation ([navbar.tsx](file:///Users/dharanshsingh/GENESIS/components/navbar.tsx))**:
   - Wordmark: "VCUS Genesis", subtitle: "GYNECOLOGY & OBSTETRICS".
   - Links: About, Dr. Uma Sheshgiri, Services, Why Us, Testimonials.
   - Quick "Book a Consultation" pill button + mobile toggle menu.
2. **Hero Section ([hero.tsx](file:///Users/dharanshsingh/GENESIS/components/hero.tsx))**:
   - Eyebrow: "Women's care built on"
   - Headline: *warmth*, *safety* and *expertise*.
   - Subhead: Gynecology and obstetrics with humanized care...
   - Direct Call button with phone icon + phone number (`+91 99000 98736`).
   - Arched pill photo showcase matching Nascere's dual doctor / caring aesthetic.
3. **Icon Strip ([icon-strip.tsx](file:///Users/dharanshsingh/GENESIS/components/icon-strip.tsx))**:
   - 4 circular badge items with warm icons:
     1. Warmth in every detail
     2. Care through every stage
     3. Safety that builds trust
     4. Expertise with a human touch
4. **About Section ([about-section.tsx](file:///Users/dharanshsingh/GENESIS/components/about-section.tsx))**:
   - "More than a clinic — a space built for women's care"
   - Humanized care narrative with dual arch/pill visuals.
5. **Split Section — How It Began & Dr. Uma Sheshgiri ([split-specialist.tsx](file:///Users/dharanshsingh/GENESIS/components/split-specialist.tsx))**:
   - Left: Soft powder mist blue card with story of Dr. Uma Sheshgiri's four decades of dedication and "Book a Consultation" button.
   - Right: Specialist profile card for Dr. Uma Sheshgiri (MD, DGO) with 40+ years experience, credential badges, and the 6 areas of care tags.
6. **Services Section ([services-grid.tsx](file:///Users/dharanshsingh/GENESIS/components/services-grid.tsx))**:
   - Left visual: Clinical care photo with arch shape.
   - Right grid: 6 rounded cards for Gynecology Consultations, Humanized Antenatal Care, In-house Diagnostics, Fertility Planning, Delivery & Postnatal Support, and Preventive Screenings.
7. **Why Choose Genesis? ([why-choose-us.tsx](file:///Users/dharanshsingh/GENESIS/components/why-choose-us.tsx))**:
   - Deep sage green full-width section with 5 checklist items and organic pill photo insets.
8. **Testimonials ([testimonials.tsx](file:///Users/dharanshsingh/GENESIS/components/testimonials.tsx))**:
   - Elegant patient feedback quotes (Ananya S., Priya M., Kavya R.) with patient portrait badges.
9. **Final CTA & Booking Modal ([final-cta.tsx](file:///Users/dharanshsingh/GENESIS/components/final-cta.tsx) & [booking-modal.tsx](file:///Users/dharanshsingh/GENESIS/components/booking-modal.tsx))**:
   - High-impact section with deep sage background and quick consultation booking.
   - Fully working modal with click-to-call, WhatsApp chat, and callback request form.
10. **Footer ([footer.tsx](file:///Users/dharanshsingh/GENESIS/components/footer.tsx))**:
    - Bengaluru address (3rd Floor, SL Complex, Amarajyoti Layout, New BEL Road, Bengaluru – 560094), phone, email (`umasheshgiri.c@gmail.com`), and copyright.

---

## Verification Plan

### Automated Checks
- `npm run build` to verify strict TypeScript typing, Tailwind compilation, and zero ESLint errors.
- Check responsive viewport scaling and accessibility tags.

### Visual & Interactive Verification
- Start local development server with `npm run dev`.
- Verify the layout against the Nascere screenshot reference:
  - Color harmony, arch shapes, card borders, typography hierarchy.
  - Test the "Book a Consultation" button to confirm modal popup and direct calling functionality.
  - Test mobile responsiveness (hamburger menu, stacked cards, touch targets).
