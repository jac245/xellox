# Xellox Website UI Kit

Hi-fi recreation of the new xellox.io marketing + checkout site.

## Components

- `Header.jsx` — Sticky nav with brand, BTC ticker, cart
- `Hero.jsx` — Marketing hero with copy + Yokis viewer
- `YokisViewer.jsx` — Interactive 3D-ish flippable, floating Yokis plate (front/back/auto-spin, drag to rotate)
- `Features.jsx` — Six-up technical benefit grid
- `Shop.jsx` — Three-product strip
- `SocialFeed.jsx` — Twitter/Instagram embed-style cards
- `Checkout.jsx` — Single-column simple checkout with BTCPay + Stripe payment options
- `Footer.jsx` — 4-column links + brand block

## Run

Open `index.html`. The page is a click-through prototype: add to cart, then click the cart icon to enter checkout. Toggle BTC ↔ Card to see both payment flows.

## Notes

- All visual recreations are rooted in the brand assets in `../../assets/`.
- Lucide icons via CDN, replace with your own set when available.
- Live BTC price in header is mocked.
- The social feed is mocked-up; in production wire to the Twitter/Instagram embed APIs or a server-cached fetch.
