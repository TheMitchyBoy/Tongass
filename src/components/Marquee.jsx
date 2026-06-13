const ships = [
  'Norwegian Bliss',
  'Celebrity Summit',
  'Viking Orion',
  'Holland America Eurodam',
  'Princess Discovery',
  'Royal Caribbean Serenade',
  'Carnival Luminosa',
  'Oceania Regatta',
]

export default function Marquee() {
  const items = [...ships, ...ships]

  return (
    <div className="marquee-mask border-y border-white/10 bg-black/20 py-3 backdrop-blur-sm">
      <div className="marquee-track">
        {items.map((ship, i) => (
          <span key={`${ship}-${i}`} className="marquee-item">
            <span className="h-1.5 w-1.5 rounded-full bg-glacier-400" />
            {ship}
          </span>
        ))}
      </div>
    </div>
  )
}
