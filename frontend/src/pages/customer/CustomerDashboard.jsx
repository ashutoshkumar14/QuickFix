// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import StatusBadge from '../../components/StatusBadge';
// import { initialMockRequests } from '../../data/mockRequests';
// import './CustomerDashboard.css';

// function CustomerDashboard() {
//   const navigate = useNavigate();
//   const [requests] = useState(initialMockRequests);

//   const totalCount = requests.length;
//   const activeCount = requests.filter((r) => r.status === 'In Progress' || r.status === 'Accepted').length;
//   const pendingCount = requests.filter((r) => r.status === 'Pending').length;
//   const completedCount = requests.filter((r) => r.status === 'Completed').length;

//   const recentRequests = requests.slice(0, 3);

//   const handleLogout = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="dashboard-layout">
//       <aside className="dashboard-sidebar">
//         <div className="sidebar-user-card">
//           <div className="user-avatar">RS</div>
//           <div className="user-info">
//             <h3>Rahul Sharma</h3>
//             <span className="user-badge">Customer</span>
//           </div>
//         </div>

//         <nav className="sidebar-nav">
//           <Link to="/customer/dashboard" className="sidebar-link active">
//             <span className="sidebar-icon">📊</span>
//             <span>Dashboard</span>
//           </Link>
//           <Link to="/book-service" className="sidebar-link">
//             <span className="sidebar-icon">➕</span>
//             <span>Book New Service</span>
//           </Link>
//           <Link to="/customer/requests" className="sidebar-link">
//             <span className="sidebar-icon">📦</span>
//             <span>My Requests ({totalCount})</span>
//           </Link>
//           <button
//             type="button"
//             className="sidebar-link disabled-link"
//             onClick={() => alert('Profile settings feature')}
//           >
//             <span className="sidebar-icon">👤</span>
//             <span>Profile Settings</span>
//           </button>
//         </nav>

//         <div className="sidebar-footer">
//           <button className="btn-logout" onClick={handleLogout}>
//             <span>🚪</span>
//             <span>Sign Out</span>
//           </button>
//         </div>
//       </aside>

//       <main className="dashboard-main-content">
//         <header className="dashboard-top-header">
//           <div>
//             <h1>Namaste, Rahul 👋</h1>
//             <p>Track your home service repairs and ongoing technician visits in real-time.</p>
//           </div>
//           <Link to="/book-service" className="btn-quick-book">
//             + Request Repair
//           </Link>
//         </header>

//         <section className="metrics-grid">
//           <div className="metric-card">
//             <div className="metric-icon-box blue">📦</div>
//             <div className="metric-data">
//               <span className="metric-title">Total Bookings</span>
//               <h2 className="metric-number">{totalCount}</h2>
//             </div>
//           </div>

//           <div className="metric-card">
//             <div className="metric-icon-box purple">⚡</div>
//             <div className="metric-data">
//               <span className="metric-title">Active / In Progress</span>
//               <h2 className="metric-number">{activeCount}</h2>
//             </div>
//           </div>

//           <div className="metric-card">
//             <div className="metric-icon-box orange">⏳</div>
//             <div className="metric-data">
//               <span className="metric-title">Pending Pro</span>
//               <h2 className="metric-number">{pendingCount}</h2>
//             </div>
//           </div>

//           <div className="metric-card">
//             <div className="metric-icon-box green">✓</div>
//             <div className="metric-data">
//               <span className="metric-title">Completed Repairs</span>
//               <h2 className="metric-number">{completedCount}</h2>
//             </div>
//           </div>
//         </section>

//         {requests.find((r) => r.status === 'In Progress') && (
//           <section className="active-job-alert-banner">
//             <div className="alert-content">
//               <div className="live-pulse-dot"></div>
//               <div>
//                 <strong>Technician on Duty: </strong>
//                 <span>
//                   Rajesh Kumar is currently servicing your <strong>AC Repair & Service</strong> at Mahipalpur, New Delhi.
//                 </span>
//               </div>
//             </div>
//             <Link to="/customer/requests" className="btn-track-live">
//               View Status Timeline →
//             </Link>
//           </section>
//         )}

//         <section className="dashboard-section-card">
//           <div className="section-card-header">
//             <div>
//               <h2>Recent Service Requests</h2>
//               <p>Your latest requested bookings and scheduled appointments</p>
//             </div>
//             <Link to="/customer/requests" className="view-all-link">
//               View All ({totalCount}) →
//             </Link>
//           </div>

