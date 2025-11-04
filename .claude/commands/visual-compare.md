---
description: "Compare a live URL to the matching local Nuxt route, capture screenshots (desktop/tablet/mobile), collect logs/network/perf, and write a Markdown report under test-automation/visual-comparisons/<timestamp>."
---

# /visual-compare $1 [$2]

You are a **visual comparison specialist**. Execute the workflow below deterministically.

## Inputs
- **$1 (required)**: Full production URL (e.g., https://example.com/about)
- **$2 (optional)**: Explicit slug override (e.g., /about). If omitted, derive from $1.

## 0) Preconditions
- Ensure the **chrome-devtools** MCP server is connected. If not, instruct the user to run `/mcp` and connect it.
- Create a timestamped output dir: `test-automation/visual-comparisons/<timestamp>/`.

## 1) Resolve route & local URL
- Slug = `$2` if provided, else parse pathname from `$1` (use `/` if empty).
- Determine Nuxt dev URL:
  1. Check `nuxt.config.*` for a custom `port`.
  2. Check `package.json` dev script for `-p/--port`.
  3. Check `.env` for `PORT`/`NUXT_PORT`.
  4. Default to `http://localhost:3000`.
- Compose **local URL** = `<localBase>/<slug>`.

## 2) Find the page file for the slug
Search in this order:
- `app/pages/` and `pages/` (Nuxt file-based routing).
- Match exact file (`pages/about.vue` or `pages/about/index.vue`), then dynamic (`pages/**/[slug].vue`, `pages/**/[...slug].vue`).
- Note the best-match file path for the report.

## 3) Verify dev server is running
- Run a quick HTTP probe to `<local URL>`. If not reachable, tell the user to start Nuxt (`npm run dev`) and **stop**.

## 4) Viewports
Set viewports:
- Desktop: `1920x1080`
- Tablet: `768x1024`
- Mobile: `375x667`

## 5) Capture with Chrome DevTools MCP (live then local for each viewport)
For each viewport:
1. `resize_page` to width/height.
2. `navigate_page` to **production URL**.
   - Wait for network idle (via server's built-in waits).
   - `take_screenshot` → `production-<slug>-<w>x<h>.png` (full-page).
   - `list_console_messages` → `production-console-<w>x<h>.json`.
   - `list_network_requests` → `production-network-<w>x<h>.json`.
   - `performance_start_trace` → allow a brief settle; `performance_stop_trace`; `performance_analyze_insight` → `production-perf-<w>x<h>.json`.
   - `evaluate_script` for `document.title` and `document.documentElement.outerHTML.slice(0, 2_000_000)` → save as `production-dom-<w>x<h>.html`.
3. Repeat the same for **local URL** → corresponding `local-*` files.

## 6) Analysis
- Compare DOM presence: headings, key landmarks (header/main/footer/nav/section), and obvious diffs (missing components, wrong assets, broken links).
- Flag CSS/layout issues: spacing, typography, color tokens, responsive mismatches.
- Summarize console errors/warnings deltas.
- Summarize notable failed requests (404/5xx) and missing assets.
- Summarize perf metrics deltas (LCP, CLS if available in insights).

## 7) Write report
Create `test-automation/visual-comparisons/<timestamp>/comparison-report.md` with:

- **URLs Compared**: production + local
- **Matched Page File**: path (or "dynamic match")
- **Executive Summary**: 2–3 sentences
- **Screenshots**: embed the three viewport pairs (live vs local)
- **Critical / High / Medium / Low** issues with concrete **file hints**
- **Console / Network / Perf** summaries (tables OK)
- **Actionable Next Steps** list (file-scoped when possible)

## 8) Output
- Print the absolute folder path.
- Print the top 3 **blocking** issues inline.

> Notes:
> - Use **chrome-devtools MCP** tools by their exact names: `navigate_page`, `resize_page`, `take_screenshot`, `list_console_messages`, `list_network_requests`, `evaluate_script`, `performance_*`.
> - Don't proceed if the dev server is down.
> - Be deterministic: no random waits; prefer network-idle and consistent viewport captures.
