'use client';

import { useEffect } from 'react';

export default function ScrollEffects() {
  useEffect(() => {
    // 1. Scroll reveal
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay');
          if (delay) {
            entry.target.style.transitionDelay = `${delay}ms`;
          }
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // 3. Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    const menuSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>';
    const closeSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';

    const toggleMenu = () => {
      if (mobileMenu) {
        mobileMenu.classList.toggle('active');
        const isActive = mobileMenu.classList.contains('active');
        if (mobileMenuBtn) {
          mobileMenuBtn.innerHTML = isActive ? closeSvg : menuSvg;
        }
      }
    };

    const closeMenu = () => {
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
        if (mobileMenuBtn) {
          mobileMenuBtn.innerHTML = menuSvg;
        }
      }
    };

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', toggleMenu);
    }

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (mobileMenuBtn) {
        mobileMenuBtn.removeEventListener('click', toggleMenu);
      }
      mobileLinks.forEach(link => {
        link.removeEventListener('click', closeMenu);
      });
    };
  }, []);

  return null;
}
