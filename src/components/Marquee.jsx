const technologies = [
  'Python',
  'React',
  'TypeScript',
  'TensorFlow',
  'Square API',
  'FareHarbor',
  'Stripe',
  'HubSpot',
  'PostgreSQL',
  'Docker',
  'AWS',
  'FastAPI',
]

export default function Marquee() {
  const items = [...technologies, ...technologies]

  return (
    <div className="marquee-mask border-b border-white/10 bg-white/5 py-3 backdrop-blur-sm">
      <div className="marquee-track">
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="marquee-item">
            <span className="h-1.5 w-1.5 rounded-full bg-glacier-400" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
