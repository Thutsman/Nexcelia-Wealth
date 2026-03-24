import Link from 'next/link'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { navLinks } from '@/data/navigation'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-midnight border-t border-[var(--border)] section-padding">
      <div className="container-wide">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-ivory text-2xl tracking-[0.1em]">NEXCELIA</span>
            </Link>
            <p className="text-body max-w-xs">
              A private family office managing multi-generational wealth across Africa, Europe,
              and Asia. Founded on the principles of integrity, discretion, and long-term stewardship.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="label-text text-ivory-dim hover:text-gold transition-colors text-[0.6rem]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-text mb-5 text-[0.6rem]">Navigation</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-ivory-dim hover:text-ivory text-[17px] font-body transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <Link href="/insights" className="text-ivory-dim hover:text-ivory text-[17px] font-body transition-colors duration-200">
                Insights
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="label-text mb-5 text-[0.6rem]">Contact</p>
            <div className="flex flex-col gap-3">
              <p className="text-ivory-dim text-[17px] font-body">Bulawayo, Zimbabwe</p>
              <p className="text-ivory-dim text-[17px] font-body">The Hague, Netherlands</p>
              <p className="text-ivory-dim text-[17px] font-body">Shanghai, China</p>
              <GoldDivider className="my-2" />
              <a
                href="mailto:office@nexceliawealth.com"
                className="text-gold hover:text-gold-lt text-[17px] font-body transition-colors duration-200"
              >
                office@nexceliawealth.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <GoldDivider width="full" className="mb-6 opacity-30" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-ivory-dim text-xs font-body">
            © {year} Nexcelia Wealth (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-ivory-dim hover:text-ivory text-xs font-body transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-ivory-dim hover:text-ivory text-xs font-body transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
