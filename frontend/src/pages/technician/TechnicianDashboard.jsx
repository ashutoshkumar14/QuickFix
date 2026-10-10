// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import StatusBadge from '../../components/StatusBadge';
// import './TechnicianDashboard.css';

// const initialTechnicianJobs = [
//   {
//     id: "QF-994102",
//     serviceName: "AC Repair & Service",
//     customerName: "Vikas Malhotra",
//     phone: "+91 98711 22334",
//     address: "B-42, Pocket 1, Mahipalpur Extension, New Delhi",
//     problem: "Split AC se burning smell aa rahi hai aur cooling bilkul cut ho gayi hai.",
//     timeSlot: "Morning (10:00 AM - 01:00 PM)",
//     estimatedPrice: 499,
//     status: "Available"
//   },
//   {
//     id: "QF-892104",
//     serviceName: "AC Repair & Service",
//     customerName: "Rahul Sharma",
//     phone: "+91 98765 43210",
//     address: "Flat 402, Royal Residency, Mahipalpur, New Delhi",
//     problem: "AC bilkul cold air nahi de raha hai, outdoor compressor se continuous humming sound aa rahi hai.",
//     timeSlot: "Morning (09:00 AM - 12:00 PM)",
//     estimatedPrice: 499,
//     finalAmount: null,
//     status: "In Progress"
//   },
//   {
//     id: "QF-741982",
//     serviceName: "RO Water Purifier Service",
//     customerName: "Sneha Kapoor",
//     phone: "+91 99110 55443",
//     address: "H.No 120, Street 4, Vasant Kunj, New Delhi",
//     problem: "RO ka pure water output speed drop ho gayi hai aur water ka taste metallic lag raha hai.",
//     timeSlot: "Evening (03:00 PM - 06:00 PM)",
//     estimatedPrice: 349,
//     finalAmount: null,
//     status: "Accepted"
//   },
//   {
//     id: "QF-338291",
//     serviceName: "Ceiling Fan Repair",
//     customerName: "Manoj Tiwari",
//     phone: "+91 98221 44556",
//     address: "Flat 101, Green View, Mahipalpur, New Delhi",
//     problem: "Fan regulator rotate karne par bhi speed boost nahi ho rahi thi.",
//     timeSlot: "Yesterday",
//     estimatedPrice: 149,
//     finalAmount: 200,
//     status: "Completed"
//   }
// ];

// function TechnicianDashboard() {
//   const navigate = useNavigate();
//   const [jobs, setJobs] = useState(initialTechnicianJobs);
//   const [activeTab, setActiveTab] = useState('all');
//   const [completingJob, setCompletingJob] = useState(null);
//   const [finalBillInput, setFinalBillInput] = useState('');

//   const handleAcceptJob = (jobId) => {
//     setJobs((prevJobs) =>
//       prevJobs.map((j) =>
//         j.id === jobId ? { ...j, status: 'Accepted' } : j
//       )
//     );
//   };

//   const handleStartWork = (jobId) => {
//     setJobs((prevJobs) =>
//       prevJobs.map((j) =>
//         j.id === jobId ? { ...j, status: 'In Progress' } : j
//       )
//     );
//   };

//   const initiateJobCompletion = (job) => {
//     setCompletingJob(job);
//     setFinalBillInput(job.estimatedPrice);
//   };

//   const handleFinalizeCompletion = (e) => {
//     e.preventDefault();
//     const finalAmountNumber = Number(finalBillInput) || completingJob.estimatedPrice;

//     setJobs((prevJobs) =>
//       prevJobs.map((j) =>
//         j.id === completingJob.id
//           ? { ...j, status: 'Completed', finalAmount: finalAmountNumber }
//           : j
//       )
//     );

//     setCompletingJob(null);
//   };

//   const availableCount = jobs.filter((j) => j.status === 'Available').length;
//   const activeCount = jobs.filter((j) => j.status === 'Accepted' || j.status === 'In Progress').length;
//   const completedCount = jobs.filter((j) => j.status === 'Completed').length;
//   const totalEarnings = jobs
//     .filter((j) => j.status === 'Completed')
//     .reduce((sum, j) => sum + (j.finalAmount || j.estimatedPrice), 0);

//   const displayedJobs = jobs.filter((j) => {
//     if (activeTab === 'available') return j.status === 'Available';
//     if (activeTab === 'active') return j.status === 'Accepted' || j.status === 'In Progress';
//     if (activeTab === 'completed') return j.status === 'Completed';
//     return true;
//   });

//   return (
//     <div className="tech-dashboard-layout">
//       <aside className="tech-sidebar">
//         <div className="tech-profile-summary">
//           <div className="tech-avatar-circle">RK</div>
//           <div className="tech-summary-info">
//             <h3>Rajesh Kumar</h3>
//             <span className="tech-badge-verified">Verified Partner ★ 4.9</span>
//             <p className="tech-trade">AC & Appliance Specialist</p>
//           </div>
//         </div>

//         <nav className="tech-nav">
//           <button
//             className={`tech-nav-item ${activeTab === 'all' ? 'active' : ''}`}
//             onClick={() => setActiveTab('all')}
//           >
//             <span>📋</span>
//             <span>All My Leads ({jobs.length})</span>
//           </button>

//           <button
//             className={`tech-nav-item ${activeTab === 'available' ? 'active' : ''}`}
//             onClick={() => setActiveTab('available')}
//           >
//             <span>⚡</span>
//             <span>Available Requests ({availableCount})</span>
//           </button>

