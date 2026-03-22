import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6"
      style={{ background: 'var(--midnight)' }}
    >
      <span className="label-text text-[0.6rem]">Error 404</span>
      <h1 className="font-display text-6xl text-ivory font-light">Page not found</h1>
      <p className="text-ivory-dim text-sm font-body max-w-xs">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-4 px-7 py-3 font-accent text-xs tracking-widest uppercase text-midnight bg-gold hover:bg-gold-lt transition-colors"
      >
        Return Home →
      </Link>
    </div>
  )
}
