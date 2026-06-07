import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-xl bg-paper/70 border-b border-ink/5">
        <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="grid place-items-center w-8 h-8 rounded-xl bg-forest text-paper shadow-soft">
              <Leaf />
            </span>
            <span className="font-display text-xl tracking-tightest text-ink">
              Vanaj<span className="text-forest-soft">.ai</span>
            </span>
          </Link>

          <div className="flex items-center gap-6 text-sm text-slate">
            <Link
              to="/"
              className={`hidden sm:inline transition-colors hover:text-ink ${
                onHome ? 'text-ink' : ''
              }`}
            >
              Crops
            </Link>
            <span className="hidden sm:inline text-ink/25">·</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cloud px-3 py-1 text-xs font-medium text-forest">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              AI tutor — coming soon
            </span>
          </div>
        </nav>
      </div>
    </header>
  )
}

function Leaf() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21c-5 0-9-4-9-9 0 0 5-1 9 3 4-4 9-3 9-3 0 5-4 9-9 9z"
        fill="currentColor"
        opacity="0.9"
      />
      <path d="M12 21V8" stroke="#27513B" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
