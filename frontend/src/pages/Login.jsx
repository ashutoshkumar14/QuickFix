// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//   User,
//   Wrench,
//   ShieldCheck,
//   ArrowRight,
//   CheckCircle2,
//   Mail,
//   Lock,
//   ArrowLeft,
//   Zap,
//   Phone
// } from 'lucide-react';
// import './Login.css';

// function Login() {
//   const navigate = useNavigate();

//   // State: 'select-role' | 'login' | 'register'
//   const [authStep, setAuthStep] = useState('select-role');
//   const [selectedRole, setSelectedRole] = useState('customer');

//   const [formData, setFormData] = useState({
//     email: 'customer.demo@quickfix.in',
//     password: 'password123',
//     fullName: '',
//     phone: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [loginMessage, setLoginMessage] = useState(null);

//   const roleDetails = {
//     customer: {
//       title: "Customer Account",
//       badgeText: "CUSTOMER ACCESS",
//       heroDesc: "Manage bookings track service progress and access invoices",
//       perks: [
//         "45-Minute Doorstep Arrival",
//   "30-Day Service Warranty",
//   "Transparent Fixed Pricing"
//       ],
//       demoEmail: "customer.demo@quickfix.in",
//       demoPass: "password123",
//       route: "/customer/dashboard"
//     },
//     technician: {
//       title: "Technician Partner",
//       badgeText: "TECHNICIAN ACCESS",
//       heroDesc: "Manage service jobs streamline your workflow, and track earnings in one place",
//       perks: [
//         "Local Job Dispatches",
//   "Fast Daily Payouts",
//   "Tools & Safety Coverage"
//       ],
//       demoEmail: "technician.rajesh@quickfix.in",
//       demoPass: "password123",
//       route: "/technician/dashboard"
//     },
//     admin: {
//       title: "Admin Operations",
//       badgeText: "ADMIN ACCESS",
//       heroDesc: "Oversee teams streamline operations and optimize service delivery",
//       perks: [
//          "Real-Time Operations",
//   "Quality & SLA Insights",
//   "Performance Analytics"
//       ],
//       demoEmail: "admin.ops@quickfix.in",
//       demoPass: "adminpassword123",
//       route: "/admin/dashboard"
//     }
//   };

//   const handleSelectRole = (roleKey) => {
//     setSelectedRole(roleKey);
//     setFormData((prev) => ({
//       ...prev,
//       email: roleDetails[roleKey].demoEmail,
//       password: roleDetails[roleKey].demoPass
//     }));
//     setErrors({});
//     setAuthStep('login');
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.email.trim()) newErrors.email = 'Email address is required.';
//     if (!formData.password) newErrors.password = 'Password is required.';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setIsLoading(true);

//     setTimeout(() => {
//       setIsLoading(false);
//       setLoginMessage({
//         type: 'success',
//         text: `Authenticated as ${roleDetails[selectedRole].title}!`
//       });

//       setTimeout(() => {
//         navigate(roleDetails[selectedRole].route);
//       }, 700);
//     }, 900);
//   };

//   return (
//     <div className="login-page">

//       {/* ========================================================
//           STEP 1: EXPANSIVE ROLE SELECTION CONSOLE
//       ======================================================== */}
//       {authStep === 'select-role' && (
//         <div className="role-selection-wrapper">
//           <div className="brand-header-pill">
//             <div className="brand-logo-lockup">
//               <span className="brand-bolt"></span>
//               Quick<span className="brand-blue">Fix</span>
//             </div>
//           </div>

//           <div className="role-header-content">
//             <h2>Choose Your Role</h2>
//             <p>Access your QuickFix workspace</p>
//           </div>

//           <div className="big-role-cards-grid">
//             {/* Customer Option */}
//             <div
//               className="big-role-card"
//               onClick={() => handleSelectRole('customer')}
//             >
//               <div className="role-top-meta">
//                 <div className="big-role-icon icon-customer">
//                   <User size={28} />
//                 </div>
//                 <span className="portal-tag">PERSONAL</span>
//               </div>
//               <h3>Customer</h3>
//               <p>Book track and manage every service from one place</p>
//               <div className="role-card-action">
//                 <span>Enter as Customer</span>
//                 <ArrowRight size={16} />
//               </div>
//             </div>

//             {/* Technician Option */}
//             <div
//               className="big-role-card"
//               onClick={() => handleSelectRole('technician')}
//             >
//               <div className="role-top-meta">
//                 <div className="big-role-icon icon-technician">
//                   <Wrench size={28} />
//                 </div>
//                 <span className="portal-tag">FIELD OPERATIONS</span>
//               </div>
//               <h3>Technician</h3>
//               <p>Manage jobs Track progress Grow your business</p>
//               <div className="role-card-action">
//                 <span>Enter as Technician</span>
//                 <ArrowRight size={16} />
//               </div>
//             </div>

//             {/* Admin Option */}
//             <div
//               className="big-role-card"
//               onClick={() => handleSelectRole('admin')}
//             >
//               <div className="role-top-meta">
//                 <div className="big-role-icon icon-admin">
//                   <ShieldCheck size={28} />
//                 </div>
//                 <span className="portal-tag">CONTROL CENTER</span>
//               </div>
//               <h3>Admin </h3>
//               <p>Oversee operations manage teams and streamline service delivery</p>
//               <div className="role-card-action">
//                 <span>Enter as Admin</span>
//                 <ArrowRight size={16} />
//               </div>
//             </div>
//           </div>

