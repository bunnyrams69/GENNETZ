'use client';

import React from 'react';
import { Check, MessageCircle } from 'lucide-react';
import MagneticLiquidButton from './MagneticLiquidButton';
import OptimizedTiltCard from './OptimizedTiltCard';

export default function Plans() {
  return (
    <section id="plans" className="services">
      <div className="container">
        <div className="section-header reveal text-center">
          <div className="eyebrow-badge inline-flex items-center gap-2 mb-3">
            <span className="pulse-dot"></span>
            <span>TRANSPARENT TIERS</span>
          </div>
          <h2>CHOOSE YOUR LEVEL</h2>
          <p className="subline">
            Four direct ways to work with me &mdash; from complete production to on-demand editing
          </p>
        </div>

        <div className="plans-grid">
          {/* ELITE */}
          <OptimizedTiltCard className="plan-card reveal" data-delay="0">
            <span className="plan-badge">FULL PRODUCTION</span>
            <h3 className="plan-name">ELITE</h3>
            <p className="plan-subtitle">Complete Instagram Management</p>
            <p className="plan-desc">
              For brands and founders who want me to take primary responsibility for their Instagram content and growth.
            </p>
            <div className="plan-content">
              10 Reels/month &bull; 4&ndash;6 Posts/month &bull; 10&ndash;12 Stories/month
            </div>
            <ul className="plan-features">
              <li><Check size={18} /> Full production directed &amp; shot by me</li>
              <li><Check size={18} /> Planned shooting visits included</li>
              <li><Check size={18} /> Account analysis &amp; competitor research</li>
              <li><Check size={18} /> Every reel personally edited by Chaithu</li>
              <li><Check size={18} /> Content planning &amp; scheduled publishing</li>
              <li><Check size={18} /> Comments &amp; DM management</li>
              <li><Check size={18} /> Weekly check-ins + monthly reports</li>
              <li><Check size={18} /> Meta Verified onboarding support</li>
            </ul>
            <MagneticLiquidButton
              variant="glass"
              size="md"
              href="https://wa.me/916383884581?text=Hi%20Chaithu,%20I'm%20interested%20in%20the%20Elite%20Plan"
              target="_blank"
              leftIcon={<MessageCircle size={16} />}
              className="w-full font-head uppercase tracking-wider text-sm"
            >
              Choose Elite &rarr;
            </MagneticLiquidButton>
          </OptimizedTiltCard>

          {/* GROWTH (highlighted) */}
          <OptimizedTiltCard
            className="plan-card highlighted reveal"
            data-delay="100"
          >
            <div className="plan-rec-label">&#9733; MOST POPULAR</div>
            <span className="plan-badge">CONTENT + MANAGEMENT</span>
            <h3 className="plan-name">GROWTH</h3>
            <p className="plan-subtitle">Collaborative Production</p>
            <p className="plan-desc">
              For clients who provide regular HD footage while I guide the strategy, edit every piece, and add in-person shoots.
            </p>
            <div className="plan-content">
              10 Reels/month &bull; 4&ndash;6 Posts/month &bull; 10&ndash;12 Stories/month
            </div>
            <ul className="plan-features">
              <li><Check size={18} /> Client footage + 1&ndash;2 shooting visits/month</li>
              <li><Check size={18} /> In-depth research &amp; content strategy</li>
              <li><Check size={18} /> Professional editing by Chaithu personally</li>
              <li><Check size={18} /> Content publishing &amp; scheduling</li>
              <li><Check size={18} /> Comments &amp; DM community management</li>
              <li><Check size={18} /> Weekly check-in + monthly reports</li>
              <li><Check size={18} /> Meta Verified onboarding support</li>
            </ul>
            <MagneticLiquidButton
              variant="aurora"
              size="md"
              href="https://wa.me/916383884581?text=Hi%20Chaithu,%20I'm%20interested%20in%20the%20Growth%20Plan"
              target="_blank"
              leftIcon={<MessageCircle size={16} />}
              className="w-full font-head uppercase tracking-wider text-sm"
            >
              Choose Growth &rarr;
            </MagneticLiquidButton>
          </OptimizedTiltCard>

          {/* FLEX */}
          <OptimizedTiltCard className="plan-card reveal" data-delay="200">
            <span className="plan-badge">FLEXIBLE</span>
            <h3 className="plan-name">FLEX</h3>
            <p className="plan-subtitle">Lighter Pacing</p>
            <p className="plan-desc">
              For brands that want consistent, polished management and active reels with a lighter monthly cadence.
            </p>
            <div className="plan-content">
              3&ndash;4 Reels/month &bull; 1&ndash;2 Posts/month &bull; 3&ndash;4 Stories/week
            </div>
            <ul className="plan-features">
              <li><Check size={18} /> Client footage + visits (1&ndash;2 every 2 months)</li>
              <li><Check size={18} /> Research &amp; monthly content strategy</li>
              <li><Check size={18} /> Every reel personally edited by Chaithu</li>
              <li><Check size={18} /> Content scheduling &amp; publishing</li>
              <li><Check size={18} /> Monthly performance review</li>
              <li><Check size={18} /> Meta Verified onboarding support</li>
            </ul>
            <MagneticLiquidButton
              variant="glass"
              size="md"
              href="https://wa.me/916383884581?text=Hi%20Chaithu,%20I'm%20interested%20in%20the%20Flex%20Plan"
              target="_blank"
              leftIcon={<MessageCircle size={16} />}
              className="w-full font-head uppercase tracking-wider text-sm"
            >
              Choose Flex &rarr;
            </MagneticLiquidButton>
          </OptimizedTiltCard>

          {/* CREATOR */}
          <OptimizedTiltCard className="plan-card reveal" data-delay="300">
            <span className="plan-badge">NO COMMITMENT</span>
            <h3 className="plan-name">CREATOR</h3>
            <p className="plan-subtitle">Pay-As-You-Go</p>
            <p className="plan-desc">
              For creators and businesses wanting high-impact editing or strategy without a monthly retainer.
            </p>
            <div className="plan-content">
              Individual deliverables as selected
            </div>
            <ul className="plan-features">
              <li><Check size={18} /> Choose what you need (Reels, Posts, Stories)</li>
              <li><Check size={18} /> Per-service transparent pricing</li>
              <li><Check size={18} /> Editing-only packages available</li>
              <li><Check size={18} /> Shooting visits available (extra charge)</li>
              <li><Check size={18} /> 1-on-1 Instagram strategy guidance</li>
            </ul>
            <MagneticLiquidButton
              variant="glass"
              size="md"
              href="https://wa.me/916383884581?text=Hi%20Chaithu,%20I'd%20like%20to%20discuss%20the%20Pay-As-You-Go%20Creator%20option"
              target="_blank"
              leftIcon={<MessageCircle size={16} />}
              className="w-full font-head uppercase tracking-wider text-sm"
            >
              Discuss Creator &rarr;
            </MagneticLiquidButton>
          </OptimizedTiltCard>
        </div>
      </div>
    </section>
  );
}
