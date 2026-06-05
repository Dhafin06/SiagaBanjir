# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Siaga Banjir** — static multi-page website (Indonesian) for flood information and emergency assistance in West Java. No build tool, no framework, no package manager. Open HTML files directly in a browser or via VSCode Live Server.

## Running the Site

Open any `.html` file directly in a browser, or use VSCode Live Server extension for hot-reload. There are no build steps, no `npm install`, no compilation.

## File Structure

| File | Purpose |
|------|---------|
| `index.html` | Beranda (home) |
| `area-rawan.html` | Flood-prone area map |
| `informasi-banjir.html` | Flood news/updates |
| `edukasi.html` | Flood education content |
| `informasi-posko.html` | BPBD posko locations + emergency contacts |
| `style.css` | Single global stylesheet for all pages |
| `components.js` | **Shared navbar & footer** — injected into every page via JS |
| `data/BPBD_Jawa_Barat.xlsx` | Source data for posko table |

## Shared Components (Important)

Navbar and footer are **not** duplicated in each HTML file. They live solely in `components.js` and are injected at runtime into placeholder divs:

```html
<div id="navbar-placeholder"></div>   <!-- top of <body> -->
<div id="footer-placeholder"></div>   <!-- bottom, before </body> -->
<script src="components.js"></script>
```

**Any navbar or footer change must be made only in `components.js`.** Active nav link is set automatically based on `location.pathname`.

## Posko Page — Pagination

`informasi-posko.html` contains inline JavaScript that renders the BPBD table with pagination (5 rows/page). Data is hardcoded in the `poskoData` array inside that script block. Entries with a phone number are sorted to the top. Source data: `data/BPBD_Jawa_Barat.xlsx`.

## Styling Conventions

- CSS custom properties (variables) are defined at `:root` in `style.css` — use `var(--teal)` etc. for brand colors.
- Each page section follows the pattern: `<section class="xxx-section"> > <div class="xxx-inner">` for max-width centering.
- Hero sections use `hero hero-subpage` class on sub-pages vs `hero` on the home page.

## Language

All UI text is in **Indonesian (Bahasa Indonesia)**. Keep all content, labels, and comments in Indonesian unless the context is purely technical code.
