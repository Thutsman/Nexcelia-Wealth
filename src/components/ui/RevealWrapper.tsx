'use client'

import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RevealWrapperProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
  once?: boolean
}

const directionMap = {
  up:    { y: 36, x: 0 },
  down:  { y: -36, x: 0 },
  left:  { x: 36, y: 0 },
  right: { x: -36, y: 0 },
}

export function RevealWrapper({
  children,
  delay = 0,
  direction = 'up',
  className,
  once = true,
}: RevealWrapperProps) {
  const initial = directionMap[direction]

  const variants: Variants = {
    hidden: { opacity: 0, ...initial },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
