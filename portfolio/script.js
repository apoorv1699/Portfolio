(function () {
  'use strict';

  // ----- Year in footer -----
  document.getElementById('year').textContent = new Date().getFullYear();

  // ----- Typing effect for hero tagline -----
  const taglineEl = document.querySelector('.tagline-text');
  if (taglineEl) {
    const text = 'Software Developer';
    taglineEl.textContent = '';
    let i = 0;
    function type() {
      if (i < text.length) {
        taglineEl.textContent += text[i];
        i++;
        setTimeout(type, 120);
      } else {
        setTimeout(erase, 2500);
      }
    }
    function erase() {
      if (i > 0) {
        taglineEl.textContent = text.slice(0, i - 1);
        i--;
        setTimeout(erase, 60);
      } else {
        setTimeout(type, 400);
      }
    }
    setTimeout(type, 800);
  }

  // ----- Scroll reveal (smooth staggered entrance) -----
  const revealEls = document.querySelectorAll('.reveal');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.08
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  revealEls.forEach(function (el) {
    observer.observe(el);
  });

  // ----- Stagger project/cert tags (set --tag-i for animation delay) -----
  document.querySelectorAll('.project-tags span').forEach(function (span, i) {
    span.style.setProperty('--tag-i', i);
  });

  // ----- Mobile nav toggle -----
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.classList.toggle('active');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      if (toggle) toggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // ----- Smooth scroll for anchor links (fallback) -----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
