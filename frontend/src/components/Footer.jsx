export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="font-display text-lg text-ink tracking-tightest">
          Vanaj<span className="text-forest-soft">.ai</span>
        </div>
        <p className="text-sm text-slate max-w-md">
          A 3D field guide for B.Sc. Agriculture students. Built for clear,
          calm learning — growth stages you can turn in your hand, diseases you
          can recognise in the field.
        </p>
        <p className="text-xs text-slate/70">© {new Date().getFullYear()} Vanaj.ai</p>
      </div>
    </footer>
  )
}
