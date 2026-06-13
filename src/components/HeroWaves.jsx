export default function HeroWaves() {
  return (
    <div className="hero-waves pointer-events-none absolute inset-x-0 bottom-0 z-10" aria-hidden="true">
      <div className="water-rays" />

      <svg
        className="relative block w-[200%] hero-wave-layer-1"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: 72 }}
      >
        <path
          d="M0,60 C320,100 480,20 720,60 C960,100 1120,20 1440,60 L1440,120 L0,120 Z"
          fill="rgba(91, 155, 213, 0.12)"
        />
        <path
          d="M0,60 C320,100 480,20 720,60 C960,100 1120,20 1440,60 L1440,120 L0,120 Z"
          fill="rgba(91, 155, 213, 0.12)"
          transform="translate(1440, 0)"
        />
      </svg>

      <svg
        className="relative -mt-8 block w-[200%] hero-wave-layer-2"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: 64 }}
      >
        <path
          d="M0,70 C200,40 400,90 600,70 C800,50 1000,90 1200,70 C1320,55 1380,80 1440,70 L1440,120 L0,120 Z"
          fill="rgba(139, 184, 232, 0.22)"
        />
        <path
          d="M0,70 C200,40 400,90 600,70 C800,50 1000,90 1200,70 C1320,55 1380,80 1440,70 L1440,120 L0,120 Z"
          fill="rgba(139, 184, 232, 0.22)"
          transform="translate(1440, 0)"
        />
      </svg>

      <svg
        className="relative -mt-6 block w-[200%] hero-wave-layer-3"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: 56 }}
      >
        <path
          d="M0,75 C240,45 480,95 720,75 C960,55 1200,95 1440,75 L1440,120 L0,120 Z"
          fill="#f5f9fd"
        />
        <path
          d="M0,75 C240,45 480,95 720,75 C960,55 1200,95 1440,75 L1440,120 L0,120 Z"
          fill="#f5f9fd"
          transform="translate(1440, 0)"
        />
      </svg>
    </div>
  )
}