//           <div className="recent-requests-list">
//             {recentRequests.map((req) => (
//               <div key={req.id} className="request-item-card">
//                 <div className="req-item-left">
//                   <div className="req-header-line">
//                     <span className="req-id-tag">{req.id}</span>
//                     <StatusBadge status={req.status} />
//                   </div>
//                   <h3 className="req-service-name">{req.serviceName}</h3>
//                   <p className="req-problem-desc">"{req.problem}"</p>
//                   <div className="req-meta-details">
//                     <span>📅 Scheduled: {req.preferredDate} ({req.timeSlot})</span>
//                     <span>📍 {req.address}</span>
//                   </div>
//                 </div>

//                 <div className="req-item-right">
//                   <div className="req-price-tag">
//                     <span className="label">Estimated</span>
//                     <span className="val">₹{req.estimatedPrice}</span>
//                   </div>
//                   {req.technician ? (
//                     <div className="assigned-technician-pill">
//                       <span>{req.technician.photoIcon}</span>
//                       <div>
//                         <strong>{req.technician.name}</strong>
//                         <p>{req.technician.phone}</p>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="unassigned-pill">
//                       <span>Searching nearby technician...</span>
//                     </div>
//                   )}
//                   <Link to="/customer/requests" className="btn-view-req-detail">
//                     Details
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default CustomerDashboard;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StatusBadge from '../../components/StatusBadge';
import { initialMockRequests } from '../../data/mockRequests';
import './CustomerDashboard.css';

