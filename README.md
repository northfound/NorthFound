# NorthFound 2.2.3 — Laundry Reset Release

Production-ready Next.js source for the NorthFound website.

## This release adds

- The complete `/collections/laundry` experience.
- The compressed 15-page **The Laundry Reset** PDF at `/guides/the-laundry-reset.pdf`.
- Ten Laundry Collection selections with individual detail pages, affiliate links, ASIN references and product imagery.
- Laundry navigation, homepage promotion, metadata, structured data and sitemap coverage.
- Clean **View Product** calls to action with site-wide affiliate disclosure.
- Transparent editorial product pages without fabricated ratings, scores or implied laboratory testing.

## Local verification

```bash
npm ci
npm run build
npm run start
```

Then open `http://localhost:3000` and verify:

- `/`
- `/collections/laundry`
- `/recommendations/joseph-joseph-tota-90l-laundry-basket`
- `/guides/the-laundry-reset.pdf`
- `/affiliate-disclosure`

## Deployment

Upload the contents of this ZIP to the GitHub repository root. Netlify uses `npm run build` through `netlify.toml` and the Next.js plugin.

## Editorial and affiliate standard

- No price or availability claims are stored on the site.
- Amazon links use `rel="nofollow sponsored noopener"`.
- The Amazon Associate statement is retained in the global footer and dedicated disclosure page, without repetitive collection-level strips.
- The footer and disclosure page include: **As an Amazon Associate I earn from qualifying purchases.**
- Product imagery sourced from external listings must remain covered by the permissions of the Associates/SiteStripe/PA API workflow used by the business.
