
// import React, { useEffect } from 'react';
// import {
//   Snowflake,
//   Refrigerator,
//   WashingMachine,
//   Droplets,
//   Zap,
//   Wrench,
//   Wind,
//   Flame,
//   X,
//   Clock,
//   ShieldCheck,
//   CheckCircle2,
//   Check
// } from 'lucide-react';
// import './ServiceDetailModal.css';

// const modalIconMap = {
//   Snowflake: <Snowflake size={26} />,
//   Refrigerator: <Refrigerator size={26} />,
//   WashingMachine: <WashingMachine size={26} />,
//   Droplets: <Droplets size={26} />,
//   Zap: <Zap size={26} />,
//   Wrench: <Wrench size={26} />,
//   Wind: <Wind size={26} />,
//   Flame: <Flame size={26} />
// };

// function ServiceDetailModal({ service, onClose, onBookNow }) {
//   // 100% Bulletproof Scroll Lock
//   useEffect(() => {
//     if (service) {
//       const originalHtmlOverflow = document.documentElement.style.overflow;
//       const originalBodyOverflow = document.body.style.overflow;

//       // HTML aur BODY dono ko freeze karo
//       document.documentElement.style.overflow = 'hidden';
//       document.body.style.overflow = 'hidden';

//       return () => {
//         document.documentElement.style.overflow = originalHtmlOverflow;
//         document.body.style.overflow = originalBodyOverflow;
//       };
//     }
//   }, [service]);

//   if (!service) return null;

//   const currentIcon = modalIconMap[service.iconName] || <Wrench size={26} />;

//   return (
//     <div
//       className="modal-backdrop"
//       onClick={onClose}
//       onWheel={(e) => {
//         // Agar modal container ke bahar mouse ghum raha ho toh scroll peeche na jaye
//         if (e.target.classList.contains('modal-backdrop')) {
//           e.preventDefault();
//         }
//       }}
//     >
//       <div
//         className="modal-container"
//         onClick={(e) => e.stopPropagation()}
//         onWheel={(e) => e.stopPropagation()} // Sirf modal container ke andar scroll rahe
//       >
//         {/* Header */}
//         <div className="modal-header">
//           <div className="modal-title-area">
//             <div className="modal-icon">
//               {currentIcon}
//             </div>
//             <div>
//               <h2>{service.name}</h2>
//               <span className="modal-category">{service.category}</span>
//             </div>
//           </div>
//           <button className="modal-close-btn" onClick={onClose} aria-label="Close">
//             <X size={18} />
//           </button>
//         </div>

//         {/* Body */}
//         <div className="modal-body">
//           <p className="modal-long-desc">{service.longDesc}</p>

//           <div className="modal-perks">
//             <div className="perk-pill">
//               <Clock size={20} className="perk-svg-icon" />
//               <div>
//                 <strong>Service Time</strong>
//                 <p>{service.turnaround || "45 mins"}</p>
//               </div>
//             </div>
//             <div className="perk-pill">
//               <ShieldCheck size={20} className="perk-svg-icon" />
//               <div>
//                 <strong>Warranty</strong>
//                 <p>30 Days</p>
//               </div>
//             </div>
//             <div className="perk-pill">
//               <CheckCircle2 size={20} className="perk-svg-icon" />
//               <div>
//                 <strong>Technicians</strong>
//                 <p>Verified</p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h4 className="section-heading">What We Fix</h4>
//             <div className="issues-list">
//               {service.commonIssues && service.commonIssues.map((issue, idx) => (
//                 <div key={idx} className="issue-item">
//                   <span className="bullet-check">!</span>
//                   <span>{issue}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h4 className="section-heading">Service Includes</h4>
//             <div className="checklist">
//               {service.inspectionChecklist && service.inspectionChecklist.map((item, idx) => (
//                 <div key={idx} className="checklist-item">
//                   <Check size={16} className="bullet-dot" />
//                   <span>{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="modal-footer">
//           <div className="modal-price">
//             <span className="modal-price-label">Starts at</span>
//             <span className="modal-price-val">₹{service.startingPrice}</span>
//           </div>

//           <div className="modal-actions">
//             <button className="btn-cancel" onClick={onClose}>
//               Close
//             </button>
//             <button
//               className="btn-confirm-book"
//               onClick={() => {
//                 onClose();
//                 onBookNow(service);
//               }}
//             >
//               Book
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceDetailModal;




