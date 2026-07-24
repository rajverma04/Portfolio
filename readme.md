# Raj Verma — Portfolio

> **AI Prompt to recreate this portfolio from scratch:**

---

## 🤖 Portfolio Generation Prompt

```
Build me a premium, fully responsive React.js developer portfolio website for "Raj Verma" — a Full Stack Developer. The portfolio should look stunning, feel alive with animations, and work seamlessly on desktop and mobile. Here are the complete details:

---

## 🛠️ Tech Stack & Tooling

- **Framework**: React 19 (vanilla JSX, no TypeScript)
- **Bundler**: Parcel 2 (entry point: index.html → index.js)
- **Styling**: Tailwind CSS v4 (via @tailwindcss/postcss)
- **Routing**: React Router DOM v6 (two routes: "/" and "/resume")
- **Animations**: Framer Motion (page transitions, scroll reveals, stagger effects)
- **3D Background**: @react-three/fiber + @react-three/drei (Stars + Sparkles canvas)
- **Icons**: FontAwesome (@fortawesome/react-fontawesome), react-icons
- **Email**: EmailJS (emailjs-com)
- **Font**: Google Fonts — "Audiowide" (loaded via @import in index.html)

---

## 🎨 Design System

### Color Palette (CSS Variables in src/index.css)
- Dark mode (default):
  - `--bg-primary`: #09090f (near-black)
  - `--bg-card`: rgba(255,255,255,0.05) — frosted-glass cards
  - `--border-color`: rgba(255,255,255,0.10)
  - `--text-primary`: #ffffff
  - `--text-secondary`: #9ca3af
  - `--navbar-bg`: rgba(15,15,22,0.90)
  - Glow accents: indigo-500 and purple-500 at 10% opacity
- Light mode (class `html.light`):
  - `--bg-primary`: #f0f2ff
  - `--bg-card`: rgba(255,255,255,0.75)
  - `--text-primary`: #1e1b4b
  - `--navbar-bg`: rgba(240,242,255,0.92)
- Primary accent gradient: `from-indigo-400 to-purple-400`

### Custom Scrollbar
- Width: 10px
- Track: black (#000)
- Thumb: Indian flag gradient — saffron (#FF9933) → white (#FFFFFF) → green (#138808)
- Border-radius: 12px; border: 2px solid black

### Animations (CSS)
- `@keyframes twinkle` — opacity 0.2 → 0.6
- `@keyframes shooting` — shooting star diagonal translateX/Y
- `@keyframes float` — nebula cloud hovering up/down 40px
- `@keyframes fadeIn`, `fadeInUp`, `blink`, `gradient`
- Custom classes: `.animate-fadeIn`, `.animate-fadeInUp`, `.animate-blink`, `.animate-gradient`

---

## 📁 File Structure

```
Portfolio/
├── index.html           ← HTML shell, loads Audiowide font, "R" SVG favicon
├── index.js             ← Entry: App + Portfolio component, mounts to #root
├── style.css            ← Minimal global styles
├── tailwind.config.js
├── .postcssrc
├── vercel.json          ← SPA rewrites for Vercel deployment
├── public/
│   └── RAJ_CV.pdf       ← Resume PDF (linked from About section)
└── src/
    ├── index.css        ← Design system (theme variables, animations, scrollbar)
    ├── ThemeContext.js  ← React context: dark/light theme toggle (persisted to localStorage)
    ├── Background3D.js  ← Fixed full-screen 3D canvas (Stars + Sparkles in dark mode; gradient orbs in light mode)
    ├── Loader.js        ← 2500ms splash loader with Framer Motion AnimatePresence exit animation
    ├── navbar.js        ← Floating pill navbar (top on desktop, bottom on mobile), active section highlight, theme toggle button
    ├── About.js         ← Hero section with glass card, rotating text, stats, social buttons
    ├── body.js          ← Profile image/avatar component used inside About
    ├── techStack.js     ← Skills grid with animated tech badges
    ├── projects.js      ← Project cards grid with expand/collapse description, GitHub + Live Demo buttons
    ├── certificates.js  ← Certificates showcase section
    ├── achievements.js  ← Achievements/highlights section
    ├── codingProfiles.js← Coding platform profiles (LeetCode, CodeChef, etc.)
    ├── education.js     ← Education timeline section
    ├── contact.js       ← Contact form using EmailJS
    ├── resume.js        ← Full-page resume viewer (separate /resume route)
    ├── typeWriterText.js← Typewriter text effect component
    ├── image/           ← Project screenshots (codenexus.jpg, gstinvoice.jpg, taksyImg.jpg, ailearning.jpg, filedistribution.jpg)
    └── ChatBot/
        └── chatbot.js   ← AI chatbot (Google Gemini API, disabled by default in index.js)