//           <div className="role-footer-help">
//             <span>A Unified Home Service Network Across Delhi NCR</span>
//           </div>
//         </div>
//       )}

//       {/* ========================================================
//           STEP 2: SPLIT PANEL LOGIN / REGISTER WORKSPACE
//       ======================================================== */}
//       {(authStep === 'login' || authStep === 'register') && (
//         <div className="login-card-container">

//           {/* Left Side: Brand & Role Pillar */}
//           <div className="login-brand-panel">
//             <button
//               type="button"
//               className="btn-back-role"
//               onClick={() => setAuthStep('select-role')}
//             >
//               <ArrowLeft size={16} />
//               <span>Back</span>
//             </button>

//             <div className="panel-top-badge">
//               <ShieldCheck size={16} />
//               <span>{roleDetails[selectedRole].badgeText}</span>
//             </div>

//             <h2>{roleDetails[selectedRole].title}</h2>
//             <p>{roleDetails[selectedRole].heroDesc}</p>

//             <div className="panel-perks">
//               {roleDetails[selectedRole].perks.map((perk, idx) => (
//                 <div key={idx} className="panel-perk-item">
//                   <CheckCircle2 size={16} className="perk-check-icon" />
//                   <span>{perk}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="demo-credentials-pill">
//               <span className="demo-label">Demo Account Loaded</span>
//               <code>{roleDetails[selectedRole].demoEmail}</code>
//             </div>
//           </div>

//           {/* Right Side: Form Panel */}
//           <div className="login-form-panel">
//             <div className="form-header">
//               <div className="brand-logo-lockup small-logo">
//                 <span className="brand-bolt"></span>
//                 Quick<span className="brand-blue">Fix</span>
//               </div>
//               <h3>{authStep === 'login' ? 'Sign in' : 'Create New Account'}</h3>
//               <p>
//                 {authStep === 'login'
//                   ? 'Everything you need in one place'
//                   : 'Register your details to establish a verified profile.'
//                 }
//               </p>
//             </div>

//             {loginMessage && (
//               <div className="auth-alert-message">
//                 <CheckCircle2 size={16} />
//                 <span>{loginMessage.text}</span>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="auth-form" noValidate>
              
//               {authStep === 'register' && (
//                 <>
//                   <div className="input-group">
//                     <label className="input-label">Full Name</label>
//                     <div className="custom-input-wrap">
//                       <User size={18} className="input-icon" />
//                       <input
//                         type="text"
//                         name="fullName"
//                         placeholder="e.g. Rahul Sharma"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="input-group">
//                     <label className="input-label">Phone Number</label>
//                     <div className="custom-input-wrap">
//                       <Phone size={18} className="input-icon" />
//                       <input
//                         type="tel"
//                         name="phone"
//                         placeholder="10-digit mobile number"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                 </>
//               )}

//               <div className="input-group">
//                 <label className="input-label">Email Address</label>
//                 <div className="custom-input-wrap">
//                   <Mail size={18} className="input-icon" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter email address"
//                     required
//                   />
//                 </div>
//                 {errors.email && <span className="input-err">{errors.email}</span>}
//               </div>

//               <div className="input-group">
//                 <div className="label-flex-row">
//                   <label className="input-label">Password</label>
//                   {authStep === 'login' && (
//                     <button
//                       type="button"
//                       className="btn-forgot-inline"
//                       onClick={() => alert('Password reset link is linked in production pipeline.')}
//                     >
//                       Forgot?
//                     </button>
//                   )}
//                 </div>
//                 <div className="custom-input-wrap">
//                   <Lock size={18} className="input-icon" />
//                   <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Enter security password"
//                     required
//                   />
//                 </div>
//                 {errors.password && <span className="input-err">{errors.password}</span>}
//               </div>

//               <button
//                 type="submit"
//                 className="btn-auth-primary"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <span className="loading-dots">Verifying Credentials...</span>
//                 ) : (
//                   <>
//                     <span>{authStep === 'login' ? `Enter ${roleDetails[selectedRole].title}` : 'Complete Registration'}</span>
//                     <ArrowRight size={16} />
//                   </>
//                 )}
//               </button>
//             </form>

//             <div className="form-footer-toggle">
//               {authStep === 'login' ? (
//                 <p>
//                   New to QuickFix?{' '}
//                   <button
//                     type="button"
//                     className="btn-link-action"
//                     onClick={() => setAuthStep('register')}
//                   >
//                     Create an account
//                   </button>
//                 </p>
//               ) : (
//                 <p>
//                   Already have an account?{' '}
//                   <button
//                     type="button"
//                     className="btn-link-action"
//                     onClick={() => setAuthStep('login')}
//                   >
//                     Sign In
//                   </button>
//                 </p>
//               )}
//             </div>

//             <div className="form-footer-terms">
//               Secured with 256-bit encryption. By continuing, you agree to QuickFix's{' '}
//               <Link to="/terms">Terms</Link> & <Link to="/privacy">Privacy Policy</Link>.
//             </div>
//           </div>

//         </div>
//       )}

//     </div>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//   User,
//   Wrench,
//   ShieldCheck,
//   ArrowRight,
//   CheckCircle2,
//   Mail,
//   Lock,
//   ArrowLeft,
//   Zap,
//   Phone
// } from 'lucide-react';
// import './Login.css';

// function Login() {
//   const navigate = useNavigate();

//   // State: 'select-role' | 'login' | 'register'
//   const [authStep, setAuthStep] = useState('select-role');
//   const [selectedRole, setSelectedRole] = useState('customer');

