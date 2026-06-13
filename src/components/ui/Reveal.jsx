import { useInView } from '../../hooks/useInView'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const [ref, inView] = useInView()

  const transforms = {
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
    left: 'translateX(40px)',
    right: 'translateX(-40px)',
    scale: 'scale(0.92)',
    none: 'none',
  }

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'reveal-visible' : ''} ${className}`}
      style={{
        '--reveal-delay': `${delay}ms`,
        transform: inView ? 'none' : transforms[direction],
      }}
    >
      {children}
    </div>
  )
}
