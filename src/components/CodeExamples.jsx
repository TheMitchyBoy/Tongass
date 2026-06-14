import { useState } from 'react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SectionWave from './SectionWave'

const examples = [
  {
    id: 'integration',
    label: 'POS Sync',
    language: 'Python',
    title: 'Square ↔ FareHarbor inventory sync',
    description:
      'Keep online availability in sync with in-store inventory across booking platforms — no double-bookings on ship days.',
    code: `from ketchikancode.integrations import SquareClient, FareHarborClient

square = SquareClient(env="production")
fareharbor = FareHarborClient(company_id="ketchikan-tours")

def sync_availability():
    inventory = square.get_catalog_variations()
    for item in inventory:
        slots = fareharbor.get_open_slots(item.sku)
        if slots != item.quantity:
            fareharbor.update_capacity(
                sku=item.sku,
                remaining=item.quantity,
                trigger_webhook=True,
            )
    return {"synced": len(inventory), "status": "ok"}`,
  },
  {
    id: 'automation',
    label: 'Automation',
    language: 'Python',
    title: 'Ship schedule → staff alert pipeline',
    description:
      'Pull port schedules, cross-reference with bookings, and push Slack alerts when a big ship docks with low staffing coverage.',
    code: `import schedule
from ketchikancode.automation import PortSchedule, StaffingModel

def daily_ship_prep():
    ships = PortSchedule.fetch_ketchikan(days_ahead=3)
    for ship in ships:
        forecast = StaffingModel.predict(
            ship=ship.name,
            passengers=ship.passenger_count,
            historical_revenue=ship.avg_revenue,
        )
        if forecast.staff_gap > 2:
            Slack.send(
                channel="#ops",
                text=f"{ship.name} docks {ship.arrival} — "
                     f"need +{forecast.staff_gap} staff",
            )

schedule.every().day.at("06:00").do(daily_ship_prep)`,
  },
  {
    id: 'ml',
    label: 'Machine Learning',
    language: 'Python',
    title: 'Demand forecasting model',
    description:
      'Predict busy hours by ship, weather, and day-of-week so operators staff correctly and prep inventory before passengers arrive.',
    code: `import pandas as pd
from sklearn.ensemble import GradientBoostingRegressor

def train_demand_model(historical_bookings: pd.DataFrame):
    features = historical_bookings[[
        "passenger_count", "ship_size", "day_of_week",
        "is_rainy", "berth_number", "hour_of_day",
    ]]
    target = historical_bookings["transactions_per_hour"]

    model = GradientBoostingRegressor(
        n_estimators=200, max_depth=4
    )
    model.fit(features, target)
    return model

# Predict peak hour for tomorrow's Norwegian Bliss call
peak = model.predict(tomorrow_features).argmax()  # → 10:30 AM`,
  },
  {
    id: 'api',
    label: 'API',
    language: 'TypeScript',
    title: 'Cross-platform booking webhook',
    description:
      'Unified webhook handler that routes bookings from web, kiosk, and partner widgets into one CRM and POS.',
    code: `import { Router } from "express";
import { syncToSquare, syncToCRM } from "@ketchikancode/integrations";

const router = Router();

router.post("/webhooks/booking", async (req, res) => {
  const { source, sku, customer, amount } = req.body;

  await Promise.all([
    syncToSquare({ sku, amount, source }),
    syncToCRM({ customer, tags: [source, "cruise-season"] }),
  ]);

  res.json({ ok: true, routed: ["square", "hubspot"] });
});

export default router;`,
  },
  {
    id: 'frontend',
    label: 'Web App',
    language: 'React',
    title: 'Real-time availability component',
    description:
      'Live inventory badge that updates when POS stock changes — built for mobile passengers on slow ship Wi-Fi.',
    code: `export function AvailabilityBadge({ sku }) {
  const { slots, loading } = useLiveInventory(sku);

  if (loading) return <Skeleton className="h-6 w-20" />;

  if (slots === 0)
    return <Badge variant="muted">Sold out today</Badge>;

  if (slots <= 3)
    return <Badge variant="urgent">{slots} spots left</Badge>;

  return <Badge variant="open">Available now</Badge>;
}`,
  },
]

export default function CodeExamples() {
  const [active, setActive] = useState(0)
  const example = examples[active]

  return (
    <section id="code" className="relative bg-mist-50 pt-24 pb-0 md:pt-32">
      <div className="relative mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <Reveal>
          <SectionHeading
            label="Code Examples"
            title="Real code we write for Ketchikan businesses"
            description="Not mockups — these are the kinds of integrations, automations, and models we build. Every project ships with documented, maintainable code you own."
          />
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-2">
          {examples.map((ex, i) => (
            <button
              key={ex.id}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === i
                  ? 'bg-fjord-950 text-white shadow-lg shadow-fjord-950/20'
                  : 'bg-white text-fjord-700 ring-1 ring-mist-200 hover:ring-glacier-400/30'
              }`}
            >
              {ex.label}
            </button>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-8 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h3 className="font-display text-xl font-bold text-fjord-950">{example.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fjord-700/65">{example.description}</p>
              <div className="mt-5 flex items-center gap-2">
                <span className="rounded-full bg-glacier-400/10 px-3 py-1 text-xs font-semibold text-glacier-400 ring-1 ring-glacier-400/20">
                  {example.language}
                </span>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-2xl border border-fjord-900/20 bg-fjord-950 shadow-2xl shadow-fjord-950/20">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-salmon-400/80" />
                  <span className="h-3 w-3 rounded-full bg-aurora/80" />
                  <span className="h-3 w-3 rounded-full bg-glacier-400/80" />
                  <span className="ml-3 text-xs font-mono text-white/35">
                    {example.id}.{example.language === 'TypeScript' ? 'ts' : example.language === 'React' ? 'tsx' : 'py'}
                  </span>
                </div>
                <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed">
                  <code className="font-mono text-glacier-300/90">{example.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Languages', value: 'Python, TypeScript, SQL, React' },
              { label: 'Platforms', value: 'Square, Stripe, FareHarbor, HubSpot, QuickBooks' },
              { label: 'Infrastructure', value: 'AWS, Docker, GitHub Actions, REST & GraphQL' },
            ].map((item) => (
              <div key={item.label} className="section-card rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-glacier-400">{item.label}</p>
                <p className="mt-2 text-sm font-medium text-fjord-950">{item.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <SectionWave from="white" to="deep" />
    </section>
  )
}
