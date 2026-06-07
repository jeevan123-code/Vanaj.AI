const TYPE_TONE = {
  Bacterium: { bg: '#EAF1EC', fg: '#27513B' },
  Fungus: { bg: '#F4ECDD', fg: '#9A6B1E' },
  'Virus (insect-transmitted)': { bg: '#F1E8E4', fg: '#A65A3A' },
  'Fungal / bacterial complex': { bg: '#ECEDE7', fg: '#52605A' },
}

export default function DiseaseCard({ disease, index, onOpen }) {
  const tone = TYPE_TONE[disease.pathogenType] ?? TYPE_TONE['Fungal / bacterial complex']

  return (
    <button
      onClick={onOpen}
      className="group text-left rounded-4xl bg-white shadow-soft hover:shadow-lift ring-1 ring-ink/5
                 transition-all duration-500 ease-out-expo hover:-translate-y-1 overflow-hidden
                 animate-fade-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cloud">
        <img
          src={disease.images[0]}
          alt={disease.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out-expo
                     group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
        <span
          className="absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide"
          style={{ background: tone.bg, color: tone.fg }}
        >
          {disease.pathogenType}
        </span>
        <span className="absolute top-3 right-3 font-display text-sm text-white/90">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-2xl text-ink tracking-tightest leading-snug">
          {disease.name}
        </h3>
        <p className="mt-1 text-sm italic text-slate">{disease.pathogen}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {disease.affectedStages.slice(0, 4).map((s) => (
              <span
                key={s}
                className="rounded-md bg-cloud px-2 py-0.5 text-[11px] font-medium text-slate capitalize"
              >
                {s}
              </span>
            ))}
          </div>
          <span className="text-forest text-sm font-medium opacity-0 -translate-x-1 transition-all
                           duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            Open →
          </span>
        </div>
      </div>
    </button>
  )
}
