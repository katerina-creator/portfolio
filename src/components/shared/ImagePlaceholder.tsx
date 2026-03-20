import './ImagePlaceholder.css'

interface ImagePlaceholderProps {
  caption: string
  alt: string
  ratio?: '16/9' | '4/3' | '3/2'
}

export default function ImagePlaceholder({ caption, alt, ratio = '16/9' }: ImagePlaceholderProps) {
  return (
    <figure className="img-placeholder">
      <div className={`img-placeholder__box img-placeholder__box--${ratio.replace('/', '-')}`} role="img" aria-label={alt}>
        <span className="img-placeholder__label">{alt}</span>
      </div>
      <figcaption className="img-placeholder__caption">{caption}</figcaption>
    </figure>
  )
}
