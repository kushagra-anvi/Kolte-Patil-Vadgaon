# Kolte-Patil Vadgaon Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium, single-page, fully responsive pre-launch landing page for Kolte-Patil Vadgaon, replicating the typography, color system, and layout aesthetics of Vantaara.net.

**Architecture:** High-fidelity HTML, CSS, and Vanilla JS structure. The assets directory houses images; dynamic floor plan tabs render localized content, and the contact forms integrate with WhatsApp APIs for lead capture.

**Tech Stack:** HTML5, CSS3 Custom Properties (CSS variables), Vanilla JS, Google Fonts, and Font Awesome 6.

---

### Task 1: Directory Setup & Asset Integration

**Files:**
- Create: `/Users/kushagra/Desktop/Projects/kolte-patil-vadgaon-landing/assets/`
- Copy: `/Users/kushagra/.gemini/antigravity-ide/brain/5555799c-c196-45df-85cd-48137f3c196f/media__1782717880995.png` to `/Users/kushagra/Desktop/Projects/kolte-patil-vadgaon-landing/assets/unit-2bhk.png`
- Copy: `/Users/kushagra/.gemini/antigravity-ide/brain/5555799c-c196-45df-85cd-48137f3c196f/media__1782717890840.png` to `/Users/kushagra/Desktop/Projects/kolte-patil-vadgaon-landing/assets/unit-2.5bhk.png`
- Copy: `/Users/kushagra/.gemini/antigravity-ide/brain/5555799c-c196-45df-85cd-48137f3c196f/media__1782717868948.png` to `/Users/kushagra/Desktop/Projects/kolte-patil-vadgaon-landing/assets/unit-3bhk.png`

- [ ] **Step 1: Create directories**
  Run command to build the folders: `mkdir -p /Users/kushagra/Desktop/Projects/kolte-patil-vadgaon-landing/assets`
- [ ] **Step 2: Copy image assets**
  Run copy command for 2 BHK: `cp /Users/kushagra/.gemini/antigravity-ide/brain/5555799c-c196-45df-85cd-48137f3c196f/media__1782717880995.png /Users/kushagra/Desktop/Projects/kolte-patil-vadgaon-landing/assets/unit-2bhk.png`
  Run copy command for 2.5 BHK: `cp /Users/kushagra/.gemini/antigravity-ide/brain/5555799c-c196-45df-85cd-48137f3c196f/media__1782717890840.png /Users/kushagra/Desktop/Projects/kolte-patil-vadgaon-landing/assets/unit-2.5bhk.png`
  Run copy command for 3 BHK: `cp /Users/kushagra/.gemini/antigravity-ide/brain/5555799c-c196-45df-85cd-48137f3c196f/media__1782717868948.png /Users/kushagra/Desktop/Projects/kolte-patil-vadgaon-landing/assets/unit-3bhk.png`
- [ ] **Step 3: Commit setup**
  Run: `git add /Users/kushagra/Desktop/Projects/kolte-patil-vadgaon-landing/assets && git commit -m "setup: directory and asset image files"`

---

### Task 2: Create HTML Structure

**Files:**
- Create: `/Users/kushagra/Desktop/Projects/kolte-patil-vadgaon-landing/index.html`

- [ ] **Step 1: Write index.html**
  Create `index.html` with clean semantic HTML5, Google Fonts links, Font Awesome CDN, Header navigation, Hero banner, Highlights grids, Tabbed Floor Plan sections referencing the copied assets, Contact Us form, and RERA footer.
- [ ] **Step 2: Commit**
  Run: `git add /Users/kushagra/Desktop/Projects/kolte-patil-vadgaon-landing/index.html && git commit -m "feat: add landing page HTML structure"`

---

### Task 3: Create Stylesheet (CSS)

**Files:**
- Create: `/Users/kushagra/Desktop/Projects/kolte-patil-vadgaon-landing/styles.css`

- [ ] **Step 1: Write styles.css**
  Write styles.css using custom properties defining `--primary: #1a3a5c`, `--accent: #c9a84c`, and backgrounds like Vantaara. Implement standard resets, layout structures, tab transitions, glassmorphic header states, and modal overlays.
- [ ] **Step 2: Commit**
  Run: `git add /Users/kushagra/Desktop/Projects/kolte-patil-vadgaon-landing/styles.css && git commit -m "feat: add style design system and layout rules"`

---

### Task 4: Create Client Interactions (JS)

**Files:**
- Create: `/Users/kushagra/Desktop/Projects/kolte-patil-vadgaon-landing/script.js`

- [ ] **Step 1: Write script.js**
  Write script.js handling mobile menu toggle, scroll-based header styling transitions, active scroll section highlighting, Floor Plan tab switching transitions, and form validation with WhatsApp redirection.
- [ ] **Step 2: Commit**
  Run: `git add /Users/kushagra/Desktop/Projects/kolte-patil-vadgaon-landing/script.js && git commit -m "feat: add navigation, tabs, and form handlers"`

---

### Task 5: End-to-End Verification

**Files:**
- Test: Open locally.

- [ ] **Step 1: Open index.html in a browser and review layout**
- [ ] **Step 2: Verify interactive tabs, modal click triggers, and responsive layout scaling**
- [ ] **Step 3: Confirm form redirects to WhatsApp with proper values**