```

---

## 🔧 Component Details

### index.js — App Root
- Shows `<Loader />` for 2500ms using `useState(loading)` + `setTimeout`
- Uses `AnimatePresence mode="wait"` for smooth loader exit
- Disables right-click via `document.addEventListener("contextmenu", e => e.preventDefault())`
- After loader: renders fixed `<Navbar />` in `<header>`, then `<main>` with all sections in order:
  About → TechStack → Projects → Certificates → Achievements → CodingProfiles → Education → Contact
- Wraps everything in `<ThemeProvider>` and `<Router>`
- Two routes: `<Route path="/" element={<Portfolio />} />` and `<Route path="/resume" element={<Resume />} />`

### Navbar (src/navbar.js)
- Floating pill design: `backdrop-blur-md`, `border border-white/10`, `rounded-full`, `shadow-purple-500/10`
- Desktop: fixed top-6, horizontally centered
- Mobile (< 768px): fixed bottom-6, 90% width, icons only (labels hidden)
- Nav items: Home (faHouse), Skills (faTools), Projects (faLaptopCode), Coding (faCode), Education (faGraduationCap), Contact (faAddressBook)
- Active section tracked via `IntersectionObserver` (threshold: 0.2)
- Active item style: `bg-[#6d28d9] text-white shadow-purple-500/25`
- Smooth scroll on click: `getBoundingClientRect().top + pageYOffset - 80`
- Theme toggle button at end: sun icon (yellow-300) in dark mode, moon icon (indigo-300) in light mode

### About / Hero Section (src/About.js)
- Full-screen section with two-column glass card: `bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem]`
- Left column:
  - "Available for Work" animated green ping badge
  - H1: "Raj " + gradient "Verma" (indigo-400 → purple-400)
  - Rotating text component cycling: "Full Stack Developer", "UI/UX Enthusiast", "Problem Solver" (rotates every 2000ms with spring animation)
  - Bio paragraph (gray-400)
  - Stats row: "8+ Projects Completed", "500+ DSA Problems" (border-t divider)
  - Buttons: White "Resume" button (opens RAJ_CV.pdf), GitHub icon button, LinkedIn gradient button, Gmail gradient button
- Right column: `<Body />` component (profile image/avatar)
- Background blobs: indigo-500/20 and purple-500/20 at 120px blur, top-left and bottom-right

### Projects Section (src/projects.js)
- Grid: 1 column on mobile, 2 columns on md+
- Each project card: `bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-white/20`
- Card lifts on hover: `whileHover={{ y: -10 }}`
- Staggered entrance with `staggerChildren: 0.2` + `opacity: 0 → 1, y: 50 → 0` per card
- Description truncated to 120 chars with "See more ▼" / "See less ▲" toggle per card using local state
- Tech badges: `text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10`
- Action buttons (equal width flex):
  - "Source": `bg-white/10 hover:bg-white/20` with FaGithub icon
  - "Live Demo": `bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-indigo-500/25` with FaExternalLinkAlt icon
  - Both disabled (gray, cursor-not-allowed) if URL is "#" or missing

### Projects Data
1. **Taksy** (Jan - Feb 26) — Real-time chat app, WebSocket, MERN, E2E Encryption
   - Live: https://chat-appdev.vercel.app/ | GitHub: https://github.com/rajverma04/ChatApp
2. **CodeNexus** (Nov - Dec 25) — MERN coding platform, Judge0 API, Redis, Monaco Editor, Gemini AI
   - Live: https://codenexusdev.vercel.app/ | GitHub: https://github.com/rajverma04/CodeNexus
3. **GST-INVOICE GENERATOR** (Jul - Aug 25) — GST billing app, html2canvas, jsPDF, MongoDB
   - Live: https://gstinvoice.vercel.app | GitHub: https://github.com/rajverma04/gstinvoice
4. **AI CHATBOT** (Apr 25) — Python, Flask, NLP
   - Live: https://ai-personalized-learning.vercel.app/ | GitHub: https://github.com/rajverma04/AI_Personalized_Learning
5. **File Distributed System** (Apr 25) — Flask, C++, Networking
   - Live: https://file-recovery-system.vercel.app/ | GitHub: https://github.com/rajverma04/Distribute-File-System

### Background3D (src/Background3D.js)
- Dark mode: `position: fixed, inset-0, z-index: -1, bg-black`
  - Three.js Canvas with `<Stars radius={300} depth={50} count={5000} factor={4} fade speed={1} />`
  - `<Sparkles count={100} scale={12} size={4} speed={0.4} opacity={0.5} color="#a855f7" />`
- Light mode: Gradient background `linear-gradient(135deg, #eef1ff, #f5f3ff, #fdf4ff)` with two blurred radial-gradient orbs (indigo at 12% and purple at 10% opacity)

### ThemeContext (src/ThemeContext.js)
- React context with `theme` ("dark" | "light") and `toggleTheme` function
- Persists to `localStorage` key "theme"
- Applies class `"light"` to `document.documentElement` for light mode CSS overrides

### Loader (src/Loader.js)
- Framer Motion animated entry/exit
- Shows for 2500ms then exits with AnimatePresence

### Contact Section (src/contact.js)
- EmailJS integration to send emails without a backend
- Form fields: Name, Email, Message
- `#contact * { pointer-events: auto !important }` to fix overlay conflicts

---

## 🎯 Key Implementation Notes

1. **Pointer events**: Both `#projects` and `#contact` sections have `pointer-events: auto !important` on all children to override the 3D canvas z-index setup.
2. **Right-click disabled** globally via contextmenu event listener in index.js.
3. **Section IDs** must be: `about`, `skills`, `projects`, `coding`, `education`, `contact` — matched exactly by the Navbar's IntersectionObserver.
4. **Parcel bundler** — import images using `new URL("./image/file.jpg", import.meta.url).href` pattern.
5. **Vercel deployment**: Add `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }` for SPA routing.
6. **RotatingText** component is a custom letter-by-letter animated text (uses Framer Motion, stagger from last letter).
7. **Resume page** (`/resume` route) renders a full-page PDF viewer for `RAJ_CV.pdf`.

---

## 📦 dependencies (package.json)

```json
{
  "@fortawesome/fontawesome-svg-core": "^7.1.0",
  "@fortawesome/free-brands-svg-icons": "^7.1.0",
  "@fortawesome/free-solid-svg-icons": "^7.1.0",
  "@fortawesome/react-fontawesome": "^3.1.0",
  "@google/generative-ai": "^0.24.1",
  "@gsap/react": "^2.1.2",
  "@react-three/drei": "^10.7.7",
  "@react-three/fiber": "^9.4.0",
  "@tailwindcss/postcss": "^4.1.16",
  "emailjs-com": "^3.2.0",
  "framer-motion": "^12.23.26",
  "parcel": "^2.16.0",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-icons": "^5.5.0",
  "react-router-dom": "^6.30.1",
  "tailwindcss": "^4.1.16",
  "three": "^0.181.2"
}
```

Run: `npm install` then `npm run dev` (starts Parcel dev server).

---

## 🌐 Sections Order (top to bottom)

1. **About/Hero** — glass card, name, rotating roles, stats, social links
2. **Tech Stack / Skills** — animated tech badges grid
3. **Projects** — 2-column grid of project cards
4. **Certificates** — certificate showcase
5. **Achievements** — key highlights
6. **Coding Profiles** — LeetCode, CodeChef, GeeksForGeeks, etc.
7. **Education** — university/college timeline
8. **Contact** — EmailJS-powered contact form

---

## 👤 Developer Info

- **Name**: Raj Verma
- **GitHub**: https://github.com/rajverma04
- **LinkedIn**: https://www.linkedin.com/in/rajverma04/
- **Email**: rajkumargrd56@gmail.com
- **Roles**: Full Stack Developer, UI/UX Enthusiast, Problem Solver
- **Stats**: 8+ Projects Completed, 500+ DSA Problems Solved
```
