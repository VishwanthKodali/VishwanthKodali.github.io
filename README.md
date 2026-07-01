# Vishwanth Sri Kodali — Portfolio

A static, single-page portfolio site. No build step, no framework — just
`index.html`, `style.css`, and `script.js`. That means it can be hosted for
free on GitHub Pages with zero configuration.

## Before you publish

1. Open `index.html` and search for `id="linkedin-link"`. Replace the `href="#"`
   with your real LinkedIn URL, and update the visible text.
2. Double-check the I2E Consulting and IICL dates/descriptions in the
   `#experience` section — I filled in reasonable text based on what you told
   me, but you know the real day-to-day best.
3. Optional: swap `vishwanthkodali@gmail.com` / phone number if you'd rather
   not show them publicly, and use a contact form or LinkedIn instead.

## Hosting for free — GitHub Pages (recommended)

Since your GitHub username is already `VishwanthKodali`, the easiest path is
a **user site**, which gets a clean URL: `https://vishwanthkodali.github.io`

1. Create a new repository on GitHub named **exactly**:
   `VishwanthKodali.github.io`
2. Push these three files to the root of that repository:
   ```
   git init
   git add index.html style.css script.js README.md
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/VishwanthKodali/VishwanthKodali.github.io.git
   git push -u origin main
   ```
3. Go to the repo → **Settings → Pages** → under "Build and deployment",
   set Source to **Deploy from a branch**, branch `main`, folder `/root`.
4. Wait ~1 minute. Your site goes live at:
   `https://vishwanthkodali.github.io`

No build tools, no server, no cost — GitHub serves the static files directly.

### If you'd rather keep it as a project (not user) site
Name the repo anything else (e.g. `portfolio`), same steps in Settings → Pages,
and it'll be live at `https://vishwanthkodali.github.io/portfolio`.

## Alternative free hosts (also zero-config for static files)

- **Vercel** — `vercel.com`, connect the GitHub repo, deploy with defaults.
  Gives you a `*.vercel.app` URL and easy custom domain support later.
- **Netlify** — `netlify.com`, drag-and-drop the project folder directly in
  their dashboard (no git needed), or connect the repo for auto-deploys.
- **Cloudflare Pages** — `pages.cloudflare.com`, same connect-repo flow, fast
  global CDN.

All four are free for a personal portfolio at this scale. GitHub Pages is the
simplest since the code is already going to live on GitHub anyway.

## Local preview

Just open `index.html` directly in a browser, or run a tiny local server:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.
