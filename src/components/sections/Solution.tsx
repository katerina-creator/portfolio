import { useLanguage } from '../../context/LanguageContext'
import Section from '../layout/Section'
import ImagePlaceholder from '../shared/ImagePlaceholder'
import './Solution.css'

export default function Solution() {
  const { t } = useLanguage()
  const { solution } = t
  const { dataFlow, keyFixes, architectureDecisions } = solution
  return (
    <Section id="solution" title={solution.sectionTitle} subtitle={solution.intro} surface>

      {/* ── Data Flow ────────────────────────────────────────────── */}
      <div className="solution__block">
        <h3 className="solution__block-title">{dataFlow.blockTitle}</h3>
        <p className="solution__block-intro">{dataFlow.description}</p>

        <div className="solution__flow-grid">
          <div className="solution__flow-col">
            <h4 className="solution__flow-label solution__flow-label--before">{dataFlow.beforeLabel}</h4>
            <ol className="solution__flow-list">
              {dataFlow.beforeSteps.map((step, i) => (
                <li key={i} className="solution__flow-step solution__flow-step--before">{step}</li>
              ))}
            </ol>
          </div>
          <div className="solution__flow-divider" aria-hidden="true">→</div>
          <div className="solution__flow-col">
            <h4 className="solution__flow-label solution__flow-label--after">{dataFlow.afterLabel}</h4>
            <ol className="solution__flow-list">
              {dataFlow.afterSteps.map((step, i) => (
                <li key={i} className="solution__flow-step solution__flow-step--after">{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="solution__image">
          <ImagePlaceholder
            caption={dataFlow.imagePlaceholder.caption}
            alt={dataFlow.imagePlaceholder.alt}
            ratio="16/9"
          />
        </div>
      </div>

      {/* ── Key Fixes ─────────────────────────────────────────────── */}
      <div className="solution__block">
        <h3 className="solution__block-title">{keyFixes.blockTitle}</h3>
        <div className="solution__fixes">
          {keyFixes.items.map((fix, i) => (
            <div key={i} className="solution__fix">
              <div className="solution__fix-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="solution__fix-body">
                <h4 className="solution__fix-title">{fix.title}</h4>
                <div className="solution__fix-row">
                  <div>
                    <p className="solution__fix-label">{keyFixes.theProblemLabel}</p>
                    <p className="solution__fix-text">{fix.problem}</p>
                  </div>
                  <div>
                    <p className="solution__fix-label">{keyFixes.whatIDidLabel}</p>
                    <p className="solution__fix-text">{fix.fix}</p>
                  </div>
                </div>
                <p className="solution__fix-outcome">{fix.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Architecture Decisions ────────────────────────────────── */}
      <div className="solution__block">
        <h3 className="solution__block-title">{architectureDecisions.blockTitle}</h3>
        <div className="solution__decisions">
          {architectureDecisions.items.map((d, i) => (
            <div key={i} className="solution__decision">
              <h4 className="solution__decision-title">{d.title}</h4>
              <div className="solution__decision-grid">
                <div>
                  <p className="solution__fix-label">{architectureDecisions.decisionLabel}</p>
                  <p className="solution__fix-text">{d.decision}</p>
                </div>
                <div>
                  <p className="solution__fix-label">{architectureDecisions.rationaleLabel}</p>
                  <p className="solution__fix-text">{d.rationale}</p>
                </div>
                <div>
                  <p className="solution__fix-label">{architectureDecisions.tradeoffLabel}</p>
                  <p className="solution__fix-text">{d.tradeoff}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </Section>
  )
}
