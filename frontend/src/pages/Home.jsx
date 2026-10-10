// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import ServiceCard from '../components/ServiceCard';
// import ServiceDetailModal from '../components/ServiceDetailModal';
// import { servicesData } from '../data/services';
// import './Home.css';

// function Home() {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [activeModalService, setActiveModalService] = useState(null);

//   const categories = ['All', 'Appliances', 'Electrical', 'Plumbing'];

//   const filteredServices = selectedCategory === 'All'
//     ? servicesData
//     : servicesData.filter((s) => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

//   const handleBookClick = (service) => {
//     navigate('/book-service', { state: { preSelectedService: service } });
//   };

//   const handleViewDetails = (service) => {
//     setActiveModalService(service);
//   };

//   const reviews = [
//     {
//       id: 1,
//       name: "Rohit Sharma",
//       location: "Janakpuri, Delhi",
//       service: "AC Deep Cleaning",
//       rating: "★★★★★",
//       comment: "The technician arrived on time and did a really clean job My AC is cooling much better now",
//       badge: "Verified Customer"
//     },
//     {
//       id: 2,
//       name: "Pooja Verma",
//       location: "Noida Sector 62",
//       service: "Washing Machine Repair",
//       rating: "★★★★★",
//       comment: "The pricing was clear from the start The whole booking experience was smooth and hassle-free",
//       badge: "Verified Customer"
//     },
//     {
//       id: 3,
//       name: "Amit Patel",
//       location: "Gurugram Phase 3",
//       service: "Plumbing Service",
//       rating: "★★★★★",
//       comment: "Quick response and a professional job The leakage was fixed without any hassle",
//       badge: "Verified Customer"
//     }
//   ];

//   return (
//     <div className="home-page">
//       {/* Hero Section */}
//       <section className="hero-section" id="home">
//         <div className="hero-content">
//           <div className="hero-badge">⚡ Fast Home Service</div>
//           <h1 className="hero-title">
//              Home Problems <br />
//             <span className="hero-title-accent">QuickFix at Your Doorstep</span>
//           </h1>
//           <p className="hero-subtitle">
//             Trusted professionals for every home service
//           </p>

//           <div className="hero-cta-group">
//             <Link to="/book-service" className="cta-btn primary-cta">
//               Book a Service
//             </Link>
//             <Link to="/services" className="cta-btn secondary-cta">
//               Explore All Services
//             </Link>
//           </div>

//           <div className="hero-highlights">
//             <div className="highlight-item">
//               <span className="highlight-number">10k+</span>
//               <span className="highlight-label">Repairs Done</span>
//             </div>
//             <div className="highlight-item">
//               <span className="highlight-number">4.8★</span>
//               <span className="highlight-label">Service Rating</span>
//             </div>
//             <div className="highlight-item">
//               <span className="highlight-number">45 Min</span>
//               <span className="highlight-label">Avg. Response Time</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services-section" id="services">
//         <div className="section-header">
//           <span className="section-tag">Our Services</span>
//           <h2>Popular Home Services</h2>
//           <p>Explore  Select  Book</p>

//           <div className="category-filters">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
//                 onClick={() => setSelectedCategory(cat)}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="services-grid">
//           {filteredServices.map((service) => (
//             <ServiceCard
//               key={service.id}
//               service={service}
//               onSelectService={handleBookClick}
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>

//         <div className="view-all-services-bar">
//           <Link to="/services" className="btn-view-all-services">
//             View All Services & Pricing →
//           </Link>
//         </div>
//       </section>

//       <ServiceDetailModal
//         service={activeModalService}
//         onClose={() => setActiveModalService(null)}
//         onBookNow={handleBookClick}
//       />

//       {/* How It Works Section */}
//       <section className="how-it-works-section" id="how-it-works">
//         <div className="section-header">
//           <span className="section-tag">Simple Process</span>
//           <h2>How it Works</h2>
//           <p>Book a service in 4 simple steps</p>
//         </div>

//         <div className="steps-grid">
//           <div className="step-card">
//             <div className="step-badge">1</div>
//             <h3>Choose a Service</h3>
//             <p>Find the right service for your home</p>
//           </div>

//           <div className="step-card">
//             <div className="step-badge">2</div>
//             <h3>Describe Problems</h3>
//             <p>Share the issue location & preferred time</p>
//           </div>

//           <div className="step-card">
//             <div className="step-badge">3</div>
//             <h3>Technician Accepts</h3>
//             <p>A verified professional arrives at your doorstep</p>
//           </div>

//           <div className="step-card">
//             <div className="step-badge">4</div>
//             <h3>Problem Gets Fixed</h3>
//             <p>Pay transparently and enjoy hassle free service</p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="why-us-section" id="about">
//         <div className="section-header">
//           <span className="section-tag">Trust & Quality</span>
//           <h2>Why Choose QuickFix</h2>
//           <p>QuickFix makes home repairs simpler more transparent and easier to trust</p>
//         </div>