import React, { useEffect } from 'react';
import { 
  Snowflake, 
  Refrigerator, 
  WashingMachine, 
  Droplets, 
  Zap, 
  Wrench, 
  Wind, 
  Flame,
  X,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Check
} from 'lucide-react';
import './ServiceDetailModal.css';

// 8 Custom 3D images import
import acImg from '../assets/icons/ac.png';
import electricianImg from '../assets/icons/electrician.png';
import fanImg from '../assets/icons/fan.png';
import microwaveImg from '../assets/icons/microwave.png';
import refrigeratorImg from '../assets/icons/refrigerator.png';
import washingmachineImg from '../assets/icons/washingmachine.png';
import roImg from '../assets/icons/ro.png';
import plumberImg from '../assets/icons/plumber.png';

const customModalIconMap = {
  'ac-repair': <img src={acImg} alt="AC" className="custom-service-icon" />,
  'refrigerator-repair': <img src={refrigeratorImg} alt="Refrigerator" className="custom-service-icon" />,
  'washing-machine-repair': <img src={washingmachineImg} alt="Washing Machine" className="custom-service-icon" />,
  'electrician': <img src={electricianImg} alt="Electrician" className="custom-service-icon" />,
  'fan-repair': <img src={fanImg} alt="Fan" className="custom-service-icon" />,
  'microwave-repair': <img src={microwaveImg} alt="Microwave" className="custom-service-icon" />,
  'ro-water-purifier': <img src={roImg} alt="RO Water Purifier" className="custom-service-icon" />,
  'plumber': <img src={plumberImg} alt="Plumber" className="custom-service-icon" />
};

const modalIconMap = {
  Snowflake: <Snowflake size={26} />,
  Refrigerator: <Refrigerator size={26} />,
  WashingMachine: <WashingMachine size={26} />,
  Droplets: <Droplets size={26} />,
  Zap: <Zap size={26} />,
  Wrench: <Wrench size={26} />,
  Wind: <Wind size={26} />,
  Flame: <Flame size={26} />
};

function ServiceDetailModal({ service, onClose, onBookNow }) {
  // 100% Bulletproof Scroll Lock
  useEffect(() => {
    if (service) {
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverflow = document.body.style.overflow;

      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      return () => {
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflow = originalBodyOverflow;
      };
    }
  }, [service]);

  if (!service) return null;

  const currentIcon = customModalIconMap[service.id] || modalIconMap[service.iconName] || <Wrench size={26} />;

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose}
      onWheel={(e) => {
        if (e.target.classList.contains('modal-backdrop')) {
          e.preventDefault();
        }
      }}
    >
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-area">
            <div className="modal-icon">
              {currentIcon}
            </div>
            <div>
              <h2>{service.name}</h2>
              <span className="modal-category">{service.category}</span>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <p className="modal-long-desc">{service.longDesc}</p>

          <div className="modal-perks">
            <div className="perk-pill">
              <Clock size={20} className="perk-svg-icon" />
              <div>
                <strong>Service Time</strong>
                <p>{service.turnaround || "45 mins"}</p>
              </div>
            </div>
            <div className="perk-pill">
              <ShieldCheck size={20} className="perk-svg-icon" />
              <div>
                <strong>Warranty</strong>
                <p>30 Days</p>
              </div>
            </div>
            <div className="perk-pill">
              <CheckCircle2 size={20} className="perk-svg-icon" />
              <div>
                <strong>Technicians</strong>
                <p>Verified</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="section-heading">What We Fix</h4>
            <div className="issues-list">
              {service.commonIssues && service.commonIssues.map((issue, idx) => (
                <div key={idx} className="issue-item">
                  <span className="bullet-check">!</span>
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="section-heading">Service Includes</h4>
            <div className="checklist">
              {service.inspectionChecklist && service.inspectionChecklist.map((item, idx) => (
                <div key={idx} className="checklist-item">
                  <Check size={16} className="bullet-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <div className="modal-price">
            <span className="modal-price-label">Starts at</span>
            <span className="modal-price-val">₹{service.startingPrice}</span>
          </div>

          <div className="modal-actions">
            <button className="btn-cancel" onClick={onClose}>
              Close
            </button>
            <button 
              className="btn-confirm-book"
              onClick={() => {
                onClose();
                onBookNow(service);
              }}
            >
              Book 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailModal;