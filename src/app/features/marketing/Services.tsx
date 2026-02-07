'use client'
import React, { useState, useEffect, useRef } from 'react';
import './Services.css';


interface Service {
  code: string;
  icon: string;
  title: string;
  desc: string;
  features: string[];
}

 const Services: React.FC = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [activeServiceCard, setActiveServiceCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const whatsappNumber = '916303441146'; // Replace with your WhatsApp number
  const whatsappMessage = encodeURIComponent("Hi SSDEV! I'd like to start a project with you.");

  const services: Service[] = [
    {
      code: 'WD',
      icon: '🎨',
      title: 'Web Design',
      desc: 'Clean, conversion-focused interfaces and design systems.',
      features: ['UI/UX Design', 'Responsive Layouts', 'Brand Identity', 'Prototyping']
    },
    {
      code: 'WA',
      icon: '💻',
      title: 'Web Apps',
      desc: 'Scalable front-ends and robust APIs for products that grow.',
      features: ['E-commerce', 'API Development', 'Database Design', 'Cloud Deploy', 'Maintanence']
    },
    {
      code: 'SEO',
      icon: '📈',
      title: 'SEO & Growth',
      desc: 'Data-driven growth: traffic, leads, and measurable gains.',
      features: ['SEO Optimization', 'Analytics Setup', 'Performance', 'Content Strategy']
    }
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Section visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsSectionVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mobile: Auto-hover cards when they become visible
  useEffect(() => {
    if (!isMobile || !isSectionVisible) return;

    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            setVisibleCards(prev => {
              const newSet = new Set(prev);
              newSet.add(index);
              return newSet;
            });
          } else {
            // Optional: remove from visible when scrolled away
            setVisibleCards(prev => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        },
        { 
          threshold: 0.3,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [isMobile, isSectionVisible]);

  const isCardActive = (index: number): boolean => {
    if (isMobile) {
      return visibleCards.has(index);
    }
    return activeServiceCard === index;
  };

  return (
    <section 
    id="services" 
    ref={sectionRef}
    className={`services-main-section ${isSectionVisible ? 'services-visible' : ''}`}
    aria-labelledby="servicesTitle"
  >
    <div className="services-main-container">
  
      {/* Header */}
      <div className="services-top-header">
        <div className="services-top-header-content">
          <span className="services-top-badge">What We Do</span>
  
          {/* H2 – clear service intent */}
          <h2 id="servicesTitle" className="services-main-title">
            Our Web Development & SEO Services
          </h2>
  
          <p className="services-main-subtitle">
            Scalable, performance-driven digital services designed to help
            businesses grow and convert better.
          </p>
        </div>
  
        <div className="services-top-cta">
          <a 
            className="services-btn-whatsapp" 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Start a project via WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            </svg>
            <span>Start a Project</span>
            <span className="services-btn-pulse" />
          </a>
        </div>
      </div>
  
      {/* Services Grid */}
      <div className="services-cards-grid">
        {services.map((service, index) => (
          <div
            key={service.code}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`services-single-card ${isCardActive(index) ? 'services-card-active' : ''}`}
            onMouseEnter={() => setActiveServiceCard(index)}
            onMouseLeave={() => setActiveServiceCard(null)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="services-card-wrapper">
  
              {/* Icon & Code */}
              <div className="services-icon-box">
                <div className="services-emoji-icon">{service.icon}</div>
                <div className="services-code-badge">{service.code}</div>
              </div>
  
              {/* Content */}
              <div className="services-text-content">
                {/* H3 – service keyword clarity */}
                <h3 className="services-item-title">
                  {service.title} Services
                </h3>
  
                <p className="services-item-desc">
                  {service.desc}
                </p>
  
                <ul className="services-feature-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ animationDelay: `${idx * 0.05}s` }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div className="services-hover-arrow" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
  
              <div className="services-bottom-gradient" />
            </div>
          </div>
        ))}
      </div>
  
      {/* SEO Context Text */}
      <p className="services-seo-text">
        We provide web development, SEO, and UI/UX design services for startups and
        growing businesses across India, focusing on speed, scalability, and
        conversion-driven design.
      </p>
  
    </div>
  </section>
  
  );
};

export default Services;