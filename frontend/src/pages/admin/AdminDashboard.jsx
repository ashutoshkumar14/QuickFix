// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import StatusBadge from '../../components/StatusBadge';
// import { initialMockRequests } from '../../data/mockRequests';
// import { mockTechniciansList, mockCustomersList } from '../../data/mockAdminData';
// import './AdminDashboard.css';

// function AdminDashboard() {
//   const navigate = useNavigate();

//   const [activeTab, setActiveTab] = useState('requests');
//   const [requestsList, setRequestsList] = useState(initialMockRequests);
//   const [techniciansList, setTechniciansList] = useState(mockTechniciansList);
//   const [customersList] = useState(mockCustomersList);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleCancelRequest = (requestId) => {
//     if (window.confirm(`Are you sure you want to cancel booking ${requestId}?`)) {
//       setRequestsList((prev) =>
//         prev.map((r) => (r.id === requestId ? { ...r, status: 'Cancelled' } : r))
//       );
//     }
//   };

//   const handleToggleTechStatus = (techId) => {
//     setTechniciansList((prev) =>
//       prev.map((t) => {
//         if (t.id === techId) {
//           const newStatus = t.status === 'Active' ? 'Under Review' : 'Active';
//           return { ...t, status: newStatus };
//         }
//         return t;
//       })
//     );
//   };

//   const totalBookingsCount = requestsList.length;
//   const activeTechniciansCount = techniciansList.filter((t) => t.status === 'Active').length;
//   const totalCustomersCount = customersList.length;
//   const platformRevenue = requestsList.reduce(
//     (sum, r) => sum + (r.finalAmount || r.estimatedPrice),
//     0
//   );

//   const filteredRequests = requestsList.filter(
//     (r) =>
//       r.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       r.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       r.customerName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const filteredTechnicians = techniciansList.filter(
//     (t) =>
//       t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       t.trade.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const filteredCustomers = customersList.filter(
//     (c) =>
//       c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       c.phone.includes(searchQuery) ||
//       c.city.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="admin-layout">
//       <aside className="admin-sidebar">
//         <div className="admin-brand-header">
//           <div className="admin-logo">
//             Quick<span className="brand-accent">Fix</span>
//           </div>
//           <span className="admin-badge-role">Operations HQ</span>
//         </div>

//         <nav className="admin-nav">
//           <button
//             className={`admin-nav-item ${activeTab === 'requests' ? 'active' : ''}`}
//             onClick={() => { setActiveTab('requests'); setSearchQuery(''); }}
//           >
//             <span>📦</span>
//             <span>All Requests ({requestsList.length})</span>
//           </button>

//           <button
//             className={`admin-nav-item ${activeTab === 'technicians' ? 'active' : ''}`}
//             onClick={() => { setActiveTab('technicians'); setSearchQuery(''); }}
//           >
//             <span>👨‍🔧</span>
//             <span>Technicians ({techniciansList.length})</span>
//           </button>

//           <button
//             className={`admin-nav-item ${activeTab === 'customers' ? 'active' : ''}`}
//             onClick={() => { setActiveTab('customers'); setSearchQuery(''); }}
//           >
//             <span>👥</span>
//             <span>Customers ({customersList.length})</span>
//           </button>
//         </nav>

//         <div className="admin-sidebar-footer">
//           <div className="admin-user-pill">
//             <div className="admin-avatar">AD</div>
//             <div>
//               <strong>Super Admin</strong>
//               <p>System Administrator</p>
//             </div>
//           </div>
//           <button className="btn-admin-logout" onClick={() => navigate('/login')}>
//             <span>🚪</span>
//             <span>Exit Console</span>
//           </button>
//         </div>
//       </aside>

//       <main className="admin-workspace">
//         <header className="admin-header">
//           <div>
//             <h1>Central Platform Operations</h1>
//             <p>Monitor platform transactions, dispatch status, partner onboarding, and customer accounts.</p>
//           </div>
//           <div className="admin-status-indicator">
//             <span className="pulse-green"></span>
//             <span>Live Sync Engine Active</span>
//           </div>
//         </header>

