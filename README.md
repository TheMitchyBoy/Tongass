# Ketchikan Code

Website for **Ketchikan Code** — a Ketchikan, Alaska development shop offering custom website coding, API integrations, workflow automation, and machine learning for local businesses.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Stack

- React 19 + Vite 6
- Tailwind CSS 4

## Analytics & tracking

Copy `.env.example` to `.env` and add your tracking IDs:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID (`G-XXXXXXXX`) |
| `VITE_CLARITY_PROJECT_ID` | Microsoft Clarity project ID (optional) |
| `VITE_TRACKING_ENDPOINT` | Custom API endpoint for first-party events (optional) |

Tracking includes page views, scroll depth, section visibility, CTA clicks, form submissions, and FAQ interactions. A cookie consent banner is shown before any tracking loads.
