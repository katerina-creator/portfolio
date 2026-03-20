import { useState, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import './Header.css'

const SECTION_IDS = ['overview', 'problem', 'solution', 'results', 'contact']

function useActiveSection(): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { threshold: 0.5 },
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return active
}

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    e.preventDefault()
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Header() {
  const { t, lang, setLang } = useLanguage()
  const activeSection = useActiveSection()

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo">
          <span className="header__name">{t.meta.name}</span>
          <span className="header__role">{t.meta.tagline}</span>
        </a>

        <nav className="header__nav" aria-label={t.header.navAriaLabel}>
          {t.header.nav.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={item.href}
                href={item.href}
                className={`header__link${isActive ? ' header__link--active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="header__right">
          <div className="header__lang-switch" role="group" aria-label="Language">
            <button
              className={`header__lang-btn${lang === 'en' ? ' header__lang-btn--active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              className={`header__lang-btn${lang === 'ru' ? ' header__lang-btn--active' : ''}`}
              onClick={() => setLang('ru')}
              aria-pressed={lang === 'ru'}
            >
              RU
            </button>
          </div>

          <a href="#contact" className="header__cta">
            {t.header.getInTouch}
          </a>
        </div>
      </div>
    </header>
  )
}
