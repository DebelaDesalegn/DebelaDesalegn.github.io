# Debela Desalegn Yadeta — research website

A research-first academic website built with Next.js (App Router), TypeScript, Tailwind CSS v4, MDX, KaTeX, Framer Motion and Lucide icons.

## Routes

| Route | Content |
| --- | --- |
| `/` | Introduction, interests, contributions, selected publications, projects, thesis, academic and industry experience, teaching and service, contact |
| `/research` | Research interests, selected contributions, technical stack |
| `/publications` | Full list with search, filters (year, topic, venue), BibTeX copy, manuscripts under review |
| `/publications.bib` | All BibTeX entries as one downloadable file (generated from data) |
| `/projects`, `/projects/[slug]` | Research project pages written in MDX |
| `/thesis` | MSc thesis page (MDX, with equations) |
| `/experience` | Academic and industry experience, education, awards |
| `/teaching` | Teaching, courses, reviewing, programmes |
| `/cv` | Web CV plus PDF download |

SEO: per-page metadata, Open Graph image (`/opengraph-image`), `sitemap.xml`, `robots.txt`, JSON-LD `Person` on every page and `ScholarlyArticle` on the publications page.

## Editing content

Everything you are likely to change lives in two folders:

```
src/data/
  profile.ts        name, headline, bio, links, news
  publications.ts   publications (verbatim BibTeX), manuscripts under review
  research.ts       research interests, selected contributions
  experience.ts     academic + industry roles, reviewing, programmes, awards
  education.ts      degrees, technical stack
src/content/
  projects/*.mdx    one file per research project (frontmatter + MDX body)
  thesis/thesis.mdx thesis page
public/files/       CV PDF (add the thesis PDF here too)
public/figures/     put figures here (create the folder)
```

### Adding a publication
Append an object to `publications` in `src/data/publications.ts`. Copy the BibTeX from ACL Anthology / arXiv verbatim. Set `selected: true` to show it on the homepage. Topics and venues for the filters are derived automatically.

### Adding a project
Create `src/content/projects/my-project.mdx` with frontmatter like the existing files (`title`, `slug`, `summary`, `theme`, `status`, `order`). It appears automatically. In MDX you can use:

- Inline math `$x$` and display math `$$ ... $$` (KaTeX)
- GitHub-flavoured tables
- `<Figure src="/figures/arch.png" caption="Model architecture" />`
- `<PublicationList ids="afri-mcqa-2026,cammt-2025" />`
- `<Pending>note to self</Pending>` for unfinished sections

### Placeholders
`<Pending>` notes are visible while running `npm run dev`. In production they render as a neutral “Details to follow.” To show the notes in a production build, set `NEXT_PUBLIC_SHOW_PLACEHOLDERS=true`.

## Open items to fill in

- [ ] `NEXT_PUBLIC_SITE_URL` (your real domain) for canonical URLs and Open Graph
- [ ] Thesis abstract, experiments and findings (`src/content/thesis/thesis.mdx`), and the thesis PDF
- [ ] Explainable-ML project: datasets, metrics, results, figures, code
- [ ] Titles and co-authors of the three IEEE Access manuscripts
- [ ] Kifiya customer count: 875K+ is used; your other resume says 3.85M+ (`src/data/experience.ts`)
- [ ] Optional: a Graph ML project page once you have work to show

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Deployment

**Vercel (recommended).** Push the repository to GitHub, import it at vercel.com, add the environment variable `NEXT_PUBLIC_SITE_URL=https://your-domain`, and deploy. No other configuration is needed.

**GitHub Pages (automatic).** The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

1. Create a GitHub repository. Name it `<username>.github.io` for the address `https://<username>.github.io`, or any other name for `https://<username>.github.io/<name>`.
2. Push this project to the `main` branch.
3. In the repository, open Settings > Pages and set Source to **GitHub Actions**.
4. Watch the Actions tab; the site is live when the run finishes. The sub-path is handled automatically.
5. Optional custom domain: add it in Settings > Pages, then add a repository variable `SITE_URL=https://your-domain` (Settings > Secrets and variables > Actions > Variables).

**Any other static host (Netlify, Cloudflare Pages).**

```bash
STATIC_EXPORT=true NEXT_PUBLIC_SITE_URL=https://your-domain npm run build
# upload the ./out folder
```

For GitHub Pages under a sub-path (e.g. `username.github.io/site`), also set `NEXT_PUBLIC_BASE_PATH=/site`.

## Design notes

- Palette: neutral warm-white paper `#FAFAF8`, charcoal ink `#1E2126`, restrained indigo `#2F3E9E`; dark mode mirrors it. Tokens live at the top of `src/app/globals.css`.
- Type: Source Serif 4 for headings and titles, IBM Plex Sans for body and navigation, both self-hosted via Fontsource.
- Layout: a section-title gutter on the left and a reading column on the right, separated by hairlines.
- Motion: one load sequence on the homepage introduction and the BibTeX expand; both respect `prefers-reduced-motion`.