//           <button
//             className={`tech-nav-item ${activeTab === 'active' ? 'active' : ''}`}
//             onClick={() => setActiveTab('active')}
//           >
//             <span>🧰</span>
//             <span>Active / On-Duty ({activeCount})</span>
//           </button>

//           <button
//             className={`tech-nav-item ${activeTab === 'completed' ? 'active' : ''}`}
//             onClick={() => setActiveTab('completed')}
//           >
//             <span>✓</span>
//             <span>Completed History ({completedCount})</span>
//           </button>
//         </nav>

//         <div className="tech-sidebar-bottom">
//           <div className="duty-status-card">
//             <span className="duty-status-indicator"></span>
//             <div>
//               <strong>Online & Available</strong>
//               <p>Receiving Delhi NCR leads</p>
//             </div>
//           </div>
//           <button className="btn-tech-logout" onClick={() => navigate('/login')}>
//             <span>🚪</span>
//             <span>Sign Out</span>
//           </button>
//         </div>
//       </aside>

//       <main className="tech-main-workspace">
//         <header className="tech-header">
//           <div>
//             <h1>Technician Duty Portal</h1>
//             <p>Accept nearby requests, update live service status, and generate digital invoices.</p>
//           </div>
//           <div className="location-chip">
//             <span>📍 Sector: Mahipalpur & Vasant Kunj (5km radius)</span>
//           </div>
//         </header>

//         <section className="tech-metrics-grid">
//           <div className="tech-metric-card">
//             <span className="metric-icon-bubble orange">⚡</span>
//             <div>
//               <span className="metric-sub">New Opportunities</span>
//               <h2>{availableCount} Leads</h2>
//             </div>
//           </div>

//           <div className="tech-metric-card">
//             <span className="metric-icon-bubble purple">🧰</span>
//             <div>
//               <span className="metric-sub">Active On-Duty</span>
//               <h2>{activeCount} Jobs</h2>
//             </div>
//           </div>

//           <div className="tech-metric-card">
//             <span className="metric-icon-bubble green">✓</span>
//             <div>
//               <span className="metric-sub">Completed Jobs</span>
//               <h2>{completedCount} Repaired</h2>
//             </div>
//           </div>

//           <div className="tech-metric-card earnings-highlight">
//             <span className="metric-icon-bubble blue">₹</span>
//             <div>
//               <span className="metric-sub">Total Earnings</span>
//               <h2 className="earnings-amount">₹{totalEarnings}</h2>
//             </div>
//           </div>
//         </section>

//         <section className="jobs-feed-section">
//           <div className="jobs-feed-header">
//             <h2>
//               {activeTab === 'available' && 'Available Service Leads Near You'}
//               {activeTab === 'active' && 'Currently Assigned & In-Progress Jobs'}
//               {activeTab === 'completed' && 'Completed Work & Invoices'}
//               {activeTab === 'all' && 'All Leads & Assigned Jobs'}
//             </h2>
//             <span className="showing-tag">Showing {displayedJobs.length} records</span>
//           </div>

//           <div className="jobs-grid">
//             {displayedJobs.map((job) => (
//               <div key={job.id} className={`job-action-card status-${job.status.toLowerCase().replace(' ', '-')}`}>
//                 <div className="job-card-top">
//                   <div>
//                     <span className="job-id-badge">{job.id}</span>
//                     <h3 className="job-title">{job.serviceName}</h3>
//                   </div>
//                   <StatusBadge status={job.status} />
//                 </div>

//                 <div className="job-card-body">
//                   <div className="customer-info-box">
//                     <div className="customer-name-phone">
//                       <strong>👤 {job.customerName}</strong>
//                       <a href={`tel:${job.phone}`} className="phone-quick-dial">
//                         📞 {job.phone}
//                       </a>
//                     </div>
//                     <p className="job-address">📍 {job.address}</p>
//                   </div>

//                   <div className="problem-snippet">
//                     <strong>Problem:</strong>
//                     <p>"{job.problem}"</p>
//                   </div>

//                   <div className="job-timing-slot">
//                     <span>⏰ Slot: {job.timeSlot}</span>
//                     <span>💰 Base Fee: ₹{job.estimatedPrice}</span>
//                   </div>

//                   {job.finalAmount && (
//                     <div className="final-collected-pill">
//                       <span>✓ Paid & Collected: <strong>₹{job.finalAmount}</strong></span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="job-card-footer">
//                   {job.status === 'Available' && (
//                     <button
//                       className="btn-job-action btn-accept"
//                       onClick={() => handleAcceptJob(job.id)}
//                     >
//                       ⚡ Accept Job
//                     </button>
//                   )}

//                   {job.status === 'Accepted' && (
//                     <div className="multi-btn-row">
//                       <span className="action-hint">You accepted this job</span>
//                       <button
//                         className="btn-job-action btn-start"
//                         onClick={() => handleStartWork(job.id)}
//                       >
//                         ▶ Arrived & Start Work
//                       </button>
//                     </div>
//                   )}

//                   {job.status === 'In Progress' && (
//                     <div className="multi-btn-row">
//                       <span className="action-hint live-status">⚡ Work in progress</span>
//                       <button
//                         className="btn-job-action btn-complete"
//                         onClick={() => initiateJobCompletion(job)}
//                       >
//                         ✓ Mark Completed & Collect Cash
//                       </button>
//                     </div>
//                   )}

