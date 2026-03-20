import { useLanguage } from '../../context/LanguageContext'
import './Header.css'

export default function Header() {
  const { t, lang, setLang } = useLanguage()

  return (
    <header className="header">
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
