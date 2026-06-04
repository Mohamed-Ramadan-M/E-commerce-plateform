---
name: Zahy Digital Streetwear
colors:
  surface: '#111508'
  surface-dim: '#111508'
  surface-bright: '#373b2c'
  surface-container-lowest: '#0c0f04'
  surface-container-low: '#1a1d10'
  surface-container: '#1e2113'
  surface-container-high: '#282b1d'
  surface-container-highest: '#333627'
  on-surface: '#e2e4cf'
  on-surface-variant: '#c4c9ac'
  inverse-surface: '#e2e4cf'
  inverse-on-surface: '#2f3223'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#abd600'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#c3f400'
  on-primary-container: '#556d00'
  inverse-primary: '#506600'
  secondary: '#ffabf3'
  on-secondary: '#5b005b'
  secondary-container: '#fe00fe'
  on-secondary-container: '#500050'
  tertiary: '#ffffff'
  on-tertiary: '#411d66'
  tertiary-container: '#efdbff'
  on-tertiary-container: '#78549f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#ffd7f5'
  secondary-fixed-dim: '#ffabf3'
  on-secondary-fixed: '#380038'
  on-secondary-fixed-variant: '#810081'
  tertiary-fixed: '#efdbff'
  tertiary-fixed-dim: '#dcb8ff'
  on-tertiary-fixed: '#2b0150'
  on-tertiary-fixed-variant: '#59367e'
  background: '#111508'
  on-background: '#e2e4cf'
  surface-variant: '#333627'
typography:
  display-xl:
    fontFamily: DynaPuff
    fontSize: 120px
    fontWeight: '700'
    lineHeight: 110%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: DynaPuff
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: DynaPuff
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: -0.02em
  headline-md:
    fontFamily: DynaPuff
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 110%
  body-lg:
    fontFamily: Climate Crisis
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 150%
  body-md:
    fontFamily: Climate Crisis
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 150%
  label-bold:
    fontFamily: DynaPuff
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 120%
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1440px
  stack-sm: 12px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style

This design system is built for the "digital-first streetwear" era—a high-octane, maximalist aesthetic that refuses to fade into the background. It targets a Gen-Z and Alpha audience that thrives on visual noise, high-contrast energy, and experimental layouts. 

The style is a deliberate collision of **Maximalism** and **Glassmorphism**. It embraces "the more is more" philosophy, utilizing massive typography and vibrant neons against a deep, infinite void. Surfaces are treated like liquid glass—translucent, refractive, and layered—while interactive elements utilize exaggerated physical metaphors (puffiness and bounce) to create a tactile, premium-yet-chaotic digital shopping experience.

## Colors

The palette is anchored by **Deep Midnight Purple**, which serves as the canvas for the high-energy neons to vibrate against. **Electric Neon Green** is the primary driver for action, used for conversion points and critical brand moments. **Hot Pink** acts as the disruptive secondary, used for accents, badges, and "hype" elements.

The default mode is **Dark**, as the vibrance of the neon palette requires a low-light environment to achieve its "glowing" effect. Glassmorphism layers should use the Tertiary Purple with reduced opacity and high saturation to maintain depth without losing the brand's color signature.

## Typography

Typography in this design system is treated as a graphic element rather than just a medium for information. **DynaPuff** is used for headlines and labels, providing a bubbly, "puffy" personality that complements the rounded UI. 

Headlines are scaled to massive proportions to create dense, impactful blocks of text. For mobile, display sizes must be aggressively scaled down but maintain their heavy weight to ensure the "streetwear poster" vibe remains intact. 

**Climate Crisis** is used for body text, providing an industrial, heavy-set, and distorted contrast to the playful headers. This creates a high-tension visual hierarchy. Because Climate Crisis is exceptionally bold and stylized, body text should maintain a generous line height to ensure legibility amidst the surrounding visual chaos.

## Layout & Spacing

This design system utilizes a **fluid 12-column grid** for desktop, but encourages "grid-breaking" elements where images or text containers overflow the margins to create an experimental feel.

The spacing rhythm is exaggerated. While the base unit is 8px, layout sections should use large gaps (stack-lg) to allow the high-energy components room to breathe. On mobile, margins are kept tight to maximize screen real estate for product imagery, while gutters remain wide to maintain the chunky, segmented look of the design system.

## Elevation & Depth

Hierarchy is established through a mix of **Glassmorphism** and **Bold Shadows**. Instead of traditional, subtle shadows, this design system uses high-opacity, colored "glow" shadows that match the element's primary color (e.g., a Neon Green button casts a Neon Green shadow).

Depth is layered as follows:
1.  **Floor:** Deep Midnight Purple background.
2.  **Surface:** Semi-transparent glass containers with a `backdrop-filter: blur(20px)` and a thin, 1px high-contrast stroke.
3.  **Floating:** Primary action elements with heavy, offset shadows (8px to 16px offset) that create a "lifted" effect.
4.  **Overlay:** Heavy blurring of the layers beneath to focus the user on modals or cart drawers.

## Shapes

The shape language is defined by **exaggerated roundness**. To match the "puffy" aesthetic of the **DynaPuff** typography, nearly all interactive elements—buttons, input fields, and tags—use a pill-shaped (ROUND_FULL) radius. 

Large containers and product cards should use the `rounded-xl` setting (3rem) to maintain a soft, friendly counterpoint to the aggressive color palette and heavy **Climate Crisis** body text. Avoid sharp corners entirely; even small UI details like checkboxes or icons should lean into rounded terminals and circular forms.

## Components

**Buttons:** 
Massive, pill-shaped, and high-contrast. The primary button is Neon Green with black text. On hover, it should trigger a "blooming" glow effect. Secondary buttons use the Hot Pink or a glassmorphic style with a thick border.

**Cards:** 
Product cards are glass containers with a prominent 2px Hot Pink or Neon Green border. Product imagery should "pop" out of the card container using transparent PNGs that overlap the card's top edge.

**Inputs:** 
Thick, rounded fields with a Midnight Purple fill and a 2px stroke that changes to Neon Green on focus. Labels in **DynaPuff** should be small, bold, and uppercase, sitting just above the input.

**Chips/Badges:** 
Highly saturated, small pill shapes used for "New Drop," "Sold Out," or "Limited" tags. Use a high-contrast combination of Hot Pink backgrounds with Deep Purple text.

**Navigation:** 
A floating glassmorphic bar at the bottom of the screen (mobile) or top (desktop), using high backdrop-blur and a rounded-full shape to feel like a physical object resting on the screen.