//                   {job.status === 'Completed' && (
//                     <div className="job-done-indicator">
//                       <span>Job Completed & Verified</span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       {completingJob && (
//         <div className="modal-backdrop" onClick={() => setCompletingJob(null)}>
//           <div className="modal-container completion-modal" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h2>Complete Service & Invoice</h2>
//               <button className="modal-close-btn" onClick={() => setCompletingJob(null)}>✕</button>
//             </div>

//             <form onSubmit={handleFinalizeCompletion} className="completion-form">
//               <div className="modal-body">
//                 <p className="invoice-desc">
//                   Enter the final amount collected from <strong>{completingJob.customerName}</strong> including spare parts and labour charges.
//                 </p>

//                 <div className="invoice-summary-box">
//                   <div className="inv-row">
//                     <span>Service:</span>
//                     <strong>{completingJob.serviceName}</strong>
//                   </div>
//                   <div className="inv-row">
//                     <span>Base Inspection Fee:</span>
//                     <span>₹{completingJob.estimatedPrice}</span>
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="finalBillInput">Final Amount Collected (₹) <span className="req">*</span></label>
//                   <input
//                     type="number"
//                     id="finalBillInput"
//                     min={completingJob.estimatedPrice}
//                     value={finalBillInput}
//                     onChange={(e) => setFinalBillInput(e.target.value)}
//                     required
//                   />
//                   <span className="field-hint">e.g. ₹{completingJob.estimatedPrice} (Service) + ₹150 (Spare capacitor) = ₹{Number(completingJob.estimatedPrice) + 150}</span>
//                 </div>
//               </div>

//               <div className="modal-footer">
//                 <button type="button" className="btn-cancel" onClick={() => setCompletingJob(null)}>
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn-confirm-book">
//                   Submit & Close Ticket
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TechnicianDashboard;




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import StatusBadge from '../../components/StatusBadge';
// import './TechnicianDashboard.css';

// const initialTechnicianJobs = [
//   {
//     id: "QF-994102",
//     serviceName: "AC Repair & Service",
//     customerName: "Vikas Malhotra",
//     phone: "+91 98711 22334",
//     address: "B-42, Pocket 1, Mahipalpur Extension, New Delhi",
//     problem: "Split AC se burning smell aa rahi hai aur cooling bilkul cut ho gayi hai.",
//     timeSlot: "Morning (10:00 AM - 01:00 PM)",
//     estimatedPrice: 499,
//     status: "Available"
//   },
//   {
//     id: "QF-892104",
//     serviceName: "AC Repair & Service",
//     customerName: "Rahul Sharma",
//     phone: "+91 98765 43210",
//     address: "Flat 402, Royal Residency, Mahipalpur, New Delhi",
//     problem: "AC bilkul cold air nahi de raha hai, outdoor compressor se continuous humming sound aa rahi hai.",
//     timeSlot: "Morning (09:00 AM - 12:00 PM)",
//     estimatedPrice: 499,
//     finalAmount: null,
//     status: "In Progress"
//   },
//   {
//     id: "QF-741982",
//     serviceName: "RO Water Purifier Service",
//     customerName: "Sneha Kapoor",
//     phone: "+91 99110 55443",
//     address: "H.No 120, Street 4, Vasant Kunj, New Delhi",
//     problem: "RO ka pure water output speed drop ho gayi hai aur water ka taste metallic lag raha hai.",
//     timeSlot: "Evening (03:00 PM - 06:00 PM)",
//     estimatedPrice: 349,
//     finalAmount: null,
//     status: "Accepted"
//   },
//   {
//     id: "QF-338291",
//     serviceName: "Ceiling Fan Repair",
//     customerName: "Manoj Tiwari",
//     phone: "+91 98221 44556",
//     address: "Flat 101, Green View, Mahipalpur, New Delhi",
//     problem: "Fan regulator rotate karne par bhi speed boost nahi ho rahi thi.",
//     timeSlot: "Yesterday",
//     estimatedPrice: 149,
//     finalAmount: 200,
//     status: "Completed"
//   }
// ];

// function TechnicianDashboard() {
//   const navigate = useNavigate();
//   const [jobs, setJobs] = useState(initialTechnicianJobs);
//   const [activeTab, setActiveTab] = useState('all');
//   const [completingJob, setCompletingJob] = useState(null);
//   const [finalBillInput, setFinalBillInput] = useState('');

//   const [techProfile, setTechProfile] = useState(() => {
//     try {
//       const rawUser = localStorage.getItem('quickfix_user') || localStorage.getItem('user') || localStorage.getItem('currentUser');
//       if (rawUser) {
//         const parsed = JSON.parse(rawUser);
//         const userData = parsed.user || parsed;
//         const realName = userData.fullName || userData.full_name || userData.name;

//         if (realName && typeof realName === 'string') {
//           const names = realName.trim().split(' ').filter(Boolean);
//           const inits = names.length > 1
//             ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
//             : names[0].slice(0, 2).toUpperCase();

//           return { name: realName, initials: inits };
//         }
//       }
//     } catch (e) {
//       console.warn('Tech profile read error:', e);
//     }
//     return { name: 'Rajesh Kumar', initials: 'RK' };
//   });

//   useEffect(() => {
//     try {
//       const rawUser = localStorage.getItem('quickfix_user') || localStorage.getItem('user') || localStorage.getItem('currentUser');
//       if (rawUser) {
//         const parsed = JSON.parse(rawUser);
//         const userData = parsed.user || parsed;
//         const realName = userData.fullName || userData.full_name || userData.name;