//         <section className="admin-metrics-grid">
//           <div className="admin-metric-card">
//             <span className="admin-metric-icon blue">📦</span>
//             <div className="metric-info">
//               <span className="metric-title">Total Bookings</span>
//               <h2>{totalBookingsCount}</h2>
//             </div>
//           </div>

//           <div className="admin-metric-card">
//             <span className="admin-metric-icon green">👨‍🔧</span>
//             <div className="metric-info">
//               <span className="metric-title">Verified Technicians</span>
//               <h2>{activeTechniciansCount} Active</h2>
//             </div>
//           </div>

//           <div className="admin-metric-card">
//             <span className="admin-metric-icon purple">👥</span>
//             <div className="metric-info">
//               <span className="metric-title">Registered Customers</span>
//               <h2>{totalCustomersCount}</h2>
//             </div>
//           </div>

//           <div className="admin-metric-card gmv-card">
//             <span className="admin-metric-icon orange">₹</span>
//             <div className="metric-info">
//               <span className="metric-title">Platform GMV</span>
//               <h2 className="gmv-val">₹{platformRevenue}</h2>
//             </div>
//           </div>
//         </section>

//         <section className="admin-table-container">
//           <div className="table-top-bar">
//             <div className="table-title-group">
//               <h2>
//                 {activeTab === 'requests' && 'All Customer Service Requests'}
//                 {activeTab === 'technicians' && 'Technician Partner Directory'}
//                 {activeTab === 'customers' && 'Registered Customers Directory'}
//               </h2>
//             </div>

