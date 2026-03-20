import img1 from '../../assets/images/1_livemarket.png'
import img2 from '../../assets/images/2_signals.png'
import img3 from '../../assets/images/3_details.png'
import img4 from '../../assets/images/4_qualitysignal.png'
import img5 from '../../assets/images/5_market insights.png'
import img6 from '../../assets/images/6_dashboard.png'
import ImagePreview from './ImagePreview'
import './ArtifactsScreenshots.css'

const screenshots = [
  { src: img1, title: 'Обзор рынка (Live Market)' },
  { src: img2, title: 'Торговые сигналы' },
  { src: img3, title: 'Детальный просмотр сигнала' },
  { src: img4, title: 'Оценка качества сигнала' },
  { src: img5, title: 'Рыночная аналитика' },
  { src: img6, title: 'Дашборд системы' },
]

export default function ArtifactsScreenshots() {
  return (
    <div className="screenshots-block">
      <div className="screenshots-grid">
        {screenshots.map((item, i) => (
          <div key={i} className="screenshots-item">
            <ImagePreview src={item.src} alt={item.title} caption={item.title} />
          </div>
        ))}
      </div>
    </div>
  )
}