//         <div className="features-grid">
//           <div className="feature-card">
//             <div className="feature-icon-box">🛡️</div>
//             <h3>Verified Technicians</h3>
//             <p>Identity verified Background checked</p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon-box">🏷️</div>
//             <h3>Transparent Pricing</h3>
//             <p> Honest pricing from start to finish</p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon-box">⏱️</div>
//             <h3>Quick Turnaround</h3>
//             <p>Fast reliable service at your doorstep</p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon-box">🔄</div>
//             <h3>30-Day Service Warranty</h3>
//             <p>Covered for 30 days after every repair</p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials-section">
//         <div className="section-header">
//           <span className="section-tag">Customer Reviews</span>
//           <h2>Trusted by Homeowners</h2>
//           <p>Real experiences from customers across Delhi NCR</p>
//         </div>

//         <div className="reviews-grid">
//           {reviews.map((rev) => (
//             <div key={rev.id} className="review-card">
//               <div className="review-top-meta">
//                 <div className="review-rating">{rev.rating}</div>
//                 <span className="review-verified-badge">✓ {rev.badge}</span>
//               </div>
//               <p className="review-comment">"{rev.comment}"</p>
//               <div className="review-footer-user">
//                 <div className="review-avatar">{rev.name.charAt(0)}</div>
//                 <div className="review-author">
//                   <strong>{rev.name}</strong>
//                   <span>{rev.service} • {rev.location}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//      {/* Bottom CTA Banner with Embedded Trust Grid */}
//       <section className="cta-banner">
//         <div className="cta-banner-content">
//           <div className="cta-badge">⚡Fast Service</div>
//           <h2>Get It Fixed Today</h2>
//           <p>Verified experts Fast doorstep service Zero hassle</p>

//           {/* Embedded High-Trust Glass Grid */}
//           <div className="cta-trust-grid">
//             <div className="cta-trust-card">
//               <span className="cta-trust-icon">🛡️</span>
//               <div className="cta-trust-info">
//                 <strong>100% Verified</strong>
//                 <span>Govt ID Verified</span>
//               </div>
//             </div>

//             <div className="cta-trust-card">
//               <span className="cta-trust-icon">⚡</span>
//               <div className="cta-trust-info">
//                 <strong>Under 60 Mins</strong>
//                 <span>Fast Doorstep Service</span>
//               </div>
//             </div>

//             <div className="cta-trust-card">
//               <span className="cta-trust-icon">🏷️</span>
//               <div className="cta-trust-info">
//                 <strong>Transparent Rates</strong>
//                 <span>No Hidden charges</span>
//               </div>
//             </div>

//             <div className="cta-trust-card">
//               <span className="cta-trust-icon">🔄</span>
//               <div className="cta-trust-info">
//                 <strong>30-Day Warranty</strong>
//                 <span>Service Covered</span>
//               </div>
//             </div>
//           </div>

//           <div className="cta-actions-wrap">
//             <Link to="/book-service" className="cta-btn primary-cta banner-btn">
//               Book Your First Service →
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;


