const fills = {
  white: '#f5f9fd',
  mist: '#e8f0f8',
  shallow: '#d4e4f2',
  mid: '#8bb0d4',
  deep: '#0a2342',
  fjord: '#041525',
}

/** Smooth multi-stop blends between section palette keys */
const blends = {
  'white-deep': [fills.white, '#e8f0f8', '#d4e4f2', '#b8cfe8', '#8bb0d4', '#5a8bb8', '#3d6a9a', '#1a4785', fills.deep],
  'deep-mist': [fills.deep, '#12325e', '#1a4785', '#3d6a9a', '#5a8bb8', '#8bb0d4', '#b8cfe8', '#d4e4f2', '#eef3f9', fills.white],
  'mist-fjord': [fills.mist, '#d4e4f2', '#8bb0d4', '#5a8bb8', '#3d6a9a', '#1a4785', '#12325e', fills.fjord],
  'mist-white': [fills.mist, '#eef3f9', fills.white],
}

function buildGradient(stops) {
  const last = stops.length - 1
  const parts = stops.map((color, i) => {
    const pct = ((i / last) * 100).toFixed(1)
    return `${color} ${pct}%`
  })
  return `linear-gradient(180deg, ${parts.join(', ')})`
}

function resolveBlend(from, to) {
  const key = `${from}-${to}`
  if (blends[key]) return blends[key]
  const a = fills[from] ?? from
  const b = fills[to] ?? to
  return [a, b]
}

export default function WaveDivider({
  from = 'white',
  to = 'deep',
  top,
  bottom,
  height = 120,
  animated = true,
  flip = false,
  className = '',
}) {
  // Support legacy top/bottom props
  const fromKey = top && !from ? top : from
  const toKey = bottom && !to ? bottom : to

  const stops = resolveBlend(fromKey, toKey)
  const gradient = buildGradient(stops)

  return (
    <div
      className={`wave-divider relative w-full overflow-hidden ${flip ? 'wave-divider-flip' : ''} ${className}`}
      style={{ height, background: gradient }}
      aria-hidden="true"
    >
      {/* Soft foam highlight */}
      <div className="wave-divider-foam" />

      {/* Decorative wave texture — translucent, not solid color blocks */}
      <svg
        className="absolute bottom-0 left-0 h-[55%] w-[200%] opacity-60"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <g className={animated ? 'wave-drift-slow' : ''}>
          <path
            d="M0,40 C240,65 480,15 720,40 C960,65 1200,15 1440,40 L1440,80 L0,80 Z"
            fill="rgba(255, 255, 255, 0.18)"
          />
          <path
            d="M0,40 C240,65 480,15 720,40 C960,65 1200,15 1440,40 L1440,80 L0,80 Z"
            fill="rgba(255, 255, 255, 0.18)"
            transform="translate(1440, 0)"
          />
        </g>
        <g className={animated ? 'wave-drift-fast' : ''}>
          <path
            d="M0,52 C180,32 360,62 540,52 C720,42 900,62 1080,52 C1260,42 1350,58 1440,52 L1440,80 L0,80 Z"
            fill="rgba(91, 155, 213, 0.12)"
          />
          <path
            d="M0,52 C180,32 360,62 540,52 C720,42 900,62 1080,52 C1260,42 1350,58 1440,52 L1440,80 L0,80 Z"
            fill="rgba(91, 155, 213, 0.12)"
            transform="translate(1440, 0)"
          />
        </g>
      </svg>
    </div>
  )
}

export { fills }
