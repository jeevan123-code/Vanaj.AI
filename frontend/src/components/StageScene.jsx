import { useLayoutEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PlantModel from './PlantModel.jsx'
// import { useGLTF } from '@react-three/drei'   // <-- enable for REAL models

gsap.registerPlugin(ScrollTrigger)

/* ---------------------------------------------------------------------------
   The model inside the canvas. Smoothly scales-in on each stage change and
   drifts gently as the user scrolls. `progress` is a ref (0..1) fed by
   ScrollTrigger so we never re-render React on every scroll frame.
--------------------------------------------------------------------------- */
function SceneModel({ stageId, progress }) {
  const ref = useRef()
  const appear = useRef(1)
  const prevStage = useRef(stageId)

  useFrame((_, dt) => {
    if (prevStage.current !== stageId) {
      appear.current = 0
      prevStage.current = stageId
    }
    appear.current = THREE.MathUtils.damp(appear.current, 1, 7, dt)
    if (ref.current) {
      const s = 0.55 + appear.current * 0.45
      ref.current.scale.setScalar(s)
      ref.current.rotation.y += dt * 0.18
      ref.current.position.y = -progress.current * 0.35
    }
  })

  return (
    <group ref={ref}>
      {/* ----------------------------------------------------------------
          TODO: REAL MODEL
          Replace <PlantModel/> with your Meshy.ai export once it's added to
          public/models/paddy/. Example:

            const { scene } = useGLTF(`/models/paddy/${stageId}.glb`)
            return <primitive object={scene.clone()} />

          (Wrap StageScene's <Canvas> children in <Suspense fallback={null}>
           and keep the file paths matching stage.model in the data file.)
      ---------------------------------------------------------------- */}
      <PlantModel stageId={stageId} />
    </group>
  )
}

export default function StageScene({ stages, accent = '#27513B' }) {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)
  const progress = useRef(0)
  const panelRefs = useRef([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      stages.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: panelRefs.current[i],
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) setActive(i)
          },
        })
      })
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          progress.current = self.progress
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [stages])

  const stage = stages[active]

  return (
    <section ref={sectionRef} className="relative">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2">
        {/* --- Sticky 3D canvas --- */}
        <div className="lg:sticky lg:top-16 h-[58vh] lg:h-[calc(100vh-4rem)] order-1">
          <div className="relative h-full w-full">
            <Canvas
              camera={{ position: [0, 0.6, 4.4], fov: 38 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
            >
              <ambientLight intensity={0.65} />
              <directionalLight position={[4, 6, 3]} intensity={1.1} castShadow />
              <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#cfe0c9" />
              <SceneModel stageId={stage.id} progress={progress} />
              <ContactShadows
                position={[0, -1, 0]}
                opacity={0.32}
                scale={6}
                blur={2.6}
                far={3}
                color="#1A2620"
              />
            </Canvas>

            {/* stage progress rail */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
              {stages.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() =>
                    panelRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }
                  className="group flex items-center gap-3"
                  aria-label={`Go to ${s.name} stage`}
                >
                  <span
                    className="h-px transition-all duration-500"
                    style={{
                      width: i === active ? 34 : 16,
                      background: i === active ? accent : 'rgba(26,38,32,0.25)',
                    }}
                  />
                  <span
                    className={`text-xs transition-colors ${
                      i === active ? 'text-ink font-medium' : 'text-ink/35'
                    }`}
                  >
                    {s.name}
                  </span>
                </button>
              ))}
            </div>

            {/* drag hint */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.2em] text-ink/30">
              placeholder model · scroll to grow
            </div>
          </div>
        </div>

        {/* --- Scrolling stage panels --- */}
        <div className="order-2">
          {stages.map((s, i) => (
            <div
              key={s.id}
              ref={(el) => (panelRefs.current[i] = el)}
              className="min-h-[80vh] lg:min-h-screen flex items-center"
            >
              <div
                className="transition-all duration-700"
                style={{ opacity: i === active ? 1 : 0.32 }}
              >
                <div className="flex items-baseline gap-4 mb-5">
                  <span
                    className="font-display text-6xl leading-none"
                    style={{ color: accent }}
                  >
                    0{i + 1}
                  </span>
                  <span className="text-sm font-medium tracking-wide text-slate uppercase">
                    {s.window}
                  </span>
                </div>
                <h3 className="font-display text-4xl sm:text-5xl text-ink tracking-tightest mb-4">
                  {s.name}
                </h3>
                <p className="text-lg leading-relaxed text-slate max-w-md">{s.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
