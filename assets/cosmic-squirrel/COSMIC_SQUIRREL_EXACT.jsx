import { useEffect, useState } from 'react'

export const COSMIC_SQUIRREL_VARIANT = {
  id: 'cosmic_squirrel',
  name: 'Cosmic Squirrel',
  description: 'Celestial squirrel made of moon dust and stars.'
}

export const COSMIC_SQUIRREL_PREVIEW_STYLE = {
  body: '#DDD6FE',
  tail: '#A5F3FC',
  scale: 1.08,
  aura: 'rgba(196,181,253,0.36)',
  shape: 'cosmic'
}

export const COSMIC_SQUIRREL_GLOBAL_STYLE = {
  body: '#DDD6FE',
  head: '#C4B5FD',
  tail: '#A5F3FC',
  shape: 'cosmic',
  aura: 'rgba(196,181,253,0.34)',
  scale: 1.1
}

export function CosmicSquirrelShape({ body = COSMIC_SQUIRREL_GLOBAL_STYLE.body, head = COSMIC_SQUIRREL_GLOBAL_STYLE.head, tail = COSMIC_SQUIRREL_GLOBAL_STYLE.tail }) {
  return (
    <div className="relative h-8 w-8 animate-[squirrel-bob_900ms_ease-in-out_infinite]">
      <div className="absolute left-2 top-2 h-4 w-4 rounded-full" style={{ background: body }} />
      <div className="absolute left-4 top-0 h-3 w-3 rounded-full" style={{ background: tail }} />
      <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-2" style={{ borderColor: tail }} />
      <div className="absolute left-6 top-1 h-1.5 w-1.5 rounded-full bg-white" />
      <div className="absolute left-1 top-6 h-1 w-1 rounded-full bg-white" />
      <div className="absolute left-5 top-4 h-1 w-1 rounded-full" style={{ background: head }} />
    </div>
  )
}

export function CosmicSquirrelPreview({ x, y }) {
  return (
    <>
      <div
        className="pointer-events-none absolute h-14 w-14 rounded-full blur-md"
        style={{ left: x - 28, top: y - 28, background: COSMIC_SQUIRREL_PREVIEW_STYLE.aura }}
      />
      <div
        className="pointer-events-none absolute"
        style={{ left: x, top: y, transform: `translate(-50%, -50%) scale(${COSMIC_SQUIRREL_PREVIEW_STYLE.scale})` }}
      >
        <CosmicSquirrelShape body={COSMIC_SQUIRREL_PREVIEW_STYLE.body} head={COSMIC_SQUIRREL_PREVIEW_STYLE.body} tail={COSMIC_SQUIRREL_PREVIEW_STYLE.tail} />
      </div>
    </>
  )
}

export function CosmicSquirrelGlobalCursor() {
  const [enabled, setEnabled] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)')
    const update = () => setEnabled(!mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) {
      document.body.style.cursor = ''
      return undefined
    }
    document.body.style.cursor = 'none'
    const onMove = (event) => setCoords({ x: event.clientX, y: event.clientY })
    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.body.style.cursor = ''
    }
  }, [enabled])

  if (!enabled) {
    return null
  }

  return (
    <div
      className="pointer-events-none fixed z-[90]"
      style={{ left: coords.x, top: coords.y, transform: `translate(-50%, -50%) scale(${COSMIC_SQUIRREL_GLOBAL_STYLE.scale})` }}
    >
      <div className="absolute -left-3 -top-3 h-12 w-12 rounded-full blur-md" style={{ background: COSMIC_SQUIRREL_GLOBAL_STYLE.aura }} />
      <CosmicSquirrelShape />
    </div>
  )
}
