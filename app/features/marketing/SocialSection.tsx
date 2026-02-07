import * as React from 'react';

type Social = { name: string; href: string; icon: React.ReactNode };

const socials: Social[] = [
  // { name: 'Twitter / X', href: 'https://x.com', icon: <span>𝕏</span> },
  // { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: <span>in</span> },
  // { name: 'GitHub', href: 'https://github.com', icon: <span>GH</span> },
  { name: 'Instagram', href: 'https://instagram.com', icon: <span>IG</span> },
];

 const SocialSection: React.FC = () => {
  return (
    <section className="section section-social reveal" aria-labelledby="socialsTitle">
      <div className="site">
        <h3 id="socialsTitle" style={{ fontFamily:'var(--font-playfair), serif', fontSize:22, margin:0 }}>Follow us</h3>
        <p className="muted" style={{ margin:'8px 0 0' }}>Connect with SSDEV across platforms.</p>
        <div className="social-grid">
          {socials.map(s => (
            <a key={s.name} className="social-card" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
              <span style={{ width:28, height:28, display:'grid', placeItems:'center', borderRadius:8, background:'rgba(255,255,255,0.08)' }}>{s.icon}</span>
              <span style={{ fontWeight:700 }}>{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;


