import { useLanguage } from '../../context/LanguageContext'
import Section from '../layout/Section'
import './HowIWork.css'

export default function HowIWork() {
  const { t } = useLanguage()
  const { howIWork } = t
  return (
    <Section id="how-i-work" title={howIWork.sectionTitle}>
      <p className="hiw__intro">{howIWork.intro}</p>

      <div className="hiw__principles">
        {howIWork.principles.map((p, i) => (
          <div key={i} className="hiw__principle">
            <div className="hiw__principle-index">{String(i + 1).padStart(2, '0')}</div>
            <div>
              <h3 className="hiw__principle-title">{p.title}</h3>
              <p className="hiw__principle-desc">{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hiw__tools">
        <h3 className="hiw__tools-label">{howIWork.toolsHeading}</h3>
        <div className="hiw__tools-list">
          {howIWork.tools.map((tool) => (
            <span key={tool} className="tag">{tool}</span>
          ))}
        </div>
      </div>
    </Section>
  )
}
