# NorthFound 2.2.3 — collection correction

- Fixed The Kitchen Reset collection so it renders only the 10 products assigned to `collection: "kitchen"`.
- Removed the collection-level “Paid links” disclosure strip.
- Retained the Amazon Associate disclosure in the global footer and dedicated affiliate-disclosure page.
- No product data, affiliate URLs, images, guide files or product-detail routes were changed.

# NorthFound 2.2.2 — CTA refinement

- Restored the clean external product CTA label to **View Product**.
- Removed repeated Amazon Associate copy from individual product cards and product-detail CTA blocks.
- Retained the site-wide Amazon Associate disclosure in the footer and the dedicated affiliate-disclosure page.
- Retained the collection-level paid-link disclosure for clear editorial transparency.

# v2.2.1 hotfix

- Replaced environment-specific npm package URLs with the public npm registry.
- Added a project-level .npmrc pointing to https://registry.npmjs.org/.
- No website content, design, product, guide, or affiliate-link changes.

# Release Notes — NorthFound 2.2.0 Laundry Reset

## New collection

The Laundry Reset is now a complete live collection with a free 15-page PDF, a seven-stage laundry flow, the five-step reset method, six NorthFound principles and ten curated product selections.

## Product data

All ten supplied Amazon affiliate destinations were matched to their current product identities and ASINs during release preparation. Product 2 was corrected to **Homestead Houseware XL Wool Dryer Balls – 6-Pack** because the supplied affiliate URL resolves to that listing, not Smart Sheep.

## Trust improvements

- Removed customer-style numerical scores from recommendation cards.
- Removed the unsupported “NorthFound Index” metrics from detail pages.
- Replaced “Read Review” language with transparent selection and product-detail language.
- Added explicit paid-link wording and the Amazon Associate disclosure next to commerce calls to action.
- Added editorial context explaining that selections are based on listing information and system fit, not laboratory testing.

## Technical updates

- Added `/collections/laundry`.
- Added 10 statically generated Laundry recommendation routes.
- Added Laundry to header, mobile navigation, footer and sitemap.
- Added local guide cover and editorial hero imagery.
- Updated master data to version `2.2.0-laundry-reset`.
