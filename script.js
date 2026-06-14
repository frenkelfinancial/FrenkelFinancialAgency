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

// Split section headings into words so they can rotate in on scroll
document.querySelectorAll('.split-heading').forEach((heading) => {
  const words = heading.textContent.trim().split(/\s+/);
  heading.innerHTML = words
    .map((word, i) => `<span class="word-mask"><span class="word-inner" style="--d:${i * 0.07}s">${word}</span></span>`)
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

// Hero flip words — rotate phrases in and out
const flipInner = document.querySelector('.flip-inner');
if (flipInner) {
  const words = Array.from(flipInner.children);
  const flip = flipInner.parentElement;

  const sizeToWidest = () => {
    let max = 0;
    words.forEach((word) => { max = Math.max(max, word.getBoundingClientRect().width); });
    flip.style.width = `${Math.ceil(max)}px`;
  };

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(sizeToWidest);
  }
  sizeToWidest();
  window.addEventListener('resize', sizeToWidest);

  let active = 0;
  words[active].classList.add('is-active');

  if (!prefersReducedMotion) {
    setInterval(() => {
      const next = (active + 1) % words.length;
      words[active].classList.remove('is-active');
      words[active].classList.add('is-exit');
      words[next].classList.add('is-active');
      setTimeout(() => words[active].classList.remove('is-exit'), 700);
      active = next;
    }, 2600);
  }
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
