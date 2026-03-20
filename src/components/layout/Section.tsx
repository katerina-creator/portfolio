import type { ReactNode } from 'react'
import './Section.css'

interface SectionProps {
  id: string
  title?: string
  subtitle?: string
  surface?: boolean
  children: ReactNode
}

export default function Section({ id, title, subtitle, surface = false, children }: SectionProps) {
  return (
    <section id={id} className={`section${surface ? ' section--surface' : ''}`}>
      <div className="container section__inner">
        {title && (
          <div className="section__header">
            <h2 className="section__title">{title}</h2>
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
