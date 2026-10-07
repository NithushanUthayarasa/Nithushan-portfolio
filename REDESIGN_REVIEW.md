# Portfolio redesign review

Completed locally on 7 October 2026. The work is uncommitted and has not been deployed. Preview with `npm run dev` at http://127.0.0.1:5173/.

## What changed

The original UI relied on repeated large glass cards, glowing accents, compressed mobile gutters, and long project cards. The first redesign established the current information architecture, consistent section order, concise project cards, semantic project dialogs, and mobile layouts. A subsequent palette pass replaced the green tint with navy, slate, and blue. The latest refinement addresses the remaining flat appearance: it adds ambient depth behind the hero and conclusion, a restrained cobalt to indigo heading and CTA treatment, more distinctive project and capability surfaces, staggered hero motion, and a very small pointer response on project cards. All supplied content and project links remain intact.

## Design system

Theme tokens in `src/index.css` define the midnight canvas (#070B14), navy backgrounds (#0A0F1C, #0E1626), card surfaces (#111B2E, #162238), near-white and slate text (#F8FAFC, #CBD5E1, #94A3B8), cobalt (#3B82F6), ice blue (#BAE6FD), indigo (#6366F1), subdued borders, three shadow levels, radius sizes, motion durations, and a shared easing curve. Most copy and card surfaces remain neutral; blue marks navigation, section labels, primary actions, and select project details. No green or yellow styling remains in the rendered UI.

## Original portrait

The hero loads the exact local original `public/Nithushan.jpeg` (SHA-256: BEC23242D61B3F523F05050E0FC30078FA4BB42F29E3DBF383CB49541A79A7F3). The source file was not edited. There are no color, opacity, or blend effects on the image. A browser check confirmed the image loads with `filter: none`, `opacity: 1`, and normal blending. The frame now has a layered border and soft outer light, and the decorative “NU.” text has been removed. The original image is 3,633,430 bytes; the exact-original requirement means the hero transfers that full file.

## Interaction and accessibility

Navigation has a small active underline and gains a darker blurred surface on scroll. Buttons, links, arrows, chips, portrait frame, and project cards have short restrained hover responses. On fine mouse pointers only, project cards lift four pixels, rotate by at most 1.2 degrees per axis, and show a soft radial highlight near the pointer. The first two projects have a subtle illuminated top edge. The hero content enters in a short stagger, followed by the portrait frame. One-time IntersectionObserver reveals use opacity and an 18px vertical movement for section headers, projects, focus cards, skill rows, and selected panels. Content is visible if observers or animations are unavailable. `prefers-reduced-motion` removes animation and transition effects. The native project dialog retains its keyboard focus behavior, Escape close action, background lock, and focus restoration. Focus outlines, semantic headings, alt text, and touch targets remain.

## Verification

The complete page, hero, projects, About, AI/ML focus, skills, education, resume, contact, footer, and project dialog were visually inspected in the local browser across the redesign. This pass checked real emulated viewports at 320, 360, 375, 390, 430, 768, 1024, 1280, 1440, and 1920 CSS pixels. No horizontal overflow was measured. The original portrait loaded at every width, and “NU.” was absent. The mobile menu opened and closed. Escape closed the project dialog and restored body scrolling. Reduced-motion emulation disabled hero animation and smooth scrolling. Browser console and page exception checks returned no errors; all internal anchor targets exist. The contact email has a natural break after @ to avoid an orphan character at 320px.

- `npm run lint`: pass.
- `npm run build`: pass.
- `git diff --check`: no whitespace errors.
- Production CSS: 39.39 KB (8.75 KB gzip).
- Production JS: 222.19 KB (69.90 KB gzip).
- No new runtime dependency was added. Motion uses CSS and IntersectionObserver.

## Files changed

This overall redesign currently changes `index.html`, `public/favicon.svg`, `src/App.jsx`, `src/index.css`, `src/data/projects.js`, and the About, Contact, Education, Focus, Footer, Hero, Languages, Navbar, ProjectCard, ProjectModal, Projects, ResumeSection, and Skills components. It adds `src/components/UI.jsx`, `src/data/profile.js`, `src/data/skills.js`, `src/hooks/useScrollReveal.js`, `public/CV_Nithushan_Uthayarasa.pdf`, and this report. The old `src/App.css`, duplicate `src/components/Journey.jsx`, and unused resized portrait derivative were removed.

## Before deployment

Check the site on physical iOS and Android devices, particularly the project dialog and resume behavior. Confirm the PDF is the intended latest version. The original LinkedIn URL is preserved but rejected automated HEAD checks; the ContextIQ Streamlit app timed out during an automated HEAD check. Open both normally before deploying. All four GitHub project destinations and the profile returned HTTP 200 when checked earlier.
