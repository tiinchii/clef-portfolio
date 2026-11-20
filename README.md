# Clef Piedraverde — Portfolio

Personal portfolio of **Clef Lennard M. Piedraverde**, economist and data analyst based in Quezon City.

I turn production, trade and price data into the reports and forecasts behind Philippine agriculture and fisheries programs.

- **LinkedIn:** [clef-lennard-piedraverde](https://ph.linkedin.com/in/clef-lennard-piedraverde-739917234)
- **Facebook:** [profile](https://www.facebook.com/profile.php?id=61591809177840)
- **Email:** [cleflennard@gmail.com](mailto:cleflennard@gmail.com)

## What's inside

- **Home**: headline, quick facts and a bento overview
- **Experience**: roles and responsibilities, most recent first
- **Education & Skills**: degree, eligibility, trainings and tools
- **About** and **Contact**

On a desktop the site has a fixed profile rail and an animated contour background. Below 1100px wide it switches to an app-style phone layout with light and dark themes.

## Tech stack

Vite 6, React 19, TypeScript, plain CSS custom properties, Three.js, GSAP, Lenis, React Router 7, Phosphor icons, Poppins.

## Run it locally

```bash
npm install
npm run dev                     # http://localhost:5173
npm run dev -- --port 3000      # on a different port
npm run build                   # typecheck + production build to dist/
npm run preview                 # serve the production build
```

## Editing content

| What | Where |
|---|---|
| Name, photo, email, socials, headline, quick stats | `src/data/profile.ts` |
| Roles, education, skills, trainings | `src/data/cv.ts` |
| Photo | `src/images/clef.jpg` |
| FAQs | `src/data/faqs.ts` |
| Page title, SEO, favicon | `index.html`, `public/favicon.svg` |
| Colors | `src/styles/tokens.css` |

## Credits & license

Built on an open portfolio template, used under the [PolyForm Noncommercial 1.0.0](LICENSE) license, which allows using it for your own personal portfolio. See [LICENSE](LICENSE) for the full terms and required notices.

- The simplex noise is by Ashima Arts and Ian McEwan (MIT).
- Icons are from [Phosphor](https://phosphoricons.com) (MIT). The tool logos are trademarks of their owners.
- The font is Poppins (SIL Open Font License).
