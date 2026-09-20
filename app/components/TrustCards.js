'use client';

import { Lock, CheckCircle, Shield, CreditCard, BarChart2 } from 'lucide-react';
import FaqAccordion from './FaqAccordion';
import OptimizedTiltCard from './OptimizedTiltCard';

export default function TrustCards() {
  return (
    <section id="trust" className="trust">
      <div className="container">
        <div className="section-header reveal">
          <h2>HOW WE HANDLE YOUR ACCOUNT</h2>
          <p className="subline">Transparency in every step</p>
        </div>

        <div className="trust-grid">
          {/* Card 1 */}
          <OptimizedTiltCard className="trust-card reveal" data-delay="0">
            <Lock className="trust-icon" size={32} />
            <h3>Your Account Stays Yours</h3>
            <p>
              We use official, revocable access. We never ask for your password. You keep full ownership and can revoke access anytime.
            </p>
          </OptimizedTiltCard>

          {/* Card 2 */}
          <OptimizedTiltCard className="trust-card reveal" data-delay="100">
            <CheckCircle className="trust-icon" size={32} />
            <h3>Nothing Publishes Without Your Approval</h3>
            <p>
              Every piece of content follows: GENNETZ creates &rarr; You review &rarr; Feedback &rarr; Changes &rarr; Your approval &rarr; Publishing. With prior authority, we can publish within agreed guidelines &mdash; but never without your knowledge.
            </p>
          </OptimizedTiltCard>

          {/* Card 3 */}
          <OptimizedTiltCard className="trust-card reveal" data-delay="200">
            <Shield className="trust-icon" size={32} />
            <h3>Sensitive Issues Go Straight to You</h3>
            <p>
              Payments, refunds, personal information, legal matters, and serious complaints are transferred directly to you. We handle comments and general DMs &mdash; never the stuff that should stay in your hands.
            </p>
          </OptimizedTiltCard>

          {/* Card 4 */}
          <OptimizedTiltCard className="trust-card reveal" data-delay="300">
            <CreditCard className="trust-icon" size={32} />
            <h3>No Surprise Charges</h3>
            <p>
              Anything beyond your plan &mdash; extra content, a full reshoot, a new concept, additional visits &mdash; is quoted and confirmed before work starts. You always know the cost before we begin.
            </p>
          </OptimizedTiltCard>

          {/* Card 5 */}
          <OptimizedTiltCard className="trust-card reveal" data-delay="400">
            <BarChart2 className="trust-icon" size={32} />
            <h3>Honest Reporting, Not Vanity Metrics</h3>
            <p>
              We don&apos;t guarantee a specific number of followers, views, or sales. We commit to professional execution and continuous improvement &mdash; and we show you real performance data, not inflated numbers.
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
