# ColorEyes — Anime Portfolio

A personal site adapted from the community [Anime Portfolio](https://github.com/anime-portfolio/app), adapted to introduce ColorEyes at the top of the page.

## Preview

```sh
npm ci
npm run dev
```

Open the Local address printed by Next.js. `npm run build` exports a static site to `out/`.

## Content

- `data/portfolio-data.tsx`: name, introduction, profile links, projects, and theme settings. Profile position is `top`.
- `components/profile-section.tsx`: the responsive top profile card.
- `data/research-data.ts`: confirmed research, publications, education, honors, and academic service. Empty entries show clearly labeled placeholders.
- `components/research-section.tsx`: publication cards and the background timeline, using the current watercolor theme.
- `app/page.tsx`: page order and project navigation.
- `public/images/avatar.png`: ColorEyes' public GitHub avatar.

The project cards are explicitly marked template examples, not ColorEyes' work. Biography, experience, and skills have not been supplied. Replace these examples with confirmed personal content before publishing.

The footer's Character switch toggles the existing floating illustration and starts OFF on every page load. Closing the character also resets the switch to OFF.

## GitHub Pages

The live site is https://coloreyes.github.io/. GitHub Pages uses **GitHub Actions**. Every push to `main` triggers `.github/workflows/pages.yml`, which builds and deploys the static export from `out/`. The root `index.html` is the original placeholder and is not part of the deployed artifact.

## Attribution

Adapted from `anime-portfolio/app` at commit `acdeee48ed819fe80300f743c9495e4f0097f097`.

- Upstream template code: MIT, see `LICENSE-ANIME-PORTFOLIO`.
- Original Crystalline-chan and Weltschmerz-chan artwork: Aesthetic Vulpes (didvc), CC BY 4.0, see `LICENSE-CC-BY-4.0`. The original character artwork is retained with a visible footer credit.
- Original repository license retained in `LICENSE`.
