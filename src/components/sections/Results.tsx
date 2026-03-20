import { useLanguage } from '../../context/LanguageContext'
import Section from '../layout/Section'
import './Results.css'

export default function Results() {
  const { t } = useLanguage()
  const { results } = t
  return (
    <Section id="results" title={results.sectionTitle} surface>
      <p className="results__subtitle">{results.subtitle}</p>

      <div className="results__metrics">
        {results.metrics.map((m) => (
          <div key={m.label} className="results__metric">
            <span className="results__metric-value">{m.value}</span>
            <span className="results__metric-label">{m.label}</span>
          </div>
        ))}
      </div>

      <ul className="results__list">
        {results.items.map((item, i) => (
          <li key={i} className="results__list-item">{item}</li>
        ))}
      </ul>
    </Section>
  )
}
