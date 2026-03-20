import { useLanguage } from '../../context/LanguageContext'
import Section from '../layout/Section'
import ImagePlaceholder from '../shared/ImagePlaceholder'
import ImagePreview from '../shared/ImagePreview'
import './Artifacts.css'

const RATIOS: Array<'16/9' | '4/3' | '3/2'> = ['16/9', '4/3', '3/2', '4/3']

export default function Artifacts() {
  const { t } = useLanguage()
  const { artifacts } = t
  return (
    <Section id="artifacts" title={artifacts.sectionTitle} subtitle={artifacts.sectionSubtitle}>
      <div className="artifacts__grid">
        {artifacts.items.map((artifact, i) => (
          <div key={i} className="artifacts__item">
            <span className="tag">{artifact.type}</span>
            <div style={{ marginTop: 'var(--space-4)' }}>
              <ImagePlaceholder
                caption={artifact.caption}
                alt={artifact.alt}
                ratio={RATIOS[i] ?? '16/9'}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="artifacts__section">
        <ImagePreview
          src={artifacts.userFlow.image}
          alt="User interaction flow"
          caption={artifacts.userFlow.caption}
        />
      </div>

      <div className="artifacts__section">
        <div className="artifacts__product-grid">
          {artifacts.product.items.map((item, i) => (
            <ImagePreview
              key={i}
              src={item.image}
              alt={item.title}
              caption={item.caption}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
