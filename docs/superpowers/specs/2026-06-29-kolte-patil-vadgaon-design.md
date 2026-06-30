# Design Spec: Kolte-Patil The Reserve & Vyana

A high-fidelity, conversion-focused, single-page landing website for the pre-launch of **Kolte Patil The Reserve** and the **Vyana** tower in Vadgaon, Pune. The website styling inherits the brand guidelines (orange, gold, charcoal) of `koltepatil.com`.

---

## 1. Design System & Style Tokens

### Colors
* **Primary (Charcoal)**: `#303030`
* **Primary Light**: `#4d4d4d`
* **Primary Dark**: `#222222`
* **Accent Orange**: `#fb8f1f`
* **Accent Gold**: `#fcb711`
* **Accent Gold Dark**: `#ff8c17`
* **Backgrounds**:
  * Light Accent Section: `#f9f9f9`
  * Cream Section: `#f4f4f4`
  * Dark Section (Footer/Hero): `#222222`
* **Text**:
  * Dark: `#303030`
  * Muted: `#777777`
  * Light: `#ffffff`
* **Gradients**:
  * Hero overlay: `linear-gradient(135deg, rgba(34, 34, 34, 0.8) 0%, rgba(77, 77, 77, 0.7) 100%)`
  * Orange buttons: `linear-gradient(90deg, #fcb711, #ff8c17)`

### Typography
* **Headings & Body**: `'Inter'`, -apple-system, sans-serif

---

## 2. Layout Structure

### Header / Navbar
* Sticky glassmorphic navbar (white background `rgba(255, 255, 255, 0.98)` on scroll).
* Left logo: Official Kolte-Patil logo image `https://www.koltepatil.com/assets/dist/images/logo.jpg`.
* Nav Links: Home, Highlights, Pricing, Floor Plans, Amenities, Location, Contact.
* Far-right CTA: "Enquire Now" orange button.

### Hero Section
* Premium background image.
* Bold headline: "The Ultimate Riverside Township Lifestyle - Kolte Patil The Reserve".
* Subheadline: "Presenting Vyana Premium Towers".
* Three action buttons: "Get Pricing", "Book Site Visit", "Download Brochure" (all trigger EOI lead capture modal).

### Teaser Video Section
* Provision to play a promo video. Clean video container with play button, overlaying on a premium project thumbnail.

### Key Highlights
* 4-column icon-grid for township metrics:
  * 🏞️ **21 Acres** premium township
  * 🏢 **22 Towers** rising into the skyline
  * 🌳 **70% Open-to-Sky** spaces
  * 🌊 **Riverside Development** & views

### Pre-Launch Pricing & Floor Plans
* **Dynamic Tabs**: Toggle between **2 BHK**, **2.5 BHK**, and **3 BHK**.
* Tab content renders:
  * Sizing, configurations & price ranges.
  * Floor plan layout image.

### Amenities Image Gallery
Premium lifestyle grids featuring:
- Playground
- Jogging track
- Park
- Swimming pool
- Children play area
- Indoor game (2-3 images)
- Outdoor games (2-3 images)
- Party hall
- Party lawn
- 3 club houses
- Senior citizen area
- Theater

### Lead Form & Sourcing Contact
* Simple contact form fields: Name, Phone, Email, Selected Configuration.
* Submission submits the form data and launches a WhatsApp redirection to Sourcing Manager contact numbers:
  * For The Reserve leads: `96377 37557`, `9767515773`, `9765515773`
  * For Vyana leads: `9767515773`, `9765515773`, `96377 37557`
* RERA registration banner at bottom: `PM1261012600748`.
