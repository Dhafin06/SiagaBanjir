// Shared navbar & footer — edit here, applies to all pages

(function () {
  const pages = [
    { label: 'Beranda',           href: 'index.html' },
    { label: 'Area Rawan',        href: 'area-rawan.html' },
    { label: 'Informasi Banjir',  href: 'informasi-banjir.html' },
    { label: 'Edukasi',           href: 'edukasi.html' },
    { label: 'Informasi Posko',   href: 'informasi-posko.html' },
  ];

  const currentFile = location.pathname.split('/').pop() || 'index.html';

  // ── Navbar ──────────────────────────────────────────────
  const navLinks = pages
    .map(p => `<li><a href="${p.href}"${currentFile === p.href ? ' class="active"' : ''}>${p.label}</a></li>`)
    .join('');

  const navbarHTML = `
    <nav class="navbar">
      <div class="navbar-inner">
        <a href="index.html" class="logo-wrap">
          <div class="logo-icon"><i class="fa-solid fa-droplet"></i></div>
          <div>
            <div class="logo-title">SIAGA BANJIR</div>
            <div class="logo-sub">Informasi &amp; Edukasi Banjir</div>
          </div>
        </a>
        <ul class="nav-links">${navLinks}</ul>
      </div>
    </nav>`;

  // ── Footer ───────────────────────────────────────────────
  const footerNavLinks = pages
    .map(p => `<li><a href="${p.href}">${p.label}</a></li>`)
    .join('');

  const footerHTML = `
    <footer class="footer">
      <div class="footer-inner">
        <div>
          <div class="footer-logo-wrap">
            <div class="footer-logo-icon"><i class="fa-solid fa-droplet"></i></div>
            <div>
              <div class="footer-logo-title">SIAGA BANJIR</div>
              <div class="footer-logo-sub">Informasi &amp; Edukasi Banjir</div>
            </div>
          </div>
          <p class="footer-desc">
            Siaga Banjir menyediakan informasi banjir terkini, peta area rawan, lokasi posko BPBD, serta edukasi kebencanaan untuk meningkatkan kesiapsiagaan masyarakat Jawa Barat.
          </p>
        </div>
        <div class="footer-col">
          <h4>Navigasi</h4>
          <ul class="footer-links">${footerNavLinks}</ul>
        </div>
      </div>
    </footer>`;

  // ── Inject ───────────────────────────────────────────────
  const navEl = document.getElementById('navbar-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.outerHTML = navbarHTML;
  if (footEl) footEl.outerHTML = footerHTML;
})();
