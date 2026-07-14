# Deploy Checklist — NorthFound 2.2.3

## GitHub
1. Download and extract `NorthFound_2_2_3_Collection_Fix_GitHub_Release.zip`.
2. Upload the extracted contents to the root of the existing NorthFound repository.
3. Confirm that `package.json`, `app`, `components`, `content`, `public` and `netlify.toml` are at repository root.
4. Commit with a message such as `Release Laundry Reset collection`.

## Netlify
1. Confirm the repository is connected to the existing NorthFound site.
2. The included configuration selects Node 20 and runs `npm run build`.
3. Trigger a production deployment and wait for the deploy preview to finish.

## Live-domain verification
1. Open `/collections/laundry` on desktop and mobile.
2. Open `/guides/the-laundry-reset.pdf` and confirm all 15 pages display.
3. Open each of the 10 product detail pages.
4. Click each Amazon button once and confirm it lands on the expected product.
5. Confirm the product buttons read “View Product”, no collection-level “Paid links” strip appears, and the Amazon Associate statement remains in the footer.
6. Confirm the live site has no missing product images or layout shifts.

## Business compliance checkpoint
Before public promotion, confirm that the externally sourced product-reference images are being used under the permissions of the Amazon Associates/SiteStripe/PA API method attached to the business account. The website copy, link attributes and disclosures are already configured for paid-link transparency.
