import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { en } from '../locales/en'
import { ru } from '../locales/ru'
import type { Locale } from '../locales/en'

type Lang = 'en' | 'ru'

const locales: Record<Lang, Locale> = { en, ru }

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Locale
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang')
    return stored === 'ru' ? 'ru' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: locales[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
