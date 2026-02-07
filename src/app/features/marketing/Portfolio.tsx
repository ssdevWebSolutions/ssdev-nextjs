import * as React from 'react';

 const Portfolio: React.FC = () => {
  return (
    <section id="work" className="section reveal" aria-labelledby="workTitle" style={{ paddingTop:18 }}>
      <div className="site">
        <h2 id="workTitle" style={{ fontFamily:'var(--font-playfair), serif', fontSize:28, margin:'0 0 6px' }}>Selected work</h2>
        <p className="muted" style={{ margin:'0 0 18px' }}>Case studies with measurable impact — design, development, and growth.</p>

        <div className="portfolio-grid">
          <article className="project" style={{ backgroundImage:'linear-gradient(160deg, rgba(255,255,255,0.02), rgba(0,0,0,0.06))' }}>
            <div className="meta">
              <strong>Project A</strong><div style={{ fontSize:12, color:'#e6e6e6' }}>SaaS redesign • +47% conversion</div>
            </div>
          </article>
          <article className="project" style={{ background:'#0b0b0b' }}>
            <div className="meta">
              <strong>Project B</strong><div style={{ fontSize:12, color:'#e6e6e6' }}>E-commerce • +32% revenue</div>
            </div>
          </article>
          <article className="project" style={{ background:'#0d0d0d' }}>
            <div className="meta">
              <strong>Project C</strong><div style={{ fontSize:12, color:'#e6e6e6' }}>Product launch • 3x signups</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


