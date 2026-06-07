import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCrop } from '../data/crops.js'
import StageScene from '../components/StageScene.jsx'
import DiseaseCard from '../components/DiseaseCard.jsx'
import DiseaseModal from '../components/DiseaseModal.jsx'

export default function CropDetail() {
  const { slug: cropId } = useParams()
  const crop = getCrop(cropId)
  const [openDisease, setOpenDisease] = useState(null)

  if (!crop || !crop.available) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl text-ink tracking-tightest">
          {crop ? `${crop.name} is coming soon` : 'Crop not found'}
        </h1>
        <p className="mt-4 text-slate">
          {crop
            ? 'Its growth stages and disease library are still being prepared.'
            : 'We could not find that crop.'}
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-forest px-6 py-3 text-paper font-medium hover:bg-forest-deep transition-colors"
        >
          ← Back to crops
        </Link>
      </div>
    )
  }

  const data = crop.data

  return (
    <div>
      {/* ---- Crop header ---- */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate hover:text-ink transition-colors"
        >
          <span>←</span> All crops
        </Link>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6 animate-fade-up">
          <div>
            <h1 className="font-display text-6xl sm:text-7xl text-ink tracking-tightest">
              {crop.name}
            </h1>
            <p className="mt-2 text-lg italic text-slate">{crop.scientificName}</p>
          </div>
          <div className="flex gap-8 text-sm">
            <Meta label="Family" value={crop.family} />
            <Meta label="Season" value={crop.season} />
            <Meta label="Diseases" value={`${data.diseases.length} catalogued`} />
          </div>
        </div>
      </section>

      {/* ---- Growth stages intro ---- */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-4">
        <div className="hairline pt-10">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-forest-soft">
            Growth stages
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-ink tracking-tightest max-w-xl">
            Four stages, one continuous life.
          </h2>
          <p className="mt-4 text-lg text-slate max-w-lg">
            Scroll down to move {crop.name.toLowerCase()} through each stage. Drag
            note: the 3D models shown are placeholders until the Meshy.ai exports
            are added.
          </p>
        </div>
      </section>

      {/* ---- The scroll-linked 3D experience ---- */}
      <StageScene stages={data.stages} accent={crop.accent} />

      {/* ---- Disease library ---- */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-8">
        <div className="hairline pt-12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-forest-soft">
            Disease library
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-ink tracking-tightest max-w-xl">
            The ten that shape the season.
          </h2>
          <p className="mt-4 text-lg text-slate max-w-lg">
            Tap any disease to study its cause, how it spreads, and how to manage
            it — both organically and chemically.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.diseases.map((d, i) => (
            <DiseaseCard
              key={d.id}
              disease={d}
              index={i}
              onOpen={() => setOpenDisease(d)}
            />
          ))}
        </div>
      </section>

      {openDisease && (
        <DiseaseModal disease={openDisease} onClose={() => setOpenDisease(null)} />
      )}
    </div>
  )
}

function Meta({ label, value }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.15em] text-slate/60">{label}</p>
      <p className="mt-1 font-medium text-ink">{value}</p>
    </div>
  )
}
