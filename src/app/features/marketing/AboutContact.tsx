"use client";
import * as React from 'react';

export const AboutContact: React.FC = () => {
  return (
    <section id="about" className="section reveal" style={{ paddingTop:36 }}>
      <div className="site" style={{ display:'flex', gap:40, alignItems:'center', flexWrap:'wrap' }}>
        <div style={{ flex:1, minWidth:260 }}>
          <h3 style={{ fontFamily:'var(--font-playfair),serif', fontSize:22, margin:'0 0 8px' }}>About SSDEV</h3>
          <p className="muted" style={{ margin:'0 0 12px' }}>We are a small team building design-driven web experiences for ambitious startups and product teams. We ship clean code, design systems, and measurable results.</p>
        </div>
        <div id="contact" style={{ flex:1, minWidth:260 }}>
          <h3 style={{ fontFamily:'var(--font-playfair),serif', fontSize:20, margin:'0 0 8px' }}>Get in touch</h3>
          <form style={{ display:'grid', gap:10, maxWidth:420 }} onSubmit={(e)=>{ e.preventDefault(); alert('Thanks — demo contact, replace with working form backend'); }}>
            <input aria-label="Your name" placeholder="Your name" required style={{ padding:12, borderRadius:8, border:'1px solid rgba(255,255,255,0.06)', background:'transparent', color:'var(--text-inv)' }} />
            <input aria-label="Email" placeholder="Email" type="email" required style={{ padding:12, borderRadius:8, border:'1px solid rgba(255,255,255,0.06)', background:'transparent', color:'var(--text-inv)' }} />
            <textarea aria-label="Message" placeholder="Brief message" rows={4} required style={{ padding:12, borderRadius:8, border:'1px solid rgba(255,255,255,0.06)', background:'transparent', color:'var(--text-inv)' }}></textarea>
            <button className="btn" type="submit"><span>Send message</span></button>
          </form>
        </div>
      </div>
    </section>
  );
};


