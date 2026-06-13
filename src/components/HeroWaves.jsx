export default function HeroWaves() {
  return (
    <div className="hero-waves pointer-events-none absolute inset-x-0 bottom-0 z-10" aria-hidden="true">
      <div className="water-rays" />

      {/* Deep water layer */}
      <svg
        className="relative block w-[200%] hero-wave-layer-1"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        style={{ height: 90 }}
      >
        <path
          d="M0,80 C320,140 480,30 720,80 C960,130 1120,40 1440,80 L1440,160 L0,160 Z"
          fill="rgba(91, 155, 213, 0.1)"
        />
        <path
          d="M0,80 C320,140 480,30 720,80 C960,130 1120,40 1440,80 L1440,160 L0,160 Z"
          fill="rgba(91, 155, 213, 0.1)"
          transform="translate(1440, 0)"
        />
      </svg>

      {/* Mid-depth transition */}
      <svg
        className="relative -mt-10 block w-[200%] hero-wave-layer-2"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        style={{ height: 80 }}
      >
        <path
          d="M0,90 C200,50 400,120 600,90 C800,60 1000,120 1200,90 C1320,70 1380,100 1440,90 L1440,160 L0,160 Z"
          fill="rgba(139, 184, 232, 0.2)"
        />
        <path
          d="M0,90 C200,50 400,120 600,90 C800,60 1000,120 1200,90 C1320,70 1380,100 1440,90 L1440,160 L0,160 Z"
          fill="rgba(139, 184, 232, 0.2)"
          transform="translate(1440, 0)"
        />
      </svg>

      {/* Shallow water */}
      <svg
        className="relative -mt-8 block w-[200%] hero-wave-layer-3"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        style={{ height: 70 }}
      >
        <path
          d="M0,95 C240,65 480,125 720,95 C960,70 1200,125 1440,95 L1440,160 L0,160 Z"
          fill="rgba(212, 228, 242, 0.85)"
        />
        <path
          d="M0,95 C240,65 480,125 720,95 C960,70 1200,125 1440,95 L1440,160 L0,160 Z"
          fill="rgba(212, 228, 242, 0.85)"
          transform="translate(1440, 0)"
        />
      </svg>

      {/* Surface foam — matches stats section */}
      <svg
        className="relative -mt-6 block w-[200%] hero-wave-layer-1"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        style={{ height: 60 }}
      >
        <path
          d="M0,100 C240,60 480,130 720,100 C960,70 1200,130 1440,100 L1440,160 L0,160 Z"
          fill="#f5f9fd"
        />
        <path
          d="M0,100 C240,60 480,130 720,100 C960,70 1200,130 1440,100 L1440,160 L0,160 Z"
          fill="#f5f9fd"
          transform="translate(1440, 0)"
        />
      </svg>

      {/* Gradient veil for extra smoothness */}
      <div className="hero-wave-veil" />
    </div>
  )
}