//         if (realName && typeof realName === 'string') {
//           const names = realName.trim().split(' ').filter(Boolean);
//           const inits = names.length > 1
//             ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
//             : names[0].slice(0, 2).toUpperCase();

//           setTechProfile({ name: realName, initials: inits });
//         }
//       }
//     } catch (e) {
//       console.warn('Tech profile update error:', e);
//     }
//   }, []);

//   useEffect(() => {
//     const token = localStorage.getItem('quickfix_token');

//     fetch('http://localhost:5000/api/bookings/pending', {
//       headers: {
//         ...(token ? { 'Authorization': `Bearer ${token}` } : {})
//       }
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch pending jobs');
//         return res.json();
//       })
//       .then((data) => {
//         if (Array.isArray(data) && data.length > 0) {
//           const liveJobs = data.map((b) => ({
//             id: `QF-${b.id}`,
//             rawId: b.id,
//             serviceName: b.service_name,
//             customerName: b.customer_name,
//             phone: b.customer_phone,
//             address: b.address,
//             problem: b.issue_description || 'General inspection required',
//             timeSlot: b.time_slot,
//             estimatedPrice: b.service_price,
//             finalAmount: null,
//             status: 'Available'
//           }));

//           setJobs((prevJobs) => {
//             const liveIds = new Set(liveJobs.map((j) => j.id));
//             const remainingMocks = prevJobs.filter((j) => !liveIds.has(j.id));
//             return [...liveJobs, ...remainingMocks];
//           });
//         }
//       })
//       .catch((err) => {
//         console.warn('Backend pending jobs unreachable, using local fallback:', err);
//       });
//   }, []);

//   const updateServerStatus = (rawId, status) => {
//     if (!rawId) return;
//     const token = localStorage.getItem('quickfix_token');

//     fetch(`http://localhost:5000/api/bookings/status/${rawId}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//         ...(token ? { 'Authorization': `Bearer ${token}` } : {})
//       },
//       body: JSON.stringify({ status, technicianName: techProfile.name })
//     }).catch((err) => console.warn('Status sync error:', err));
//   };

//   const handleAcceptJob = (jobId) => {
//     const target = jobs.find((j) => j.id === jobId);
//     if (target?.rawId) updateServerStatus(target.rawId, 'assigned');

//     setJobs((prevJobs) =>
//       prevJobs.map((j) =>
//         j.id === jobId ? { ...j, status: 'Accepted' } : j
//       )
//     );
//   };

//   const handleStartWork = (jobId) => {
//     const target = jobs.find((j) => j.id === jobId);
//     if (target?.rawId) updateServerStatus(target.rawId, 'in progress');

//     setJobs((prevJobs) =>
//       prevJobs.map((j) =>
//         j.id === jobId ? { ...j, status: 'In Progress' } : j
//       )
//     );
//   };

//   const initiateJobCompletion = (job) => {
//     setCompletingJob(job);
//     setFinalBillInput(job.estimatedPrice);
//   };

//   const handleFinalizeCompletion = (e) => {
//     e.preventDefault();
//     const finalAmountNumber = Number(finalBillInput) || completingJob.estimatedPrice;

//     if (completingJob?.rawId) updateServerStatus(completingJob.rawId, 'completed');

//     setJobs((prevJobs) =>
//       prevJobs.map((j) =>
//         j.id === completingJob.id
//           ? { ...j, status: 'Completed', finalAmount: finalAmountNumber }
//           : j
//       )
//     );

//     setCompletingJob(null);
//   };

//   const availableCount = jobs.filter((j) => j.status === 'Available').length;
//   const activeCount = jobs.filter((j) => j.status === 'Accepted' || j.status === 'In Progress').length;
//   const completedCount = jobs.filter((j) => j.status === 'Completed').length;
//   const totalEarnings = jobs
//     .filter((j) => j.status === 'Completed')
//     .reduce((sum, j) => sum + (j.finalAmount || j.estimatedPrice), 0);

//   const displayedJobs = jobs.filter((j) => {
//     if (activeTab === 'available') return j.status === 'Available';
//     if (activeTab === 'active') return j.status === 'Accepted' || j.status === 'In Progress';
//     if (activeTab === 'completed') return j.status === 'Completed';
//     return true;
//   });

//   return (
//     <div className="tech-dashboard-layout">
//       <aside className="tech-sidebar">
//         <div className="tech-profile-summary">
//           <div className="tech-avatar-circle">{techProfile.initials}</div>
//           <div className="tech-summary-info">
//             <h3>{techProfile.name}</h3>
//             <span className="tech-badge-verified">Verified Partner ★ 4.9</span>
//             <p className="tech-trade">AC & Appliance Specialist</p>
//           </div>
//         </div>

//         <nav className="tech-nav">
//           <button
//             className={`tech-nav-item ${activeTab === 'all' ? 'active' : ''}`}
//             onClick={() => setActiveTab('all')}
//           >
//             <span>📋</span>
//             <span>All My Leads ({jobs.length})</span>
//           </button>

//           <button
//             className={`tech-nav-item ${activeTab === 'available' ? 'active' : ''}`}
//             onClick={() => setActiveTab('available')}
//           >
//             <span>⚡</span>
//             <span>Available Requests ({availableCount})</span>
//           </button>

