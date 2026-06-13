const fills = {
  white: '#f5f9fd',
  mist: '#e8f0f8',
  fjord: '#041525',
  deep: '#0a2342',
}

export default function WaveDivider({
  top = 'transparent',
  bottom = 'white',
  height = 80,
  animated = true,
  flip = false,
  className = '',
}) {
  const bottomFill = fills[bottom] ?? bottom
  const topFill = fills[top] ?? top

  return (
    <div
      className={`wave-divider relative w-full overflow-hidden leading-[0] ${flip ? 'wave-divider-flip' : ''} ${className}`}
      style={{ height, background: topFill }}
      aria-hidden="true"
    >
      <svg
        className="absolute bottom-0 left-0 h-full w-[200%]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <g className={animated ? 'wave-drift-slow' : ''}>
          <path
            d="M0,55 C240,95 480,15 720,55 C960,95 1200,15 1440,55 L1440,120 L0,120 Z"
            fill={bottomFill}
            opacity="0.55"
          />
          <path
            d="M0,55 C240,95 480,15 720,55 C960,95 1200,15 1440,55 L1440,120 L0,120 Z"
            fill={bottomFill}
            opacity="0.55"
            transform="translate(1440, 0)"
          />
        </g>
        <g className={animated ? 'wave-drift-fast' : ''}>
          <path
            d="M0,70 C180,40 360,100 540,70 C720,40 900,100 1080,70 C1260,40 1350,85 1440,70 L1440,120 L0,120 Z"
            fill={bottomFill}
          />
          <path
            d="M0,70 C180,40 360,100 540,70 C720,40 900,100 1080,70 C1260,40 1350,85 1440,70 L1440,120 L0,120 Z"
            fill={bottomFill}
            transform="translate(1440, 0)"
          />
        </g>
      </svg>
    </div>
  )
}
