"use client"

import Image from "next/image"
import { ArrowDown, ArrowUpRight, Github, Mail, MapPin, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"
import { profileData } from "@/data/portfolio-data"
import { cn } from "@/lib/utils"

export default function ProfileSection() {
  const { language } = useLanguage()
  const { currentTheme } = useTheme()
  const isDark = currentTheme.styles.includes("dark")
  const name = profileData.name[language]
  const role = profileData.role[language]
  const bio = profileData.bio[language]
  const location = profileData.location[language]
  const skills = [...new Set(Object.values(profileData.skills).flat())]

  return (
    <section id="about" aria-labelledby="profile-name" className={cn(
      "relative mb-10 overflow-hidden rounded-3xl border p-6 shadow-lg backdrop-blur-sm sm:p-10 md:mb-12 md:p-12",
      isDark ? "border-purple-700/40 bg-gray-950/65" : "border-white/90 bg-white/80 shadow-purple-200/40",
    )}>
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 left-8 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:gap-12">
        <div className="relative self-start md:shrink-0 md:self-center">
          <div className="rounded-full bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 p-1.5 shadow-lg shadow-purple-300/20">
            <div className={cn("relative h-28 w-28 overflow-hidden rounded-full border-4 sm:h-36 sm:w-36 md:h-44 md:w-44", isDark ? "border-gray-900" : "border-white")}>
              <Image src={profileData.image} alt={`${name} avatar`} fill sizes="(min-width: 768px) 176px, 144px" className="object-cover" priority />
            </div>
          </div>
          <span aria-hidden="true" className={cn("absolute -bottom-1 -right-1 rounded-2xl border p-3 shadow-sm", isDark ? "border-purple-600 bg-purple-950 text-pink-300" : "border-purple-100 bg-white text-purple-500")}>
            <Sparkles size={22} />
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <p className={cn("mb-3 text-xs font-semibold uppercase tracking-[0.22em]", isDark ? "text-purple-300" : "text-purple-600")}>
            {language === "en" ? "A little about me" : "私について"}
          </p>
          <h1 id="profile-name" className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className={isDark ? "text-gray-100" : "text-blue-950"}>{language === "en" ? "Hi, I'm " : "こんにちは、"}</span>
            <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", isDark ? "from-pink-400 via-purple-300 to-cyan-300" : "from-blue-500 via-purple-500 to-pink-500")}>{name}</span>
            <span aria-hidden="true" className="ml-2 inline-block text-3xl sm:text-4xl">✧</span>
          </h1>
          {role && <p className={cn("mb-4 text-lg font-medium sm:text-xl", isDark ? "text-purple-200" : "text-blue-700")}>{role}</p>}
          <p className={cn("max-w-2xl text-base leading-relaxed", isDark ? "text-gray-300" : "text-slate-600")}>{bio}</p>
          {location && <p className="mt-3 flex items-center gap-1 text-sm"><MapPin size={14} />{location}</p>}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className={cn("inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white transition-colors", isDark ? "bg-pink-600 hover:bg-pink-500" : "bg-blue-600 hover:bg-blue-700")}>
              {language === "en" ? "Explore my work" : "作品を見る"}<ArrowDown size={16} />
            </a>
            {profileData.social.github && <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className={cn("inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors", isDark ? "bg-gray-800 text-gray-200 hover:bg-gray-700" : "bg-blue-50 text-blue-700 hover:bg-blue-100")}>
              <Github size={17} /> GitHub <ArrowUpRight size={14} />
            </a>}
            {profileData.email && <a href={`mailto:${profileData.email}`} aria-label="Email" className="rounded-xl p-3"><Mail size={18} /></a>}
          </div>
        </div>
      </div>
      {skills.length > 0 && <div className={cn("relative mt-8 flex flex-wrap gap-2 border-t pt-6", isDark ? "border-gray-700" : "border-blue-100")}>
        {skills.map((skill) => <span key={skill} className={cn("rounded-full px-3 py-1 text-xs", isDark ? "bg-purple-900/50 text-purple-200" : "bg-purple-100 text-purple-700")}>{skill}</span>)}
      </div>}
    </section>
  )
}
