'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#070708]">
      <div className="max-w-7xl mx-auto relative rounded-3xl sm:rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-b from-[#090d16]/95 via-[#060a12]/95 to-[#030509] p-8 sm:p-12 md:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_50px_rgba(20,184,166,0.08)]">
        
        {/* Ambient background glow accents */}
        <div 
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute top-0 right-1/4 w-[350px] h-[150px] bg-teal-500/5 blur-[90px] rounded-full pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Top 4-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 relative z-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <img src="/images/logo-3d-transparent.png" alt="GENNETZ" className="h-8 w-8 object-contain drop-shadow-[0_0_12px_rgba(45,212,191,0.4)]" />
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-head">
                GENNETZ
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              GENNETZ is a modern strategy-led Instagram management agency building real growth through high-impact content, execution, and data.
            </p>
          </div>

          {/* Column 2: About Us */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              About Us
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a href="#manifesto" className="hover:text-cyan-400 transition-colors">
                  Company History
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-cyan-400 transition-colors">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-cyan-400 transition-colors">
                  Employee Handbook
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Helpful Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Helpful Links
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a href="#trust" className="hover:text-cyan-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/916383884581" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors group"
                >
                  <span>Live Chat</span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#2dd4bf]"></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <a href="mailto:hello@gennetz.com" className="hover:text-cyan-400 transition-colors">
                  hello@gennetz.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                <a 
                  href="https://wa.me/916383884581" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-cyan-400 transition-colors"
                >
                  +91 63838 84581
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Bengaluru, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider & Bottom Section with Giant Watermark Typography */}
        <div className="relative mt-12 sm:mt-16 pt-8 border-t border-cyan-500/15">
          
          {/* Giant Outlined Typography in Background */}
          <div 
            className="absolute inset-x-0 -top-8 sm:-top-12 md:-top-16 bottom-0 pointer-events-none select-none flex items-center justify-center overflow-hidden z-0"
            aria-hidden="true"
          >
            <svg 
              viewBox="0 0 1200 240" 
              className="w-full h-auto min-w-[700px] sm:min-w-[900px] md:min-w-[1100px] max-h-[170px] sm:max-h-[220px] md:max-h-[270px] opacity-40 sm:opacity-50"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="gennetzFooterStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="75%"
                textAnchor="middle"
                stroke="url(#gennetzFooterStroke)"
                strokeWidth="2.2"
                fill="none"
                letterSpacing="0.09em"
                className="font-black text-[180px] uppercase font-head"
                style={{ fontFamily: 'var(--font-head), Oswald, sans-serif' }}
              >
                GENNETZ
              </text>
            </svg>
          </div>

          {/* Foreground Bottom Bar */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 pb-20 sm:pb-24 md:pb-28">
            
            {/* Social Links */}
            <div className="flex items-center gap-4 text-neutral-400">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/profile.php?id=61591679835416" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="hover:text-cyan-400 transition-colors p-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/gen_netz" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="hover:text-cyan-400 transition-colors p-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Twitter"
                className="hover:text-cyan-400 transition-colors p-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@GENNETZ" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube"
                className="hover:text-cyan-400 transition-colors p-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Globe */}
              <a 
                href="#" 
                aria-label="Website"
                className="hover:text-cyan-400 transition-colors p-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
            </div>

            {/* Copyright Statement */}
            <p className="text-xs text-neutral-400 tracking-wide">
              &copy; {new Date().getFullYear()} GENNETZ. All rights reserved.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}
