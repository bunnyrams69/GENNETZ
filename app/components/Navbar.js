'use client';

import { MessageCircle } from 'lucide-react';
import MagneticLiquidButton from './MagneticLiquidButton';

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="container nav-container">
        <a href="#home" className="nav-logo-link">
          <img src="/images/logo.png" alt="GENNETZ" className="logo" />
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#trust">Trust</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <MagneticLiquidButton
            variant="aurora"
            size="sm"
            href="https://wa.me/916383884581"
            target="_blank"
            leftIcon={<MessageCircle size={15} />}
            className="font-head uppercase tracking-wider text-xs"
          >
            Chat on WhatsApp
          </MagneticLiquidButton>
        </div>
        <button className="menu-toggle" id="mobile-menu-btn" aria-label="Toggle Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
      <div className="mobile-menu" id="mobile-menu">
        <a href="#home" className="mobile-link">Home</a>
        <a href="#services" className="mobile-link">Services</a>
        <a href="#process" className="mobile-link">Process</a>
        <a href="#trust" className="mobile-link">Trust</a>
        <a href="#work" className="mobile-link">Work</a>
        <a href="#contact" className="mobile-link">Contact</a>
        <div style={{ marginTop: '2rem' }}>
          <MagneticLiquidButton
            variant="aurora"
            size="md"
            href="https://wa.me/916383884581"
            target="_blank"
            leftIcon={<MessageCircle size={18} />}
            className="font-head uppercase tracking-wider"
          >
            Chat on WhatsApp
          </MagneticLiquidButton>
        </div>
      </div>
    </nav>
  );
}
