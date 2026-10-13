export interface Publication {
  title: string
  authors: string
  venue: string
  year: string
  summary?: string
  links: { label: string; url: string }[]
}

export interface CareerEntry {
  year: string
  title: string
  organization?: string
  description?: string
}

// Add only confirmed personal information; the reference site's owner is not yet confirmed.
export const researchData: {
  introduction: string
  topics: string[]
  publications: Publication[]
  education: CareerEntry[]
  honors: CareerEntry[]
  services: string[]
} = {
  introduction: "",
  topics: [],
  publications: [],
  education: [],
  honors: [],
  services: [],
}