//   const [formData, setFormData] = useState({
//     email: 'customer.demo@quickfix.in',
//     password: 'password123',
//     fullName: '',
//     phone: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [loginMessage, setLoginMessage] = useState(null);

//   const roleDetails = {
//     customer: {
//       title: "Customer Account",
//       badgeText: "CUSTOMER ACCESS",
//       heroDesc: "Manage bookings track service progress and access invoices",
//       perks: [
//         "45-Minute Doorstep Arrival",
//   "30-Day Service Warranty",
//   "Transparent Fixed Pricing"
//       ],
//       demoEmail: "customer.demo@quickfix.in",
//       demoPass: "password123",
//       route: "/customer/dashboard"
//     },
//     technician: {
//       title: "Technician Partner",
//       badgeText: "TECHNICIAN ACCESS",
//       heroDesc: "Manage service jobs streamline your workflow, and track earnings in one place",
//       perks: [
//         "Local Job Dispatches",
//   "Fast Daily Payouts",
//   "Tools & Safety Coverage"
//       ],
//       demoEmail: "technician.rajesh@quickfix.in",
//       demoPass: "password123",
//       route: "/technician/dashboard"
//     },
//     admin: {
//       title: "Admin Operations",
//       badgeText: "ADMIN ACCESS",
//       heroDesc: "Oversee teams streamline operations and optimize service delivery",
//       perks: [
//          "Real-Time Operations",
//   "Quality & SLA Insights",
//   "Performance Analytics"
//       ],
//       demoEmail: "admin.ops@quickfix.in",
//       demoPass: "adminpassword123",
//       route: "/admin/dashboard"
//     }
//   };

//   const handleSelectRole = (roleKey) => {
//     setSelectedRole(roleKey);
//     setFormData((prev) => ({
//       ...prev,
//       email: roleDetails[roleKey].demoEmail,
//       password: roleDetails[roleKey].demoPass
//     }));
//     setErrors({});
//     setAuthStep('login');
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.email.trim()) newErrors.email = 'Email address is required.';
//     if (!formData.password) newErrors.password = 'Password is required.';
//     if (authStep === 'register') {
//       if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
//       if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setIsLoading(true);
//     setLoginMessage(null);

//     const endpoint = authStep === 'login'
//       ? 'http://localhost:5000/api/auth/login'
//       : 'http://localhost:5000/api/auth/register';

//     const payload = authStep === 'login'
//       ? { email: formData.email, password: formData.password, role: selectedRole }
//       : {
//           fullName: formData.fullName,
//           phone: formData.phone,
//           email: formData.email,
//           password: formData.password,
//           role: selectedRole
//         };

//     try {
//       const response = await fetch(endpoint, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         if (data.token) localStorage.setItem('quickfix_token', data.token);
//         if (data.user) localStorage.setItem('quickfix_user', JSON.stringify(data.user));

//         setLoginMessage({
//           type: 'success',
//           text: `Authenticated as ${roleDetails[selectedRole].title}!`
//         });

//         setTimeout(() => {
//           navigate(roleDetails[selectedRole].route);
//         }, 700);
//       } else {
//         setErrors((prev) => ({ ...prev, email: data.message || 'Authentication failed' }));
//       }
//     } catch (err) {
//       // Backend off hone par bhi demo prototype smoothly navigate karega
//       console.warn("Backend server not responding, proceeding with local verified demo session.");
      
//       setLoginMessage({
//         type: 'success',
//         text: `Authenticated as ${roleDetails[selectedRole].title}!`
//       });

//       setTimeout(() => {
//         navigate(roleDetails[selectedRole].route);
//       }, 700);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="login-page">

//       {/* ========================================================
//           STEP 1: EXPANSIVE ROLE SELECTION CONSOLE
//       ======================================================== */}
//       {authStep === 'select-role' && (
//         <div className="role-selection-wrapper">
//           <div className="brand-header-pill">
//             <div className="brand-logo-lockup">
//               <span className="brand-bolt"></span>
//               Quick<span className="brand-blue">Fix</span>
//             </div>
//           </div>

//           <div className="role-header-content">
//             <h2>Choose Your Role</h2>
//             <p>Access your QuickFix workspace</p>
//           </div>

//           <div className="big-role-cards-grid">
//             {/* Customer Option */}
//             <div
//               className="big-role-card"
//               onClick={() => handleSelectRole('customer')}
//             >
//               <div className="role-top-meta">
//                 <div className="big-role-icon icon-customer">
//                   <User size={28} />
//                 </div>
//                 <span className="portal-tag">PERSONAL</span>
//               </div>
//               <h3>Customer</h3>
//               <p>Book track and manage every service from one place</p>
//               <div className="role-card-action">
//                 <span>Enter as Customer</span>
//                 <ArrowRight size={16} />
//               </div>
//             </div>

//             {/* Technician Option */}
//             <div
//               className="big-role-card"
//               onClick={() => handleSelectRole('technician')}
//             >
//               <div className="role-top-meta">
//                 <div className="big-role-icon icon-technician">
//                   <Wrench size={28} />
//                 </div>
//                 <span className="portal-tag">FIELD OPERATIONS</span>
//               </div>
//               <h3>Technician</h3>
//               <p>Manage jobs Track progress Grow your business</p>
//               <div className="role-card-action">
//                 <span>Enter as Technician</span>
//                 <ArrowRight size={16} />
//               </div>
//             </div>

