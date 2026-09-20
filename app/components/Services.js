'use client';

import { Check, MessageCircle } from 'lucide-react';
import MagneticLiquidButton from './MagneticLiquidButton';
import OptimizedTiltCard from './OptimizedTiltCard';

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header reveal">
          <h2>CHOOSE YOUR LEVEL</h2>
          <p className="subline">Four ways to work with GENNETZ</p>
        </div>

        <div className="plans-grid">
          {/* ELITE */}
          <OptimizedTiltCard className="plan-card reveal" data-delay="0">
            <span className="plan-badge">FULL PRODUCTION</span>
            <h3 className="plan-name">GENNETZ ELITE</h3>
            <p className="plan-subtitle">Complete Instagram Management</p>
            <p className="plan-desc">
              Clients who want GENNETZ to take primary responsibility for their Instagram content and management.
            </p>
            <div className="plan-content">
              10 Reels/month &bull; 4&ndash;6 Posts/month &bull; 10&ndash;12 Stories/month
            </div>
            <ul className="plan-features">
              <li><Check size={18} /> Full GENNETZ production</li>
              <li><Check size={18} /> Planned shooting visits</li>
              <li><Check size={18} /> Account analysis &amp; competitor research</li>
              <li><Check size={18} /> Content planning &amp; publishing</li>
              <li><Check size={18} /> Comments &amp; DM management</li>
              <li><Check size={18} /> Weekly + monthly reports</li>
              <li><Check size={18} /> Meta Verified support</li>
            </ul>
            <MagneticLiquidButton
              variant="glass"
              size="md"
              href="https://wa.me/916383884581"
              target="_blank"
              leftIcon={<MessageCircle size={16} />}
              className="w-full font-head uppercase tracking-wider"
            >
              Chat on WhatsApp
            </MagneticLiquidButton>
          </OptimizedTiltCard>

          {/* GROWTH (highlighted) */}
          <OptimizedTiltCard
            className="plan-card highlighted reveal"
            data-delay="100"
          >
            <div className="plan-rec-label">&#9733; RECOMMENDED</div>
            <span className="plan-badge">MOST POPULAR</span>
            <h3 className="plan-name">GENNETZ GROWTH</h3>
            <p className="plan-subtitle">Content + Management</p>
            <p className="plan-desc">
              Clients who provide regular HD footage while GENNETZ manages the account and adds professional shooting.
            </p>
            <div className="plan-content">
              10 Reels/month &bull; 4&ndash;6 Posts/month &bull; 10&ndash;12 Stories/month
            </div>
            <ul className="plan-features">
              <li><Check size={18} /> Client footage + GENNETZ visits (1&ndash;2/month)</li>
              <li><Check size={18} /> Research &amp; strategy</li>
              <li><Check size={18} /> Editing &amp; publishing</li>
              <li><Check size={18} /> Comments &amp; DM management</li>
              <li><Check size={18} /> Weekly + monthly reports</li>
              <li><Check size={18} /> Meta Verified support</li>
            </ul>
            <MagneticLiquidButton
              variant="aurora"
              size="md"
              href="https://wa.me/916383884581"
              target="_blank"
              leftIcon={<MessageCircle size={16} />}
              className="w-full font-head uppercase tracking-wider"
            >
              Chat on WhatsApp
            </MagneticLiquidButton>
          </OptimizedTiltCard>

          {/* FLEX */}
          <OptimizedTiltCard className="plan-card reveal" data-delay="200">
            <span className="plan-badge">FLEXIBLE</span>
            <h3 className="plan-name">GENNETZ FLEX</h3>
            <p className="plan-subtitle">Flexible Instagram Management</p>
            <p className="plan-desc">
              Clients who want consistent management with lighter content production.
            </p>
            <div className="plan-content">
              3&ndash;4 Reels/month &bull; 1&ndash;2 Posts/month &bull; 3&ndash;4 Stories/week
            </div>
            <ul className="plan-features">
              <li><Check size={18} /> Client footage + GENNETZ visits (1&ndash;2 every 2 months)</li>
              <li><Check size={18} /> Research &amp; strategy</li>
              <li><Check size={18} /> Editing &amp; publishing</li>
              <li><Check size={18} /> Monthly report</li>
              <li><Check size={18} /> Meta Verified support</li>
            </ul>
            <MagneticLiquidButton
              variant="glass"
              size="md"
              href="https://wa.me/916383884581"
              target="_blank"
              leftIcon={<MessageCircle size={16} />}
              className="w-full font-head uppercase tracking-wider"
            >
              Chat on WhatsApp
            </MagneticLiquidButton>
          </OptimizedTiltCard>

          {/* CREATOR */}
          <OptimizedTiltCard className="plan-card reveal" data-delay="300">
            <span className="plan-badge">NO COMMITMENT</span>
            <h3 className="plan-name">GENNETZ CREATOR</h3>
            <p className="plan-subtitle">Pay-As-You-Go</p>
            <p className="plan-desc">
              Clients who want professional help without a monthly commitment.
            </p>
            <div className="plan-content">
              Individual services as selected
            </div>
            <ul className="plan-features">
              <li><Check size={18} /> Choose what you need (Reels, Posts, Stories, editing, shooting)</li>
              <li><Check size={18} /> Per-service pricing</li>
              <li><Check size={18} /> Shooting visits available (extra charge)</li>
              <li><Check size={18} /> Strategy guidance available</li>
            </ul>
            <MagneticLiquidButton
              variant="glass"
              size="md"
              href="https://wa.me/916383884581"
              target="_blank"
              leftIcon={<MessageCircle size={16} />}
              className="w-full font-head uppercase tracking-wider"
            >
              Chat on WhatsApp
            </MagneticLiquidButton>
          </OptimizedTiltCard>
        </div>
      </div>
    </section>
  );
}
