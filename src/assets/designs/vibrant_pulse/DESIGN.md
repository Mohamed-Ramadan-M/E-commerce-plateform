---
name: Vibrant Pulse
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#434656'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#747688'
  outline-variant: '#c4c5d9'
  surface-tint: '#124af0'
  primary: '#0040e0'
  on-primary: '#ffffff'
  primary-container: '#2e5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#b8c3ff'
  secondary: '#a04100'
  on-secondary: '#ffffff'
  secondary-container: '#fe6b00'
  on-secondary-container: '#572000'
  tertiary: '#7a1bc8'
  on-tertiary: '#ffffff'
  tertiary-container: '#943fe2'
  on-tertiary-container: '#faecff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001356'
  on-primary-fixed-variant: '#0035be'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 28px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system targets a fashion-forward, younger male demographic that seeks energy and self-expression in their wardrobe. The brand personality is extroverted, trendy, and approachable.

The visual style is a fusion of **High-Contrast / Bold** and **Glassmorphism**. It utilizes saturated color blocks to drive momentum, balanced by spacious layouts and translucent "frosted" overlays to keep the interface feeling airy and modern. The emotional response should be one of excitement and ease, moving away from the traditional, minimalist austerity of luxury fashion toward a more "gamified" and playful retail experience.

## Colors

The palette is anchored by "Electric Blue" (Primary), which serves as the main interactive driver. "Bright Orange" (Secondary) is used sparingly for high-attention calls to action, such as "Add to Cart" or limited-time offers. "Soft Purple" (Tertiary) provides a trendy, secondary accent for category tags and background gradients.

The default mode is light to maintain a clean, e-commerce-ready canvas, but it uses high-chroma accents to prevent it from feeling clinical. Neutral tones are deep charcoal rather than pure black to keep the shadows and text feeling integrated with the colorful palette.

## Typography

This design system uses **Bricolage Grotesque** for headlines to achieve a "puffy," expressive, and trendy look. Its unique, rounded terminals and variable widths provide a custom-brand feel that stands out from competitors.

For readability and functional UI elements, **Plus Jakarta Sans** is used. Its modern, slightly rounded geometric forms complement the display font while ensuring that product descriptions and price points remain highly legible at small sizes. Use tight tracking for large headlines to emphasize the "bubble" aesthetic.

## Layout & Spacing

The layout follows a **Fluid Grid** model with generous white space to allow high-energy colors to breathe. 

- **Desktop:** 12-column grid with a maximum content width of 1440px. Gutters are kept wide (24px) to maintain a premium feel.
- **Mobile:** 4-column grid with 16px side margins. 

The vertical rhythm is based on an 8px scale. Use large "xl" spacing between distinct product sections on the homepage to create a sense of discovery and prevent visual clutter.

## Elevation & Depth

Hierarchy is achieved through **Ambient Shadows** and **Tonal Layers**. 

Shadows should be "long" and soft, using a slight primary color tint (e.g., a faint blue-tinted shadow for product cards) rather than pure grey. This keeps the interface feeling vibrant even in the shadows. 

Layering uses a three-tier system:
1. **Base:** The background color (#fcf9f8).
2. **Surface:** Card elements with white backgrounds and subtle 10% opacity shadows.
3. **Floating:** Navigation bars and "Add to Cart" modals use a backdrop blur (12px) and 80% opacity to create a glassmorphic effect, signaling they are above the main content flow.

## Shapes

The shape language is extremely **Rounded and Pill-shaped**, pushing the "bubble" aesthetic to its limit. All standard components (buttons, inputs) utilize a generous 1rem (16px) corner radius. Large containers, such as product cards or promotional banners, should use the `rounded-xl` (3rem/48px) setting to emphasize the friendly, oversized, and ultra-modern persona of the brand.

Avoid sharp 90-degree angles entirely; even small utility elements should feel tactile and softened to maintain consistency with the brand's expressive energy.

## Components

### Buttons
Primary buttons use the Electric Blue background with white text and a subtle drop shadow. On hover, they should scale slightly (1.05x) rather than just changing color. The "Add to Cart" button is the only element allowed to use the Secondary Bright Orange.

### Chips
Used for sizes (S, M, L) and categories. These should have a "Soft Purple" background with a darker purple text for high contrast. Shape is fully pill-shaped (rounded-full).

### Input Fields
Inputs use a light grey background with a subtle inner shadow to feel "recessed." The focus state should feature a thick 2px Electric Blue border. All inputs use the default 1rem corner radius.

### Cards
Product cards are white with `rounded-xl` (3rem) corners. The product image should have a slightly different background tint (e.g., very light purple or blue) to make the clothing "pop" from the card surface.

### Interactive Elements
Checkboxes and Radio buttons should be oversized and use the Primary Color for the active state to ensure they feel tactile and "squishy."