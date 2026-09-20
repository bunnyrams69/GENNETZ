'use client';

import { MessageCircle } from 'lucide-react';
import MagneticLiquidButton from './MagneticLiquidButton';

export default function ContactCta() {
  return (
    <section id="contact" className="contact-cta">
      <div className="container reveal">
        <h2>READY TO GROW YOUR INSTAGRAM?</h2>
        <p className="subline">Let&apos;s talk about your brand.</p>
        <div style={{ margin: '2rem 0' }}>
          <MagneticLiquidButton
            variant="aurora"
            size="lg"
            href="https://wa.me/916383884581"
            target="_blank"
            leftIcon={<MessageCircle size={20} />}
            className="font-head uppercase tracking-wider text-base"
          >
            Chat on WhatsApp
          </MagneticLiquidButton>
        </div>
        <p className="contact-email">
          Or email us at{' '}
          <a href="mailto:hello@gennetz.com">
            hello@gennetz.com
          </a>
        </p>
      </div>
    </section>
  );
}
