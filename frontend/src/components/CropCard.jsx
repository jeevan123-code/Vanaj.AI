import { Link } from 'react-router-dom'

export default function CropCard({ crop, index }) {
  const inner = (
    <>
      <div className="flex items-start justify-between">
        <span className="font-display text-5xl leading-none text-ink/15">
          0{index + 1}
        </span>
        <span
          className="rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide"
          style={{
            background: crop.available ? `${crop.accent}14` : 'rgba(26,38,32,0.06)',
            color: crop.available ? crop.accent : 'rgba(26,38,32,0.45)',
          }}
        >
          {crop.season}
        </span>
      </div>

      <div className="mt-10">
        <h3 className="font-display text-4xl text-ink tracking-tightest">{crop.name}</h3>
        <p className="mt-1 text-sm italic text-slate">{crop.scientificName}</p>
        <p className="mt-5 text-[15px] leading-relaxed text-slate max-w-xs">{crop.blurb}</p>
      </div>

      <div className="mt-10 flex items-center justify-between">
        {crop.available ? (
          <span
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: crop.accent }}
          >
            Explore
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        ) : (
          <span className="text-sm text-slate/60">Coming soon</span>
        )}
        <span
          className="h-12 w-12 rounded-2xl grid place-items-center transition-colors duration-500"
          style={{
            background: crop.available ? `${crop.accent}10` : 'rgba(26,38,32,0.04)',
          }}
        >
          <Sprout color={crop.available ? crop.accent : 'rgba(26,38,32,0.3)'} />
        </span>
      </div>
    </>
  )

  const className =
    'group relative flex flex-col rounded-5xl bg-white p-8 ring-1 ring-ink/5 shadow-soft ' +
    'transition-all duration-500 ease-out-expo animate-fade-up ' +
    (crop.available
      ? 'hover:-translate-y-1.5 hover:shadow-lift cursor-pointer'
      : 'opacity-80')

  const style = { animationDelay: `${index * 100 + 150}ms` }

  return crop.available ? (
    <Link to={`/crop/${crop.id}`} className={className} style={style}>
      {inner}
    </Link>
  ) : (
    <div className={className} style={style}>
      {inner}
    </div>
  )
}

function Sprout({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 21V11" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M12 13c0-3-2.4-5-5.5-5C6.5 11 8.5 13 12 13zM12 11c0-2.6 2.2-4.5 5-4.5C17 9.2 15 11 12 11z"
        fill={color}
        opacity="0.85"
      />
    </svg>
  )
}
