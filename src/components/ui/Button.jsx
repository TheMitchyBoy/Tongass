export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  'data-track': dataTrack,
  'data-track-location': dataTrackLocation,
}) {
  const base =
    'btn-shine group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300'

  const variants = {
    primary: 'bg-glacier-400 text-fjord-950 hover:scale-[1.03] hover:shadow-lg hover:shadow-fjord-900/20',
    secondary:
      'border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10',
    dark: 'bg-fjord-950 text-white hover:bg-fjord-800 hover:scale-[1.02]',
    outline:
      'border border-fjord-900/15 bg-white text-fjord-900 hover:border-glacier-400 hover:shadow-md',
  }

  const classes = `${base} ${variants[variant]} ${className}`
  const trackingProps = {
    ...(dataTrack ? { 'data-track': dataTrack } : {}),
    ...(dataTrackLocation ? { 'data-track-location': dataTrackLocation } : {}),
  }

  if (href) {
    return (
      <a href={href} className={classes} {...trackingProps}>
        <span className="relative z-10">{children}</span>
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...trackingProps}>
      <span className="relative z-10">{children}</span>
    </button>
  )
}
