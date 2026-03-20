import { useLanguage } from '../../context/LanguageContext'
import Section from '../layout/Section'
import './MyRole.css'

export default function MyRole() {
  const { t } = useLanguage()
  const { myRole } = t
  return (
    <Section id="my-role" title={myRole.sectionTitle} subtitle={myRole.subtitle}>
      <p className="role__summary">{myRole.summary}</p>

      <div className="role__grid">
        <div>
          <h3 className="role__subheading">{myRole.responsibilitiesHeading}</h3>
          <ul className="role__list">
            {myRole.responsibilities.map((r) => (
              <li key={r} className="role__list-item">{r}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="role__subheading">{myRole.stakeholdersHeading}</h3>
          <div className="role__stakeholders">
            {myRole.stakeholders.map((s) => (
              <div key={s.name} className="role__stakeholder">
                <span className="role__stakeholder-name">{s.name}</span>
                <span className="role__stakeholder-note">{s.interaction}</span>
              </div>
            ))}
          </div>

          <h3 className="role__subheading" style={{ marginTop: 'var(--space-8)' }}>{myRole.timelineHeading}</h3>
          <div className="role__timeline">
            {myRole.timeline.map((item, i) => (
              <div key={item.phase} className="role__timeline-item">
                <div className="role__timeline-marker">{i + 1}</div>
                <div className="role__timeline-body">
                  <div className="role__timeline-meta">
                    <span className="role__timeline-phase">{item.phase}</span>
                    <span className="role__timeline-duration">{item.duration}</span>
                  </div>
                  <p className="role__timeline-activity">{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