//             {/* Admin Option */}
//             <div
//               className="big-role-card"
//               onClick={() => handleSelectRole('admin')}
//             >
//               <div className="role-top-meta">
//                 <div className="big-role-icon icon-admin">
//                   <ShieldCheck size={28} />
//                 </div>
//                 <span className="portal-tag">CONTROL CENTER</span>
//               </div>
//               <h3>Admin </h3>
//               <p>Oversee operations manage teams and streamline service delivery</p>
//               <div className="role-card-action">
//                 <span>Enter as Admin</span>
//                 <ArrowRight size={16} />
//               </div>
//             </div>
//           </div>

//           <div className="role-footer-help">
//             <span>A Unified Home Service Network Across Delhi NCR</span>
//           </div>
//         </div>
//       )}

//       {/* ========================================================
//           STEP 2: SPLIT PANEL LOGIN / REGISTER WORKSPACE
//       ======================================================== */}
//       {(authStep === 'login' || authStep === 'register') && (
//         <div className="login-card-container">

//           {/* Left Side: Brand & Role Pillar */}
//           <div className="login-brand-panel">
//             <button
//               type="button"
//               className="btn-back-role"
//               onClick={() => setAuthStep('select-role')}
//             >
//               <ArrowLeft size={16} />
//               <span>Back</span>
//             </button>

//             <div className="panel-top-badge">
//               <ShieldCheck size={16} />
//               <span>{roleDetails[selectedRole].badgeText}</span>
//             </div>

//             <h2>{roleDetails[selectedRole].title}</h2>
//             <p>{roleDetails[selectedRole].heroDesc}</p>

//             <div className="panel-perks">
//               {roleDetails[selectedRole].perks.map((perk, idx) => (
//                 <div key={idx} className="panel-perk-item">
//                   <CheckCircle2 size={16} className="perk-check-icon" />
//                   <span>{perk}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="demo-credentials-pill">
//               <span className="demo-label">Demo Account Loaded</span>
//               <code>{roleDetails[selectedRole].demoEmail}</code>
//             </div>
//           </div>

//           {/* Right Side: Form Panel */}
//           <div className="login-form-panel">
//             <div className="form-header">
//               <div className="brand-logo-lockup small-logo">
//                 <span className="brand-bolt"></span>
//                 Quick<span className="brand-blue">Fix</span>
//               </div>
//               <h3>{authStep === 'login' ? 'Sign in' : 'Create New Account'}</h3>
//               <p>
//                 {authStep === 'login'
//                   ? 'Everything you need in one place'
//                   : 'Register your details to establish a verified profile.'
//                 }
//               </p>
//             </div>

//             {loginMessage && (
//               <div className="auth-alert-message">
//                 <CheckCircle2 size={16} />
//                 <span>{loginMessage.text}</span>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="auth-form" noValidate>
              
//               {authStep === 'register' && (
//                 <>
//                   <div className="input-group">
//                     <label className="input-label">Full Name</label>
//                     <div className="custom-input-wrap">
//                       <User size={18} className="input-icon" />
//                       <input
//                         type="text"
//                         name="fullName"
//                         placeholder="e.g. Rahul Sharma"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     {errors.fullName && <span className="input-err">{errors.fullName}</span>}
//                   </div>

//                   <div className="input-group">
//                     <label className="input-label">Phone Number</label>
//                     <div className="custom-input-wrap">
//                       <Phone size={18} className="input-icon" />
//                       <input
//                         type="tel"
//                         name="phone"
//                         placeholder="10-digit mobile number"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     {errors.phone && <span className="input-err">{errors.phone}</span>}
//                   </div>
//                 </>
//               )}

//               <div className="input-group">
//                 <label className="input-label">Email Address</label>
//                 <div className="custom-input-wrap">
//                   <Mail size={18} className="input-icon" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter email address"
//                     required
//                   />
//                 </div>
//                 {errors.email && <span className="input-err">{errors.email}</span>}
//               </div>

//               <div className="input-group">
//                 <div className="label-flex-row">
//                   <label className="input-label">Password</label>
//                   {authStep === 'login' && (
//                     <button
//                       type="button"
//                       className="btn-forgot-inline"
//                       onClick={() => alert('Password reset link is linked in production pipeline.')}
//                     >
//                       Forgot?
//                     </button>
//                   )}
//                 </div>
//                 <div className="custom-input-wrap">
//                   <Lock size={18} className="input-icon" />
//                   <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Enter security password"
//                     required
//                   />
//                 </div>
//                 {errors.password && <span className="input-err">{errors.password}</span>}
//               </div>

//               <button
//                 type="submit"
//                 className="btn-auth-primary"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <span className="loading-dots">Verifying Credentials...</span>
//                 ) : (
//                   <>
//                     <span>{authStep === 'login' ? `Enter ${roleDetails[selectedRole].title}` : 'Complete Registration'}</span>
//                     <ArrowRight size={16} />
//                   </>
//                 )}
//               </button>
//             </form>

//             <div className="form-footer-toggle">
//               {authStep === 'login' ? (
//                 <p>
//                   New to QuickFix?{' '}
//                   <button
//                     type="button"
//                     className="btn-link-action"
//                     onClick={() => setAuthStep('register')}
//                   >
//                     Create an account
//                   </button>
//                 </p>
//               ) : (
//                 <p>
//                   Already have an account?{' '}
//                   <button
//                     type="button"
//                     className="btn-link-action"
//                     onClick={() => setAuthStep('login')}
//                   >
//                     Sign In
//                   </button>
//                 </p>
//               )}
//             </div>

