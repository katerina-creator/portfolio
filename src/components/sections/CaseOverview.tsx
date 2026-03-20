import { useLanguage } from '../../context/LanguageContext'
import Section from '../layout/Section'
import ImagePlaceholder from '../shared/ImagePlaceholder'
import './CaseOverview.css'

export default function CaseOverview() {
  const { t } = useLanguage()
  const { caseOverview } = t
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
          <ImagePlaceholder
            caption={caseOverview.imagePlaceholder.caption}
            alt={caseOverview.imagePlaceholder.alt}
            ratio="4/3"
          />
        </div>
      </div>
    </Section>
  )
}
