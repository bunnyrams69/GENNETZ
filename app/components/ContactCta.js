'use client';

import { MessageCircle, Mail } from 'lucide-react';
import MagneticLiquidButton from './MagneticLiquidButton';

export default function ContactCta() {
  return (
    <section id="contact" className="contact-cta py-24 sm:py-32 bg-[#05080a] border-t border-white/5 relative">
      <div className="container reveal text-center">
        <div className="eyebrow-badge inline-flex items-center gap-2 mb-3">
          <span className="pulse-dot"></span>
          <span>DIRECT COLLABORATION</span>
        </div>
        <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
          YOUR INSTAGRAM. MY RESPONSIBILITY.
        </h2>
        <p className="subline max-w-2xl mx-auto text-neutral-300 text-base sm:text-lg mb-8">
          Tell me what you&apos;re building &mdash; your brand, your business, your creator journey. I&apos;ll map the content, production, and management around it.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-8">
          <MagneticLiquidButton
            variant="aurora"
            size="lg"
            href="https://wa.me/916383884581"
            target="_blank"
            leftIcon={<MessageCircle size={20} />}
            className="font-head uppercase tracking-wider text-base"
          >
            Chat on WhatsApp &rarr;
          </MagneticLiquidButton>
          <MagneticLiquidButton
            variant="glass"
            size="lg"
            href="mailto:hello@gennetz.com"
            leftIcon={<Mail size={18} />}
            className="font-head uppercase tracking-wider text-base"
          >
            Email Me (hello@gennetz.com)
          </MagneticLiquidButton>
        </div>
      </div>
    </section>
  );
}
