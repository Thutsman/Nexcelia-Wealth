'use client'

export function GlobeAnimation() {
  return (
    <div className="relative w-full max-w-[520px] aspect-square mx-auto">
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(184,150,90,0.06) 0%, transparent 70%)',
        }}
      />
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 40px rgba(184,150,90,0.12))' }}
      >
        {/* Outer ring */}
        <circle cx="200" cy="200" r="190" stroke="var(--border)" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="185" stroke="var(--border-bright)" strokeWidth="0.5" strokeDasharray="4 8" />

        {/* Globe circles */}
        <circle cx="200" cy="200" r="160" stroke="var(--border)" strokeWidth="0.8" />

        {/* Latitude lines */}
        {[40, 80, 120, 140].map((r, i) => (
          <ellipse
            key={i}
            cx="200"
            cy="200"
            rx={r}
            ry={r * 0.3}
            stroke="var(--border)"
            strokeWidth="0.6"
            opacity={0.4 + i * 0.1}
          />
        ))}

        {/* Longitude arcs — pre-computed to avoid SSR/client float mismatch */}
        {[
          { x1: 360, y1: 200, x2: 40, y2: 200 },
          { x1: 338.56, y1: 280, x2: 61.44, y2: 120 },
          { x1: 277.28, y1: 338.56, x2: 122.72, y2: 61.44 },
          { x1: 200, y1: 360, x2: 200, y2: 40 },
          { x1: 122.72, y1: 338.56, x2: 277.28, y2: 61.44 },
          { x1: 61.44, y1: 280, x2: 338.56, y2: 120 },
          { x1: 40, y1: 200, x2: 360, y2: 200 },
          { x1: 61.44, y1: 120, x2: 338.56, y2: 280 },
          { x1: 122.72, y1: 61.44, x2: 277.28, y2: 338.56 },
          { x1: 200, y1: 40, x2: 200, y2: 360 },
          { x1: 277.28, y1: 61.44, x2: 122.72, y2: 338.56 },
          { x1: 338.56, y1: 120, x2: 61.44, y2: 280 },
        ].map((pts, i) => (
          <line
            key={i}
            x1={pts.x1} y1={pts.y1}
            x2={pts.x2} y2={pts.y2}
            stroke="var(--border)"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}

        {/* Animated equator */}
        <ellipse
          cx="200"
          cy="200"
          rx="160"
          ry="48"
          stroke="var(--gold)"
          strokeWidth="0.6"
          opacity="0.25"
          strokeDasharray="8 4"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="30s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Highlight arc */}
        <path
          d="M 80 200 A 120 120 0 0 1 200 80"
          stroke="var(--gold-lt)"
          strokeWidth="1"
          opacity="0.4"
          fill="none"
        />

        {/* Location dots */}
        {/* Southern Africa */}
        <circle cx="218" cy="248" r="3" fill="var(--gold)" opacity="0.9" />
        <circle cx="218" cy="248" r="8" stroke="var(--gold)" strokeWidth="0.8" fill="none" opacity="0.4">
          <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* The Hague */}
        <circle cx="182" cy="160" r="2.5" fill="var(--gold-lt)" opacity="0.9" />
        <circle cx="182" cy="160" r="7" stroke="var(--gold-lt)" strokeWidth="0.8" fill="none" opacity="0.4">
          <animate attributeName="r" values="5;10;5" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Shanghai */}
        <circle cx="286" cy="178" r="2.5" fill="var(--gold-pale)" opacity="0.9" />
        <circle cx="286" cy="178" r="7" stroke="var(--gold-pale)" strokeWidth="0.8" fill="none" opacity="0.4">
          <animate attributeName="r" values="5;11;5" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3.5s" repeatCount="indefinite" />
        </circle>

        {/* Connection lines */}
        <line x1="218" y1="248" x2="182" y2="160" stroke="var(--border-bright)" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.5" />
        <line x1="218" y1="248" x2="286" y2="178" stroke="var(--border-bright)" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.5" />
        <line x1="182" y1="160" x2="286" y2="178" stroke="var(--border-bright)" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.5" />

        {/* Centre cross */}
        <circle cx="200" cy="200" r="4" fill="var(--gold)" opacity="0.15" />
        <circle cx="200" cy="200" r="1.5" fill="var(--gold)" opacity="0.6" />
      </svg>

      {/* Location badge */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        style={{
          background: 'rgba(12,20,34,0.85)',
          border: '1px solid var(--border)',
          backdropFilter: 'blur(8px)',
          padding: '0.5rem 1.25rem',
          whiteSpace: 'nowrap',
        }}
      >
        <span className="label-text text-[0.6rem]">
          Southern Africa · The Hague · Shanghai
        </span>
      </div>
    </div>
  )
}
