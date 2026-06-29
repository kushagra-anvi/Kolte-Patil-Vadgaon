# Design Spec: Kolte-Patil Vadgaon Landing Page

A high-fidelity, conversion-focused, single-page landing website for the pre-launch of the Riverside Township by Kolte-Patil in Vadgaon, Pune. The website styling inherits the premium dark navy and metallic gold design language of Vantaara.net.

---

## 1. Design System & Style Tokens

### Colors
* **Primary (Deep Navy Blue)**: `#1a3a5c`
* **Primary Light**: `#2a5a8c`
* **Primary Dark**: `#0f2640`
* **Accent Gold**: `#c9a84c`
* **Accent Gold Light**: `#d4b96a`
* **Accent Gold Dark**: `#b08e30`
* **Backgrounds**:
  * Light Accent Section: `#f8f6f1`
  * Cream Section: `#faf7f0`
  * Dark Section (Footer/Hero): `#0d1b2a`
  * Deeper Dark: `#070f1a`
* **Text**:
  * Dark: `#1a1a2e`
  * Muted: `#5a6170`
  * Light: `#f0ead2`
* **Gradients**:
  * Hero overlay: `linear-gradient(135deg, rgba(13, 27, 42, 0.85) 0%, rgba(26, 58, 92, 0.75) 50%, rgba(42, 90, 140, 0.65) 100%)`
  * Gold buttons: `linear-gradient(135deg, #c9a84c, #e8d48b, #c9a84c)`
  * Dark backgrounds: `linear-gradient(180deg, #0d1b2a 0%, #162d44 100%)`

### Typography
* **Headings**: `'Playfair Display'`, Georgia, serif
* **Body Text**: `'Inter'`, -apple-system, sans-serif
* **UI/Accents**: `'Outfit'`, 'Inter', sans-serif

---

## 2. Layout Structure

### Header / Navbar
* Sticky glassmorphic navbar (`rgba(13, 27, 42, 0.97)` on scroll, blurred).
* Left logo: "KOLTE-PATIL" in clean lettering.
* Nav Links: Home, Highlights, Pricing, Floor Plans, Amenities, Location, Contact.
* Far-right CTA: "Enquire Now" pulse-glow button.

### Hero Section
* Premium background image.
* Bold headline: "The Ultimate Riverside Township Lifestyle by Kolte-Patil".
* Dynamic badge: "📍 Vadgaon, Pune | 21-Acre Township".
* Three action buttons: "Get Pricing", "Book Site Visit", "Download Brochure" (all trigger EOI lead capture modal).

### Key Highlights
* 4-column icon-grid for township metrics:
  * 🏞️ **21 Acres** premium township
  * 🏢 **22 Towers** rising into the skyline
  * 🌳 **70% Open-to-Sky** spaces
  * 🌊 **Riverside Development** & views

### Pre-Launch Pricing & Floor Plans
* **Dynamic Tabs**: Toggle between **2 BHK**, **2.5 BHK**, and **3 BHK**.
* Tab content renders:
  * Configurations & price ranges (e.g., ₹85 L to ₹1.05 CR for 2 BHK).
  * Exact floor plan images (copied from the uploaded workspace images).
  * "Request Floor Plan PDF" CTA button triggering the modal.

### Lead Form & Sourcing Contact
* Simple contact form fields: Name, Phone, Email, Selected Configuration.
* Submission submits the form data and launches a WhatsApp redirection to Sourcing Manager **Makrand Pokharkar** (`+917030025045`) with pre-filled lead details.
* RERA registration banner at bottom: `PM1261012600748`.

---

## 3. Verification Plan

### Automated Checks
* Validate HTML markup for semantics.
* Check CSS layout for accessibility and responsive breakpoints (mobile, tablet, desktop).

### Manual Checks
* Launch the page locally, test tab switching, modal popup open/close transitions, and verify WhatsApp form action redirection.
