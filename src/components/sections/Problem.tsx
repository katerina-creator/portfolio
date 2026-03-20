import { useLanguage } from '../../context/LanguageContext'
import Section from '../layout/Section'
import './Problem.css'

export default function Problem() {
  const { t } = useLanguage()
  const { problem } = t
  return (
    <Section id="problem" title={problem.sectionTitle} surface>
      <div className="problem__layout">
        <div className="problem__statement">
          <p className="problem__lead">{problem.statement}</p>

          <div className="problem__metrics">
            {problem.metrics.map((m) => (
              <div key={m.unit} className="problem__metric">
                <span className="problem__metric-value">{m.value}</span>
                <span className="problem__metric-unit">{m.unit}</span>
                <span className="problem__metric-desc">{m.description}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="problem__details">
          <h3 className="problem__subheading">{problem.painPointsHeading}</h3>
          <ul className="problem__list">
            {problem.painPoints.map((point) => (
              <li key={point} className="problem__list-item">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
