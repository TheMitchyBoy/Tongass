const testimonials = [
  {
    quote:
      'Before Tongass Digital, we had no idea which ships brought our best customers. Now we staff up for Norwegian days and run specials on slow Tuesdays. Revenue is up 40% in one season.',
    name: 'Sarah Lindqvist',
    business: 'Creek Street Trading Co.',
    type: 'Gift Shop',
  },
  {
    quote:
      'Our fishing charters were losing bookings to competitors with better websites. Tongass built us a mobile booking system that fills boats before passengers even hit the dock.',
    name: 'Mike Tlingit',
    business: 'Rainforest Anglers',
    type: 'Tour Operator',
  },
  {
    quote:
      'The analytics dashboard alone is worth it. I can see exactly when passengers from each ship are browsing our gallery — and we adjusted our hours to match.',
    name: 'Elena Vasquez',
    business: 'Totem Heritage Gallery',
    type: 'Art Gallery',
  },
]

export default function Testimonials() {
  return (
    <section className="border-t border-mist-200 bg-mist-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-fjord-600">
            Local Results
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-fjord-900 md:text-4xl">
            Ketchikan businesses already winning with Tongass
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="section-card flex flex-col rounded-2xl p-7"
            >
              <svg className="h-8 w-8 text-glacier-400/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-fjord-700/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-mist-200 pt-5">
                <p className="font-semibold text-fjord-900">{t.name}</p>
                <p className="text-sm text-fjord-700/60">
                  {t.business} · {t.type}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
