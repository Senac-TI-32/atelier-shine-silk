---
name: Atelier Couture
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d4'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ed'
  surface-container: '#f5ece7'
  surface-container-high: '#efe6e2'
  surface-container-highest: '#e9e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#554243'
  inverse-surface: '#34302c'
  inverse-on-surface: '#f8efea'
  outline: '#887272'
  outline-variant: '#dbc0c1'
  surface-tint: '#9b4149'
  primary: '#45000e'
  on-primary: '#ffffff'
  primary-container: '#631621'
  on-primary-container: '#e77c83'
  inverse-primary: '#ffb3b6'
  secondary: '#7c5715'
  on-secondary: '#ffffff'
  secondary-container: '#ffcc7f'
  on-secondary-container: '#795512'
  tertiary: '#1f1e1b'
  on-tertiary: '#ffffff'
  tertiary-container: '#343330'
  on-tertiary-container: '#9e9b97'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b6'
  on-primary-fixed: '#40000c'
  on-primary-fixed-variant: '#7d2a33'
  secondary-fixed: '#ffddaf'
  secondary-fixed-dim: '#f0be72'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#614000'
  tertiary-fixed: '#e6e2dd'
  tertiary-fixed-dim: '#c9c6c1'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#484743'
  background: '#fff8f5'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  display:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  caption:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is crafted for an ultra-luxury tailoring experience, evoking the tactile sensation of silk, the precision of haute couture, and the timelessness of a heritage atelier. The target audience is discerning individuals seeking bespoke "Moda Festa" (party wear) and high-end bridal services.

The visual style is **Contemporary Luxury**, a blend of high-end editorial aesthetics and organic, fluid elements. It draws from:
- **Minimalism:** Use of generous negative space to allow high-quality photography of fabrics and gowns to breathe.
- **Tactile / Editorial:** Referencing the physical nature of fashion through subtle textures and a refined typographic hierarchy.
- **Sophisticated Detail:** Incorporating delicate, hairline strokes and gold accents that mirror the intricacy of fine stitching and gold thread.

The emotional response should be one of confidence, exclusivity, and impeccable craftsmanship.

## Colors

The palette is derived from the artisanal textures of the atelier.
- **Deep Burgundy (Primary):** A rich, regal wine tone used for primary actions, high-level accents, and as a symbol of elegance.
- **Artisanal Gold (Secondary):** Used sparingly for decorative elements, icon accents, and subtle dividers, representing the "Shine" in the brand identity.
- **Silk Cream (Surface):** The core background color. Avoid pure white in favor of this warmer, more sophisticated off-white which mimics high-quality fabric.
- **Charcoal Ink (Neutral):** A soft, warm black used for maximum legibility without the harshness of true black, maintaining a soft, tailored feel.

Color application should follow a 60-30-10 rule: 60% Silk Cream, 30% Primary/Neutral text, and 10% Gold accents.

## Typography

This design system utilizes a high-contrast typographic pair to balance heritage and modernity.
- **Libre Caslon Text:** Used for all headlines. Its literary, refined weight evokes the prestige of traditional fashion houses. 
- **Manrope:** Used for body text and labels. Its clean, modern, and balanced proportions provide a functional, contemporary counterpoint to the serif headlines, ensuring high legibility on digital screens.

**Key Rule:** Headings should never be bolded. Their authority comes from their scale and the inherent elegance of the serif's stroke. Use `label-md` for buttons and navigation items to create a crisp, "tailored" look with its uppercase styling and increased tracking.

## Layout & Spacing

The layout philosophy is **Luxurious Spacing**. We prioritize "breathability" to reflect the high-end nature of the brand.
- **Grid:** A 12-column fluid grid for desktop with wide margins (64px) to center-align the content, creating a focused, editorial look.
- **Rhythm:** Vertical spacing between major sections should be generous (120px+), creating a paced, rhythmic scrolling experience that feels like flipping through a premium magazine.
- **Mobile:** Transition to a 4-column grid with 16px margins. High-impact imagery should bleed edge-to-edge on mobile to maintain the visual "wow" factor.

## Elevation & Depth

To maintain the sophisticated "flat" editorial aesthetic, depth is created through **Tonal Layering** and **Subtle Blurs** rather than heavy shadows.
- **Surfaces:** Use the secondary surface color (`#F1E9E0`) to define cards or distinct sections against the main background.
- **Shadows:** When necessary (e.g., for floating navigation bars or primary modals), use a very soft, "Atmospheric Shadow": `0px 10px 40px rgba(99, 22, 33, 0.04)`. The slight burgundy tint in the shadow creates a more organic, warmer feel than neutral grey.
- **Dividers:** Use hairline 1px borders in the Gold color at low opacity (20%) or the `surface.border` color for a "stitched" divider feel.

## Shapes

The design system employs **Sharp (0px)** roundedness. 
Architecture and high-fashion tailoring are built on precise lines. Sharp corners reflect the "cut" of the fabric and the professionalism of an atelier. 

- **Exceptions:** Form inputs and buttons maintain sharp 90-degree angles. Circular elements are reserved strictly for social icons or small "status" indicators to keep the overall aesthetic structured and architectural.

## Components

- **Buttons:** Primary buttons use the Burgundy background with White `label-md` text. Secondary buttons are "Ghost" style with a 1px Gold border. Both use a "hover" state that shifts the background to the Gold tone, mimicking the "shine" of silk.
- **Input Fields:** Minimalist design with only a bottom border (1px). The label floats above in `caption` size when the field is active.
- **Cards:** No borders or heavy shadows. Use the `surface.muted` background and generous internal padding (32px) to frame content.
- **Chips/Tags:** Used for garment categories (e.g., "Silk," "Lace"). Small, uppercase `label-md` text with high tracking, no background, and a simple underline.
- **The "Thread" Divider:** A unique component consisting of a thin gold line with a small decorative flourish in the center (inspired by the logo’s filigree) to separate major content blocks.
