export default function ProcessTimeline() {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow-badge inline-flex items-center gap-2 mb-3">
            <span className="pulse-dot"></span>
            <span>SYSTEMATIC EXECUTION</span>
          </div>
          <h2>HOW I WORK</h2>
          <p className="subline">A repeatable 6-step content cycle, executed personally every month</p>
        </div>

        <div className="timeline">
          {/* Step 1 */}
          <div className="timeline-item reveal reveal-left">
            <div className="timeline-node">1</div>
            <div className="timeline-content">
              <h3>01 &mdash; RESEARCH</h3>
              <p><strong>Understand Your Account:</strong> I study your profile, core audience, competitor landscape, current trends, and business objectives to establish your unfair advantage.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="timeline-item reveal reveal-right">
            <div className="timeline-node">2</div>
            <div className="timeline-content">
              <h3>02 &mdash; PLAN</h3>
              <p><strong>Build the Content Plan:</strong> I craft your monthly calendar &mdash; hook concepts, proven formats, script drafts, and shooting schedules shared with you beforehand.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="timeline-item reveal reveal-left">
            <div className="timeline-node">3</div>
            <div className="timeline-content">
              <h3>03 &mdash; PRODUCE</h3>
              <p><strong>Shoot &amp; Edit:</strong> I personally direct and shoot (where included in your plan) and edit every piece with cinematic pacing, sound design, and custom typography.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="timeline-item reveal reveal-right">
            <div className="timeline-node">4</div>
            <div className="timeline-content">
              <h3>04 &mdash; REVIEW</h3>
              <p><strong>Your Approval First:</strong> Nothing ever goes live without you seeing and approving it. I present the drafts, incorporate your feedback, and polish to perfection.</p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="timeline-item reveal reveal-left">
            <div className="timeline-node">5</div>
            <div className="timeline-content">
              <h3>05 &mdash; PUBLISH</h3>
              <p><strong>Go Live:</strong> Scheduled and published at peak audience engagement windows with researched captions, sound selections, and hashtag strategy.</p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="timeline-item reveal reveal-right">
            <div className="timeline-node">6</div>
            <div className="timeline-content">
              <h3>06 &mdash; REPORT</h3>
              <p><strong>Real Data, Honest Review:</strong> Transparent monthly breakdown of watch time, reach, saves, and conversions &mdash; turning insights directly into next cycle&apos;s growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
