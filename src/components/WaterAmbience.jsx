export default function WaterAmbience() {
  return (
    <div className="water-ambience pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="water-caustics" />
      <div className="water-surface-shimmer" />
    </div>
  )
}
