# CLAUDE.md

**Siaga Banjir** — static multi-page website (Indonesian) for flood information and emergency assistance in West Java. No build tool, no framework, no package manager.

## Running

Open any `.html` file in a browser, or use VSCode Live Server. No build steps.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Beranda (home) |
| `area-rawan.html` | Peta area rawan banjir |
| `informasi-banjir.html` | Berita/update banjir |
| `edukasi.html` | Edukasi kebencanaan |
| `informasi-posko.html` | Lokasi posko BPBD + kontak darurat |
| `style.css` | Stylesheet global (semua halaman) |
| `components.js` | Navbar & footer bersama — di-inject ke setiap halaman |
| `data/BPBD_Jawa_Barat.xlsx` | Data sumber tabel posko |

## Navbar & Footer

Hanya ada di `components.js`, di-inject ke placeholder:
```html
<div id="navbar-placeholder"></div>
<div id="footer-placeholder"></div>
<script src="components.js"></script>
```
**Perubahan navbar/footer hanya di `components.js`.**

## Halaman Posko

Tabel BPBD di `informasi-posko.html` menggunakan pagination 5 baris/halaman. Data hardcoded di array `poskoData`. Nomor telepon yang mengandung `/` dipisah menjadi link terpisah.

## Styling

- Brand color: `var(--teal)` = `#1B5D54` (didefinisikan di `:root` dalam `style.css`)
- Pola section: `<section class="xxx-section"> > <div class="xxx-inner">`
- Sub-halaman pakai `class="hero hero-subpage"`, beranda pakai `class="hero"`

## Bahasa

Semua teks UI dalam **Bahasa Indonesia**.
