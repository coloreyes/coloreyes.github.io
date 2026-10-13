export interface Article {
  id: string
  title: string
  description: string
  content: string
  lastUpdated: string
  author: string
}

export const articles: Article[] = [
  {
    id: "about-this-site",
    title: "About this site",
    description: "A home for ColorEyes’ research, projects, and notes.",
    lastUpdated: "2026-10-13",
    author: "ColorEyes",
    content: `
This is ColorEyes’ personal homepage, bringing together research, projects, and background. Personal content is still being prepared. The project cards currently shown are labeled template examples, not ColorEyes’ own work.

The site has light and dark themes. The optional floating illustration can be enabled with the **Character** switch in the footer; it starts off on every page load. The terminal offers a playful way to browse the project list using predefined commands.

The visual foundation comes from the open-source [Anime Portfolio](https://github.com/anime-portfolio/app). Its code is distributed under the MIT license. The original Crystalline-chan and Weltschmerz-chan illustrations are by **Aesthetic Vulpes (didvc)** and licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

This adaptation places the profile first, adds research and background sections, and makes the floating character optional. Source code and attribution are available in [this site's repository](https://github.com/coloreyes/coloreyes.github.io).
`,
  },
]

export function getArticle(id: string): Article | undefined {
  return articles.find((article) => article.id === id)
}

export function getAllArticles(): Article[] {
  return articles
}
