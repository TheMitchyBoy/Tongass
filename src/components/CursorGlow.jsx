import { useMousePosition } from '../hooks/useMousePosition'

export default function CursorGlow() {
  const { x, y } = useMousePosition()

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
      aria-hidden="true"
    >
      <div
        className="cursor-glow"
        style={{ left: x, top: y }}
      />
    </div>
  )
}
