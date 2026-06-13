export default function HeroWaves() {
  return (
    <div className="hero-waves pointer-events-none absolute inset-x-0 bottom-0 z-10" aria-hidden="true">
      <div className="water-rays" />

      <svg
        className="relative block w-[200%] hero-wave-layer-1"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        style={{ height: 100 }}
      >
        <path
          d="M0,80 C320,140 480,30 720,80 C960,130 1120,40 1440,80 L1440,160 L0,160 Z"
          fill="rgba(45, 212, 191, 0.08)"
        />
        <path
          d="M0,80 C320,140 480,30 720,80 C960,130 1120,40 1440,80 L1440,160 L0,160 Z"
          fill="rgba(45, 212, 191, 0.08)"
          transform="translate(1440, 0)"
        />
      </svg>

      <svg
        className="relative -mt-12 block w-[200%] hero-wave-layer-2"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        style={{ height: 90 }}
      >
        <path
          d="M0,90 C200,50 400,120 600,90 C800,60 1000,120 1200,90 C1320,70 1380,100 1440,90 L1440,160 L0,160 Z"
          fill="rgba(94, 234, 212, 0.12)"
        />
        <path
          d="M0,90 C200,50 400,120 600,90 C800,60 1000,120 1200,90 C1320,70 1380,100 1440,90 L1440,160 L0,160 Z"
          fill="rgba(94, 234, 212, 0.12)"
          transform="translate(1440, 0)"
        />
      </svg>

      <svg
        className="relative -mt-10 block w-[200%] hero-wave-layer-3"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        style={{ height: 70 }}
      >
        <path
          d="M0,100 C240,60 480,130 720,100 C960,70 1200,130 1440,100 L1440,160 L0,160 Z"
          fill="#f7fcfd"
        />
        <path
          d="M0,100 C240,60 480,130 720,100 C960,70 1200,130 1440,100 L1440,160 L0,160 Z"
          fill="#f7fcfd"
          transform="translate(1440, 0)"
        />
      </svg>
    </div>
  )
}
