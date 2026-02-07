'use client'
import React, { useState, useEffect } from 'react';
import './Hero.css';

 const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  const whatsappNumber = '919876543210'; // Replace with your WhatsApp number (country code + number)
  const whatsappMessage = encodeURIComponent("Hi SSDEV! I'm interested in discussing a project with you.");

  // Animated words that cycle through
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['BRANDS', 'PRODUCTS', 'EXPERIENCES', 'SOLUTIONS'];

  useEffect(() => {
    setIsVisible(true);
    
    // Cycle through words
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(wordInterval);
  }, []);

  // Track mouse position for parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  };

  return (
    <section 
      className={`hero ${isVisible ? 'visible' : ''}`}
      onMouseMove={handleMouseMove}
      role="region" 
      aria-label="Hero"
    >
      {/* Animated Background Elements */}
      <div className="hero-bg">
        <div 
          className="bg-gradient gradient-1" 
          style={{ 
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` 
          }}
        />
        <div 
          className="bg-gradient gradient-2" 
          style={{ 
            transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)` 
          }}
        />
        <div className="bg-grid" />
      </div>

      <div className="hero-container">
        {/* Badge */}
        <div className="hero-badge" >
          <span className="badge-dot"></span>
          <span>Trusted by 100+ Clients</span>
        </div>

        {/* Main Heading with Animated Word */}
        {/* <h1 className="hero-title">
          WE BUILD DIGITAL
          <span className="hero-title-animated" >
            {words.map((word, index) => (
              <span 
                key={word}
                className={`animated-word ${index === wordIndex ? 'active' : ''}`}
              >
                {word}
              </span>
            ))}
          </span>
          THAT CONVERT
        </h1> */}

<h1 className="hero-title">
  Web Development and SEO Agency That Builds Digital
  <span className="hero-title-animated">
    {words.map((word, index) => (
      <span
        key={word}
        className={`animated-word ${index === wordIndex ? 'active' : ''}`}
      >
        {word}
      </span>
    ))}
  </span>
</h1>


        {/* Subtitle */}
        <p className="hero-subtitle">
          Elegant websites and product experiences for startups and growth-minded teams. 
          <strong> Performance-first, conversion-focused, and minimal by design.</strong>
        </p>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">8+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support Available</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="hero-ctas" role="group" aria-label="Primary actions">
          <a 
            className="btn btn-primary" 
            href="#work"
          >
            <span>See Our Work</span>
            <span className="btn-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>
          
          <a 
            className="btn btn-whatsapp" 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </span>
            <span>Chat on WhatsApp</span>
            <span className="btn-pulse" />
          </a>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="scroll-indicator">
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-line" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;