import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ServiceDetailModal from '../components/ServiceDetailModal';
import { servicesData } from '../data/services';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [servicesList, setServicesList] = useState(servicesData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalService, setActiveModalService] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setServicesList(data);
        }
      })
      .catch((err) => {
        console.warn('Backend services API unreachable, using local fallback:', err);
      });
  }, []);

  const categories = ['All', 'Appliances', 'Electrical', 'Plumbing'];

  const filteredServices = selectedCategory === 'All'
    ? servicesList
    : servicesList.filter((s) => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const handleBookClick = (service) => {
    navigate('/book-service', { state: { preSelectedService: service } });
  };

  const handleViewDetails = (service) => {
    setActiveModalService(service);
  };

  const reviews = [
    {
      id: 1,
      name: "Rohit Sharma",
      location: "Janakpuri, Delhi",
      service: "AC Deep Cleaning",
      rating: "★★★★★",
      comment: "The technician arrived on time and did a really clean job My AC is cooling much better now",
      badge: "Verified Customer"
    },
    {
      id: 2,
      name: "Pooja Verma",
      location: "Noida Sector 62",
      service: "Washing Machine Repair",
      rating: "★★★★★",
      comment: "The pricing was clear from the start The whole booking experience was smooth and hassle-free",
      badge: "Verified Customer"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Gurugram Phase 3",
      service: "Plumbing Service",
      rating: "★★★★★",
      comment: "Quick response and a professional job The leakage was fixed without any hassle",
      badge: "Verified Customer"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-badge">⚡ Fast Home Service</div>
          <h1 className="hero-title">
             Home Problems <br />
            <span className="hero-title-accent">QuickFix at Your Doorstep</span>
          </h1>
          <p className="hero-subtitle">
            Trusted professionals for every home service
          </p>

          <div className="hero-cta-group">
            <Link to="/book-service" className="cta-btn primary-cta">
              Book a Service
            </Link>
            <Link to="/services" className="cta-btn secondary-cta">
              Explore All Services
            </Link>
          </div>

          <div className="hero-highlights">
            <div className="highlight-item">
              <span className="highlight-number">10k+</span>
              <span className="highlight-label">Repairs Done</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">4.8★</span>
              <span className="highlight-label">Service Rating</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">45 Min</span>
              <span className="highlight-label">Avg. Response Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="section-header">
          <span className="section-tag">Our Services</span>
          <h2>Popular Home Services</h2>
          <p>Explore  Select  Book</p>

          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="services-grid">
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onSelectService={handleBookClick} 
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        <div className="view-all-services-bar">
          <Link to="/services" className="btn-view-all-services">
            View All Services & Pricing →
          </Link>
        </div>
      </section>

      <ServiceDetailModal 
        service={activeModalService} 
        onClose={() => setActiveModalService(null)} 
        onBookNow={handleBookClick}
      />

      {/* How It Works Section */}
      <section className="how-it-works-section" id="how-it-works">
        <div className="section-header">
          <span className="section-tag">Simple Process</span>
          <h2>How it Works</h2>
          <p>Book a service in 4 simple steps</p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-badge">1</div>
            <h3>Choose a Service</h3>
            <p>Find the right service for your home</p>
          </div>

          <div className="step-card">
            <div className="step-badge">2</div>
            <h3>Describe Problems</h3>
            <p>Share the issue location & preferred time</p>
          </div>

          <div className="step-card">
            <div className="step-badge">3</div>
            <h3>Technician Accepts</h3>
            <p>A verified professional arrives at your doorstep</p>
          </div>

          <div className="step-card">
            <div className="step-badge">4</div>
            <h3>Problem Gets Fixed</h3>
            <p>Pay transparently and enjoy hassle free service</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section" id="about">
        <div className="section-header">
          <span className="section-tag">Trust & Quality</span>
          <h2>Why Choose QuickFix</h2>
          <p>QuickFix makes home repairs simpler more transparent and easier to trust</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-box">🛡️</div>
            <h3>Verified Technicians</h3>
            <p>Identity verified Background checked</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box">🏷️</div>
            <h3>Transparent Pricing</h3>
            <p> Honest pricing from start to finish</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box">⏱️</div>
            <h3>Quick Turnaround</h3>
            <p>Fast reliable service at your doorstep</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box">🔄</div>
            <h3>30-Day Service Warranty</h3>
            <p>Covered for 30 days after every repair</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <span className="section-tag">Customer Reviews</span>
          <h2>Trusted by Homeowners</h2>
          <p>Real experiences from customers across Delhi NCR</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-top-meta">
                <div className="review-rating">{rev.rating}</div>
                <span className="review-verified-badge">✓ {rev.badge}</span>
              </div>
              <p className="review-comment">"{rev.comment}"</p>
              <div className="review-footer-user">
                <div className="review-avatar">{rev.name.charAt(0)}</div>
                <div className="review-author">
                  <strong>{rev.name}</strong>
                  <span>{rev.service} • {rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

     {/* Bottom CTA Banner with Embedded Trust Grid */}
      <section className="cta-banner">
        <div className="cta-banner-content">
          <div className="cta-badge">⚡Fast Service</div>
          <h2>Get It Fixed Today</h2>
          <p>Verified experts Fast doorstep service Zero hassle</p>

          {/* Embedded High-Trust Glass Grid */}
          <div className="cta-trust-grid">
            <div className="cta-trust-card">
              <span className="cta-trust-icon">🛡️</span>
              <div className="cta-trust-info">
                <strong>100% Verified</strong>
                <span>Govt ID Verified</span>
              </div>
            </div>

            <div className="cta-trust-card">
              <span className="cta-trust-icon">⚡</span>
              <div className="cta-trust-info">
                <strong>Under 60 Mins</strong>
                <span>Fast Doorstep Service</span>
              </div>
            </div>

            <div className="cta-trust-card">
              <span className="cta-trust-info">🏷️</span>
              <div className="cta-trust-info">
                <strong>Transparent Rates</strong>
                <span>No Hidden charges</span>
              </div>
            </div>

            <div className="cta-trust-card">
              <span className="cta-trust-icon">🔄</span>
              <div className="cta-trust-info">
                <strong>30-Day Warranty</strong>
                <span>Service Covered</span>
              </div>
            </div>
          </div>

          <div className="cta-actions-wrap">
            <Link to="/book-service" className="cta-btn primary-cta banner-btn">
              Book Your First Service →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;