# Portfolio — Kumar Apoorv

A personal portfolio website showcasing projects, skills, certifications, education, and contact information. Built with vanilla HTML, CSS, and JavaScript—no frameworks or build step required.

## Features

- **Responsive layout** — Works on desktop, tablet, and mobile
- **Smooth animations** — Scroll reveals, hover effects, typing effect in hero
- **Dark theme** — Custom color palette with accent highlights
- **Sections** — Hero, About, Skills, Projects, Certifications, Publication, Education, Contact
- **Accessible** — Semantic HTML, ARIA where needed, keyboard-friendly nav

## Project Structure

```
portfolio/
├── index.html      # Main page structure and content
├── styles.css      # Layout, theme, animations
├── script.js       # Typing effect, scroll reveal, mobile nav, smooth scroll
├── assets/
│   └── profile.png # Profile photo (navbar)
└── README.md
```

## How to Run

1. **Local**
   - Open `index.html` in a browser, or
   - Use a simple static server, e.g.:
     - `npx serve`
     - `python -m http.server 8000` (then visit `http://localhost:8000`)

2. **Deploy**
   - Upload the project folder to any static host (GitHub Pages, Netlify, Vercel, etc.). No build step needed.

## Tech Stack

- **HTML5** — Structure and content
- **CSS3** — Custom properties, Flexbox/Grid, keyframe animations, transitions
- **JavaScript** — Typing effect, Intersection Observer (scroll reveal), mobile menu, smooth scroll
- **Fonts** — [Google Fonts](https://fonts.google.com): Outfit (body), JetBrains Mono (code/tags)

## Customization

- **Colors & theme** — Edit CSS variables in `:root` in `styles.css` (e.g. `--accent`, `--bg`, `--text`)
- **Content** — Update text, links, and sections in `index.html`
- **Profile photo** — Replace `assets/profile.png` (navbar uses it)
- **Typing text** — Change the string in `script.js` (e.g. `'Software Developer'`)

## License

© Kumar Apoorv. All rights reserved.
