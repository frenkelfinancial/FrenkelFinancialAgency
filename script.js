const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

// Reveal sections as they scroll into view (also kicks off staggered card grids)
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.cards-grid, .agency-grid').forEach((grid) => grid.classList.add('in-view'));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => revealObserver.observe(el));

// Split section headings into words so they can wipe in on scroll
document.querySelectorAll('.split-heading').forEach((heading) => {
  const words = heading.textContent.trim().split(/\s+/);
  heading.innerHTML = words
    .map((word, i) => `<span class="word-mask"><span class="word-inner" style="--d:${i * 0.06}s">${word}</span></span>`)
    .join(' ');
});

const splitObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      splitObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.split-heading').forEach((el) => splitObserver.observe(el));

// Highlight the active nav link based on scroll position + animate the indicator
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav a');
const navIndicator = document.querySelector('.nav-indicator');

function moveIndicator(link) {
  if (!navIndicator || !link) return;
  const navRect = nav.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();
  navIndicator.style.left = `${linkRect.left - navRect.left}px`;
  navIndicator.style.width = `${linkRect.width}px`;
  navIndicator.classList.add('ready');
}

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === '#' + entry.target.id;
        link.classList.toggle('active', isActive);
        if (isActive) moveIndicator(link);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach((sec) => sectionObserver.observe(sec));

window.addEventListener('resize', () => {
  const activeLink = document.querySelector('.nav a.active');
  if (activeLink) moveIndicator(activeLink);
});

// Hero split-flap rotator — words flip in like a departure board
const flapTile = document.getElementById('flapTile');
if (flapTile) {
  const words = ['Mentorship', 'Momentum', 'Opportunity', 'Leadership'];
  let active = 0;

  const sizeTile = () => {
    const probe = flapTile.cloneNode(true);
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.minWidth = '0';
    probe.style.width = 'auto';
    probe.classList.remove('is-flipping');
    document.body.appendChild(probe);
    let max = 0;
    words.forEach((word) => {
      probe.textContent = word;
      max = Math.max(max, probe.getBoundingClientRect().width);
    });
    document.body.removeChild(probe);
    flapTile.style.minWidth = `${Math.ceil(max)}px`;
  };

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(sizeTile);
  }
  sizeTile();
  window.addEventListener('resize', sizeTile);

  if (!prefersReducedMotion) {
    setInterval(() => {
      flapTile.classList.add('is-flipping');
      setTimeout(() => {
        active = (active + 1) % words.length;
        flapTile.textContent = words[active];
      }, 280);
      setTimeout(() => flapTile.classList.remove('is-flipping'), 560);
    }, 2800);
  }
}

// Cursor-follow chrome highlight on dark surfaces
const cursorGlow = document.querySelector('.cursor-glow');
if (cursorGlow && !prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
  let raf = null;
  window.addEventListener('pointermove', (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      cursorGlow.style.setProperty('--mx', `${e.clientX}px`);
      cursorGlow.style.setProperty('--my', `${e.clientY}px`);
      cursorGlow.classList.add('active');
      raf = null;
    });
  });
  document.addEventListener('mouseleave', () => cursorGlow.classList.remove('active'));
}

// Subtle 3D tilt on "why join" cards
if (!prefersReducedMotion) {
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${y * -6}deg) rotateY(${x * 8}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
