# Personal Portfolio - Project Context

## Project Overview
An interactive 3D space-themed portfolio featuring a black hole with floating asteroids. Each asteroid represents a section (About, Projects, Achievements, Hobbies, Contact) and expands into content panels when clicked.

**Tech Stack:**
- Next.js 14 (App Router)
- React Three Fiber + Drei (3D rendering)
- Tailwind CSS
- shadcn/ui components
- Framer Motion (animations)
- TypeScript

---

## Design Concept

### Visual Theme
- **Space environment:** Deep black background with star field
- **Black hole centerpiece:** Purple/violet accretion disk with glow effect
- **5 Asteroids:** Each represents a portfolio section, floating around the scene
- **Interaction:** Click asteroid → expands into content panel → close returns to space

### Color Palette
- Background: `#000000` to `#0a0a0a` (deep space)
- Primary text: `#fafafa` (white)
- Secondary text: `#a1a1aa` (muted gray)
- Accent: `#8b5cf6`, `#6366f1` (purple/violet for black hole glow)
- Asteroid colors: Subtle purple/violet variations
- Panels: `rgba(10,10,10,0.95)` (semi-transparent dark)

### Typography
- Sans: Geist Sans (headings and body)
- Mono: Geist Mono (code/tech elements)

---

## Project Structure

```
personal-portfolio/
├── app/
│   ├── layout.tsx              # Root layout with Geist fonts
│   ├── page.tsx                # Main page with 3D scene
│   └── globals.css             # Global styles + Tailwind
├── components/
│   ├── ui/                     # shadcn components (as needed)
│   ├── three/
│   │   ├── space-scene.tsx     # Main Canvas wrapper component
│   │   ├── black-hole.tsx      # Black hole with accretion disk
│   │   ├── asteroid.tsx        # Individual asteroid component
│   │   ├── asteroids.tsx       # Asteroid positioning/management
│   │   └── star-field.tsx      # Background stars
│   ├── panels/
│   │   ├── panel-wrapper.tsx   # Animated panel container
│   │   ├── about-panel.tsx     # About section content
│   │   ├── projects-panel.tsx  # Projects showcase
│   │   ├── achievements-panel.tsx  # BizTech & achievements
│   │   ├── hobbies-panel.tsx   # Personal interests
│   │   └── contact-panel.tsx   # Social links & contact
│   └── intro-overlay.tsx       # Initial "click to explore" overlay
├── lib/
│   ├── utils.ts                # cn() utility for Tailwind
│   └── constants.ts            # Asteroid configs, content data
├── public/images/              # Images if needed
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## Implementation Status

### ✅ Completed Tasks
1. **Project Setup**
   - Next.js 14 initialized with TypeScript
   - All dependencies installed (React Three Fiber, Drei, Framer Motion, etc.)
   - Tailwind CSS configured with custom theme
   - Project structure created

2. **Base Configuration**
   - `tailwind.config.ts` with space theme colors
   - `globals.css` with custom styles
   - `layout.tsx` with Geist fonts
   - `lib/utils.ts` and `lib/constants.ts` created

### 🚧 In Progress
3. **3D Space Scene**
   - Need to create: `components/three/space-scene.tsx`
   - Need to create: `components/three/star-field.tsx`
   - Set up Canvas, camera, lighting

### ⏳ Pending Tasks
4. **Black Hole Component**
   - Create `components/three/black-hole.tsx`
   - Implement glow shader/material
   - Add accretion disk rotation
   - Particle effects

5. **Asteroids System**
   - Create `components/three/asteroid.tsx`
   - Create `components/three/asteroids.tsx`
   - Implement floating animation
   - Hover effects and labels
   - Click handlers

6. **Panel System**
   - Create `components/panels/panel-wrapper.tsx`
   - Framer Motion expand/collapse animations
   - State management for active panel

7. **Content Panels**
   - About panel with intro and social links
   - Projects panel with project cards
   - Achievements panel with BizTech events
   - Hobbies panel with interests grid
   - Contact panel with links

8. **Final Polish**
   - Intro overlay component
   - Main `app/page.tsx` integration
   - Responsive design tweaks
   - Performance optimization

---

## Key Technical Details

### Asteroid Configuration (lib/constants.ts)
5 asteroids positioned around the black hole:
- **About:** `[-4, 2, 0]` - Top left
- **Projects:** `[4, 1.5, -1]` - Top right
- **Achievements:** `[-3, -2, 1]` - Bottom left
- **Hobbies:** `[3.5, -1.5, 0.5]` - Bottom right
- **Contact:** `[0, -3, -0.5]` - Bottom center

Each has unique color, scale, and rotation speed.

### Animation Flow
1. **Initial state:** Asteroids floating gently (sine wave motion)
2. **Hover:** Asteroid glows, label appears
3. **Click:**
   - Asteroid scales up and transforms into panel
   - Other asteroids fade
   - Panel content animates in
4. **Close:** Reverse animation back to space view

### Content Data Structure
- **Projects:** Array of 3-4 featured projects (AI/RAG focus)
- **Achievements:** BizTech events and leadership roles
- **Hobbies:** Grid of interests with icons
- **Social Links:** GitHub, LinkedIn, Twitter, Email

---

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Next Steps for New Session

1. **Complete 3D Scene:** Create space-scene.tsx and star-field.tsx
2. **Build Black Hole:** Implement black-hole.tsx with glow effects
3. **Create Asteroids:** Build asteroid components with interactions
4. **Panel System:** Set up panel-wrapper.tsx with animations
5. **Add Content:** Create all 5 panel components
6. **Main Page:** Wire everything together in app/page.tsx
7. **Polish:** Add intro overlay and final touches

---

## Important Notes

- **React Three Fiber:** Use `'use client'` directive for all 3D components
- **Performance:** Lazy load panels, optimize geometries
- **Mobile:** Consider simplified view for small screens
- **Accessibility:** Add keyboard navigation for asteroids
- **Content:** Update constants.ts with real project details before deployment

---

## Design Decisions

1. **Why asteroids?** More interactive than static sections, fits space theme
2. **Why expand animation?** Smooth transition keeps user oriented in 3D space
3. **Why single-panel view?** Maintains focus, prevents visual clutter
4. **Why purple/violet?** Sci-fi aesthetic, good contrast with black
5. **Why Next.js 14?** App router, good performance, easy deployment

---

## Resources

- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Drei Helpers](https://github.com/pmndrs/drei)
- [Three.js Manual](https://threejs.org/manual/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## Customization Guide

To customize this portfolio:

1. **Update Content:** Edit `lib/constants.ts`
   - Replace project details
   - Update achievement info
   - Change social links

2. **Adjust Colors:** Edit `tailwind.config.ts`
   - Change accent colors
   - Modify asteroid colors in constants.ts

3. **Reposition Asteroids:** Modify positions in `lib/constants.ts`
   - `[x, y, z]` coordinates relative to black hole

4. **Add Sections:**
   - Add to ASTEROIDS array in constants.ts
   - Create new panel component
   - Update panel-wrapper.tsx switch statement

---

**Last Updated:** 2026-02-02
**Status:** Initial setup complete, 3D scene implementation in progress