//             <div className="form-footer-terms">
//               Secured with 256-bit encryption. By continuing, you agree to QuickFix's{' '}
//               <Link to="/terms">Terms</Link> & <Link to="/privacy">Privacy Policy</Link>.
//             </div>
//           </div>

//         </div>
//       )}

//     </div>
//   );
// }

// export default Login;



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//   User,
//   Wrench,
//   ShieldCheck,
//   ArrowRight,
//   CheckCircle2,
//   Mail,
//   Lock,
//   ArrowLeft,
//   Zap,
//   Phone
// } from 'lucide-react';
// import './Login.css';

// function Login() {
//   const navigate = useNavigate();

//   const [authStep, setAuthStep] = useState('select-role');
//   const [selectedRole, setSelectedRole] = useState('customer');

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     fullName: '',
//     phone: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [loginMessage, setLoginMessage] = useState(null);

//   const roleDetails = {
//     customer: {
//       title: "Customer Account",
//       badgeText: "CUSTOMER ACCESS",
//       heroDesc: "Manage bookings track service progress and access invoices",
//       perks: [
//         "45-Minute Doorstep Arrival",
//         "30-Day Service Warranty",
//         "Transparent Fixed Pricing"
//       ],
//       demoEmail: "customer.demo@quickfix.in",
//       demoPass: "password123",
//       route: "/customer/dashboard"
//     },
//     technician: {
//       title: "Technician Partner",
//       badgeText: "TECHNICIAN ACCESS",
//       heroDesc: "Manage service jobs streamline your workflow, and track earnings in one place",
//       perks: [
//         "Local Job Dispatches",
//         "Fast Daily Payouts",
//         "Tools & Safety Coverage"
//       ],
//       demoEmail: "technician.rajesh@quickfix.in",
//       demoPass: "password123",
//       route: "/technician/dashboard"
//     },
//     admin: {
//       title: "Admin Operations",
//       badgeText: "ADMIN ACCESS",
//       heroDesc: "Oversee teams streamline operations and optimize service delivery",
//       perks: [
//         "Real-Time Operations",
//         "Quality & SLA Insights",
//         "Performance Analytics"
//       ],
//       demoEmail: "admin.ops@quickfix.in",
//       demoPass: "adminpassword123",
//       route: "/admin/dashboard"
//     }
//   };

//   const handleSelectRole = (roleKey) => {
//     setSelectedRole(roleKey);
//     setFormData({
//       email: roleDetails[roleKey].demoEmail,
//       password: roleDetails[roleKey].demoPass,
//       fullName: '',
//       phone: ''
//     });
//     setErrors({});
//     setAuthStep('login');
//   };

//   const handleSwitchToRegister = () => {
//     setFormData({
//       email: '',
//       password: '',
//       fullName: '',
//       phone: ''
//     });
//     setErrors({});
//     setAuthStep('register');
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.email.trim()) newErrors.email = 'Email address is required.';
//     if (!formData.password) newErrors.password = 'Password is required.';
//     if (authStep === 'register') {
//       if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
//       if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setIsLoading(true);
//     setLoginMessage(null);

//     const path = authStep === 'login' ? '/api/auth/login' : '/api/auth/register';
//     const payload = authStep === 'login'
//       ? { email: formData.email.trim(), password: formData.password, role: selectedRole }
//       : {
//           fullName: formData.fullName.trim(),
//           phone: formData.phone.trim(),
//           email: formData.email.trim(),
//           password: formData.password,
//           role: selectedRole
//         };

//     const tryFetch = async (host) => {
//       return await fetch(`${host}${path}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });
//     };

//     try {
//       let response;
//       try {
//         response = await tryFetch('http://127.0.0.1:5000');
//       } catch (err1) {
//         response = await tryFetch('http://localhost:5000');
//       }

//       const data = await response.json();

//       if (response.ok) {
//         if (data.token) localStorage.setItem('quickfix_token', data.token);

//         const userData = data.user || {};
//         const realName = userData.fullName || userData.full_name || formData.fullName.trim();

//         localStorage.setItem('quickfix_user', JSON.stringify({
//           fullName: realName,
//           email: userData.email || formData.email.trim(),
//           phone: userData.phone || formData.phone.trim(),
//           role: userData.role || selectedRole
//         }));

//         setLoginMessage({
//           type: 'success',
//           text: `Authenticated as ${roleDetails[selectedRole].title}!`
//         });

//         setTimeout(() => {
//           navigate(roleDetails[selectedRole].route);
//         }, 700);
//       } else {
//         setErrors((prev) => ({ ...prev, email: data.message || 'Authentication failed' }));
//       }
//     } catch (err) {
//       console.error('Network error:', err);
//       setErrors((prev) => ({
//         ...prev,
//         email: 'Cannot reach backend server. Please verify backend is running on port 5000.'
//       }));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="login-page">

//       {authStep === 'select-role' && (
//         <div className="role-selection-wrapper">
//           <div className="brand-header-pill">
//             <div className="brand-logo-lockup">
//               <span className="brand-bolt"></span>
//               Quick<span className="brand-blue">Fix</span>
//             </div>
//           </div>

//           <div className="role-header-content">
//             <h2>Choose Your Role</h2>
//             <p>Access your QuickFix workspace</p>
//           </div>

