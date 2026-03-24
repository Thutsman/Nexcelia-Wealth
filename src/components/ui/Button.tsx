import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

type ButtonVariant = 'primary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'relative inline-flex items-center gap-2 px-7 py-3.5',
    'font-body text-xs font-medium tracking-[0.08em] uppercase',
    'text-midnight bg-gold hover:bg-gold-lt',
    'transition-all duration-300',
    'border border-transparent',
  ].join(' '),
  ghost: [
    'relative inline-flex items-center gap-2 px-7 py-3.5',
    'font-body text-xs font-medium tracking-[0.08em] uppercase',
    'text-ivory-dim hover:text-ivory',
    'border border-[var(--border)] hover:border-[var(--border-bright)]',
    'transition-all duration-300',
  ].join(' '),
  outline: [
    'relative inline-flex items-center gap-2 px-7 py-3.5',
    'font-body text-xs font-medium tracking-[0.08em] uppercase',
    'text-gold hover:text-gold-lt',
    'border border-[var(--border-bright)] hover:border-gold-lt',
    'transition-all duration-300',
  ].join(' '),
}

export function Button({
  variant = 'primary',
  size,
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(variantStyles[variant], className)

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
