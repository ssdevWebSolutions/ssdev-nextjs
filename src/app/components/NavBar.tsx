'use client';

import * as React from 'react';

import './NavBar.css';
import { AnimatedLogo } from './shared/AnimatedLogo';

 const NavBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  // Handle scroll for navbar background
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll and close mobile menu
  React.useEffect(() => {
    function onHashClick(e: MouseEvent) {
      const target = e.target as HTMLAnchorElement | null;
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setOpen(false);
      }
    }
    document.addEventListener('click', onHashClick);
    return () => document.removeEventListener('click', onHashClick);
  }, []);

  // Track active section
  React.useEffect(() => {
    const sections = ['work', 'services', 'about', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <header 
        className={`nav ${scrolled ? 'scrolled' : ''}`}
        role="banner" 
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          <div className="brand">
            <div className="logo-symbol" aria-hidden="true">
              <AnimatedLogo size={28} />
            </div>
            <div className="wordmark">SSDEV</div>
          </div>

          <nav className="nav-links" role="navigation" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
              >
                {link.label}
                <span className="nav-indicator" />
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            {/* <a className="btn btn-primary" href="#contact">
              <span>Let's Talk</span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a> */}
            
            {/* <button
              className={`mobile-toggle ${open ? 'open' : ''}`}
              aria-controls="mobileMenu"
              aria-expanded={open}
              aria-label="Toggle mobile menu"
              onClick={() => setOpen(v => !v)}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button> */}
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-overlay ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Mobile Menu Panel */}
      <div
        id="mobileMenu"
        className={`mobile-menu ${open ? 'open' : ''}`}
        aria-hidden={!open}
      >
        <nav className="mobile-nav" role="navigation" aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="mobile-link-number">0{index + 1}</span>
              <span className="mobile-link-text">{link.label}</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          ))}
        </nav>

        <div className="mobile-footer">
          <a className="btn btn-mobile" href="#contact" onClick={() => setOpen(false)}>
            <span>Start a Project</span>
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;

