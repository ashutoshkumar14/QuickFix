// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ServiceCard from '../components/ServiceCard';
// import ServiceDetailModal from '../components/ServiceDetailModal';
// import EmptyState from '../components/common/EmptyState';
// import { servicesData } from '../data/services';
// import './Services.css';

// function Services() {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [activeModalService, setActiveModalService] = useState(null);

//   const categories = ['All', 'Appliances', 'Electrical', 'Plumbing', 'Water & Kitchen'];

//   const filteredServices = servicesData.filter((service) => {
//     const matchesCategory =
//       selectedCategory === 'All' ||
//       service.category.toLowerCase().includes(selectedCategory.toLowerCase());

//     const matchesSearch =
//       service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       service.commonIssues.some((issue) =>
//         issue.toLowerCase().includes(searchQuery.toLowerCase())
//       );

//     return matchesCategory && matchesSearch;
//   });

//   const handleBookNow = (service) => {
//     navigate('/book-service', { state: { preSelectedService: service } });
//   };

//   return (
//     <div className="services-page">
//       <section className="services-header-banner">
//         <div className="services-header-content">
//           <span className="services-subtitle-badge">Home Services</span>
//           <h1>Everything Your Home Needs</h1>
//           <p>
//            Every home service all in one place
//           </p>

//           <div className="search-bar-wrapper">
//             <span className="search-icon">🔍</span>
//             <input
//               type="text"
//               placeholder="Search by appliance, e.g. AC cooling, tap leakage, fan slow..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="service-search-input"
//             />
//             {searchQuery && (
//               <button
//                 className="clear-search-btn"
//                 onClick={() => setSearchQuery('')}
//               >
//                 ✕
//               </button>
//             )}
//           </div>
//         </div>
//       </section>

//       <div className="services-main-container">
//         <div className="category-pill-bar">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`catalog-pill ${selectedCategory === cat ? 'active' : ''}`}
//               onClick={() => setSelectedCategory(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         <div className="results-meta-row">
//           <p>
//             Showing <strong>{filteredServices.length}</strong> available services
//             {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
//             {searchQuery && ` matching "${searchQuery}"`}
//           </p>
//         </div>

//         {filteredServices.length > 0 ? (
//           <div className="services-catalog-grid">
//             {filteredServices.map((service) => (
//               <ServiceCard
//                 key={service.id}
//                 service={service}
//                 onSelectService={handleBookNow}
//                 onViewDetails={(s) => setActiveModalService(s)}
//               />
//             ))}
//           </div>
//         ) : (
//           <EmptyState
//             icon="🔎"
//             title="No Services Found"
//             description={`We couldn't find any services matching "${searchQuery}". Try searching for something else or reset the filters.`}
//             actionLabel="Reset Filters"
//             onAction={() => {
//               setSearchQuery('');
//               setSelectedCategory('All');
//             }}
//           />
//         )}
//       </div>

//       <ServiceDetailModal
//         service={activeModalService}
//         onClose={() => setActiveModalService(null)}
//         onBookNow={handleBookNow}
//       />
//     </div>
//   );
// }

// export default Services;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ServiceDetailModal from '../components/ServiceDetailModal';
import EmptyState from '../components/common/EmptyState';
import { servicesData } from '../data/services';
import './Services.css';

function Services() {
  const navigate = useNavigate();
  const [servicesList, setServicesList] = useState(servicesData);
  const [searchQuery, setSearchQuery] = useState('');
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

  const categories = ['All', 'Appliances', 'Electrical', 'Plumbing', 'Water & Kitchen'];

  const filteredServices = servicesList.filter((service) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      service.category.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (service.commonIssues && service.commonIssues.some((issue) =>
        issue.toLowerCase().includes(searchQuery.toLowerCase())
      ));

    return matchesCategory && matchesSearch;
  });

  const handleBookNow = (service) => {
    navigate('/book-service', { state: { preSelectedService: service } });
  };

  return (
    <div className="services-page">
      <section className="services-header-banner">
        <div className="services-header-content">
          <span className="services-subtitle-badge">Home Services</span>
          <h1>Everything Your Home Needs</h1>
          <p>
           Every home service all in one place
          </p>

          <div className="search-bar-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by appliance, e.g. AC cooling, tap leakage, fan slow..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="service-search-input"
            />
            {searchQuery && (
              <button 
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="services-main-container">
        <div className="category-pill-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`catalog-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="results-meta-row">
          <p>
            Showing <strong>{filteredServices.length}</strong> available services
            {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {filteredServices.length > 0 ? (
          <div className="services-catalog-grid">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={handleBookNow}
                onViewDetails={(s) => setActiveModalService(s)}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            icon="🔎"
            title="No Services Found"
            description={`We couldn't find any services matching "${searchQuery}". Try searching for something else or reset the filters.`}
            actionLabel="Reset Filters"
            onAction={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
          />
        )}
      </div>

      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onBookNow={handleBookNow}
      />
    </div>
  );
}

export default Services;