//           <div className="big-role-cards-grid">
//             <div
//               className="big-role-card"
//               onClick={() => handleSelectRole('customer')}
//             >
//               <div className="role-top-meta">
//                 <div className="big-role-icon icon-customer">
//                   <User size={28} />
//                 </div>
//                 <span className="portal-tag">PERSONAL</span>
//               </div>
//               <h3>Customer</h3>
//               <p>Book track and manage every service from one place</p>
//               <div className="role-card-action">
//                 <span>Enter as Customer</span>
//                 <ArrowRight size={16} />
//               </div>
//             </div>

//             <div
//               className="big-role-card"
//               onClick={() => handleSelectRole('technician')}
//             >
//               <div className="role-top-meta">
//                 <div className="big-role-icon icon-technician">
//                   <Wrench size={28} />
//                 </div>
//                 <span className="portal-tag">FIELD OPERATIONS</span>
//               </div>
//               <h3>Technician</h3>
//               <p>Manage jobs Track progress Grow your business</p>
//               <div className="role-card-action">
//                 <span>Enter as Technician</span>
//                 <ArrowRight size={16} />
//               </div>
//             </div>

//             <div
//               className="big-role-card"
//               onClick={() => handleSelectRole('admin')}
//             >
//               <div className="role-top-meta">
//                 <div className="big-role-icon icon-admin">
//                   <ShieldCheck size={28} />
//                 </div>
//                 <span className="portal-tag">CONTROL CENTER</span>
//               </div>
//               <h3>Admin </h3>
//               <p>Oversee operations manage teams and streamline service delivery</p>
//               <div className="role-card-action">
//                 <span>Enter as Admin</span>
//                 <ArrowRight size={16} />
//               </div>
//             </div>
//           </div>

//           <div className="role-footer-help">
//             <span>A Unified Home Service Network Across Delhi NCR</span>
//           </div>
//         </div>
//       )}

//       {(authStep === 'login' || authStep === 'register') && (
//         <div className="login-card-container">

//           <div className="login-brand-panel">
//             <button
//               type="button"
//               className="btn-back-role"
//               onClick={() => setAuthStep('select-role')}
//             >
//               <ArrowLeft size={16} />
//               <span>Back</span>
//             </button>

//             <div className="panel-top-badge">
//               <ShieldCheck size={16} />
//               <span>{roleDetails[selectedRole].badgeText}</span>
//             </div>

//             <h2>{roleDetails[selectedRole].title}</h2>
//             <p>{roleDetails[selectedRole].heroDesc}</p>

//             <div className="panel-perks">
//               {roleDetails[selectedRole].perks.map((perk, idx) => (
//                 <div key={idx} className="panel-perk-item">
//                   <CheckCircle2 size={16} className="perk-check-icon" />
//                   <span>{perk}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="demo-credentials-pill">
//               <span className="demo-label">Demo Account Loaded</span>
//               <code>{roleDetails[selectedRole].demoEmail}</code>
//             </div>
//           </div>

//           <div className="login-form-panel">
//             <div className="form-header">
//               <div className="brand-logo-lockup small-logo">
//                 <span className="brand-bolt"></span>
//                 Quick<span className="brand-blue">Fix</span>
//               </div>
//               <h3>{authStep === 'login' ? 'Sign in' : 'Create New Account'}</h3>
//               <p>
//                 {authStep === 'login'
//                   ? 'Everything you need in one place'
//                   : 'Register your details to establish a verified profile.'
//                 }
//               </p>
//             </div>

//             {loginMessage && (
//               <div className="auth-alert-message">
//                 <CheckCircle2 size={16} />
//                 <span>{loginMessage.text}</span>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="auth-form" noValidate>
              
//               {authStep === 'register' && (
//                 <>
//                   <div className="input-group">
//                     <label className="input-label">Full Name</label>
//                     <div className="custom-input-wrap">
//                       <User size={18} className="input-icon" />
//                       <input
//                         type="text"
//                         name="fullName"
//                         placeholder="e.g. Rahul Sharma"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     {errors.fullName && <span className="input-err">{errors.fullName}</span>}
//                   </div>

//                   <div className="input-group">
//                     <label className="input-label">Phone Number</label>
//                     <div className="custom-input-wrap">
//                       <Phone size={18} className="input-icon" />
//                       <input
//                         type="tel"
//                         name="phone"
//                         placeholder="10-digit mobile number"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     {errors.phone && <span className="input-err">{errors.phone}</span>}
//                   </div>
//                 </>
//               )}

//               <div className="input-group">
//                 <label className="input-label">Email Address</label>
//                 <div className="custom-input-wrap">
//                   <Mail size={18} className="input-icon" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter email address"
//                     required
//                   />
//                 </div>
//                 {errors.email && <span className="input-err">{errors.email}</span>}
//               </div>

//               <div className="input-group">
//                 <div className="label-flex-row">
//                   <label className="input-label">Password</label>
//                   {authStep === 'login' && (
//                     <button
//                       type="button"
//                       className="btn-forgot-inline"
//                       onClick={() => alert('Password reset link is linked in production pipeline.')}
//                     >
//                       Forgot?
//                     </button>
//                   )}
//                 </div>
//                 <div className="custom-input-wrap">
//                   <Lock size={18} className="input-icon" />
//                   <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Enter security password"
//                     required
//                   />
//                 </div>
//                 {errors.password && <span className="input-err">{errors.password}</span>}
//               </div>

//               <button
//                 type="submit"
//                 className="btn-auth-primary"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <span className="loading-dots">Verifying Credentials...</span>
//                 ) : (
//                   <>
//                     <span>{authStep === 'login' ? `Enter ${roleDetails[selectedRole].title}` : 'Complete Registration'}</span>
//                     <ArrowRight size={16} />
//                   </>
//                 )}
//               </button>
//             </form>

