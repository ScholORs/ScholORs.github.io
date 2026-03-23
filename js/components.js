/**
 * ScholORs — Shared Components (Navbar + Footer + Utilities)
 * Injected via JS for reuse across all pages.
 */

// ============================================
// PAGE LOADER
// ============================================
function renderLoader() {
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.id = 'pageLoader';
  loader.innerHTML = `
    <div class="loader-inner">
      <img src="images/ScholORs_Logo_Inverted.png" alt="Loading" class="loader-logo">
      <div class="loader-bar"><div class="loader-bar-fill"></div></div>
    </div>
  `;
  document.body.prepend(loader);

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('loaded');
      setTimeout(() => loader.remove(), 600);
    }, 400);
  });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
function renderBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.id = 'backToTop';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4L4 12h4v4h4v-4h4L10 4z" fill="currentColor"/></svg>`;
  document.body.appendChild(btn);

  const toggle = () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  };
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================
// NAVBAR
// ============================================
function renderNavbar(activePage) {
  const pages = [
    { id: 'home',          label: 'Home',          href: 'index.html' },
    { id: 'research',      label: 'Research',      href: 'research.html' },
    { id: 'team',          label: 'Team',          href: 'team.html' },
    { id: 'publications',  label: 'Publications',  href: 'publications.html' },
    { id: 'contact',       label: 'Contact',       href: 'contact.html' },
  ];

  const navLinks = pages.map(p =>
    `<a href="${p.href}" class="${p.id === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');

  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.id = 'navbar';
  navbar.innerHTML = `
    <div class="navbar-inner">
      <a href="index.html" class="nav-logo">
        <img src="images/ScholORs_Logo_Inverted.png" alt="ScholORs Logo">
        <span>ScholORs</span>
      </a>
      <div class="nav-links" id="navLinks">
        ${navLinks}
      </div>
      <div class="nav-hamburger" id="navHamburger">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;

  document.body.prepend(navbar);

  // Hamburger toggle
  const hamburger = document.getElementById('navHamburger');
  const navLinksEl = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksEl.classList.toggle('open');
  });

  // Close on link click (mobile)
  navLinksEl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinksEl.classList.remove('open');
    });
  });

  // Scroll effect
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ============================================
// FOOTER
// ============================================
function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo">
            <img src="images/ScholORs_Logo_Inverted.png" alt="ScholORs Logo">
            <span>ScholORs</span>
          </a>
          <p>Operations Research Scholars &amp; Professionals — Advancing the frontier of optimization, decision science, and analytical excellence.</p>
        </div>
        <div class="footer-col">
          <h4>Navigate</h4>
          <a href="index.html">Home</a>
          <a href="research.html">Research</a>
          <a href="team.html">Team</a>
          <a href="publications.html">Publications</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer-col">
          <h4>Research</h4>
          <a href="research.html">Combinatorial Optimization</a>
          <a href="research.html">Machine Learning for OR</a>
          <a href="research.html">Supply Chain Analytics</a>
          <a href="research.html">Scheduling & Routing</a>
        </div>
        <div class="footer-col">
          <h4>Connect</h4>
          <a href="https://github.com/ScholORs" target="_blank" rel="noopener">GitHub ↗</a>
          <a href="#" target="_blank" rel="noopener">ResearchGate ↗</a>
          <a href="#" target="_blank" rel="noopener">LinkedIn ↗</a>
          <a href="contact.html">Contact Us</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} ScholORs Lab. All rights reserved.</span>
        <span>Built with passion for Operations Research.</span>
      </div>
    </div>
  `;

  document.body.appendChild(footer);
}