function CustomerDashboard() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState(initialMockRequests);

  const [userProfile, setUserProfile] = useState(() => {
    try {
      const rawUser = localStorage.getItem('quickfix_user') || localStorage.getItem('user') || localStorage.getItem('currentUser');
      if (rawUser) {
        const parsed = JSON.parse(rawUser);
        const userData = parsed.user || parsed;
        const realName = userData.fullName || userData.full_name || userData.name;

        if (realName && typeof realName === 'string') {
          const names = realName.trim().split(' ').filter(Boolean);
          const inits = names.length > 1 
            ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
            : names[0].slice(0, 2).toUpperCase();

          return {
            name: realName,
            initials: inits,
            email: userData.email || 'customer.demo@quickfix.in'
          };
        }
      }
    } catch (e) {
      console.warn('Customer profile read error:', e);
    }
    return {
      name: 'Rahul Sharma',
      initials: 'RS',
      email: 'customer.demo@quickfix.in'
    };
  });

  useEffect(() => {
    try {
      const rawUser = localStorage.getItem('quickfix_user') || localStorage.getItem('user') || localStorage.getItem('currentUser');
      if (rawUser) {
        const parsed = JSON.parse(rawUser);
        const userData = parsed.user || parsed;
        const realName = userData.fullName || userData.full_name || userData.name;

        if (realName && typeof realName === 'string') {
          const names = realName.trim().split(' ').filter(Boolean);
          const inits = names.length > 1 
            ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
            : names[0].slice(0, 2).toUpperCase();

          setUserProfile({
            name: realName,
            initials: inits,
            email: userData.email || 'customer.demo@quickfix.in'
          });
        }
      }
    } catch (e) {
      console.warn('Customer profile update error:', e);
    }
  }, []);

  useEffect(() => {
    let currentEmail = userProfile.email || 'customer.demo@quickfix.in';

    const fetchLiveBookings = () => {
      const token = localStorage.getItem('quickfix_token');

      fetch(`http://localhost:5000/api/bookings/customer/${currentEmail}`, {
        headers: {
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        }
      })
        .then((res) => {
          if (!res.ok) throw new Error('Network response not ok');
          return res.json();
        })
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            const formatted = data.map((b) => ({
              id: `QF-BK-${b.id}`,
              serviceName: b.service_name,
              problem: b.issue_description || 'General inspection and repair request',
              preferredDate: b.booking_date ? b.booking_date.split('T')[0] : 'Scheduled',
              timeSlot: b.time_slot,
              address: b.address,
              estimatedPrice: b.service_price,
              status: b.status ? (b.status.charAt(0).toUpperCase() + b.status.slice(1)) : 'Pending',
              technician: b.technician_name && b.technician_name !== 'Unassigned'
                ? { name: b.technician_name, phone: '+91 98765 43210', photoIcon: '👨‍🔧' }
                : null
            }));
            setRequests(formatted);
          }
        })
        .catch((err) => {
          console.warn('Live bookings fetch failed, keeping fallback data:', err);
        });
    };

    fetchLiveBookings();
    const interval = setInterval(fetchLiveBookings, 5000);

    return () => clearInterval(interval);
  }, [userProfile.email]);

  const totalCount = requests.length;
  const activeCount = requests.filter((r) => r.status === 'In Progress' || r.status === 'Accepted').length;
  const pendingCount = requests.filter((r) => r.status === 'Pending').length;
  const completedCount = requests.filter((r) => r.status === 'Completed').length;

  const recentRequests = requests.slice(0, 3);
  const activeJob = requests.find((r) => r.status === 'In Progress');

  const handleLogout = () => {
    localStorage.removeItem('quickfix_token');
    localStorage.removeItem('quickfix_user');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const displayName = userProfile.name.split(' ')[0];

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <div className="sidebar-user-card">
          <div className="user-avatar">{userProfile.initials}</div>
          <div className="user-info">
            <h3>{userProfile.name}</h3>
            <span className="user-badge">Customer</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <Link to="/customer/dashboard" className="sidebar-link active">
            <span className="sidebar-icon">📊</span>
            <span>Dashboard</span>
          </Link>
          <Link to="/book-service" className="sidebar-link">
            <span className="sidebar-icon">➕</span>
            <span>Book New Service</span>
          </Link>
          <Link to="/customer/requests" className="sidebar-link">
            <span className="sidebar-icon">📦</span>
            <span>My Requests ({totalCount})</span>
          </Link>
          <button 
            type="button" 
            className="sidebar-link disabled-link"
            onClick={() => alert('Profile settings feature')}
          >
            <span className="sidebar-icon">👤</span>
            <span>Profile Settings</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="btn-logout" onClick={handleLogout}>
            <span>🚪</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      <main className="dashboard-main-content">
        <header className="dashboard-top-header">
          <div>
            <h1>Namaste, {displayName} 👋</h1>
            <p>Track your home service repairs and ongoing technician visits in real-time.</p>
          </div>
          <Link to="/book-service" className="btn-quick-book">
            + Request Repair
          </Link>
        </header>

        <section className="metrics-grid">
          <div className="metric-card">
            <div className="metric-icon-box blue">📦</div>
            <div className="metric-data">
              <span className="metric-title">Total Bookings</span>
              <h2 className="metric-number">{totalCount}</h2>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-box purple">⚡</div>
            <div className="metric-data">
              <span className="metric-title">Active / In Progress</span>
              <h2 className="metric-number">{activeCount}</h2>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-box orange">⏳</div>
            <div className="metric-data">
              <span className="metric-title">Pending Pro</span>
              <h2 className="metric-number">{pendingCount}</h2>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-box green">✓</div>
            <div className="metric-data">
              <span className="metric-title">Completed Repairs</span>
              <h2 className="metric-number">{completedCount}</h2>
            </div>
          </div>
        </section>

        {activeJob && (
          <section className="active-job-alert-banner">
            <div className="alert-content">
              <div className="live-pulse-dot"></div>
              <div>
                <strong>Technician on Duty: </strong>
                <span>
                  {activeJob.technician?.name || 'Assigned Professional'} is currently servicing your <strong>{activeJob.serviceName}</strong> at {activeJob.address}.
                </span>
              </div>
            </div>
            <Link to="/customer/requests" className="btn-track-live">
              View Status Timeline →
            </Link>
          </section>
        )}

        <section className="dashboard-section-card">
          <div className="section-card-header">
            <div>
              <h2>Recent Service Requests</h2>
              <p>Your latest requested bookings and scheduled appointments</p>
            </div>
            <Link to="/customer/requests" className="view-all-link">
              View All ({totalCount}) →
            </Link>
          </div>

          <div className="recent-requests-list">
            {recentRequests.map((req) => (
              <div key={req.id} className="request-item-card">
                <div className="req-item-left">
                  <div className="req-header-line">
                    <span className="req-id-tag">{req.id}</span>
                    <StatusBadge status={req.status} />
                  </div>
                  <h3 className="req-service-name">{req.serviceName}</h3>
                  <p className="req-problem-desc">"{req.problem}"</p>
                  <div className="req-meta-details">
                    <span>📅 Scheduled: {req.preferredDate} ({req.timeSlot})</span>
                    <span>📍 {req.address}</span>
                  </div>
                </div>

                <div className="req-item-right">
                  <div className="req-price-tag">
                    <span className="label">Estimated</span>
                    <span className="val">₹{req.estimatedPrice}</span>
                  </div>
                  {req.technician ? (
                    <div className="assigned-technician-pill">
                      <span>{req.technician.photoIcon}</span>
                      <div>
                        <strong>{req.technician.name}</strong>
                        <p>{req.technician.phone}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="unassigned-pill">
                      <span>Searching nearby technician...</span>
                    </div>
                  )}
                  <Link to="/customer/requests" className="btn-view-req-detail">
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default CustomerDashboard;