//             <div className="form-footer-toggle">
//               {authStep === 'login' ? (
//                 <p>
//                   New to QuickFix?{' '}
//                   <button
//                     type="button"
//                     className="btn-link-action"
//                     onClick={handleSwitchToRegister}
//                   >
//                     Create an account
//                   </button>
//                 </p>
//               ) : (
//                 <p>
//                   Already have an account?{' '}
//                   <button
//                     type="button"
//                     className="btn-link-action"
//                     onClick={() => setAuthStep('login')}
//                   >
//                     Sign In
//                   </button>
//                 </p>
//               )}
//             </div>

//             <div className="form-footer-terms">
//               Secured with 256-bit encryption. By continuing, you agree to QuickFix's{' '}
//               <Link to="/terms">Terms</Link> & <Link to="/privacy">Privacy Policy</Link>.
//             </div>
//           </div>

//         </div>
//       )}

//     </div>
//   );
// }

// export default Login;




import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  Wrench, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Lock, 
  ArrowLeft,
  Zap,
  Phone
} from 'lucide-react';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  // State: 'select-role' | 'login' | 'register'
  const [authStep, setAuthStep] = useState('select-role');
  const [selectedRole, setSelectedRole] = useState('customer');

  // Input fields default me bilkul khali rahenge
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState(null);

  const roleDetails = {
    customer: {
      title: "Customer Account",
      badgeText: "CUSTOMER ACCESS",
      heroDesc: "Manage bookings track service progress and access invoices",
      perks: [
        "45-Minute Doorstep Arrival",
        "30-Day Service Warranty",
        "Transparent Fixed Pricing"
      ],
      route: "/customer/dashboard"
    },
    technician: {
      title: "Technician Partner",
      badgeText: "TECHNICIAN ACCESS",
      heroDesc: "Manage service jobs streamline your workflow, and track earnings in one place",
      perks: [
        "Local Job Dispatches",
        "Fast Daily Payouts",
        "Tools & Safety Coverage"
      ],
      route: "/technician/dashboard"
    },
    admin: {
      title: "Admin Operations",
      badgeText: "ADMIN ACCESS",
      heroDesc: "Oversee teams streamline operations and optimize service delivery",
      perks: [
        "Real-Time Operations",
        "Quality & SLA Insights",
        "Performance Analytics"
      ],
      route: "/admin/dashboard"
    }
  };

  const handleSelectRole = (roleKey) => {
    setSelectedRole(roleKey);
    // Role choose karne par email aur password bilkul khali rahenge
    setFormData({
      email: '',
      password: '',
      fullName: '',
      phone: ''
    });
    setErrors({});
    setAuthStep('login');
  };

  const handleSwitchToRegister = () => {
    setFormData({
      email: '',
      password: '',
      fullName: '',
      phone: ''
    });
    setErrors({});
    setAuthStep('register');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email address is required.';
    if (!formData.password) newErrors.password = 'Password is required.';
    if (authStep === 'register') {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
      if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setLoginMessage(null);

    const endpoint = authStep === 'login' 
      ? 'http://localhost:5000/api/auth/login' 
      : 'http://localhost:5000/api/auth/register';

    const payload = authStep === 'login' 
      ? { email: formData.email.trim(), password: formData.password, role: selectedRole }
      : { 
          fullName: formData.fullName.trim(), 
          phone: formData.phone.trim(), 
          email: formData.email.trim(), 
          password: formData.password, 
          role: selectedRole 
        };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        if (data.token) localStorage.setItem('quickfix_token', data.token);

        const userData = data.user || {};
        localStorage.setItem('quickfix_user', JSON.stringify({
          fullName: userData.fullName || userData.full_name || formData.fullName.trim(),
          email: userData.email || formData.email.trim(),
          phone: userData.phone || formData.phone.trim(),
          role: userData.role || selectedRole
        }));

        setLoginMessage({
          type: 'success',
          text: `Authenticated as ${roleDetails[selectedRole].title}!`
        });

        setTimeout(() => {
          navigate(roleDetails[selectedRole].route);
        }, 700);
      } else {
        setErrors((prev) => ({ ...prev, email: data.message || 'Authentication failed' }));
      }
    } catch (err) {
      console.error("Authentication network error:", err);
      setErrors((prev) => ({ 
        ...prev, 
        email: 'Cannot reach backend server. Please verify backend is running on port 5000.' 
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">

      {/* ========================================================
          STEP 1: EXPANSIVE ROLE SELECTION CONSOLE
      ======================================================== */}
      {authStep === 'select-role' && (
        <div className="role-selection-wrapper">
          <div className="brand-header-pill">
            <div className="brand-logo-lockup">
              <span className="brand-bolt"></span>
              Quick<span className="brand-blue">Fix</span>
            </div>
          </div>

          <div className="role-header-content">
            <h2>Choose Your Role</h2>
            <p>Access your QuickFix workspace</p>
          </div>

          <div className="big-role-cards-grid">
            {/* Customer Option */}
            <div 
              className="big-role-card" 
              onClick={() => handleSelectRole('customer')}
            >
              <div className="role-top-meta">
                <div className="big-role-icon icon-customer">
                  <User size={28} />
                </div>
                <span className="portal-tag">PERSONAL</span>
              </div>
              <h3>Customer</h3>
              <p>Book track and manage every service from one place</p>
              <div className="role-card-action">
                <span>Enter as Customer</span>
                <ArrowRight size={16} />
              </div>
            </div>

            {/* Technician Option */}
            <div 
              className="big-role-card" 
              onClick={() => handleSelectRole('technician')}
            >
              <div className="role-top-meta">
                <div className="big-role-icon icon-technician">
                  <Wrench size={28} />
                </div>
                <span className="portal-tag">FIELD OPERATIONS</span>
              </div>
              <h3>Technician</h3>
              <p>Manage jobs Track progress Grow your business</p>
              <div className="role-card-action">
                <span>Enter as Technician</span>
                <ArrowRight size={16} />
              </div>
            </div>

            {/* Admin Option */}
            <div 
              className="big-role-card" 
              onClick={() => handleSelectRole('admin')}
            >
              <div className="role-top-meta">
                <div className="big-role-icon icon-admin">
                  <ShieldCheck size={28} />
                </div>
                <span className="portal-tag">CONTROL CENTER</span>
              </div>
              <h3>Admin </h3>
              <p>Oversee operations manage teams and streamline service delivery</p>
              <div className="role-card-action">
                <span>Enter as Admin</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          <div className="role-footer-help">
            <span>A Unified Home Service Network Across Delhi NCR</span>
          </div>
        </div>
      )}

      {/* ========================================================
          STEP 2: SPLIT PANEL LOGIN / REGISTER WORKSPACE
      ======================================================== */}
      {(authStep === 'login' || authStep === 'register') && (
        <div className="login-card-container">

          {/* Left Side: Brand & Role Pillar */}
          <div className="login-brand-panel">
            <button 
              type="button" 
              className="btn-back-role"
              onClick={() => setAuthStep('select-role')}
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>

            <div className="panel-top-badge">
              <ShieldCheck size={16} />
              <span>{roleDetails[selectedRole].badgeText}</span>
            </div>

            <h2>{roleDetails[selectedRole].title}</h2>
            <p>{roleDetails[selectedRole].heroDesc}</p>

            <div className="panel-perks">
              {roleDetails[selectedRole].perks.map((perk, idx) => (
                <div key={idx} className="panel-perk-item">
                  <CheckCircle2 size={16} className="perk-check-icon" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form Panel */}
          <div className="login-form-panel">
            <div className="form-header">
              <div className="brand-logo-lockup small-logo">
                <span className="brand-bolt"></span>
                Quick<span className="brand-blue">Fix</span>
              </div>
              <h3>{authStep === 'login' ? 'Sign in' : 'Create New Account'}</h3>
              <p>
                {authStep === 'login' 
                  ? 'Everything you need in one place'
                  : 'Register your details to establish a verified profile.'
                }
              </p>
            </div>

            {loginMessage && (
              <div className="auth-alert-message">
                <CheckCircle2 size={16} />
                <span>{loginMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form" noValidate>
              
              {authStep === 'register' && (
                <>
                  <div className="input-group">
                    <label className="input-label">Full Name</label>
                    <div className="custom-input-wrap">
                      <User size={18} className="input-icon" />
                      <input 
                        type="text"
                        name="fullName"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {errors.fullName && <span className="input-err">{errors.fullName}</span>}
                  </div>

                  <div className="input-group">
                    <label className="input-label">Phone Number</label>
                    <div className="custom-input-wrap">
                      <Phone size={18} className="input-icon" />
                      <input 
                        type="tel"
                        name="phone"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {errors.phone && <span className="input-err">{errors.phone}</span>}
                  </div>
                </>
              )}

              <div className="input-group">
                <label className="input-label">Email Address</label>
                <div className="custom-input-wrap">
                  <Mail size={18} className="input-icon" />
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    autoComplete="off"
                    required
                  />
                </div>
                {errors.email && <span className="input-err">{errors.email}</span>}
              </div>

              <div className="input-group">
                <div className="label-flex-row">
                  <label className="input-label">Password</label>
                  {authStep === 'login' && (
                    <button 
                      type="button" 
                      className="btn-forgot-inline"
                      onClick={() => alert('Password reset link is linked in production pipeline.')}
                    >
                      Forgot?
                    </button>
                  )}
                </div>
                <div className="custom-input-wrap">
                  <Lock size={18} className="input-icon" />
                  <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter security password"
                    autoComplete="new-password"
                    required
                  />
                </div>
                {errors.password && <span className="input-err">{errors.password}</span>}
              </div>

              <button 
                type="submit" 
                className="btn-auth-primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading-dots">Verifying Credentials...</span>
                ) : (
                  <>
                    <span>{authStep === 'login' ? `Enter ${roleDetails[selectedRole].title}` : 'Complete Registration'}</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            <div className="form-footer-toggle">
              {authStep === 'login' ? (
                <p>
                  New to QuickFix?{' '}
                  <button 
                    type="button" 
                    className="btn-link-action"
                    onClick={handleSwitchToRegister}
                  >
                    Create an account
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <button 
                    type="button" 
                    className="btn-link-action"
                    onClick={() => setAuthStep('login')}
                  >
                    Sign In
                  </button>
                </p>
              )}
            </div>

            <div className="form-footer-terms">
              Secured with 256-bit encryption. By continuing, you agree to QuickFix's{' '}
              <Link to="/terms">Terms</Link> & <Link to="/privacy">Privacy Policy</Link>.
            </div>
          </div>

        </div>
      )}

    </div>
  );
}

export default Login;