//             <div className="table-search-box">
//               <input
//                 type="text"
//                 placeholder={`Search ${activeTab}...`}
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               {searchQuery && (
//                 <button className="clear-btn" onClick={() => setSearchQuery('')}>✕</button>
//               )}
//             </div>
//           </div>

//           {activeTab === 'requests' && (
//             <div className="responsive-table-wrapper">
//               <table className="admin-table">
//                 <thead>
//                   <tr>
//                     <th>Req ID</th>
//                     <th>Service</th>
//                     <th>Customer</th>
//                     <th>Address</th>
//                     <th>Assigned Pro</th>
//                     <th>Est. / Final</th>
//                     <th>Status</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredRequests.map((req) => (
//                     <tr key={req.id}>
//                       <td className="cell-mono"><strong>{req.id}</strong></td>
//                       <td>{req.serviceName}</td>
//                       <td>
//                         <strong>{req.customerName}</strong>
//                         <span className="sub-cell">{req.phone}</span>
//                       </td>
//                       <td className="cell-address">{req.address}</td>
//                       <td>
//                         {req.technician ? (
//                           <span className="tech-assigned-cell">
//                             {req.technician.photoIcon} {req.technician.name}
//                           </span>
//                         ) : (
//                           <span className="unassigned-cell">Unassigned</span>
//                         )}
//                       </td>
//                       <td>
//                         <strong>₹{req.finalAmount || req.estimatedPrice}</strong>
//                       </td>
//                       <td>
//                         <StatusBadge status={req.status} />
//                       </td>
//                       <td>
//                         {req.status !== 'Completed' && req.status !== 'Cancelled' ? (
//                           <button
//                             className="btn-table-cancel"
//                             onClick={() => handleCancelRequest(req.id)}
//                             title="Cancel booking"
//                           >
//                             Cancel
//                           </button>
//                         ) : (
//                           <span className="cell-muted">—</span>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           {activeTab === 'technicians' && (
//             <div className="responsive-table-wrapper">
//               <table className="admin-table">
//                 <thead>
//                   <tr>
//                     <th>Partner ID</th>
//                     <th>Technician Name</th>
//                     <th>Trade Specialty</th>
//                     <th>Rating</th>
//                     <th>Jobs Done</th>
//                     <th>Joined</th>
//                     <th>Status</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredTechnicians.map((tech) => (
//                     <tr key={tech.id}>
//                       <td className="cell-mono">{tech.id}</td>
//                       <td>
//                         <strong>{tech.name}</strong>
//                         <span className="sub-cell">{tech.phone}</span>
//                       </td>
//                       <td>{tech.trade}</td>
//                       <td>
//                         <span className="rating-pill">★ {tech.rating}</span>
//                       </td>
//                       <td>{tech.jobsCompleted}</td>
//                       <td>{tech.joinedDate}</td>
//                       <td>
//                         <span className={`tech-status-badge ${tech.status.toLowerCase().replace(' ', '-')}`}>
//                           {tech.status}
//                         </span>
//                       </td>
//                       <td>
//                         <button
//                           className={`btn-toggle-status ${tech.status === 'Active' ? 'btn-warn' : 'btn-success'}`}
//                           onClick={() => handleToggleTechStatus(tech.id)}
//                         >
//                           {tech.status === 'Active' ? 'Suspend / Review' : 'Approve Partner'}
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           {activeTab === 'customers' && (
//             <div className="responsive-table-wrapper">
//               <table className="admin-table">
//                 <thead>
//                   <tr>
//                     <th>Customer ID</th>
//                     <th>Name</th>
//                     <th>Contact</th>
//                     <th>City / Area</th>
//                     <th>Bookings Placed</th>
//                     <th>Member Since</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredCustomers.map((cust) => (
//                     <tr key={cust.id}>
//                       <td className="cell-mono">{cust.id}</td>
//                       <td><strong>{cust.name}</strong></td>
//                       <td>
//                         <div>{cust.email}</div>
//                         <span className="sub-cell">{cust.phone}</span>
//                       </td>
//                       <td>{cust.city}</td>
//                       <td>
//                         <span className="booking-count-badge">{cust.totalBookings} orders</span>
//                       </td>
//                       <td>{cust.joinedDate}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// }

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBadge from '../../components/StatusBadge';
import { initialMockRequests } from '../../data/mockRequests';
import { mockTechniciansList, mockCustomersList } from '../../data/mockAdminData';
import './AdminDashboard.css';

function AdminDashboard() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('requests');
  const [requestsList, setRequestsList] = useState(initialMockRequests);
  const [techniciansList, setTechniciansList] = useState(mockTechniciansList);
  const [customersList, setCustomersList] = useState(mockCustomersList);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('quickfix_token');

    // 1. Fetch live bookings
    fetch('http://localhost:5000/api/admin/bookings', {
      headers: {
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load bookings');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const liveBookings = data.map((b) => ({
            id: `QF-${b.id}`,
            rawId: b.id,
            serviceName: b.service_name,
            customerName: b.customer_name,
            phone: b.customer_phone,
            address: b.address,
            technician: b.technician_name && b.technician_name !== 'Unassigned'
              ? { name: b.technician_name, photoIcon: '👨‍🔧' }
              : null,
            estimatedPrice: b.service_price,
            finalAmount: b.status === 'completed' ? b.service_price : null,
            status: b.status ? (b.status.charAt(0).toUpperCase() + b.status.slice(1)) : 'Pending'
          }));
          setRequestsList(liveBookings);
        }
      })
      .catch((err) => {
        console.warn('Backend admin bookings unreachable, using fallback:', err);
      });

    // 2. Fetch live users (customers & technicians)
    fetch('http://localhost:5000/api/admin/users', {
      headers: {
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load users');
        return res.json();
      })
      .then((users) => {
        if (Array.isArray(users) && users.length > 0) {
          const liveTechs = users
            .filter((u) => u.role === 'technician')
            .map((u) => ({
              id: `TECH-${u.id}`,
              name: u.full_name,
              phone: u.phone || '+91 98765 00000',
              trade: 'All-Round Specialist',
              rating: '4.9',
              jobsCompleted: 0,
              joinedDate: u.created_at ? u.created_at.split('T')[0] : 'Recent',
              status: 'Active'
            }));

          if (liveTechs.length > 0) {
            setTechniciansList(liveTechs);
          }

          const liveCusts = users
            .filter((u) => u.role === 'customer')
            .map((u) => ({
              id: `CUST-${u.id}`,
              name: u.full_name,
              email: u.email,
              phone: u.phone || '+91 98765 11111',
              city: 'Delhi NCR',
              totalBookings: 1,
              joinedDate: u.created_at ? u.created_at.split('T')[0] : 'Recent'
            }));

          if (liveCusts.length > 0) {
            setCustomersList(liveCusts);
          }
        }
      })
      .catch((err) => {
        console.warn('Backend admin users unreachable, using fallback:', err);
      });
  }, []);

  const handleCancelRequest = (requestId) => {
    if (window.confirm(`Are you sure you want to cancel booking ${requestId}?`)) {
      const target = requestsList.find((r) => r.id === requestId);
      if (target?.rawId) {
        const token = localStorage.getItem('quickfix_token');

        fetch(`http://localhost:5000/api/bookings/status/${target.rawId}`, {
          method: 'PATCH',
          headers: { 
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {})
          },
          body: JSON.stringify({ status: 'cancelled' })
        }).catch((err) => console.warn('Cancel request sync error:', err));
      }

      setRequestsList((prev) =>
        prev.map((r) => (r.id === requestId ? { ...r, status: 'Cancelled' } : r))
      );
    }
  };

  const handleToggleTechStatus = (techId) => {
    setTechniciansList((prev) =>
      prev.map((t) => {
        if (t.id === techId) {
          const newStatus = t.status === 'Active' ? 'Under Review' : 'Active';
          return { ...t, status: newStatus };
        }
        return t;
      })
    );
  };

  const totalBookingsCount = requestsList.length;
  const activeTechniciansCount = techniciansList.filter((t) => t.status === 'Active').length;
  const totalCustomersCount = customersList.length;
  const platformRevenue = requestsList.reduce(
    (sum, r) => sum + (r.finalAmount || r.estimatedPrice),
    0
  );

  const filteredRequests = requestsList.filter(
    (r) =>
      r.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTechnicians = techniciansList.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.trade.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCustomers = customersList.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phone.includes(searchQuery) ||
      c.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-brand-header">
          <div className="admin-logo">
            Quick<span className="brand-accent">Fix</span>
          </div>
          <span className="admin-badge-role">Operations HQ</span>
        </div>

        <nav className="admin-nav">
          <button
            className={`admin-nav-item ${activeTab === 'requests' ? 'active' : ''}`}
            onClick={() => { setActiveTab('requests'); setSearchQuery(''); }}
          >
            <span>📦</span>
            <span>All Requests ({requestsList.length})</span>
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'technicians' ? 'active' : ''}`}
            onClick={() => { setActiveTab('technicians'); setSearchQuery(''); }}
          >
            <span>👨‍🔧</span>
            <span>Technicians ({techniciansList.length})</span>
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'customers' ? 'active' : ''}`}
            onClick={() => { setActiveTab('customers'); setSearchQuery(''); }}
          >
            <span>👥</span>
            <span>Customers ({customersList.length})</span>
          </button>
        </nav>

        <div className="admin-sidebar-footer">
          <div className="admin-user-pill">
            <div className="admin-avatar">AD</div>
            <div>
              <strong>Super Admin</strong>
              <p>System Administrator</p>
            </div>
          </div>
          <button className="btn-admin-logout" onClick={() => {
            localStorage.removeItem('quickfix_token');
            localStorage.removeItem('quickfix_user');
            localStorage.removeItem('user');
            navigate('/login');
          }}>
            <span>🚪</span>
            <span>Exit Console</span>
          </button>
        </div>
      </aside>

      <main className="admin-workspace">
        <header className="admin-header">
          <div>
            <h1>Central Platform Operations</h1>
            <p>Monitor platform transactions, dispatch status, partner onboarding, and customer accounts.</p>
          </div>
          <div className="admin-status-indicator">
            <span className="pulse-green"></span>
            <span>Live Sync Engine Active</span>
          </div>
        </header>

        <section className="admin-metrics-grid">
          <div className="admin-metric-card">
            <span className="admin-metric-icon blue">📦</span>
            <div className="metric-info">
              <span className="metric-title">Total Bookings</span>
              <h2>{totalBookingsCount}</h2>
            </div>
          </div>

          <div className="admin-metric-card">
            <span className="admin-metric-icon green">👨‍🔧</span>
            <div className="metric-info">
              <span className="metric-title">Verified Technicians</span>
              <h2>{activeTechniciansCount} Active</h2>
            </div>
          </div>

          <div className="admin-metric-card">
            <span className="admin-metric-icon purple">👥</span>
            <div className="metric-info">
              <span className="metric-title">Registered Customers</span>
              <h2>{totalCustomersCount}</h2>
            </div>
          </div>

          <div className="admin-metric-card gmv-card">
            <span className="admin-metric-icon orange">₹</span>
            <div className="metric-info">
              <span className="metric-title">Platform GMV</span>
              <h2 className="gmv-val">₹{platformRevenue}</h2>
            </div>
          </div>
        </section>

        <section className="admin-table-container">
          <div className="table-top-bar">
            <div className="table-title-group">
              <h2>
                {activeTab === 'requests' && 'All Customer Service Requests'}
                {activeTab === 'technicians' && 'Technician Partner Directory'}
                {activeTab === 'customers' && 'Registered Customers Directory'}
              </h2>
            </div>

            <div className="table-search-box">
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="clear-btn" onClick={() => setSearchQuery('')}>✕</button>
              )}
            </div>
          </div>

          {activeTab === 'requests' && (
            <div className="responsive-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Req ID</th>
                    <th>Service</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Assigned Pro</th>
                    <th>Est. / Final</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRequests.map((req) => (
                    <tr key={req.id}>
                      <td className="cell-mono"><strong>{req.id}</strong></td>
                      <td>{req.serviceName}</td>
                      <td>
                        <strong>{req.customerName}</strong>
                        <span className="sub-cell">{req.phone}</span>
                      </td>
                      <td className="cell-address">{req.address}</td>
                      <td>
                        {req.technician ? (
                          <span className="tech-assigned-cell">
                            {req.technician.photoIcon} {req.technician.name}
                          </span>
                        ) : (
                          <span className="unassigned-cell">Unassigned</span>
                        )}
                      </td>
                      <td>
                        <strong>₹{req.finalAmount || req.estimatedPrice}</strong>
                      </td>
                      <td>
                        <StatusBadge status={req.status} />
                      </td>
                      <td>
                        {req.status !== 'Completed' && req.status !== 'Cancelled' ? (
                          <button
                            className="btn-table-cancel"
                            onClick={() => handleCancelRequest(req.id)}
                            title="Cancel booking"
                          >
                            Cancel
                          </button>
                        ) : (
                          <span className="cell-muted">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'technicians' && (
            <div className="responsive-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Partner ID</th>
                    <th>Technician Name</th>
                    <th>Trade Specialty</th>
                    <th>Rating</th>
                    <th>Jobs Done</th>
                    <th>Joined</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTechnicians.map((tech) => (
                    <tr key={tech.id}>
                      <td className="cell-mono">{tech.id}</td>
                      <td>
                        <strong>{tech.name}</strong>
                        <span className="sub-cell">{tech.phone}</span>
                      </td>
                      <td>{tech.trade}</td>
                      <td>
                        <span className="rating-pill">★ {tech.rating}</span>
                      </td>
                      <td>{tech.jobsCompleted}</td>
                      <td>{tech.joinedDate}</td>
                      <td>
                        <span className={`tech-status-badge ${tech.status.toLowerCase().replace(' ', '-')}`}>
                          {tech.status}
                        </span>
                      </td>
                      <td>
                        <button
                          className={`btn-toggle-status ${tech.status === 'Active' ? 'btn-warn' : 'btn-success'}`}
                          onClick={() => handleToggleTechStatus(tech.id)}
                        >
                          {tech.status === 'Active' ? 'Suspend / Review' : 'Approve Partner'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="responsive-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Customer ID</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>City / Area</th>
                    <th>Bookings Placed</th>
                    <th>Member Since</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.map((cust) => (
                    <tr key={cust.id}>
                      <td className="cell-mono">{cust.id}</td>
                      <td><strong>{cust.name}</strong></td>
                      <td>
                        <div>{cust.email}</div>
                        <span className="sub-cell">{cust.phone}</span>
                      </td>
                      <td>{cust.city}</td>
                      <td>
                        <span className="booking-count-badge">{cust.totalBookings} orders</span>
                      </td>
                      <td>{cust.joinedDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;