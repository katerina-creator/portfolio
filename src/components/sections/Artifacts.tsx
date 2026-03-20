import { useLanguage } from '../../context/LanguageContext'
import Section from '../layout/Section'
import ImagePlaceholder from '../shared/ImagePlaceholder'
import ImagePreview from '../shared/ImagePreview'
import DiagramPreview from '../shared/DiagramPreview'
import ArtifactsScreenshots from '../shared/ArtifactsScreenshots'
import './Artifacts.css'

type ArtifactItem = {
  type: string
  image?: string
  caption: string
  alt: string
}

export default function Artifacts() {
  const { t } = useLanguage()
  const { artifacts } = t
  return (
    <Section id="artifacts" title={artifacts.sectionTitle} subtitle={artifacts.sectionSubtitle}>
      <div className="artifacts__grid">
        {(artifacts.items as ArtifactItem[]).map((artifact, i) => (
          <div key={i} className="artifacts__item">
            <span className="tag">{artifact.type}</span>
            <div style={{ marginTop: 'var(--space-4)' }}>
              {artifact.image ? (
                <ImagePreview
                  src={artifact.image}
                  alt={artifact.alt ?? artifact.caption}
                  caption={artifact.caption}
                />
              ) : (
                <ImagePlaceholder
                  caption={artifact.caption}
                  alt={artifact.alt ?? artifact.caption}
                  ratio="16/9"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="artifacts__section">
        <DiagramPreview
          src={artifacts.userFlow.image}
          alt="User interaction flow"
          caption={artifacts.userFlow.caption}
        />
      </div>

      <ArtifactsScreenshots />
    </Section>
  )
}
