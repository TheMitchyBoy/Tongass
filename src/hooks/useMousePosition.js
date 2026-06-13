import { useEffect, useState } from 'react'

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let frame = 0
    const handleMove = (e) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return position
}
