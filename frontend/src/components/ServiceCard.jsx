// import React from 'react';
// import {
//   Snowflake,
//   Refrigerator,
//   WashingMachine,
//   Droplets,
//   Zap,
//   Wrench,
//   Wind,
//   Flame,
//   Star
// } from 'lucide-react';
// import './ServiceCard.css';

// const iconMap = {
//   Snowflake: <Snowflake size={24} />,
//   Refrigerator: <Refrigerator size={24} />,
//   WashingMachine: <WashingMachine size={24} />,
//   Droplets: <Droplets size={24} />,
//   Zap: <Zap size={24} />,
//   Wrench: <Wrench size={24} />,
//   Wind: <Wind size={24} />,
//   Flame: <Flame size={24} />
// };

// function ServiceCard({ service, onSelectService, onViewDetails }) {
//   const {
//     name,
//     iconName,
//     badge,
//     startingPrice,
//     rating,
//     reviewCount,
//     shortDesc
//   } = service;

//   return (
//     <div className="service-card" onClick={() => onViewDetails && onViewDetails(service)}>
//       <div className="card-top-row">
//         <div className="service-icon-box">
//           {iconMap[iconName] || <Wrench size={24} />}
//         </div>
//         {badge && <span className="service-badge">{badge}</span>}
//       </div>

//       <div className="card-body">
//         <h3 className="service-title">{name}</h3>
        
//         <div className="service-rating-row">
//           <Star size={14} fill="#f59e0b" color="#f59e0b" />
//           <span className="rating-val">{rating}</span>
//           <span className="rating-count">({reviewCount} reviews)</span>
//         </div>

//         <p className="service-desc">{shortDesc}</p>
//       </div>

//       <div className="card-footer">
//         <div className="price-tag">
//           <span className="price-label">Starts at</span>
//           <span className="price-amount">₹{startingPrice}</span>
//         </div>
        
//         <button
//           className="btn-book"
//           onClick={(e) => {
//             e.stopPropagation();
//             onSelectService(service);
//           }}
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ServiceCard;

import React from 'react';
import { 
  Snowflake, 
  Refrigerator, 
  WashingMachine, 
  Droplets, 
  Zap, 
  Wrench, 
  Wind, 
  Flame,
  Star
} from 'lucide-react';
import './ServiceCard.css';

// 8 Custom 3D images import
import acImg from '../assets/icons/ac.png';
import electricianImg from '../assets/icons/electrician.png';
import fanImg from '../assets/icons/fan.png';
import microwaveImg from '../assets/icons/microwave.png';
import refrigeratorImg from '../assets/icons/refrigerator.png';
import washingmachineImg from '../assets/icons/washingmachine.png';
import roImg from '../assets/icons/ro.png';
import plumberImg from '../assets/icons/plumber.png';

// Full 8 services custom icon map
const customIconMap = {
  'ac-repair': <img src={acImg} alt="AC" className="custom-service-icon" />,
  'refrigerator-repair': <img src={refrigeratorImg} alt="Refrigerator" className="custom-service-icon" />,
  'washing-machine-repair': <img src={washingmachineImg} alt="Washing Machine" className="custom-service-icon" />,
  'electrician': <img src={electricianImg} alt="Electrician" className="custom-service-icon" />,
  'fan-repair': <img src={fanImg} alt="Fan" className="custom-service-icon" />,
  'microwave-repair': <img src={microwaveImg} alt="Microwave" className="custom-service-icon" />,
  'ro-water-purifier': <img src={roImg} alt="RO Water Purifier" className="custom-service-icon" />,
  'plumber': <img src={plumberImg} alt="Plumber" className="custom-service-icon" />
};

const iconMap = {
  Snowflake: <Snowflake size={24} />,
  Refrigerator: <Refrigerator size={24} />,
  WashingMachine: <WashingMachine size={24} />,
  Droplets: <Droplets size={24} />,
  Zap: <Zap size={24} />,
  Wrench: <Wrench size={24} />,
  Wind: <Wind size={24} />,
  Flame: <Flame size={24} />
};

function ServiceCard({ service, onSelectService, onViewDetails }) {
  const { 
    id,
    name, 
    iconName, 
    badge, 
    startingPrice, 
    rating, 
    reviewCount, 
    shortDesc 
  } = service;

  const renderedIcon = customIconMap[id] || iconMap[iconName] || <Wrench size={24} />;

  return (
    <div className="service-card" onClick={() => onViewDetails && onViewDetails(service)}>
      <div className="card-top-row">
        <div className="service-icon-box">
          {renderedIcon}
        </div>
        {badge && <span className="service-badge">{badge}</span>}
      </div>

      <div className="card-body">
        <h3 className="service-title">{name}</h3>
        
        <div className="service-rating-row">
          <Star size={14} fill="#f59e0b" color="#f59e0b" />
          <span className="rating-val">{rating}</span>
          <span className="rating-count">({reviewCount} reviews)</span>
        </div>

        <p className="service-desc">{shortDesc}</p>
      </div>

      <div className="card-footer">
        <div className="price-tag">
          <span className="price-label">Starts at</span>
          <span className="price-amount">₹{startingPrice}</span>
        </div>
        
        <button 
          className="btn-book"
          onClick={(e) => {
            e.stopPropagation();
            onSelectService(service);
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;