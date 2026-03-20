import { useLanguage } from '../../context/LanguageContext'
import Section from '../layout/Section'
import DiagramPreview from '../shared/DiagramPreview'
import './CaseOverview.css'

export default function CaseOverview() {
  const { t } = useLanguage()
  const { caseOverview, project } = t
  return (
    <Section id="overview" title={caseOverview.sectionTitle}>
      <div className="overview__grid">
        <div className="overview__content">
          <p className="overview__context">{caseOverview.context}</p>
          <dl className="overview__facts">
            {caseOverview.facts.map((fact) => (
              <div key={fact.label} className="overview__fact">
                <dt className="overview__fact-label">{fact.label}</dt>
                <dd className="overview__fact-value">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="overview__visual">
          <DiagramPreview
            src={project.architecture.image}
            alt={project.architecture.title}
            caption={project.architecture.caption}
          />
        </div>
      </div>
    </Section>
  )
}
