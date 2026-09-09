# Abdullah Naqvi — Portfolio

Liquid-glass portfolio site. Next.js 14 (App Router) · Tailwind CSS · Framer Motion.

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## 2. Deploy to Vercel

**Push to GitHub first:**

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/abdullah5-ig/portfolio.git
git push -u origin main
```

(Create the empty `portfolio` repo on GitHub first — don't add a README there.)

**Then on Vercel:**

1. Go to https://vercel.com/new
2. Sign in with GitHub
3. Click **Import** next to your `portfolio` repo
4. Change nothing — Vercel auto-detects Next.js
5. Click **Deploy**

Live in ~60 seconds at `https://portfolio-<something>.vercel.app`.

**To get `abdullah-naqvi.vercel.app`:** Vercel project → **Settings → Domains** → add
`abdullah-naqvi.vercel.app`. (Or rename the project to `abdullah-naqvi` under
Settings → General — the domain follows the project name.)

Every future `git push` redeploys automatically.

---

## 3. Editing your content

**Everything lives in one file: `data/profile.js`.** No other file needs touching.

### Add a profile photo

1. Drop a square image into the `public/` folder, e.g. `public/profile.jpg`
2. In `data/profile.js`, change:

```js
photo: null,          //  before
photo: "/profile.jpg",  //  after
```

Until then the site shows a styled `AN` monogram.

### Add projects

Both GitHub projects are **already in there**, with links to the repos. To add
another, open `data/profile.js`, find the `projects` array, and add an entry:

```js
export const projects = [
  {
    title: "Project name",
    category: "Market Research",       // shows as the small blue label
    body: "One or two sentences on what it does and what you found.",
    tags: ["SQL", "Power BI", "Validation"],
    link: "https://github.com/abdullah5-ig/repo",  // or null for no link
  },
  // ...add as many as you like — the grid handles the layout
];
```

### Everything else

- `profile` — name, role, headline, tagline, location, links
- `stats` — the three numbers under the hero
- `about` — bio paragraphs + the three focus cards
- `experience` — jobs (add a new object to the array for each role)
- `education`, `certifications`, `skillGroups`

In `skillGroups`, anything listed in `featured` renders as a dark highlighted pill.

---

## Design notes

- **Typography** — native San Francisco stack (`-apple-system`, `SF Pro Display`),
  falling back to Segoe UI / Inter elsewhere. No font files to load, so it's instant.
- **Liquid glass** — the `.glass` class in `app/globals.css` layers a translucent
  gradient, 28px backdrop blur with 180% saturation, a 1px white rim, and a specular
  overlay sheen. Adjust that one class to retune every card at once.
- **Spatial background** — three blurred colour orbs drifting on long ease loops behind
  a masked dot grid, set in `app/layout.js`.
- **Motion** — scroll reveals fade + lift + deblur once per element; the nav pill slides
  between sections via a shared `layoutId`.
- **Accessibility** — respects `prefers-reduced-motion`, semantic landmarks, labelled
  icon links.

## Colours

Defined in `tailwind.config.js`:

| Token | Hex | Use |
|---|---|---|
| `ink-900` | `#0d1424` | Headings |
| `ink-500` | `#5a6480` | Body text |
| `accent-600` | `#3d54e6` | Links, eyebrows |
| `mint` | `#37d3c0` | Live/current accents |
