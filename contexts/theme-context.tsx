"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { PortfolioPageProperties } from "@/types"

import { crystallineTheme, weltschmerzTheme } from "@/data/portfolio-data"

type ThemeContextType = {
  currentTheme: PortfolioPageProperties
  themeName: "weltschmerz" | "crystalline"
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<"weltschmerz" | "crystalline">("crystalline")
  const [currentTheme, setCurrentTheme] = useState<PortfolioPageProperties>(crystallineTheme)

  useEffect(() => {
    setCurrentTheme(themeName === "weltschmerz" ? weltschmerzTheme : crystallineTheme)
  }, [themeName])

  const toggleTheme = () => {
    setThemeName(themeName === "weltschmerz" ? "crystalline" : "weltschmerz")
  }

  return <ThemeContext.Provider value={{ currentTheme, themeName, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
