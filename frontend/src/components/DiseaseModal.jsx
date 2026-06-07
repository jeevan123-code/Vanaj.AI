import { useEffect } from 'react'

function Section({ label, children }) {
  return (
    <section className="py-6 border-t border-ink/10 first:border-t-0">
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-forest-soft mb-3">
        {label}
      </h4>
      {children}
    </section>
  )
}

function List({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink/85">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  )
}

export default function DiseaseModal({ disease, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!disease) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm animate-fade-in" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto quiet-scroll
                   rounded-t-5xl sm:rounded-5xl bg-paper shadow-lift animate-fade-up"
      >
        {/* sticky header */}
        <div className="sticky top-0 z-10 bg-paper/90 backdrop-blur-xl px-6 sm:px-9 pt-7 pb-5
                        border-b border-ink/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-forest/10 px-3 py-1 text-[11px] font-semibold text-forest">
                  {disease.pathogenType}
                </span>
                {disease.affectedStages.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-cloud px-2.5 py-1 text-[11px] font-medium text-slate capitalize"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-ink tracking-tightest">
                {disease.name}
              </h2>
              <p className="mt-1 text-[15px] italic text-slate">{disease.pathogen}</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="shrink-0 grid place-items-center w-10 h-10 rounded-full bg-cloud
                         text-ink/60 hover:text-ink hover:bg-ink/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8"
                      strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-6 sm:px-9 pb-10">
          {/* images */}
          <div className="grid grid-cols-2 gap-3 py-6">
            {disease.images.map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-3xl bg-cloud ring-1 ring-ink/5">
                <img src={src} alt={`${disease.name} ${i + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>

          <Section label="What causes it">
            <p className="text-[15px] leading-relaxed text-ink/85">{disease.cause}</p>
          </Section>

          <Section label="Is it transmitted?">
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  disease.transmission.transmitted
                    ? 'bg-clay/10 text-clay'
                    : 'bg-forest/10 text-forest'
                }`}
              >
                {disease.transmission.transmitted ? 'Yes — it spreads' : 'Not contagious'}
              </span>
              <span className="text-sm text-slate">How it travels:</span>
            </div>
            <List items={disease.transmission.routes} />
          </Section>

          <Section label="How it starts & spreads">
            <p className="text-[15px] leading-relaxed text-ink/85">{disease.originSpread}</p>
          </Section>

          <Section label="Management — Organic">
            <List items={disease.management.organic} />
          </Section>

          <Section label="Management — Chemical">
            <List items={disease.management.chemical} />
          </Section>

          <Section label="How to apply">
            <List items={disease.management.application} />
          </Section>

          <p className="mt-8 text-xs text-slate/70 leading-relaxed">
            Reference material for study. Always confirm chemical names, dosages and local
            approvals with your state agricultural university or extension office before field use.
          </p>
        </div>
      </div>
    </div>
  )
}
