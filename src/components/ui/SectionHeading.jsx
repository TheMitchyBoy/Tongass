export default function SectionHeading({ label, title, description, light = false, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left mx-0' : 'text-center mx-auto'

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
          light ? 'text-glacier-400' : 'text-fjord-600'
        }`}
      >
        <span className={`h-px w-6 ${light ? 'bg-glacier-400/50' : 'bg-fjord-600/30'}`} />
        {label}
        <span className={`h-px w-6 ${light ? 'bg-glacier-400/50' : 'bg-fjord-600/30'}`} />
      </p>
      <h2
        className={`mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-fjord-950'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-white/55' : 'text-fjord-700/65'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
