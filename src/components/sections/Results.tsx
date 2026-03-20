import { useLanguage } from '../../context/LanguageContext'
import Section from '../layout/Section'
import './Results.css'

export default function Results() {
  const { t } = useLanguage()
  const { results } = t
  return (
    <Section id="results" title={results.sectionTitle} surface>
      <p className="results__headline">{results.headline}</p>

      <div className="results__metrics">
        {results.quantitative.map((r) => (
          <div key={r.label} className="results__metric">
            <span className="results__metric-value">{r.value}</span>
            <span className="results__metric-label">{r.label}</span>
            <span className="results__metric-detail">{r.detail}</span>
          </div>
        ))}
      </div>

      <div className="results__qualitative">
        <h3 className="results__subheading">{results.teamSaidHeading}</h3>
        <div className="results__quotes">
          {results.qualitative.map((q, i) => (
            <p key={i} className={q.startsWith('"') || q.startsWith('«') ? 'results__quote' : 'results__note'}>
              {q}
            </p>
          ))}
        </div>
      </div>

      <div className="results__ttv">
        <h3 className="results__subheading">{results.timeToValueHeading}</h3>
        <p className="results__ttv-text">{results.timeToValue}</p>
      </div>
    </Section>
  )
}
