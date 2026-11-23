/* ==========================================================================
   Fablab Engineering India Pvt. Ltd. — Reusable Header, Footer, Translator & Dock
   Edit this ONE file to update Navigation, Footer, Language Translator,
   Download Catalogue Modal, or Floating Dock across ALL 59 pages simultaneously.
   ========================================================================== */

(function () {
  const activePage = document.body.getAttribute('data-page') || '';
  const base = document.body.getAttribute('data-base') || '';
  const act = (key) => (activePage === key ? ' active' : '');

  const headerHTML = `
<nav class="navbar navbar-expand-xl fixed-top fl-navbar" aria-label="Main navigation">
  <div class="container-fluid px-lg-4 px-xxl-5">
    <a class="navbar-brand d-flex align-items-center" href="${base}index.html">
      <img src="https://fablabindia.com/wp-content/uploads/2024/12/fablab-logo-2.png" alt="Fablab Engineering India Pvt. Ltd." onerror="this.style.display='none';this.nextElementSibling.style.display='inline';">
      <span class="fw-bold fs-4 text-primary" style="display:none;">FABLAB</span>
    </a>
    <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flMainNav" aria-controls="flMainNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="flMainNav">
      <ul class="navbar-nav mx-auto mb-2 mb-xl-0 align-items-xl-center">
        <!-- 1. About Us -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle${act('about')}" href="${base}about-us.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="${base}about-us.html"><i class="fa-regular fa-building me-2 text-primary"></i>About Us</a></li>
            <li><a class="dropdown-item" href="${base}milestones.html"><i class="fa-solid fa-flag-checkered me-2 text-primary"></i>Milestones</a></li>
          </ul>
        </li>

        <!-- 2. Markets (9 Standalone Pages) -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle${act('markets')}" href="${base}markets.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Markets</a>
          <div class="dropdown-menu mega-menu-markets">
            <div class="row g-2">
              <div class="col-sm-6">
                <div class="mega-heading">Core Industries</div>
                <a class="dropdown-item" href="${base}market-pharmaceutical.html">Pharmaceutical</a>
                <a class="dropdown-item" href="${base}market-biopharma.html">Biopharma</a>
                <a class="dropdown-item" href="${base}market-food.html">Food</a>
                <a class="dropdown-item" href="${base}market-beverages.html">Beverages</a>
                <a class="dropdown-item" href="${base}market-semiconductor.html">Semiconductor</a>
              </div>
              <div class="col-sm-6">
                <div class="mega-heading">Specialized Sectors</div>
                <a class="dropdown-item" href="${base}market-hospitals.html">Hospitals</a>
                <a class="dropdown-item" href="${base}market-green-technology.html">Green Technology</a>
                <a class="dropdown-item" href="${base}market-medical-devices.html">Medical Devices</a>
                <a class="dropdown-item" href="${base}market-data-center.html">Data Center</a>
                <hr class="dropdown-divider">
                <a class="dropdown-item fw-bold text-primary" href="${base}markets.html">View All Markets &rarr;</a>
              </div>
            </div>
          </div>
        </li>

        <!-- 3. Key Offerings (9 Standalone Services + 5 Standalone Products) -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle${act('offerings')}" href="${base}key-offerings.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Key Offerings</a>
          <div class="dropdown-menu mega-menu">
            <div class="row g-3">
              <div class="col-md-6">
                <div class="mega-heading">Services</div>
                <a class="dropdown-item" href="${base}service-epc.html">EPC</a>
                <a class="dropdown-item" href="${base}service-mep.html">MEP</a>
                <a class="dropdown-item" href="${base}service-dbot.html">DBOT</a>
                <a class="dropdown-item" href="${base}service-turnkey.html">Turnkey</a>
                <a class="dropdown-item" href="${base}service-training.html">Training</a>
                <a class="dropdown-item" href="${base}service-tech-transfer.html">Tech Transfer</a>
                <a class="dropdown-item" href="${base}service-advisory-services.html">Advisory Services</a>
                <a class="dropdown-item" href="${base}service-resourcing.html">Resourcing</a>
                <a class="dropdown-item" href="${base}service-documents.html">Documents</a>
              </div>
              <div class="col-md-6 border-start-md">
                <div class="mega-heading">Products</div>
                <a class="dropdown-item" href="${base}product-cleanroom-panel-doors.html">Cleanroom Panel &amp; Doors</a>
                <a class="dropdown-item" href="${base}product-cleanroom-equipment.html">Cleanroom Equipment</a>
                <a class="dropdown-item" href="${base}product-laboratories-furniture.html">Laboratories &amp; Furniture</a>
                <a class="dropdown-item" href="${base}product-electrical-ht-lt-panel.html">Electrical HT/LT Panel</a>
                <a class="dropdown-item" href="${base}product-pharmixion.html">Pharmixion (Process Machinery)</a>
                <hr class="dropdown-divider my-2">
                <a class="dropdown-item fw-bold text-primary" href="${base}key-offerings.html">All Offerings &rarr;</a>
                <a class="dropdown-item fw-bold text-primary" href="${base}products.html">All Products &rarr;</a>
              </div>
            </div>
          </div>
        </li>

        <!-- 4. Project Portfolio -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle${act('portfolio')}" href="${base}fabsite.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Project Portfolio</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="${base}fabsite.html"><i class="fa-solid fa-photo-film me-2 text-primary"></i>Fabsite</a></li>
            <li><a class="dropdown-item" href="${base}project-brief.html"><i class="fa-solid fa-briefcase me-2 text-primary"></i>Project Brief</a></li>
          </ul>
        </li>

        <!-- 5-9. Direct Top-Level Links -->
        <li class="nav-item"><a class="nav-link${act('group')}" href="${base}group-companies.html">Group Companies</a></li>
        <li class="nav-item"><a class="nav-link${act('advantage')}" href="${base}fab-advantage.html">Fab Advantage</a></li>
        <li class="nav-item"><a class="nav-link${act('management')}" href="${base}management.html">Management</a></li>
        <li class="nav-item"><a class="nav-link${act('clients')}" href="${base}clients.html">Clients</a></li>
        <li class="nav-item"><a class="nav-link${act('semicon')}" href="${base}semicon.html">Semicon</a></li>
      </ul>

      <div class="d-flex align-items-center gap-2 mt-2 mt-xl-0">
        <!-- Language Translator Dropdown (10 Live Languages) -->
        <select id="flLangSwitcher" class="form-select form-select-sm fl-lang-select" aria-label="Translate Language">
          <option value="en">EN English</option>
          <option value="ar">AR Arabic</option>
          <option value="nl">NL Dutch</option>
          <option value="fr">FR French</option>
          <option value="de">DE German</option>
          <option value="hi">HI Hindi</option>
          <option value="it">IT Italian</option>
          <option value="pt">PT Portuguese</option>
          <option value="ru">RU Russian</option>
          <option value="es">ES Spanish</option>
        </select>
        <div id="google_translate_element" style="display:none;"></div>
        <div id="google_translate_element" style="display:none;"></div>
        <button type="button" id="flThemeToggle" class="fl-theme-btn" aria-label="Toggle Dark Mode" title="Switch Light / Dark Mode">
          <i class="fa-solid fa-moon"></i>
        </button>
        <a href="${base}contact-us.html" class="btn btn-fl-primary btn-sm px-3 py-2">Contact</a>
      </div>
    </div>
  </div>
</nav>
`;

  const footerHTML = `
<footer class="fl-footer">
  <div class="container">
    <div class="row g-4 pb-5 border-bottom border-secondary border-opacity-25">
      <div class="col-lg-4">
        <img src="https://fablabindia.com/wp-content/uploads/2024/10/FabLab-White-Website.png" alt="Fablab India" style="height:46px;width:auto;" class="mb-3" onerror="this.src='https://fablabindia.com/wp-content/uploads/2024/12/fablab-logo-2.png';">
        <p class="small text-secondary-emphasis text-light opacity-75">
          Fablab Engineering India Pvt. Ltd. is a turnkey solution based manufacturing firm established in 2012 with an idea to supply all engineering services; from Air-conditioning and Cleanroom setups to laboratory setups under one roof for Pharmaceutical &amp; high-tech sectors.
        </p>
        <div class="d-flex flex-wrap gap-2 mt-3">
          <a href="https://www.linkedin.com/company/fablab-engineering-india-pvt-ltd/" target="_blank" rel="noopener" class="btn btn-outline-light btn-sm rounded-circle" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://www.youtube.com/@fablab_engg" target="_blank" rel="noopener" class="btn btn-outline-light btn-sm rounded-circle" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
          <a href="mailto:sales@fablabindia.com" class="btn btn-outline-light btn-sm rounded-circle" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
          <button type="button" class="btn btn-fl-light btn-sm px-3 py-1 ms-1" data-bs-toggle="modal" data-bs-target="#flCatalogueModal">
            <i class="fa-solid fa-file-arrow-down me-1"></i>Download Catalogue
          </button>
        </div>
      </div>

      <div class="col-6 col-md-4 col-lg-2">
        <h5>Quick Links</h5>
        <ul class="fl-footer-links">
          <li><a href="${base}fabcare.html">Fabcare</a></li>
          <li><a href="${base}staff-welfare.html">Staff Welfare</a></li>
          <li><a href="${base}blogs.html">Blogs</a></li>
          <li><a href="${base}careers.html">Careers</a></li>
          <li><a href="${base}reports.html">Reports</a></li>
          <li><a href="${base}news-events.html">News &amp; Events</a></li>
          <li><a href="${base}contact-us.html">Contact Us</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <h5>Offerings &amp; Markets</h5>
        <ul class="fl-footer-links">
          <li><a href="${base}markets.html">All 9 Industry Markets</a></li>
          <li><a href="${base}key-offerings.html">EPC, MEP, DBOT &amp; Turnkey</a></li>
          <li><a href="${base}products.html">Cleanroom &amp; Pharma Products</a></li>
          <li><a href="${base}fabsite.html">Fabsite Visual Gallery</a></li>
          <li><a href="${base}project-brief.html">Global Project Briefs</a></li>
          <li><a href="${base}semicon.html">FabLab Semicon</a></li>
        </ul>
      </div>

      <div class="col-md-4 col-lg-3">
        <h5>Our Address</h5>
        <p class="small mb-2">
          <i class="fa-solid fa-location-dot text-info me-2"></i>
          Unit No. 303, 3rd Floor, Bhoomi Velocity, Plot No. B39A, Near Tata Showroom, Road No. 23, Wagle Industrial Estate, Thane - 400604, Maharashtra
        </p>
        <p class="small mb-3">
          <i class="fa-solid fa-envelope text-info me-2"></i>
          <a href="mailto:sales@fablabindia.com">sales@fablabindia.com</a>
        </p>
        <a href="${base}contact-us.html" class="btn btn-fl-light btn-sm px-3 py-2">Start a Project &rarr;</a>
      </div>
    </div>

    <div class="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 gap-2 small">
      <div>&copy; 2026 Fablab Engineering India Pvt. Ltd. All Rights Reserved.</div>
      <div class="d-flex gap-3">
        <a href="${base}contact-us.html">Contact Us</a>
        <a href="${base}terms-and-conditions.html">Terms &amp; Conditions</a>
        <a href="${base}privacy-policy.html">Privacy Policy</a>
      </div>
    </div>
  </div>
</footer>

<!-- Reusable Media Lightbox Modal -->
<div class="modal fade" id="flMediaModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content bg-dark text-white border-0 rounded-4 overflow-hidden">
      <div class="modal-header border-secondary border-opacity-25">
        <h5 class="modal-title text-white" id="flMediaModalTitle">Fablab India</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body p-2 p-md-3 text-center" id="flMediaModalBody"></div>
    </div>
  </div>
</div>

<!-- Download Catalogue Modal -->
<div class="modal fade" id="flCatalogueModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content border-0 rounded-4 overflow-hidden shadow-lg">
      <div class="modal-header text-white" style="background:var(--fl-navy);">
        <h5 class="modal-title text-white"><i class="fa-solid fa-file-pdf me-2 text-info"></i>Download Fablab Corporate Catalogue</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body p-4">
        <p class="small text-muted mb-3">Enter your details to download the latest Fablab Engineering India EPC, Cleanroom &amp; Pharma Machinery catalogue.</p>
        <form class="fl-contact-form" action="${base}contact.php" method="POST">
          <input type="text" name="website_url" class="hp-field" tabindex="-1" autocomplete="off">
          <input type="hidden" name="service_scope" value="Catalogue Download">
          <input type="hidden" name="role" value="Client">
          <input type="hidden" name="sector" value="Catalogue Request">
          <div class="mb-3">
            <label class="form-label small fw-semibold">Your Name *</label>
            <input type="text" name="name" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label small fw-semibold">Company Name *</label>
            <input type="text" name="company" class="form-control" required>
          </div>
          <div class="row g-2 mb-3">
            <div class="col-6">
              <label class="form-label small fw-semibold">Work Email *</label>
              <input type="email" name="email" class="form-control" required>
            </div>
            <div class="col-6">
              <label class="form-label small fw-semibold">Phone *</label>
              <input type="tel" name="phone" class="form-control" required>
            </div>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-fl-primary"><i class="fa-solid fa-download me-2"></i>Request &amp; Download PDF</button>
            <a href="${base}assets/catalogue/fablab-catalogue.pdf" download class="btn btn-outline-secondary btn-sm rounded-pill">Direct PDF Link (Place PDF in assets/catalogue/)</a>
          </div>
          <div class="form-status"></div>
        </form>
      </div>
    </div>
  </div>
</div>

<!-- Floating Action Dock (Connect With Us + Download Catalogue + Back to Top) -->
<div class="fl-dock align-items-end">
  <button type="button" class="fl-dock-pill fl-dock-catalogue" data-bs-toggle="modal" data-bs-target="#flCatalogueModal" title="Download Catalogue">
    <i class="fa-solid fa-file-arrow-down"></i><span class="d-none d-sm-inline">Download Catalogue</span>
  </button>
  <a href="${base}contact-us.html" class="fl-dock-pill fl-dock-connect" title="Connect With Us">
    <i class="fa-solid fa-headset"></i><span class="d-none d-sm-inline">Connect With Us</span>
  </a>
  <button type="button" id="flBackToTop" class="fl-dock-btn fl-dock-top" title="Back to Top" aria-label="Back to Top">
    <i class="fa-solid fa-arrow-up"></i>
  </button>
</div>

<!-- Accessibility Tools Widget -->
<button type="button" id="flA11yToggle" class="fl-a11y-trigger" aria-label="Open Accessibility Tools" aria-expanded="false" aria-controls="flA11yPanel" title="Accessibility Tools">
  <i class="fa-solid fa-universal-access"></i>
</button>
<div id="flA11yPanel" class="fl-a11y-panel" role="dialog" aria-label="Accessibility Tools">
  <div class="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
    <strong class="small"><i class="fa-solid fa-universal-access text-primary me-1"></i>Accessibility Tools</strong>
    <button type="button" id="flA11yClose" class="btn-close btn-sm" aria-label="Close"></button>
  </div>
  <div class="d-flex gap-2 mb-2">
    <button type="button" class="btn btn-outline-secondary btn-sm flex-fill fw-bold" id="a11yFontDec" aria-label="Decrease text size">A-</button>
    <button type="button" class="btn btn-outline-secondary btn-sm flex-fill fw-bold" id="a11yFontReset" aria-label="Reset text size">100%</button>
    <button type="button" class="btn btn-outline-secondary btn-sm flex-fill fw-bold" id="a11yFontInc" aria-label="Increase text size">A+</button>
  </div>
  <button type="button" class="fl-a11y-btn" data-a11y="a11y-contrast"><span><i class="fa-solid fa-circle-half-stroke me-2"></i>High Contrast</span><i class="fa-solid fa-check opacity-50"></i></button>
  <button type="button" class="fl-a11y-btn" data-a11y="a11y-links"><span><i class="fa-solid fa-link me-2"></i>Highlight Links</span><i class="fa-solid fa-check opacity-50"></i></button>
  <button type="button" class="fl-a11y-btn" data-a11y="a11y-readable"><span><i class="fa-solid fa-text-height me-2"></i>Readable Spacing</span><i class="fa-solid fa-check opacity-50"></i></button>
  <button type="button" class="fl-a11y-btn" data-a11y="a11y-reduce-motion"><span><i class="fa-solid fa-pause me-2"></i>Pause Animations</span><i class="fa-solid fa-check opacity-50"></i></button>
  <button type="button" id="flA11yReset" class="btn btn-sm btn-outline-danger w-100 mt-2 rounded-pill">Reset All Settings</button>
</div>

`;

  const headerMount = document.getElementById('fl-header');
  if (headerMount) headerMount.outerHTML = headerHTML;

  const footerMount = document.getElementById('fl-footer');
  if (footerMount) footerMount.outerHTML = footerHTML;

  // Google Translate Dynamic Loader + Cookie Switcher
  window.googleTranslateElementInit = function () {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,ar,nl,fr,de,hi,it,pt,ru,es',
        autoDisplay: false
      }, 'google_translate_element');
    }
  };

  const gtScript = document.createElement('script');
  gtScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  gtScript.async = true;
  document.body.appendChild(gtScript);

  const langSelect = document.getElementById('flLangSwitcher');
  if (langSelect) {
    const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
    if (match && match[1]) langSelect.value = match[1];

    langSelect.addEventListener('change', function () {
      const lang = this.value;
      document.cookie = `googtrans=/en/${lang}; path=/`;
      document.cookie = `googtrans=/en/${lang}; domain=${window.location.hostname}; path=/`;
      const combo = document.querySelector('.goog-te-combo');
      if (combo) {
        combo.value = lang;
        combo.dispatchEvent(new Event('change'));
      } else {
        window.location.reload();
      }
    });
  }
})();
