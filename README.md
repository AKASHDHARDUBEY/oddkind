# 🎬 ODD KIND — Cinematic Scrollytelling Landing Page

> A high-end, Awwwards-level scrollytelling experience for **ODD KIND** — a full-stack strategic marketing & consulting agency.

![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?logo=greensock&logoColor=white)
![Canvas](https://img.shields.io/badge/HTML5-Canvas-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Custom-1572B6?logo=css3&logoColor=white)

---

## ✨ Overview

This project features a **scroll-driven 3D camera deconstruction animation** where a cinema camera breaks apart into its individual components (lens, sensor, matte box, chassis) as the user scrolls — symbolizing how ODD KIND deconstructs and rebuilds brands through strategic storytelling and production.

### 🎯 Key Highlights

- **240-frame image sequence** rendered on HTML5 `<canvas>` at 60fps
- **Scroll-bound animation** — scrub through frames with your scroll wheel
- **GSAP ScrollTrigger** powered text reveals, parallax, and staggered animations
- **Custom cursor**, **magnetic buttons**, and **cinematic preloader**
- **Horizontal smooth-scroll project showcase** with lerp-based easing

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Component-based UI framework |
| **GSAP 3.15** (ScrollTrigger) | Scroll-driven animations & text reveals |
| **HTML5 Canvas API** | 60fps frame-by-frame rendering |
| **CSS3** | Custom properties, animations, responsive design |
| **requestAnimationFrame** | Smooth, jank-free scroll-to-frame mapping |

---

## 🎨 Brand Identity

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#000000` | Always dominant, cinematic dark |
| Accent | `#A20028` | Crimson red — CTA, underlines, cursor |
| Light Text | `#FFEFEF` | Headings and body copy |
| Heading Font | `Hepta Slab` | Bold, authoritative serif headings |
| Body Font | `Inter` | Clean, modern sans-serif |

---

## 📁 Project Structure

```
my-app/
├── public/
│   ├── frames/              # 240 JPG frames (frame_001.jpg → frame_240.jpg)
│   └── index.html           # Google Fonts, meta tags, favicon
├── src/
│   ├── App.js               # Main layout + GSAP ScrollTrigger orchestration
│   ├── App.css              # Global styles, design tokens, all section CSS
│   ├── components/
│   │   ├── Hero.js           # Hero section with staggered GSAP entrance
│   │   ├── ScrollCanvas.js   # 240-frame scroll-bound canvas animation
│   │   ├── About.js          # Agency introduction section
│   │   ├── SmoothSlider.js   # Horizontal smooth-scroll project showcase
│   │   ├── Clients.js        # Client logo grid with alternating animations
│   │   ├── Services.js       # 3×2 service card grid
│   │   ├── WhyOddKind.js     # Split-layout quote + feature highlights
│   │   ├── Team.js           # Team member cards with scale animations
│   │   ├── Different.js      # "What Makes Us Different" section
│   │   ├── VisionMission.js  # Vision & Mission flip cards
│   │   ├── Process.js        # Step-by-step process timeline
│   │   ├── Contact.js        # Contact form with validation
│   │   ├── FooterCTA.js      # Full-bleed crimson call-to-action banner
│   │   ├── Footer.js         # Site footer with links and socials
│   │   ├── AuthModal.js      # Login/Signup modal with toggle
│   │   ├── Preloader.js      # Cinematic preloader with progress bar
│   │   ├── ScrollProgress.js # Top scroll progress indicator bar
│   │   ├── CustomCursor.js   # Crimson dot cursor with CTA scaling
│   │   └── MagneticButton.js # Magnetic hover effect wrapper
│   └── index.js              # React entry point
└── package.json
```

---

## 🧩 Component Breakdown

### 🎥 `ScrollCanvas.js` — The Core Animation
The centerpiece of the website. Renders a **240-frame image sequence** onto an HTML5 `<canvas>` element, driven entirely by scroll position.

**How it works:**
1. **Batch Preloading** — First 20 frames load immediately; remaining 220 load in background batches of 20
2. **Scroll Mapping** — Maps the scroll progress (0→1) across a 400vh container to frame index (0→239)
3. **Cover Fit** — Maintains aspect ratio using a custom `drawFrame()` function
4. **Text Overlays** — Fades in contextual text at 20%, 40%, 60%, and 80% scroll checkpoints with animated crimson underlines
5. **Performance** — Uses `requestAnimationFrame` with a ticking flag to prevent duplicate draws

---

### 🦸 `Hero.js` — Animated Hero Section
Full-viewport hero with the tagline:
> *"We Don't Make Ads."*  
> *"We Make People Stop Scrolling."*

Features a GSAP timeline with:
- Logo spin-in animation
- Staggered line-by-line text reveal
- Pulsing "SCROLL TO SEE HOW ↓" prompt in crimson

---

### 🎠 `SmoothSlider.js` — Horizontal Project Showcase
A **lerp-based horizontal scroll slider** that hijacks the mouse wheel when the section is in view.

**Features:**
- 8 project/service cards (Pranish Healthcare, Assam Tea Machineries, Rupalim Real Estates, Pehnawaa, etc.)
- Dynamic scaling — cards grow when approaching from the right, shrink when passing to the left
- `IntersectionObserver` — only runs `requestAnimationFrame` when the slider is visible (performance optimization)
- Smooth easing with `lerp(current, target, 0.075)`

---

### 📋 `Services.js` — Service Cards
A 3×2 responsive grid showcasing agency services:
- 🎬 Brand Films
- 📱 Social Media
- 📊 Performance Marketing
- 🎥 Shoot Planning
- 📰 Offline Media
- 💡 Growth Consulting

Each card has staggered GSAP entrance animation with scale and Y-offset.

---

### 💡 `WhyOddKind.js` — Split Layout Section
A two-column layout with:
- **Left:** Bold italic quote in Hepta Slab
- **Right:** 3 feature points with crimson accent bars
- GSAP-powered slide-in animations from opposite directions

---

### 👥 `Team.js` — Team Member Grid
Displays team members with avatar circles and role descriptions. Uses GSAP `back.out(1.2)` easing for a playful scale-in animation.

---

### 🔄 `VisionMission.js` — Vision & Mission Cards
Two side-by-side cards with subtle 3D `rotateY` entrance animations, alternating left/right tilt.

---

### 📈 `Process.js` — Process Timeline
Step-by-step workflow displayed with alternating left/right slide-in animations (`x: -80` / `x: 80`), creating a visual zigzag pattern.

---

### ✉️ `Contact.js` — Contact Form
Full contact form with input validation, styled with the dark theme. Includes fields for name, email, and message.

---

### 🔴 `FooterCTA.js` — Crimson Call-to-Action
A full-bleed `#A20028` crimson section with:
- Large heading: *"Ready for a Different Kind of Growth?"*
- Primary button + outline button
- Contact info row (email, phone, location)

---

### 🎭 `Preloader.js` — Cinematic Preloader
A fullscreen black preloader with:
- ODD KIND logo animation
- Progress bar that fills over ~3 seconds
- Smooth fade-out transition before revealing the page

---

### 🖱️ `CustomCursor.js` — Custom Cursor
Replaces the default cursor with a crimson red (`#A20028`) dot that:
- Follows the mouse with smooth tracking
- Scales up (1.5×) when hovering over CTA buttons and links
- Hidden on mobile/touch devices

---

### 🧲 `MagneticButton.js` — Magnetic Hover Effect
A wrapper component that creates a magnetic pull effect on hover. Elements subtly move toward the cursor position within a configurable `strength` parameter.

---

### 📊 `ScrollProgress.js` — Scroll Progress Bar
A thin progress bar fixed at the top of the viewport that fills from left to right as the user scrolls down the page.

---

### 🔐 `AuthModal.js` — Authentication Modal
A togglable Login/Signup modal with:
- Email and password fields
- Toggle between Login and Register modes
- Overlay backdrop with click-to-close

---

### 🏢 `Clients.js` — Client Logo Grid
Displays client logos/names with alternating directional animations (slide from left/right based on index).

---

### 🎯 `Different.js` — What Makes Us Different
A bold branding section with a large title box and supporting feature descriptions, animated with scale and Y-offset transitions.

---

### 🏗️ `About.js` — About Section
Brief agency introduction with scroll-triggered fade-up animation.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AKASHDHARDUBEY/oddkind.git

# Navigate to the app
cd oddkind

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

---

## ⚡ Performance Optimizations

| Optimization | Details |
|-------------|---------|
| **Batch Frame Preloading** | First 20 frames load immediately; rest lazy-load in batches of 20 |
| **requestAnimationFrame** | Ticking flag prevents duplicate draw calls during scroll |
| **IntersectionObserver** | SmoothSlider only runs RAF loop when visible in viewport |
| **overflow-x: clip** | Used instead of `hidden` to avoid breaking `position: sticky` |
| **Passive scroll listeners** | `{ passive: true }` for non-blocking scroll event handling |
| **Cover fit rendering** | Canvas draws with aspect-ratio-preserving cover fit, no stretching |

---

## 📱 Responsive Design

All sections are fully responsive with CSS media queries:
- **Desktop** (1200px+): Full layout with side-by-side sections
- **Tablet** (768px–1199px): Adjusted grid columns and font sizes
- **Mobile** (< 768px): Single-column stacked layout, hidden custom cursor

---

## 🧑‍💻 Author

**Akash Dhar Dubey**  
AI & ML Student | React Developer | Full-Stack Creative Developer

- GitHub: [@AKASHDHARDUBEY](https://github.com/AKASHDHARDUBEY)

---

## 📄 License

This project is for portfolio and demonstration purposes.
