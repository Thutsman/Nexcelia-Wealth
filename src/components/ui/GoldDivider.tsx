import { cn } from '@/lib/utils'

interface GoldDividerProps {
  className?: string
  width?: 'sm' | 'md' | 'full'
}

export function GoldDivider({ className, width = 'sm' }: GoldDividerProps) {
  const widthMap = { sm: 'w-12', md: 'w-24', full: 'w-full' }
  return (
    <span
      className={cn('block h-px', widthMap[width], className)}
      style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
    />
  )
}
