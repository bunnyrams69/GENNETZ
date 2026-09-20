'use client';

import { Lock, CheckCircle, Shield, CreditCard, BarChart2 } from 'lucide-react';
import FaqAccordion from './FaqAccordion';
import OptimizedTiltCard from './OptimizedTiltCard';

export default function TrustCards() {
  return (
    <section id="trust" className="trust">
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow-badge inline-flex items-center gap-2 mb-3">
            <span className="pulse-dot"></span>
            <span>DIRECT ACCOUNTABILITY</span>
          </div>
          <h2>HOW I HANDLE YOUR ACCOUNT</h2>
          <p className="subline">Complete transparency and personal responsibility in every step</p>
        </div>

        <div className="trust-grid">
          {/* Card 1 */}
          <OptimizedTiltCard className="trust-card reveal" data-delay="0">
            <Lock className="trust-icon" size={32} />
            <h3>Your Account Stays Yours</h3>
            <p>
              I use official, revocable access via Meta Business Suite. I never ask for your password. You keep 100% ownership and can revoke access anytime with one click.
            </p>
          </OptimizedTiltCard>

          {/* Card 2 */}
          <OptimizedTiltCard className="trust-card reveal" data-delay="100">
            <CheckCircle className="trust-icon" size={32} />
            <h3>Nothing Publishes Without Your Approval</h3>
            <p>
              Every single piece follows a clear chain: I create &rarr; You review &rarr; Feedback &rarr; Revisions &rarr; Your approval &rarr; Publish. Nothing ever goes live without your sign-off.
            </p>
          </OptimizedTiltCard>

          {/* Card 3 */}
          <OptimizedTiltCard className="trust-card reveal" data-delay="200">
            <Shield className="trust-icon" size={32} />
            <h3>Sensitive Issues Go Straight to You</h3>
            <p>
              Payments, refunds, private customer info, legal matters, and serious inquiries are escalated immediately to you. I handle content and community &mdash; never private operations.
            </p>
          </OptimizedTiltCard>

          {/* Card 4 */}
          <OptimizedTiltCard className="trust-card reveal" data-delay="300">
            <CreditCard className="trust-icon" size={32} />
            <h3>No Surprise Charges</h3>
            <p>
              Anything outside your plan &mdash; extra deliverables, full reshoots, or additional shooting visits &mdash; is quoted and approved before work begins. You will never see surprise invoices.
            </p>
          </OptimizedTiltCard>

          {/* Card 5 */}
          <OptimizedTiltCard className="trust-card reveal" data-delay="400">
            <BarChart2 className="trust-icon" size={32} />
            <h3>Honest Reporting, Not Vanity Metrics</h3>
            <p>
              I don&apos;t guarantee fake follower numbers or artificial virality. I commit to systematic execution and share real analytics: watch time, shares, saves, and conversion data.
            </p>
          </OptimizedTiltCard>

          {/* Card 6 */}
          <OptimizedTiltCard className="trust-card reveal" data-delay="500">
            <Shield className="trust-icon" size={32} />
            <h3>I&apos;m Reachable. Always.</h3>
            <p>
              You communicate directly with me on WhatsApp and email &mdash; not an account coordinator or an outsourced support queue. When you reach out, you speak with Chaithu.
            </p>
          </OptimizedTiltCard>
        </div>

        <div className="section-header reveal" style={{ marginTop: '8rem' }}>
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <p className="subline">Clear answers to common questions</p>
        </div>
        <FaqAccordion />
      </div>
    </section>
  );
}
