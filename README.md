# DataLake Support

A responsive static website with services and pricing, About, Reviews, FAQ, and Contact pages.

## Preview

Open `index.html`, or serve this directory with a local HTTP server. All pages share `styles.css` and `site.js`. There are no build dependencies.

## GitHub Pages

1. The website files are already in the repository root, ready for GitHub Pages.
2. In repository Settings → Pages, choose **Deploy from a branch**, **main**, and **/(root)**, then save. Public repository hosting is generally the simplest option.
3. Open the published URL supplied by GitHub and test the contact form there.

## Contact form setup

The contact form posts to FormSubmit for delivery to Tristanlake15@gmail.com. It keeps FormSubmit's default CAPTCHA verification enabled. No private API keys are included.

The recipient must confirm FormSubmit's activation email after the first submission. Until activation and a subsequent delivery test succeed, do not assume inquiries are reaching the inbox. Check spam if needed. The form must be used from an HTTP(S) website, not just a local file. Direct email and phone links remain available.

Messages include the sender's name, email, optional phone, service choice, optional location, and message. The page discloses FormSubmit processing and asks visitors not to include sensitive information. No file upload, analytics, or browser data storage is used.

## Pricing assumptions

Remote support: $75/hour, 30-minute minimum, then $18.75 per 15 minutes.
On-site support: $95/hour, one-hour minimum, then $23.75 per 15 minutes.
Computer setup and basic home Wi-Fi setup: $145 labor, up to 90 minutes within the listed scope.
Arranged drop-off diagnostics: $45 for up to 30 minutes, credited toward an approved repair of the same issue.
Parts, software, materials, applicable tax, and travel outside Edmond are quoted separately. Repairs, builds, and cable projects are individually quoted. Weekdays after 5 p.m. Central and weekends are normal appointment hours, with no surcharge.

These are starting business rates, not a profit guarantee. Review actual labor time, travel, parts sourcing, payment costs, and overhead after the first few jobs.

## Content

Professional background follows the supplied resume. The site includes business contact details and Edmond, Oklahoma, but no street address. No reviews are fabricated. Add a personal photo and real customer reviews only when ready.


## Review approval workflow

The Reviews page emails submissions to Tristan through FormSubmit with the subject "Review awaiting approval". Customers provide a display name, private email, 1–5 rating, service, review, and explicit permission to publish. CAPTCHA remains enabled. Nothing is automatically published.

To publish an approved submission, add its public fields to the array in reviews-data.js: name (text), rating (number 1–5), service (text), and text (the original review). Never add the email or other private details. Keep negative as well as positive feedback when relevant and genuine. Commit the updated file to GitHub; once GitHub Pages redeploys, everyone sees the review. You can also ask Codex to publish the approved review for you.

The initial approved list is empty. Review text is rendered as plain text, never interpreted as HTML. Submissions are stored in the recipient inbox; the approved public data is stored in GitHub, not browser storage.

## Brand identity

DataLake Support is Tristan Lake’s personal IT support brand. Tagline: **Calm waters. Clear solutions.** The name connects technology (Data) with Tristan’s surname (Lake). The circuit-and-wave mark in `favicon.svg` is also used in each page header. Deep navy, lake teal, and pale mint carry the identity across the site. Keep the personal voice and accurate service scope when editing copy.
