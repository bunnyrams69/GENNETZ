export default function ProcessTimeline() {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header reveal">
          <h2>HOW IT WORKS</h2>
          <p className="subline">Our 8-step process, every month</p>
        </div>

        <div className="timeline">
          {/* Step 1 */}
          <div className="timeline-item reveal reveal-left">
            <div className="timeline-node">1</div>
            <div className="timeline-content">
              <h3>Plan</h3>
              <p>GENNETZ researches the account, audience, competition, trends and business requirements.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="timeline-item reveal reveal-right">
            <div className="timeline-node">2</div>
            <div className="timeline-content">
              <h3>Create</h3>
              <p>Content ideas and formats are planned according to the selected plan.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="timeline-item reveal reveal-left">
            <div className="timeline-node">3</div>
            <div className="timeline-content">
              <h3>Produce</h3>
              <p>Content is shot by GENNETZ where included, or supplied by the client where applicable.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="timeline-item reveal reveal-right">
            <div className="timeline-node">4</div>
            <div className="timeline-content">
              <h3>Edit</h3>
              <p>GENNETZ edits the agreed content and prepares captions, covers and other required elements.</p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="timeline-item reveal reveal-left">
            <div className="timeline-node">5</div>
            <div className="timeline-content">
              <h3>Review</h3>
              <p>Client feedback is collected according to the agreed approval process.</p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="timeline-item reveal reveal-right">
            <div className="timeline-node">6</div>
            <div className="timeline-content">
              <h3>Publish</h3>
              <p>Approved content is published according to the planned schedule.</p>
            </div>
          </div>

          {/* Step 7 */}
          <div className="timeline-item reveal reveal-left">
            <div className="timeline-node">7</div>
            <div className="timeline-content">
              <h3>Analyse</h3>
              <p>GENNETZ reviews performance and identifies what is working and what needs improvement.</p>
            </div>
          </div>

          {/* Step 8 */}
          <div className="timeline-item reveal reveal-right">
            <div className="timeline-node">8</div>
            <div className="timeline-content">
              <h3>Improve</h3>
              <p>Future content and strategy are adjusted using the learnings.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
