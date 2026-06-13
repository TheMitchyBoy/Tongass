const fills = {
  white: '#f5f9fd',
  mist: '#e8f0f8',
  deep: '#0a2342',
  fjord: '#041525',
}

/**
 * Sits at the bottom of a section. Parent section bg must match `from`.
 * The wave fill is `to` — the next section should use the same color.
 */
export default function SectionWave({ from = 'white', to = 'deep', height = 56, animated = true }) {
  const fromColor = fills[from] ?? from
  const toColor = fills[to] ?? to

  return (
    <div
      className="section-wave relative -mb-px w-full leading-[0]"
      style={{ backgroundColor: fromColor }}
      aria-hidden="true"
    >
      <svg
        className="block w-full"
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        style={{ height }}
      >
        <g className={animated ? 'wave-drift-slow' : ''}>
          <path
            d="M0,24 C360,4 720,44 1080,24 C1260,14 1380,34 1440,24 L1440,56 L0,56 Z"
            fill={toColor}
            opacity="0.35"
          />
          <path
            d="M0,24 C360,4 720,44 1080,24 C1260,14 1380,34 1440,24 L1440,56 L0,56 Z"
            fill={toColor}
            opacity="0.35"
            transform="translate(1440, 0)"
          />
        </g>
        <g className={animated ? 'wave-drift-fast' : ''}>
          <path
            d="M0,30 C240,10 480,42 720,30 C960,18 1200,44 1440,30 L1440,56 L0,56 Z"
            fill={toColor}
          />
          <path
            d="M0,30 C240,10 480,42 720,30 C960,18 1200,44 1440,30 L1440,56 L0,56 Z"
            fill={toColor}
            transform="translate(1440, 0)"
          />
        </g>
      </svg>
    </div>
  )
}

export { fills }
