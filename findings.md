# ERPNext Dubai — open SEO findings

Generated: 2026-05-16 15:16 UTC
Site: https://erpnextdubai.com/
Open findings: 28 across 7 page(s)

Severity legend: high = SEO-impacting, medium = best-practice, low = polish

---

## Status note (2026-05-16)

**Worked through by Claude Code locally.** Summary:

- /404.html — **all 11 findings skipped (false positive)**. This is the literal 404 page; it should return HTTP 404 and is rendered by Vercel's default error page, not the Eleventy base layout — meta tags etc. don't apply.
- /erpnext-dubai — **all 11 findings skipped (false positive)**. URL doesn't exist on the site (sitemap probably picked up a redirect target or stale entry). Audit hit Vercel's 404 page.
- 4 blog posts — **fixed:** H1 duplicates demoted to H2 (markdown body `# heading` → `## heading`). Layout's `<h1>{{title}}</h1>` now the sole H1.
- 3 blog post titles — **fixed:** shortened frontmatter `title:` to land under 60 chars after the " | ERPNext Dubai" suffix.

After Vercel rebuilds, re-run the full audit to confirm. Real open issues should drop to ~0 on these pages.

---

## /404.html

URL: https://erpnextdubai.com/404.html

- [ ] **h1** (high) — No <h1> on the page
      Fix: Add exactly one <h1> stating the page's primary topic.
- [ ] **status** (high) — Page returned HTTP 404
      Fix: Make the page return 200. Redirects (3xx) lose link equity; errors (4xx/5xx) get deindexed.
- [ ] **canonical** (medium) — Missing canonical tag
      Fix: Add <link rel="canonical" href="https://erpnextdubai.com/erpnext-dubai"> to consolidate ranking signals.
- [ ] **meta_description** (medium) — Missing meta description
      Fix: Add a 50–160 char meta description. Affects CTR even if not a ranking factor.
- [ ] **schema_jsonld** (medium) — No schema.org JSON-LD found
      Fix: Add JSON-LD for Organization + Product/Service. Powers rich results and AI-overview citations.
- [ ] **title_short** (medium) — Title too short (14 chars)
      Fix: Aim for 30–60 characters. Title is the strongest on-page signal.
- [ ] **favicon** (low) — No favicon
      Fix: Add a favicon — appears in browser tabs and SERP results.
- [ ] **heading_outline** (low) — Sparse heading structure (0 h2, 0 h3)
      Fix: Break the page into 3–7 H2 sections. Helps readers and SERP sub-link generation.
- [ ] **internal_links** (low) — Very few internal links (0)
      Fix: Add 5–15 contextual internal links to related pages. Improves crawl + topical authority.
- [ ] **open_graph** (low) — Missing og:title, og:image, og:description
      Fix: Add Open Graph tags. Affects how links look when shared on LinkedIn, WhatsApp, X.
- [ ] **twitter_card** (low) — Missing Twitter card meta
      Fix: Add <meta name="twitter:card" content="summary_large_image"> for nicer share previews.

## /erpnext-dubai

URL: https://erpnextdubai.com/erpnext-dubai

- [ ] **h1** (high) — No <h1> on the page
      Fix: Add exactly one <h1> stating the page's primary topic.
- [ ] **status** (high) — Page returned HTTP 404
      Fix: Make the page return 200. Redirects (3xx) lose link equity; errors (4xx/5xx) get deindexed.
- [ ] **canonical** (medium) — Missing canonical tag
      Fix: Add <link rel="canonical" href="https://erpnextdubai.com/erpnext-dubai"> to consolidate ranking signals.
- [ ] **meta_description** (medium) — Missing meta description
      Fix: Add a 50–160 char meta description. Affects CTR even if not a ranking factor.
- [ ] **schema_jsonld** (medium) — No schema.org JSON-LD found
      Fix: Add JSON-LD for Organization + Product/Service. Powers rich results and AI-overview citations.
- [ ] **title_short** (medium) — Title too short (14 chars)
      Fix: Aim for 30–60 characters. Title is the strongest on-page signal.
- [ ] **favicon** (low) — No favicon
      Fix: Add a favicon — appears in browser tabs and SERP results.
- [ ] **heading_outline** (low) — Sparse heading structure (0 h2, 0 h3)
      Fix: Break the page into 3–7 H2 sections. Helps readers and SERP sub-link generation.
- [ ] **internal_links** (low) — Very few internal links (0)
      Fix: Add 5–15 contextual internal links to related pages. Improves crawl + topical authority.
- [ ] **open_graph** (low) — Missing og:title, og:image, og:description
      Fix: Add Open Graph tags. Affects how links look when shared on LinkedIn, WhatsApp, X.
- [ ] **twitter_card** (low) — Missing Twitter card meta
      Fix: Add <meta name="twitter:card" content="summary_large_image"> for nicer share previews.

## /blog/ERPNext_CRM_Solutions/

URL: https://www.erpnextdubai.com/blog/ERPNext_CRM_Solutions/

- [x] **h1** (high) — Multiple <h1> tags (2)
      Fix: demoted body `# ERPNext CRM Solutions:...` to `## ` so layout's `<h1>{{title}}</h1>` is the sole H1.

## /blog/ERPNext_Gold_Partner_UAE/

URL: https://www.erpnextdubai.com/blog/ERPNext_Gold_Partner_UAE/

- [x] **h1** (high) — Multiple <h1> tags (2)
      Fix: demoted body `# Discover the First ERPNext Gold Partner, UAE` to `## `.

## /blog/ProperLE_Smart_ERP_Solution/

URL: https://www.erpnextdubai.com/blog/ProperLE_Smart_ERP_Solution/

- [x] **h1** (high) — Multiple <h1> tags (2)
      Fix: demoted body `# ProperLE: Smart ERP Solution for Property Management` to `## `.
- [x] **title_long** (low) — Title too long (92 chars)
      Fix: frontmatter title shortened to `"ProperLE: Smart Property Management ERP Solution"` (48 chars + " | ERPNext Dubai" suffix = 64).

## /blog/UAE_Smart_POS_Revolution/

URL: https://www.erpnextdubai.com/blog/UAE_Smart_POS_Revolution/

- [x] **title_long** (low) — Title too long (92 chars)
      Fix: frontmatter title shortened to `"Smart POS Revolution Sweeping Across the UAE"` (44 chars + suffix = 60). Body `# Swipe, Click, Grow:...` also demoted to `## ` preventively.

## /blog/accounts-receivable-management-dubai/

URL: https://www.erpnextdubai.com/blog/accounts-receivable-management-dubai/

- [x] **title_long** (low) — Title too long (92 chars)
      Fix: frontmatter title shortened to `"Accounts Receivable for Dubai SMEs (ERPNext)"` (44 chars + suffix = 60).

---

## How to use this file

1. `git pull` the repo so you have the latest.
2. Open this file alongside the repo in Claude Code.
3. Ask Claude to work through each `[ ]` checkbox: read the relevant template, edit, mark `[x]`.
4. Run the build locally if applicable.
5. `git commit` per finding (or per group), `git push`. Vercel rebuilds.

When this same export is regenerated, items you already fixed will drop off automatically (they'll be marked applied).
