import { useLanguage } from '../../context/LanguageContext'
import Button from '../shared/Button'
import ImagePreview from '../shared/ImagePreview'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()
  const { hero } = t
  return (
    <div className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 className="hero__headline">{hero.headline}</h1>
          <p className="hero__subheadline">{hero.subheadline}</p>
          <Button href={hero.cta.href}>{hero.cta.label}</Button>
        </div>
        <div className="hero__visual">
          <ImagePreview
            src={hero.image}
            alt="System architecture diagram"
            caption={hero.imageCaption}
            fit="contain"
          />
        </div>
      </div>
    </div>
  )
}
