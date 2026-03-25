'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { navLinks } from '@/data/navigation'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'py-3 bg-navy/90 backdrop-blur-md border-b border-[var(--border)]'
            : 'py-5 bg-transparent'
        )}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex flex-col gap-0.5 group">
            <span className="font-display text-ivory text-lg tracking-[0.14em] group-hover:text-gold transition-colors duration-200">
              VACHEROT
            </span>
            <span className="label-text text-[0.55rem] tracking-[0.22em] text-ivory-dim">
              Capital Strategy · Southern Africa
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 font-body text-[0.78rem] font-medium tracking-[0.08em] uppercase text-midnight bg-gold hover:bg-gold-lt transition-colors duration-200"
            >
              Begin Conversation →
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 group"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  'block w-6 h-px bg-ivory transition-all duration-300',
                  mobileOpen && 'rotate-45 translate-y-2'
                )}
              />
              <span
                className={cn(
                  'block w-4 h-px bg-gold transition-all duration-300',
                  mobileOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block w-6 h-px bg-ivory transition-all duration-300',
                  mobileOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: 'var(--midnight)' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="font-display text-4xl text-ivory hover:text-gold transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 px-8 py-3 font-body text-xs font-medium tracking-[0.08em] uppercase text-midnight bg-gold"
                onClick={() => setMobileOpen(false)}
              >
                Begin Conversation →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
