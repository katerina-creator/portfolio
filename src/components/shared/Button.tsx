import type { AnchorHTMLAttributes } from 'react'
import './Button.css'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'outline'
}

export default function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <a className={`btn btn--${variant}`} {...props}>
      {children}
    </a>
  )
}
