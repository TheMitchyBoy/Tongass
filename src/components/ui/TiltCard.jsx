import { useRef } from 'react'

export default function TiltCard({ children, className = '', intensity = 12 }) {
  const ref = useRef(null)

  function handleMove(e) {
    const card = ref.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -intensity
    const rotateY = ((x - centerX) / centerX) * intensity

    card.style.setProperty('--rx', `${rotateX}deg`)
    card.style.setProperty('--ry', `${rotateY}deg`)
    card.style.setProperty('--spot-x', `${(x / rect.width) * 100}%`)
    card.style.setProperty('--spot-y', `${(y / rect.height) * 100}%`)
  }

  function handleLeave() {
    const card = ref.current
    if (!card) return
    card.style.setProperty('--rx', '0deg')
    card.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="tilt-card-inner">{children}</div>
    </div>
  )
}
