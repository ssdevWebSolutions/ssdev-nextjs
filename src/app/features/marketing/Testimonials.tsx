
import React from 'react';
import './Testimonials.css'

export const testimonialData = [
  {
    id: 1,
    text: "SSDEV built our homeopathy clinic's website from scratch and it's been incredible for lead generation. We're now getting 15-20 quality patient inquiries every week through the contact forms and WhatsApp integration. The SEO work they did has us ranking on the first page for 'homeopathy clinic near me'. Best investment we've made!",
    name: "Dr. Chaitanya",
    role: "Founder, Chaitanya Homeo Clinic",
    avatar: "https://api.dicebear.com/9.x/initials/svg?seed=chaitanya"
  },
  {
    id: 2,
    text: "We needed a mobile app to streamline our loan recovery operations and SSDEV delivered exactly what we needed. The app helps our field agents track payments, send automated reminders, and manage customer data efficiently. Recovery time has improved by 35% since implementation. Excellent technical team!",
    name: "Raja Simha",
    role: "Operations Manager, FinTrack Solutions",
    avatar: "https://api.dicebear.com/9.x/initials/svg?seed=raja%20simha"
  },
  {
    id: 3,
    text: "Brilliant work from SSDEV! They developed our cricket academy's mobile app and website with an integrated booking system. Parents can now easily book coaching sessions, track their child's progress, and make payments online. The system handles over 200 bookings per month seamlessly. Couldn't be happier with the results!",
    name: "Uzi Arif - The Rocket Man",
    role: "Head Coach, Rocket Cricket Academy UK",
    avatar: "https://api.dicebear.com/9.x/initials/svg?seed=UZI%20ARIF"
  }
];

export default function TestimonialsSection() {
  return (
    <>
      

      <div className="testimonials-section">
        <div className="testimonials-container">
          {/* Header */}
          <div className="testimonials-header">
            <h2 className="testimonials-title">What Our Clients Say</h2>
            <p className="testimonials-subtitle">
              Discover how our data-driven strategies have helped brands achieve
              remarkable growth. From increased engagement to higher conversions.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="testimonials-grid">
            {testimonialData.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <p className="testimonial-text">{testimonial.text}</p>
                
                <div className="testimonial-author">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}