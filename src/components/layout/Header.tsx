import { useState, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import './Header.css'

export default function Header() {
  const { t, lang, setLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#" className="header__logo">
          <span className="header__name">{t.meta.name}</span>
          <span className="header__role">{t.meta.tagline}</span>
        </a>

        <nav className="header__nav" aria-label={t.header.navAriaLabel}>
          {t.header.nav.map((item) => (
            <a key={item.href} href={item.href} className="header__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__right">
          <button
            className="header__lang-toggle"
            onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
            aria-label="Switch language"
          >
            <span className={lang === 'en' ? 'header__lang--active' : ''}>EN</span>
            <span className="header__lang-sep">/</span>
            <span className={lang === 'ru' ? 'header__lang--active' : ''}>RU</span>
          </button>

          <a href="#contact" className="header__cta">
            {t.header.getInTouch}
          </a>
        </div>
      </div>
    </header>
  )
}
