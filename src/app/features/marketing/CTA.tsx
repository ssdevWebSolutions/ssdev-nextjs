import * as React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="section reveal">
      <div className="site cta-banner">
        <h3>Ready to elevate your digital product?</h3>
        <p>Let’s build something great — performance-first, minimal by design.</p>
        <div style={{ marginTop:12 }}>
          <a className="btn-inverse btn-cta" href="#contact"><span>Start a Project</span><span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
};


