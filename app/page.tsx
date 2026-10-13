"use client"

import { useState } from "react"
import Link from "next/link"
import WorkCard from "@/components/work-card"
import FloatingGirl from "@/components/floating-girl"
import TerminalUI from "@/components/terminal-ui"
import { useParallax } from "@/hooks/use-parallax"
import { useSecretCode } from "@/hooks/use-secret-code"
import { cn } from "@/lib/utils"
import ThemeSwitcher from "@/components/theme-switcher"
import LanguageSwitcher from "@/components/language-switcher"
import ProfileSection from "@/components/profile-section"
import ResearchSection from "@/components/research-section"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"
import { works, categories, siteConfig, profileData } from "@/data/portfolio-data"
import { Book, Github, Menu, X } from "lucide-react"

function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("featured")
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [characterEnabled, setCharacterEnabled] = useState(false)
  const { ref } = useParallax()
  const secretCodeActivated = useSecretCode()
  const { currentTheme } = useTheme()
  const { t, language } = useLanguage()
  const currentCategory = categories.find((cat) => cat.id === activeCategory) || categories[0]

  return (
    <div
      ref={ref}
      className={cn(
        "min-h-screen font-sans antialiased overflow-x-hidden transition-colors duration-300",
        currentTheme.gradientBg,
        currentTheme.textColor,
        currentTheme.styles.includes("crt") &&
          "after:content-[''] after:pointer-events-none after:fixed after:inset-0 after:bg-[url('/images/crt-overlay.png')] after:bg-cover after:opacity-20 after:z-50",
      )}
    >
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 p-4 md:p-6 flex justify-between items-center backdrop-blur-sm transition-colors duration-300",
          currentTheme.headerBg,
        )}
      >
        <div>
          <span className={cn("text-xl md:text-2xl font-bold", currentTheme.accentColor)}>ColorEyes</span>
          <p className={cn("text-xs md:text-sm", currentTheme.secondaryColor)}>
            {currentTheme.styles.includes("dark") ? "Some days feel like static..." : "Coding in watercolor."}
          </p>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-md transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X size={24} className={currentTheme.accentColor} />
          ) : (
            <Menu size={24} className={currentTheme.accentColor} />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden xl:flex items-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-3 py-1 text-sm rounded-md transition-all",
                activeCategory === cat.id
                  ? cn("text-white", currentTheme.styles.includes("dark") ? "bg-pink-500" : "bg-blue-500")
                  : cn(
                      currentTheme.buttonBg,
                      currentTheme.styles.includes("dark")
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-blue-700 hover:bg-blue-200",
                    ),
              )}
            >
              {cat.icon} {cat.id === "featured" ? t.featured : cat.id === "all" ? t.allProjects : t.experimental}
            </button>
          ))}
          <Link
            href="/wiki"
            className={cn(
              "px-3 py-1 text-sm rounded-md transition-all flex items-center gap-1",
              currentTheme.buttonBg,
              currentTheme.styles.includes("dark")
                ? "text-gray-300 hover:bg-gray-700"
                : "text-blue-700 hover:bg-blue-200",
            )}
          >
            <Book size={14} /> {t.wiki}
          </Link>
          <button
            onClick={() => setTerminalOpen(!terminalOpen)}
            className={cn(
              "p-2 rounded-md transition-colors",
              currentTheme.buttonBg,
              currentTheme.styles.includes("dark") ? "hover:bg-gray-700" : "hover:bg-blue-200",
            )}
            aria-label={t.terminal}
          >
            <span className={currentTheme.styles.includes("dark") ? "text-green-400" : "text-blue-600"}>{">"}_</span>
          </button>
          <ThemeSwitcher />
          <LanguageSwitcher />
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-2 rounded-md transition-colors",
              currentTheme.buttonBg,
              currentTheme.styles.includes("dark") ? "hover:bg-gray-700" : "hover:bg-blue-200",
            )}
            aria-label={t.github}
          >
            <Github size={18} className={currentTheme.styles.includes("dark") ? "text-gray-300" : "text-blue-700"} />
          </a>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className={cn(
              "absolute left-0 right-0 top-full z-30 h-[calc(100dvh-76px)] overflow-y-auto p-4 xl:hidden transition-colors duration-300",
              currentTheme.styles.includes("dark") ? "bg-gray-950" : "bg-blue-50",
            )}
          >
            <nav className="flex flex-col gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id)
                    setMobileMenuOpen(false)
                  }}
                  className={cn(
                    "px-4 py-3 text-left text-base rounded-md transition-all flex items-center gap-2",
                    activeCategory === cat.id
                      ? cn("text-white", currentTheme.styles.includes("dark") ? "bg-pink-500" : "bg-blue-500")
                      : cn(
                          currentTheme.buttonBg,
                          currentTheme.styles.includes("dark")
                            ? "text-gray-300 hover:bg-gray-700"
                            : "text-blue-700 hover:bg-blue-200",
                        ),
                  )}
                >
                  <span>{cat.icon}</span>{" "}
                  {cat.id === "featured" ? t.featured : cat.id === "all" ? t.allProjects : t.experimental}
                </button>
              ))}
              <Link
                href="/wiki"
                className={cn(
                  "px-4 py-3 text-left text-base rounded-md transition-all flex items-center gap-2",
                  currentTheme.buttonBg,
                  currentTheme.styles.includes("dark")
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-blue-700 hover:bg-blue-200",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Book size={16} /> {t.wiki}
              </Link>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => {
                    setTerminalOpen(!terminalOpen)
                    setMobileMenuOpen(false)
                  }}
                  className={cn(
                    "flex-1 p-3 rounded-md transition-colors flex items-center justify-center gap-2",
                    currentTheme.buttonBg,
                    currentTheme.styles.includes("dark") ? "hover:bg-gray-700" : "hover:bg-blue-200",
                  )}
                  aria-label={t.terminal}
                >
                  <span className={currentTheme.styles.includes("dark") ? "text-green-400" : "text-blue-600"}>
                    {">"}_
                  </span>
                  <span>{t.terminal}</span>
                </button>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <ThemeSwitcher />
                <LanguageSwitcher />
              </div>
              <div className="mt-2">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex-1 p-3 rounded-md transition-colors flex items-center justify-center gap-2",
                    currentTheme.buttonBg,
                    currentTheme.styles.includes("dark") ? "hover:bg-gray-700" : "hover:bg-blue-200",
                  )}
                  aria-label={t.github}
                >
                  <Github
                    size={18}
                    className={currentTheme.styles.includes("dark") ? "text-gray-300" : "text-blue-700"}
                  />
                  <span>{t.github}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="pt-28 md:pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        {profileData.position === "top" && <ProfileSection />}

        <nav aria-label="Page sections" className="mb-10 flex flex-wrap gap-3">
          {[
            { href: "#research", label: language === "ja" ? "研究・論文" : "Research & Publications" },
            { href: "#background", label: language === "ja" ? "経歴" : "Background" },
            { href: "#projects", label: language === "ja" ? "作品" : "Projects" },
          ].map((item) => <a key={item.href} href={item.href} className={cn("rounded-full px-4 py-2 text-sm font-medium transition-colors", currentTheme.styles.includes("dark") ? "bg-purple-950/70 text-purple-200 hover:bg-purple-900" : "bg-white/80 text-purple-700 hover:bg-purple-100")}>{item.label}</a>)}

        </nav>

        <ResearchSection />

        <section id="projects" aria-label="Projects" className="mb-16 scroll-mt-28">
          <div
            className={cn(
              "flex items-center gap-2 mb-6 p-4 rounded-lg backdrop-blur-sm",
              currentTheme.styles.includes("dark") ? "bg-black/50" : "bg-white/80",
            )}
          >
            <h2
              className={cn(
                "text-2xl font-bold",
                currentTheme.styles.includes("dark") ? "text-white" : "text-blue-700",
              )}
            >
              {currentCategory.id === "featured"
                ? t.featured
                : currentCategory.id === "all"
                  ? t.allProjects
                  : t.experimental}
            </h2>
            {currentCategory.description && (
              <p className={cn("text-sm", currentTheme.styles.includes("dark") ? "text-gray-400" : "text-blue-500")}>
                {currentCategory.description}
              </p>
            )}
          </div>

          <p className={cn("mb-5 text-sm", currentTheme.styles.includes("dark") ? "text-gray-300" : "text-slate-600")}>
            Template examples for this layout preview — these are not ColorEyes’ projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.works.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </section>

        {/* Profile Section - Bottom position */}
        {profileData.position === "bottom" && <ProfileSection />}
      </main>

      {/* Floating anime girl */}
      {characterEnabled && currentTheme.features.includes("floating-girl") && currentTheme.floatingGirl && (
        <FloatingGirl girl={currentTheme.floatingGirl} secretCodeActivated={secretCodeActivated} onClose={() => setCharacterEnabled(false)} />
      )}

      {/* Terminal UI */}
      {currentTheme.enableTerminalCommands && terminalOpen && (
        <TerminalUI onClose={() => setTerminalOpen(false)} works={works} onSelectCategory={setActiveCategory} />
      )}

      {/* Footer */}
      <footer
        className={cn(
          "relative px-4 py-6 text-center text-xs backdrop-blur-sm transition-colors duration-300",
          currentTheme.footerBg,
          currentTheme.styles.includes("dark") ? "text-gray-500" : "text-blue-500",
        )}
      >
        <div className="mb-5 flex flex-col items-center gap-2">
          <button
            type="button"
            role="switch"
            aria-checked={characterEnabled}
            aria-label={language === "ja" ? "キャラクター" : "Character"}
            onClick={() => setCharacterEnabled((enabled) => !enabled)}
            className={cn("inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium", currentTheme.buttonBg, currentTheme.textColor)}
          >
            <span>{language === "ja" ? "キャラクター" : "Character"}</span>
            <span aria-hidden="true" className={cn("relative h-5 w-9 rounded-full transition-colors", characterEnabled ? "bg-violet-500" : "bg-slate-400")}>
              <span className={cn("absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform", characterEnabled && "translate-x-4")} />
            </span>
            <span aria-hidden="true">{characterEnabled ? "ON" : "OFF"}</span>
          </button>
        </div>
        <p>© 2026 ColorEyes · <a href="https://github.com/anime-portfolio/app" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Anime Portfolio</a></p>
        <p className="mt-2">Characters by Aesthetic Vulpes · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">CC BY 4.0</a></p>
      </footer>
    </div>
  )
}

export default function Portfolio() {
  return <PortfolioContent />
}
