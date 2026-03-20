import { useState, useEffect, useCallback } from 'react'
import './ImagePreview.css'

type Props = {
  src: string
  alt?: string
  caption?: string
  fit?: 'cover' | 'contain'
}

export default function ImagePreview({ src, alt = '', caption, fit = 'cover' }: Props) {
  const [open, setOpen] = useState(false)
  const [scale, setScale] = useState(1)

  const close = useCallback(() => {
    setOpen(false)
    setScale(1)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    setScale((s) => Math.min(4, Math.max(1, s - e.deltaY * 0.002)))
  }

  return (
    <>
      <figure className="preview-card-wrapper">
        <div
          className={`preview-card${fit === 'contain' ? ' preview-card--contain' : ''}`}
          onClick={() => setOpen(true)}
          role="button"
          tabIndex={0}
          aria-label={`View ${alt || 'image'} fullscreen`}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(true) }}
        >
          <img src={src} alt={alt} />
          <div className="preview-card__zoom-hint" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
        </div>
        {caption && <figcaption className="preview-card__caption">{caption}</figcaption>}
      </figure>

      {open && (
        <div
          className="modal-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()} onWheel={handleWheel}>
            <button className="modal-close" onClick={close} aria-label="Close">✕</button>
            <img
              src={src}
              alt={alt}
              className="modal-image"
              style={{ transform: `scale(${scale})`, cursor: scale > 1 ? 'zoom-out' : 'zoom-in' }}
              onClick={() => setScale((s) => (s === 1 ? 1.8 : 1))}
            />
          </div>
        </div>
      )}
    </>
  )
}