//           <button
//             className={`tech-nav-item ${activeTab === 'active' ? 'active' : ''}`}
//             onClick={() => setActiveTab('active')}
//           >
//             <span>🧰</span>
//             <span>Active / On-Duty ({activeCount})</span>
//           </button>

//           <button
//             className={`tech-nav-item ${activeTab === 'completed' ? 'active' : ''}`}
//             onClick={() => setActiveTab('completed')}
//           >
//             <span>✓</span>
//             <span>Completed History ({completedCount})</span>
//           </button>
//         </nav>

//         <div className="tech-sidebar-bottom">
//           <div className="duty-status-card">
//             <span className="duty-status-indicator"></span>
//             <div>
//               <strong>Online & Available</strong>
//               <p>Receiving Delhi NCR leads</p>
//             </div>
//           </div>
//           <button className="btn-tech-logout" onClick={() => {
//             localStorage.removeItem('quickfix_token');
//             localStorage.removeItem('quickfix_user');
//             localStorage.removeItem('user');
//             navigate('/login');
//           }}>
//             <span>🚪</span>
//             <span>Sign Out</span>
//           </button>
//         </div>
//       </aside>

//       <main className="tech-main-workspace">
//         <header className="tech-header">
//           <div>
//             <h1>Technician Duty Portal</h1>
//             <p>Accept nearby requests, update live service status, and generate digital invoices.</p>
//           </div>
//           <div className="location-chip">
//             <span>📍 Sector: Mahipalpur & Vasant Kunj (5km radius)</span>
//           </div>
//         </header>

//         <section className="tech-metrics-grid">
//           <div className="tech-metric-card">
//             <span className="metric-icon-bubble orange">⚡</span>
//             <div>
//               <span className="metric-sub">New Opportunities</span>
//               <h2>{availableCount} Leads</h2>
//             </div>
//           </div>

//           <div className="tech-metric-card">
//             <span className="metric-icon-bubble purple">🧰</span>
//             <div>
//               <span className="metric-sub">Active On-Duty</span>
//               <h2>{activeCount} Jobs</h2>
//             </div>
//           </div>

//           <div className="tech-metric-card">
//             <span className="metric-icon-bubble green">✓</span>
//             <div>
//               <span className="metric-sub">Completed Jobs</span>
//               <h2>{completedCount} Repaired</h2>
//             </div>
//           </div>

//           <div className="tech-metric-card earnings-highlight">
//             <span className="metric-icon-bubble blue">₹</span>
//             <div>
//               <span className="metric-sub">Total Earnings</span>
//               <h2 className="earnings-amount">₹{totalEarnings}</h2>
//             </div>
//           </div>
//         </section>

//         <section className="jobs-feed-section">
//           <div className="jobs-feed-header">
//             <h2>
//               {activeTab === 'available' && 'Available Service Leads Near You'}
//               {activeTab === 'active' && 'Currently Assigned & In-Progress Jobs'}
//               {activeTab === 'completed' && 'Completed Work & Invoices'}
//               {activeTab === 'all' && 'All Leads & Assigned Jobs'}
//             </h2>
//             <span className="showing-tag">Showing {displayedJobs.length} records</span>
//           </div>

//           <div className="jobs-grid">
//             {displayedJobs.map((job) => (
//               <div key={job.id} className={`job-action-card status-${job.status.toLowerCase().replace(' ', '-')}`}>
//                 <div className="job-card-top">
//                   <div>
//                     <span className="job-id-badge">{job.id}</span>
//                     <h3 className="job-title">{job.serviceName}</h3>
//                   </div>
//                   <StatusBadge status={job.status} />
//                 </div>

//                 <div className="job-card-body">
//                   <div className="customer-info-box">
//                     <div className="customer-name-phone">
//                       <strong>👤 {job.customerName}</strong>
//                       <a href={`tel:${job.phone}`} className="phone-quick-dial">
//                         📞 {job.phone}
//                       </a>
//                     </div>
//                     <p className="job-address">📍 {job.address}</p>
//                   </div>

//                   <div className="problem-snippet">
//                     <strong>Problem:</strong>
//                     <p>"{job.problem}"</p>
//                   </div>

//                   <div className="job-timing-slot">
//                     <span>⏰ Slot: {job.timeSlot}</span>
//                     <span>💰 Base Fee: ₹{job.estimatedPrice}</span>
//                   </div>

//                   {job.finalAmount && (
//                     <div className="final-collected-pill">
//                       <span>✓ Paid & Collected: <strong>₹{job.finalAmount}</strong></span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="job-card-footer">
//                   {job.status === 'Available' && (
//                     <button
//                       className="btn-job-action btn-accept"
//                       onClick={() => handleAcceptJob(job.id)}
//                     >
//                       ⚡ Accept Job
//                     </button>
//                   )}

//                   {job.status === 'Accepted' && (
//                     <div className="multi-btn-row">
//                       <span className="action-hint">You accepted this job</span>
//                       <button
//                         className="btn-job-action btn-start"
//                         onClick={() => handleStartWork(job.id)}
//                       >
//                         ▶ Arrived & Start Work
//                       </button>
//                     </div>
//                   )}

//                   {job.status === 'In Progress' && (
//                     <div className="multi-btn-row">
//                       <span className="action-hint live-status">⚡ Work in progress</span>
//                       <button
//                         className="btn-job-action btn-complete"
//                         onClick={() => initiateJobCompletion(job)}
//                       >
//                         ✓ Mark Completed & Collect Cash
//                       </button>
//                     </div>
//                   )}

