import { crops } from '../data/crops.js'
import CropCard from '../components/CropCard.jsx'

export default function Home() {
  return (
    <div>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <p
            className="text-sm font-medium tracking-[0.2em] uppercase text-forest-soft animate-fade-up"
            style={{ animationDelay: '0ms' }}
          >
            For B.Sc. Agriculture students
          </p>

          <h1
            className="mt-5 font-display text-5xl sm:text-7xl leading-[0.98] tracking-tightest text-ink max-w-3xl animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            Learn crops the way
            <br />
            they actually{' '}
            <span className="italic text-forest">grow.</span>
          </h1>

          <p
            className="mt-7 text-lg sm:text-xl leading-relaxed text-slate max-w-xl animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            Turn each crop in your hand through four stages of life, then study
            the diseases that decide every harvest — symptoms, spread and how to
            manage them, organically and chemically.
          </p>

          <div
            className="mt-10 flex items-center gap-4 animate-fade-up"
            style={{ animationDelay: '360ms' }}
          >
            <a
              href="#crops"
              className="rounded-full bg-forest px-7 py-3.5 text-paper font-medium shadow-soft
                         hover:bg-forest-deep transition-colors"
            >
              Choose a crop
            </a>
            <span className="text-sm text-slate">
              3 crops · 10 paddy diseases · 4 growth stages
            </span>
          </div>
        </div>

        {/* decorative bottom hairline */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="hairline" />
        </div>
      </section>

      {/* ---------------- Crop grid ---------------- */}
      <section id="crops" className="mx-auto max-w-6xl px-6 py-16 sm:py-20 scroll-mt-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl sm:text-4xl text-ink tracking-tightest">
            The field
          </h2>
          <p className="text-sm text-slate max-w-xs text-right hidden sm:block">
            Pick a crop to open its growth stages and disease library.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {crops.map((crop, i) => (
            <CropCard key={crop.id} crop={crop} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
