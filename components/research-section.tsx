"use client"

import { ArrowUpRight, BookOpen, GraduationCap, Award, Users } from "lucide-react"
import { researchData } from "@/data/research-data"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export default function ResearchSection() {
  const { currentTheme } = useTheme()
  const { language } = useLanguage()
  const ja = language === "ja"
  const dark = currentTheme.styles.includes("dark")
  const card = cn("rounded-3xl border p-6 sm:p-8", dark ? "border-purple-700/40 bg-gray-950/65" : "border-white/90 bg-white/80 shadow-sm shadow-purple-200/30")
  const muted = dark ? "text-gray-300" : "text-slate-600"

  return (
    <section id="research" aria-labelledby="research-heading" className="mb-16 scroll-mt-32">
      <div className="mb-6 flex items-center gap-3">
        <span className={cn("rounded-2xl p-3", dark ? "bg-purple-900/70 text-purple-200" : "bg-purple-100 text-purple-600")}><BookOpen size={24} /></span>
        <div>
          <p className={cn("mb-1 text-xs font-semibold uppercase tracking-[0.2em]", muted)}>{ja ? "研究と歩み" : "Ideas, discoveries & milestones"}</p>
          <h2 id="research-heading" className="text-3xl font-bold">{ja ? "研究・経歴" : "Research & Background"}</h2>
        </div>
      </div>
      {researchData.introduction && <p className={cn("mb-5 max-w-3xl leading-relaxed", muted)}>{researchData.introduction}</p>}
      {researchData.topics.length > 0 && <div className="mb-6 flex flex-wrap gap-2">{researchData.topics.map(topic => <span key={topic} className={cn("rounded-full px-4 py-2 text-sm", dark ? "bg-purple-900/50 text-purple-200" : "bg-purple-100 text-purple-700")}>{topic}</span>)}</div>}
      <div className="mb-6 space-y-4">
        <h3 className="text-xl font-semibold">{ja ? "主な論文" : "Selected Publications"}</h3>
        {researchData.publications.length === 0 ? (
          <div className={card}><p className={muted}>{ja ? "研究テーマ、論文、コードへのリンクをここに紹介します。内容は準備中です。" : "A space for my research, publications, and code. Details will be added soon."}</p></div>
        ) : researchData.publications.map((paper) => (
          <article key={paper.title} className={card}>
            <span className={cn("mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold", dark ? "bg-pink-950 text-pink-200" : "bg-pink-100 text-pink-700")}>{paper.venue} · {paper.year}</span>
            <h4 className="mb-3 text-xl font-semibold leading-snug">{paper.title}</h4>
            <p className={cn("text-sm leading-relaxed", muted)}>{paper.authors}</p>
            {paper.summary && <p className={cn("mt-3 leading-relaxed", muted)}>{paper.summary}</p>}
            <div className="mt-5 flex flex-wrap gap-3">{paper.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className={cn("inline-flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium", dark ? "bg-purple-900/60 text-purple-200 hover:bg-purple-800" : "bg-blue-50 text-blue-700 hover:bg-blue-100")}>{link.label}<ArrowUpRight size={14} /></a>)}</div>
          </article>
        ))}
      </div>
      <div id="background" className="grid scroll-mt-32 gap-6 lg:grid-cols-2">
        <div className={card}>
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold"><GraduationCap size={22} />{ja ? "学歴・経歴" : "Education & Experience"}</h3>
          {researchData.education.length === 0 ? <p className={muted}>{ja ? "学歴と職歴は準備中です。" : "Education and career milestones will be added here."}</p> : <ol className={cn("ml-2 space-y-6 border-l pl-6", dark ? "border-purple-700" : "border-purple-200")}>{researchData.education.map(entry => <li key={`${entry.year}-${entry.title}`} className="relative"><span aria-hidden="true" className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-purple-400" /><p className={cn("mb-1 text-sm", muted)}>{entry.year}</p><h4 className="font-semibold">{entry.title}</h4>{entry.organization && <p className={cn("mt-1 text-sm", muted)}>{entry.organization}</p>}{entry.description && <p className={cn("mt-2 text-sm", muted)}>{entry.description}</p>}</li>)}</ol>}
        </div>
        <div className="space-y-6">
          <div className={card}>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold"><Award size={22} />{ja ? "受賞" : "Honors & Awards"}</h3>
            {researchData.honors.length === 0 ? <p className={muted}>{ja ? "受賞歴は準備中です。" : "Selected honors and awards will be added here."}</p> : <ul className="space-y-4">{researchData.honors.map(entry => <li key={entry.title}><p className={cn("text-sm", muted)}>{entry.year}</p><p className="font-medium">{entry.title}</p></li>)}</ul>}
          </div>
          <div className={card}>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold"><Users size={22} />{ja ? "学術活動" : "Academic Service"}</h3>
            {researchData.services.length === 0 ? <p className={muted}>{ja ? "学術活動は準備中です。" : "Reviewing, community, and academic service will be added here."}</p> : <ul className={cn("space-y-3 text-sm leading-relaxed", muted)}>{researchData.services.map(service => <li key={service}>{service}</li>)}</ul>}
          </div>
        </div>
      </div>
    </section>
  )
}