//                   {job.status === 'Completed' && (
//                     <div className="job-done-indicator">
//                       <span>Job Completed & Verified</span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       {completingJob && (
//         <div className="modal-backdrop" onClick={() => setCompletingJob(null)}>
//           <div className="modal-container completion-modal" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h2>Complete Service & Invoice</h2>
//               <button className="modal-close-btn" onClick={() => setCompletingJob(null)}>✕</button>
//             </div>

//             <form onSubmit={handleFinalizeCompletion} className="completion-form">
//               <div className="modal-body">
//                 <p className="invoice-desc">
//                   Enter the final amount collected from <strong>{completingJob.customerName}</strong> including spare parts and labour charges.
//                 </p>

//                 <div className="invoice-summary-box">
//                   <div className="inv-row">
//                     <span>Service:</span>
//                     <strong>{completingJob.serviceName}</strong>
//                   </div>
//                   <div className="inv-row">
//                     <span>Base Inspection Fee:</span>
//                     <span>₹{completingJob.estimatedPrice}</span>
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="finalBillInput">Final Amount Collected (₹) <span className="req">*</span></label>
//                   <input
//                     type="number"
//                     id="finalBillInput"
//                     min={completingJob.estimatedPrice}
//                     value={finalBillInput}
//                     onChange={(e) => setFinalBillInput(e.target.value)}
//                     required
//                   />
//                   <span className="field-hint">e.g. ₹{completingJob.estimatedPrice} (Service) + ₹150 (Spare capacitor) = ₹{Number(completingJob.estimatedPrice) + 150}</span>
//                 </div>
//               </div>

//               <div className="modal-footer">
//                 <button type="button" className="btn-cancel" onClick={() => setCompletingJob(null)}>
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn-confirm-book">
//                   Submit & Close Ticket
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TechnicianDashboard;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBadge from '../../components/StatusBadge';
import './TechnicianDashboard.css';

const initialTechnicianJobs = [
  {
    id: "QF-994102",
    serviceName: "AC Repair & Service",
    customerName: "Vikas Malhotra",
    phone: "+91 98711 22334",
    address: "B-42, Pocket 1, Mahipalpur Extension, New Delhi",
    problem: "Split AC se burning smell aa rahi hai aur cooling bilkul cut ho gayi hai.",
    timeSlot: "Morning (10:00 AM - 01:00 PM)",
    estimatedPrice: 499,
    status: "Available"
  },
  {
    id: "QF-892104",
    serviceName: "AC Repair & Service",
    customerName: "Rahul Sharma",
    phone: "+91 98765 43210",
    address: "Flat 402, Royal Residency, Mahipalpur, New Delhi",
    problem: "AC bilkul cold air nahi de raha hai, outdoor compressor se continuous humming sound aa rahi hai.",
    timeSlot: "Morning (09:00 AM - 12:00 PM)",
    estimatedPrice: 499,
    finalAmount: null,
    status: "In Progress"
  },
  {
    id: "QF-741982",
    serviceName: "RO Water Purifier Service",
    customerName: "Sneha Kapoor",
    phone: "+91 99110 55443",
    address: "H.No 120, Street 4, Vasant Kunj, New Delhi",
    problem: "RO ka pure water output speed drop ho gayi hai aur water ka taste metallic lag raha hai.",
    timeSlot: "Evening (03:00 PM - 06:00 PM)",
    estimatedPrice: 349,
    finalAmount: null,
    status: "Accepted"
  },
  {
    id: "QF-338291",
    serviceName: "Ceiling Fan Repair",
    customerName: "Manoj Tiwari",
    phone: "+91 98221 44556",
    address: "Flat 101, Green View, Mahipalpur, New Delhi",
    problem: "Fan regulator rotate karne par bhi speed boost nahi ho rahi thi.",
    timeSlot: "Yesterday",
    estimatedPrice: 149,
    finalAmount: 200,
    status: "Completed"
  }
];

