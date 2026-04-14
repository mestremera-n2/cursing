import { useEffect, useRef, useState } from 'react'

export const DISCO_SPARKLE_FIELD_SPEC = {
  seed: 19770327,
  emitIntervalMs: 120,
  emitCountPerTick: 18,
  maxConcurrentParticles: 220,
  stopGraceMs: 220,
  startDelayRangeMs: [0, 200],
  durationRangeMs: [700, 1900],
  driftXRangePx: [-21, 21],
  driftYRangePx: [-15, 15],
  spinRangeDeg: [-150, 150],
  sizeVariantsPx: [5, 8, 12, 16],
  weightedFamilySequence: ['dot', 'dot', 'cross', 'dot', 'cross', 'dot', 'crescent', 'dot'],
  colorSequence: ['#FFFFFF', '#A5F3FC', '#C4B5FD', '#E2E71A', '#A5F3FC', '#FFFFFF']
}

export function DiscoSparkleField({ active, anchorRef }) {
  const [particles, setParticles] = useState([])
  const indexRef = useRef(0)

  useEffect(() => {
    if (!active) {
      const timer = window.setTimeout(() => setParticles([]), DISCO_SPARKLE_FIELD_SPEC.stopGraceMs)
      return () => window.clearTimeout(timer)
    }

    const interval = window.setInterval(() => {
      const rect = anchorRef.current?.getBoundingClientRect()
      const width = window.innerWidth
      const height = window.innerHeight
      const next = []

      for (let i = 0; i < DISCO_SPARKLE_FIELD_SPEC.emitCountPerTick; i += 1) {
        const idx = indexRef.current
        indexRef.current += 1
        const left = ((idx * 73 + DISCO_SPARKLE_FIELD_SPEC.seed) % 1000) / 1000 * width
        const top = ((idx * 41 + DISCO_SPARKLE_FIELD_SPEC.seed) % 1000) / 1000 * height
        const originX = rect ? rect.left + rect.width / 2 : width * 0.5
        const originY = rect ? rect.top + rect.height / 2 : 40
        const driftX = DISCO_SPARKLE_FIELD_SPEC.driftXRangePx[0] + ((idx * 17) % 100) / 100 * (DISCO_SPARKLE_FIELD_SPEC.driftXRangePx[1] - DISCO_SPARKLE_FIELD_SPEC.driftXRangePx[0])
        const driftY = DISCO_SPARKLE_FIELD_SPEC.driftYRangePx[0] + ((idx * 29) % 100) / 100 * (DISCO_SPARKLE_FIELD_SPEC.driftYRangePx[1] - DISCO_SPARKLE_FIELD_SPEC.driftYRangePx[0])
        const spin = DISCO_SPARKLE_FIELD_SPEC.spinRangeDeg[0] + ((idx * 13) % 100) / 100 * (DISCO_SPARKLE_FIELD_SPEC.spinRangeDeg[1] - DISCO_SPARKLE_FIELD_SPEC.spinRangeDeg[0])
        const duration = DISCO_SPARKLE_FIELD_SPEC.durationRangeMs[0] + ((idx * 19) % 100) / 100 * (DISCO_SPARKLE_FIELD_SPEC.durationRangeMs[1] - DISCO_SPARKLE_FIELD_SPEC.durationRangeMs[0])
        const delay = DISCO_SPARKLE_FIELD_SPEC.startDelayRangeMs[0] + ((idx * 23) % 100) / 100 * (DISCO_SPARKLE_FIELD_SPEC.startDelayRangeMs[1] - DISCO_SPARKLE_FIELD_SPEC.startDelayRangeMs[0])

        next.push({
          id: idx,
          family: DISCO_SPARKLE_FIELD_SPEC.weightedFamilySequence[idx % DISCO_SPARKLE_FIELD_SPEC.weightedFamilySequence.length],
          color: DISCO_SPARKLE_FIELD_SPEC.colorSequence[idx % DISCO_SPARKLE_FIELD_SPEC.colorSequence.length],
          size: DISCO_SPARKLE_FIELD_SPEC.sizeVariantsPx[idx % DISCO_SPARKLE_FIELD_SPEC.sizeVariantsPx.length],
          left: originX + (left - originX) * 0.15,
          top: originY + (top - originY) * 0.15,
          dx: left - originX + driftX,
          dy: top - originY + driftY,
          spin,
          duration,
          delay
        })
      }

      setParticles((prev) => [...prev, ...next].slice(-DISCO_SPARKLE_FIELD_SPEC.maxConcurrentParticles))
    }, DISCO_SPARKLE_FIELD_SPEC.emitIntervalMs)

    return () => window.clearInterval(interval)
  }, [active, anchorRef])

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] mix-blend-screen" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="disco-sparkle"
          style={{
            left: `${particle.left}px`,
            top: `${particle.top}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            '--sparkle-dx': `${particle.dx}px`,
            '--sparkle-dy': `${particle.dy}px`,
            '--sparkle-spin': `${particle.spin}deg`,
            '--sparkle-duration': `${particle.duration}ms`,
            '--sparkle-delay': `${particle.delay}ms`,
            color: particle.color,
            borderRadius: particle.family === 'dot' ? '9999px' : '0'
          }}
          data-family={particle.family}
        />
      ))}
    </div>
  )
}
