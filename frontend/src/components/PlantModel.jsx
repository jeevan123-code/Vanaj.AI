import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/*
  PlantModel — a lightweight, stylized procedural rice plant.
  This is a PLACEHOLDER so the growth-stage scroll experience works before the
  real Meshy.ai .glb models are added. Each stage looks visibly different.

  To swap in the real model later, see the TODO block in StageScene.jsx.
*/

const STAGE_CONFIG = {
  seedling: { blades: 6, height: 0.85, spread: 0.16, tilt: 0.18, base: '#6FAE5F', tip: '#8FC47A', panicle: null },
  tillering: { blades: 14, height: 1.45, spread: 0.42, tilt: 0.32, base: '#4E9249', tip: '#76B061', panicle: null },
  heading: { blades: 18, height: 1.95, spread: 0.5, tilt: 0.3, base: '#5C9A4A', tip: '#C9C06A', panicle: 'upright' },
  mature: { blades: 18, height: 2.0, spread: 0.55, tilt: 0.42, base: '#BFA24E', tip: '#E0C878', panicle: 'droop' },
}

// Deterministic pseudo-random so blades don't jump between renders.
function rand(i, salt = 1) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453
  return x - Math.floor(x)
}

function Blade({ angle, radius, height, tilt, colorA, colorB }) {
  const lean = useMemo(() => new THREE.Color(colorA), [colorA])
  const tipC = useMemo(() => new THREE.Color(colorB), [colorB])
  // Vertical gradient via a simple two-tone: body color, tip is lighter.
  return (
    <group rotation={[0, angle, 0]}>
      <group position={[radius, 0, 0]} rotation={[0, 0, -tilt]}>
        {/* blade body */}
        <mesh position={[0, height / 2, 0]} castShadow>
          <cylinderGeometry args={[0.012, 0.05, height, 6]} />
          <meshStandardMaterial color={lean} roughness={0.75} />
        </mesh>
        {/* lighter tip */}
        <mesh position={[0, height * 0.92, 0]}>
          <coneGeometry args={[0.022, height * 0.22, 6]} />
          <meshStandardMaterial color={tipC} roughness={0.7} />
        </mesh>
      </group>
    </group>
  )
}

function Panicle({ height, mode }) {
  const droop = mode === 'droop'
  const color = droop ? '#D8BE6A' : '#A9B66A'
  const grains = 26
  return (
    <group position={[0, height * 0.98, 0]} rotation={[0, 0, droop ? 0.5 : 0]}>
      {/* central rachis */}
      <mesh position={[0, droop ? -0.28 : 0.18, 0]} rotation={[0, 0, droop ? 0.4 : 0]}>
        <cylinderGeometry args={[0.012, 0.018, droop ? 0.6 : 0.42, 5]} />
        <meshStandardMaterial color={droop ? '#C9B25E' : '#8DA85B'} roughness={0.8} />
      </mesh>
      {Array.from({ length: grains }).map((_, i) => {
        const t = i / grains
        const a = i * 2.39996 // golden angle spread
        const r = 0.05 + t * 0.12
        const y = droop ? -t * 0.55 + 0.15 : t * 0.4
        const x = Math.cos(a) * r + (droop ? t * 0.22 : 0)
        const z = Math.sin(a) * r
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.035, 6, 6]} />
            <meshStandardMaterial color={color} roughness={0.6} />
          </mesh>
        )
      })}
    </group>
  )
}

export default function PlantModel({ stageId = 'seedling' }) {
  const group = useRef()
  const cfg = STAGE_CONFIG[stageId] ?? STAGE_CONFIG.seedling

  // gentle, organic sway
  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (group.current) {
      group.current.rotation.z = Math.sin(t * 0.6) * 0.03
      group.current.rotation.x = Math.cos(t * 0.45) * 0.02
    }
  })

  const blades = useMemo(() => {
    return Array.from({ length: cfg.blades }).map((_, i) => {
      const angle = (i / cfg.blades) * Math.PI * 2 + rand(i, 2) * 0.5
      const radius = cfg.spread * (0.35 + rand(i, 3) * 0.65)
      const height = cfg.height * (0.78 + rand(i, 4) * 0.35)
      const tilt = cfg.tilt * (0.6 + rand(i, 5) * 0.8)
      return { angle, radius, height, tilt, i }
    })
  }, [cfg])

  return (
    <group ref={group} position={[0, -1, 0]}>
      {/* soft soil / water disc */}
      <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[1.15, 48]} />
        <meshStandardMaterial color="#E7E2D2" roughness={1} />
      </mesh>
      <mesh position={[0, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.12, 1.2, 48]} />
        <meshStandardMaterial color="#D8D0BB" roughness={1} />
      </mesh>

      {blades.map((b) => (
        <Blade
          key={b.i}
          angle={b.angle}
          radius={b.radius}
          height={b.height}
          tilt={b.tilt}
          colorA={cfg.base}
          colorB={cfg.tip}
        />
      ))}

      {cfg.panicle && <Panicle height={cfg.height} mode={cfg.panicle} />}
    </group>
  )
}