function TechnicianDashboard() {
  const navigate = useNavigate();

  const [techProfile, setTechProfile] = useState(() => {
    try {
      const rawUser = localStorage.getItem('quickfix_user') || localStorage.getItem('user');
      if (rawUser) {
        const parsed = JSON.parse(rawUser);
        const userData = parsed.user || parsed;
        const realName = userData.fullName || userData.full_name || userData.name;

        if (realName && typeof realName === 'string') {
          const names = realName.trim().split(' ').filter(Boolean);
          const inits = names.length > 1
            ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
            : names[0].slice(0, 2).toUpperCase();

          return { name: realName, initials: inits, email: userData.email || '' };
        }
      }
    } catch (e) {
      console.warn('Tech profile read error:', e);
    }
    return { name: 'Rajesh Kumar', initials: 'RK', email: 'technician.rajesh@quickfix.in' };
  });

  const [jobs, setJobs] = useState(() => {
    const isRealTech = techProfile.email && techProfile.email !== 'technician.rajesh@quickfix.in';
    return isRealTech ? [] : initialTechnicianJobs;
  });

  const [activeTab, setActiveTab] = useState('all');
  const [completingJob, setCompletingJob] = useState(null);
  const [finalBillInput, setFinalBillInput] = useState('');

  useEffect(() => {
    try {
      const rawUser = localStorage.getItem('quickfix_user') || localStorage.getItem('user');
      if (rawUser) {
        const parsed = JSON.parse(rawUser);
        const userData = parsed.user || parsed;
        const realName = userData.fullName || userData.full_name || userData.name;

        if (realName && typeof realName === 'string') {
          const names = realName.trim().split(' ').filter(Boolean);
          const inits = names.length > 1
            ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
            : names[0].slice(0, 2).toUpperCase();

          setTechProfile({ name: realName, initials: inits, email: userData.email || '' });
        }
      }
    } catch (e) {
      console.warn('Tech profile update error:', e);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('quickfix_token');

    fetch('http://localhost:5000/api/bookings/pending', {
      headers: {
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch pending jobs');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const liveJobs = data.map((b) => ({
            id: `QF-${b.id}`,
            rawId: b.id,
            serviceName: b.service_name,
            customerName: b.customer_name,
            phone: b.customer_phone,
            address: b.address,
            problem: b.issue_description || 'General inspection required',
            timeSlot: b.time_slot,
            estimatedPrice: b.service_price,
            finalAmount: null,
            status: 'Available'
          }));

          setJobs(liveJobs);
        }
      })
      .catch((err) => {
        console.warn('Backend pending jobs unreachable:', err);
      });
  }, []);

  const updateServerStatus = (rawId, status) => {
    if (!rawId) return;
    const token = localStorage.getItem('quickfix_token');

    fetch(`http://localhost:5000/api/bookings/status/${rawId}`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      },
      body: JSON.stringify({ status, technicianName: techProfile.name })
    }).catch((err) => console.warn('Status sync error:', err));
  };

  const handleAcceptJob = (jobId) => {
    const target = jobs.find((j) => j.id === jobId);
    if (target?.rawId) updateServerStatus(target.rawId, 'assigned');

    setJobs((prevJobs) =>
      prevJobs.map((j) =>
        j.id === jobId ? { ...j, status: 'Accepted' } : j
      )
    );
  };

  const handleStartWork = (jobId) => {
    const target = jobs.find((j) => j.id === jobId);
    if (target?.rawId) updateServerStatus(target.rawId, 'in progress');

    setJobs((prevJobs) =>
      prevJobs.map((j) =>
        j.id === jobId ? { ...j, status: 'In Progress' } : j
      )
    );
  };

  const initiateJobCompletion = (job) => {
    setCompletingJob(job);
    setFinalBillInput(job.estimatedPrice);
  };

  const handleFinalizeCompletion = (e) => {
    e.preventDefault();
    const finalAmountNumber = Number(finalBillInput) || completingJob.estimatedPrice;

    if (completingJob?.rawId) updateServerStatus(completingJob.rawId, 'completed');

    setJobs((prevJobs) =>
      prevJobs.map((j) =>
        j.id === completingJob.id
          ? { ...j, status: 'Completed', finalAmount: finalAmountNumber }
          : j
      )
    );

    setCompletingJob(null);
  };

  const availableCount = jobs.filter((j) => j.status === 'Available').length;
  const activeCount = jobs.filter((j) => j.status === 'Accepted' || j.status === 'In Progress').length;
  const completedCount = jobs.filter((j) => j.status === 'Completed').length;
  const totalEarnings = jobs
    .filter((j) => j.status === 'Completed')
    .reduce((sum, j) => sum + (j.finalAmount || j.estimatedPrice), 0);

  const displayedJobs = jobs.filter((j) => {
    if (activeTab === 'available') return j.status === 'Available';
    if (activeTab === 'active') return j.status === 'Accepted' || j.status === 'In Progress';
    if (activeTab === 'completed') return j.status === 'Completed';
    return true;
  });

  return (
    <div className="tech-dashboard-layout">
      <aside className="tech-sidebar">
        <div className="tech-profile-summary">
          <div className="tech-avatar-circle">{techProfile.initials}</div>
          <div className="tech-summary-info">
            <h3>{techProfile.name}</h3>
            <span className="tech-badge-verified">Verified Partner ★ 4.9</span>
            <p className="tech-trade">AC & Appliance Specialist</p>
          </div>
        </div>

        <nav className="tech-nav">
          <button 
            className={`tech-nav-item ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <span>📋</span>
            <span>All My Leads ({jobs.length})</span>
          </button>

          <button 
            className={`tech-nav-item ${activeTab === 'available' ? 'active' : ''}`}
            onClick={() => setActiveTab('available')}
          >
            <span>⚡</span>
            <span>Available Requests ({availableCount})</span>
          </button>

          <button 
            className={`tech-nav-item ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            <span>🧰</span>
            <span>Active / On-Duty ({activeCount})</span>
          </button>

          <button 
            className={`tech-nav-item ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            <span>✓</span>
            <span>Completed History ({completedCount})</span>
          </button>
        </nav>

        <div className="tech-sidebar-bottom">
          <div className="duty-status-card">
            <span className="duty-status-indicator"></span>
            <div>
              <strong>Online & Available</strong>
              <p>Receiving Delhi NCR leads</p>
            </div>
          </div>
          <button className="btn-tech-logout" onClick={() => {
            localStorage.removeItem('quickfix_token');
            localStorage.removeItem('quickfix_user');
            localStorage.removeItem('user');
            navigate('/login');
          }}>
            <span>🚪</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      <main className="tech-main-workspace">
        <header className="tech-header">
          <div>
            <h1>Technician Duty Portal</h1>
            <p>Accept nearby requests, update live service status, and generate digital invoices.</p>
          </div>
          <div className="location-chip">
            <span>📍 Sector: Mahipalpur & Vasant Kunj (5km radius)</span>
          </div>
        </header>

        <section className="tech-metrics-grid">
          <div className="tech-metric-card">
            <span className="metric-icon-bubble orange">⚡</span>
            <div>
              <span className="metric-sub">New Opportunities</span>
              <h2>{availableCount} Leads</h2>
            </div>
          </div>

          <div className="tech-metric-card">
            <span className="metric-icon-bubble purple">🧰</span>
            <div>
              <span className="metric-sub">Active On-Duty</span>
              <h2>{activeCount} Jobs</h2>
            </div>
          </div>

          <div className="tech-metric-card">
            <span className="metric-icon-bubble green">✓</span>
            <div>
              <span className="metric-sub">Completed Jobs</span>
              <h2>{completedCount} Repaired</h2>
            </div>
          </div>

          <div className="tech-metric-card earnings-highlight">
            <span className="metric-icon-bubble blue">₹</span>
            <div>
              <span className="metric-sub">Total Earnings</span>
              <h2 className="earnings-amount">₹{totalEarnings}</h2>
            </div>
          </div>
        </section>

        <section className="jobs-feed-section">
          <div className="jobs-feed-header">
            <h2>
              {activeTab === 'available' && 'Available Service Leads Near You'}
              {activeTab === 'active' && 'Currently Assigned & In-Progress Jobs'}
              {activeTab === 'completed' && 'Completed Work & Invoices'}
              {activeTab === 'all' && 'All Leads & Assigned Jobs'}
            </h2>
            <span className="showing-tag">Showing {displayedJobs.length} records</span>
          </div>

          <div className="jobs-grid">
            {displayedJobs.map((job) => (
              <div key={job.id} className={`job-action-card status-${job.status.toLowerCase().replace(' ', '-')}`}>
                <div className="job-card-top">
                  <div>
                    <span className="job-id-badge">{job.id}</span>
                    <h3 className="job-title">{job.serviceName}</h3>
                  </div>
                  <StatusBadge status={job.status} />
                </div>

                <div className="job-card-body">
                  <div className="customer-info-box">
                    <div className="customer-name-phone">
                      <strong>👤 {job.customerName}</strong>
                      <a href={`tel:${job.phone}`} className="phone-quick-dial">
                        📞 {job.phone}
                      </a>
                    </div>
                    <p className="job-address">📍 {job.address}</p>
                  </div>

                  <div className="problem-snippet">
                    <strong>Problem:</strong>
                    <p>"{job.problem}"</p>
                  </div>

                  <div className="job-timing-slot">
                    <span>⏰ Slot: {job.timeSlot}</span>
                    <span>💰 Base Fee: ₹{job.estimatedPrice}</span>
                  </div>

                  {job.finalAmount && (
                    <div className="final-collected-pill">
                      <span>✓ Paid & Collected: <strong>₹{job.finalAmount}</strong></span>
                    </div>
                  )}
                </div>

                <div className="job-card-footer">
                  {job.status === 'Available' && (
                    <button
                      className="btn-job-action btn-accept"
                      onClick={() => handleAcceptJob(job.id)}
                    >
                      ⚡ Accept Job
                    </button>
                  )}

                  {job.status === 'Accepted' && (
                    <div className="multi-btn-row">
                      <span className="action-hint">You accepted this job</span>
                      <button
                        className="btn-job-action btn-start"
                        onClick={() => handleStartWork(job.id)}
                      >
                        ▶ Arrived & Start Work
                      </button>
                    </div>
                  )}

                  {job.status === 'In Progress' && (
                    <div className="multi-btn-row">
                      <span className="action-hint live-status">⚡ Work in progress</span>
                      <button
                        className="btn-job-action btn-complete"
                        onClick={() => initiateJobCompletion(job)}
                      >
                        ✓ Mark Completed & Collect Cash
                      </button>
                    </div>
                  )}

                  {job.status === 'Completed' && (
                    <div className="job-done-indicator">
                      <span>Job Completed & Verified</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {completingJob && (
        <div className="modal-backdrop" onClick={() => setCompletingJob(null)}>
          <div className="modal-container completion-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Complete Service & Invoice</h2>
              <button className="modal-close-btn" onClick={() => setCompletingJob(null)}>✕</button>
            </div>

            <form onSubmit={handleFinalizeCompletion} className="completion-form">
              <div className="modal-body">
                <p className="invoice-desc">
                  Enter the final amount collected from <strong>{completingJob.customerName}</strong> including spare parts and labour charges.
                </p>

                <div className="invoice-summary-box">
                  <div className="inv-row">
                    <span>Service:</span>
                    <strong>{completingJob.serviceName}</strong>
                  </div>
                  <div className="inv-row">
                    <span>Base Inspection Fee:</span>
                    <span>₹{completingJob.estimatedPrice}</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="finalBillInput">Final Amount Collected (₹) <span className="req">*</span></label>
                  <input
                    type="number"
                    id="finalBillInput"
                    min={completingJob.estimatedPrice}
                    value={finalBillInput}
                    onChange={(e) => setFinalBillInput(e.target.value)}
                    required
                  />
                  <span className="field-hint">e.g. ₹{completingJob.estimatedPrice} (Service) + ₹150 (Spare capacitor) = ₹{Number(completingJob.estimatedPrice) + 150}</span>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={() => setCompletingJob(null)}>
                  Cancel
                </button>
                <button type="submit" className="btn-confirm-book">
                  Submit & Close Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TechnicianDashboard;