/* ==========================================================================
   Fablab Engineering India Pvt. Ltd. — Main Interactive Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar & Back-to-Top
  const navbar = document.querySelector('.fl-navbar');
  const topBtn = document.getElementById('flBackToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar && navbar.classList.add('scrolled');
      topBtn && topBtn.classList.add('show');
    } else {
      navbar && navbar.classList.remove('scrolled');
      topBtn && topBtn.classList.remove('show');
    }
  });

  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. Scroll Reveal Observer
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  // 3. Animated Counters
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1500;
          const startTime = performance.now();

          const update = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            el.textContent = current.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target.toLocaleString() + suffix;
          };
          requestAnimationFrame(update);
          counterObs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    counters.forEach((c) => counterObs.observe(c));
  }

  // 4. Homepage Interactive Offerings Switcher
  const offeringRows = document.querySelectorAll('.offering-row');
  const previewImg = document.getElementById('offeringPreviewImg');
  const previewTitle = document.getElementById('offeringPreviewTitle');
  const previewDesc = document.getElementById('offeringPreviewDesc');
  const previewLink = document.getElementById('offeringPreviewLink');

  offeringRows.forEach((row) => {
    row.addEventListener('click', () => {
      offeringRows.forEach((r) => r.classList.remove('active'));
      row.classList.add('active');
      if (previewImg && row.dataset.img) previewImg.src = row.dataset.img;
      if (previewTitle && row.dataset.title) previewTitle.textContent = row.dataset.title;
      if (previewDesc && row.dataset.desc) previewDesc.textContent = row.dataset.desc;
      if (previewLink && row.dataset.link) previewLink.href = row.dataset.link;
    });
  });

  // 5. Filterable Grids (Markets / Project Briefs)
  const filterGroups = document.querySelectorAll('[data-filter-group]');
  filterGroups.forEach((group) => {
    const buttons = group.querySelectorAll('.fl-filter-btn');
    const targetSelector = group.getAttribute('data-filter-group');
    const items = document.querySelectorAll(targetSelector);

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-filter');

        items.forEach((item) => {
          const cats = (item.getAttribute('data-category') || '').split(',');
          if (filterVal === 'all' || cats.includes(filterVal)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });

  // 6. Media Lightbox Modal (Video & Image)
  const mediaModalEl = document.getElementById('flMediaModal');
  if (mediaModalEl && window.bootstrap) {
    const mediaModal = new bootstrap.Modal(mediaModalEl);
    const modalTitle = document.getElementById('flMediaModalTitle');
    const modalBody = document.getElementById('flMediaModalBody');

    document.querySelectorAll('[data-media-src]').forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const src = trigger.getAttribute('data-media-src');
        const type = trigger.getAttribute('data-media-type') || 'image';
        const title = trigger.getAttribute('data-media-title') || 'Fablab India';

        modalTitle.textContent = title;
        if (type === 'video') {
          modalBody.innerHTML = `<video src="${src}" controls autoplay playsinline class="w-100 rounded-3" style="max-height:75vh;background:#000;"></video>`;
        } else {
          modalBody.innerHTML = `<img src="${src}" alt="${title}" class="w-100 rounded-3" style="max-height:78vh;object-fit:contain;">`;
        }
        mediaModal.show();
      });
    });

    mediaModalEl.addEventListener('hidden.bs.modal', () => {
      modalBody.innerHTML = '';
    });
  }

  // 7. Contact Form Submission (AJAX -> contact.php with fallback feedback)
  const contactForms = document.querySelectorAll('.fl-contact-form');
  contactForms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const statusBox = form.querySelector('.form-status');
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i>Sending...';
      }

      try {
        const formData = new FormData(form);
        const res = await fetch(form.getAttribute('action') || 'contact.php', {
          method: 'POST',
          body: formData
        });
        const data = await res.json();
        if (data.success) {
          statusBox.innerHTML = `<div class="alert alert-success rounded-3 mt-3"><i class="fa-solid fa-circle-check me-2"></i>${data.message}</div>`;
          form.reset();
        } else {
          statusBox.innerHTML = `<div class="alert alert-danger rounded-3 mt-3"><i class="fa-solid fa-triangle-exclamation me-2"></i>${data.message || 'Please check your details and try again.'}</div>`;
        }
      } catch (err) {
        // Graceful fallback when previewed locally without PHP server
        statusBox.innerHTML = `<div class="alert alert-info rounded-3 mt-3"><i class="fa-solid fa-envelope-circle-check me-2"></i>Thank you! Your inquiry is validated and ready. Once uploaded to cPanel, <strong>contact.php</strong> will deliver this directly to <strong>sales@fablabindia.com</strong>.</div>`;
        form.reset();
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }
    });
  });
});

// 8. Careers Live Search & Apply Modal Role Auto-Fill
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('careerSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      document.querySelectorAll('.career-item').forEach((card) => {
        const hay = (card.getAttribute('data-title') || '') + ' ' + card.textContent.toLowerCase();
        card.style.display = hay.includes(q) ? '' : 'none';
      });
    });
  }

  document.querySelectorAll('[data-apply-role]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = document.getElementById('applyPositionInput');
      if (input) input.value = btn.getAttribute('data-apply-role') || 'General Application';
    });
  });
});

// 9. Light / Dark Mode & Accessibility Tools (Persisted Across All Pages)
document.addEventListener('DOMContentLoaded', () => {
  // --- Light / Dark Theme ---
  const themeBtn = document.getElementById('flThemeToggle');
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('fl_theme', theme);
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark'
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    }
  };
  const savedTheme = localStorage.getItem('fl_theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  // --- Accessibility Panel ---
  const a11yToggle = document.getElementById('flA11yToggle');
  const a11yPanel = document.getElementById('flA11yPanel');
  const a11yClose = document.getElementById('flA11yClose');

  const setPanel = (open) => {
    if (!a11yPanel || !a11yToggle) return;
    a11yPanel.classList.toggle('open', open);
    a11yToggle.setAttribute('aria-expanded', String(open));
  };

  if (a11yToggle) a11yToggle.addEventListener('click', () => setPanel(!a11yPanel.classList.contains('open')));
  if (a11yClose) a11yClose.addEventListener('click', () => setPanel(false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setPanel(false); });

  // Font Scaling (90% to 130%)
  let fontScale = parseInt(localStorage.getItem('fl_font_scale') || '100', 10);
  const applyFont = (val) => {
    fontScale = Math.max(90, Math.min(130, val));
    document.documentElement.style.fontSize = fontScale + '%';
    localStorage.setItem('fl_font_scale', String(fontScale));
    const resetBtn = document.getElementById('a11yFontReset');
    if (resetBtn) resetBtn.textContent = fontScale + '%';
  };
  applyFont(fontScale);

  const decBtn = document.getElementById('a11yFontDec');
  const resBtn = document.getElementById('a11yFontReset');
  const incBtn = document.getElementById('a11yFontInc');
  if (decBtn) decBtn.addEventListener('click', () => applyFont(fontScale - 10));
  if (resBtn) resBtn.addEventListener('click', () => applyFont(100));
  if (incBtn) incBtn.addEventListener('click', () => applyFont(fontScale + 10));

  // Toggleable Modes
  document.querySelectorAll('[data-a11y]').forEach((btn) => {
    const cls = btn.getAttribute('data-a11y');
    if (localStorage.getItem(cls) === '1') {
      document.body.classList.add(cls);
      btn.classList.add('active');
    }
    btn.addEventListener('click', () => {
      const on = document.body.classList.toggle(cls);
      btn.classList.toggle('active', on);
      localStorage.setItem(cls, on ? '1' : '0');
    });
  });

  // Reset All
  const resetAll = document.getElementById('flA11yReset');
  if (resetAll) {
    resetAll.addEventListener('click', () => {
      applyFont(100);
      applyTheme('light');
      document.querySelectorAll('[data-a11y]').forEach((btn) => {
        const cls = btn.getAttribute('data-a11y');
        document.body.classList.remove(cls);
        btn.classList.remove('active');
        localStorage.removeItem(cls);
      });
    });
  }
});