// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Auth.css';

// function Register() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     role: 'customer',
//     skillSpecialty: 'AC Repair',
//     password: '',
//     confirmPassword: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [registerSuccess, setRegisterSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));

//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const handleRoleChange = (role) => {
//     setFormData((prev) => ({
//       ...prev,
//       role
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[6-9]\d{9}$/;

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = 'Full name is required.';
//     } else if (formData.fullName.trim().length < 3) {
//       newErrors.fullName = 'Name must be at least 3 characters.';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email address is required.';
//     } else if (!emailRegex.test(formData.email.trim())) {
//       newErrors.email = 'Enter a valid email address.';
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Mobile number is required.';
//     } else if (!phoneRegex.test(formData.phone.trim())) {
//       newErrors.phone = 'Enter a valid 10-digit Indian mobile number.';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required.';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters.';
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = 'Confirm your password.';
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validate()) return;

//     setIsLoading(true);

//     setTimeout(() => {
//       setIsLoading(false);
//       setRegisterSuccess(true);

//       setTimeout(() => {
//         navigate('/login');
//       }, 1500);
//     }, 1200);
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-card">
//         <div className="auth-header">
//           <div className="auth-brand-logo">
//             Quick<span className="brand-accent">Fix</span>
//           </div>
//           <h2>Create New Account</h2>
//           <p>Join QuickFix as a customer or register as a service technician</p>
//         </div>

//         <div className="role-switch-container">
//           <button
//             type="button"
//             className={`role-switch-btn ${formData.role === 'customer' ? 'active' : ''}`}
//             onClick={() => handleRoleChange('customer')}
//           >
//             👤 I am a Customer
//           </button>
//           <button
//             type="button"
//             className={`role-switch-btn ${formData.role === 'technician' ? 'active' : ''}`}
//             onClick={() => handleRoleChange('technician')}
//           >
//             🧰 I am a Technician
//           </button>
//         </div>

//         {registerSuccess && (
//           <div className="auth-alert success">
//             🎉 Account created successfully! Redirecting you to login...
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="auth-form" noValidate>
//           <div className="form-group">
//             <label htmlFor="fullName">Full Name <span className="req">*</span></label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               placeholder="e.g. Rahul Sharma"
//               value={formData.fullName}
//               onChange={handleChange}
//               className={errors.fullName ? 'input-error' : ''}
//             />
//             {errors.fullName && <span className="error-text">{errors.fullName}</span>}
//           </div>

//           <div className="form-row">
//             <div className="form-group col-half">
//               <label htmlFor="email">Email Address <span className="req">*</span></label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="name@example.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={errors.email ? 'input-error' : ''}
//               />
//               {errors.email && <span className="error-text">{errors.email}</span>}
//             </div>

//             <div className="form-group col-half">
//               <label htmlFor="phone">10-Digit Mobile <span className="req">*</span></label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 maxLength="10"
//                 placeholder="9876543210"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className={errors.phone ? 'input-error' : ''}
//               />
//               {errors.phone && <span className="error-text">{errors.phone}</span>}
//             </div>
//           </div>

//           {formData.role === 'technician' && (
//             <div className="form-group technician-highlight-box">
//               <label htmlFor="skillSpecialty">Primary Trade / Specialty <span className="req">*</span></label>
//               <select
//                 id="skillSpecialty"
//                 name="skillSpecialty"
//                 value={formData.skillSpecialty}
//                 onChange={handleChange}
//               >
//                 <option value="AC Repair">AC Repair & Maintenance</option>
//                 <option value="Refrigerator Repair">Refrigerator Technician</option>
//                 <option value="Washing Machine">Washing Machine Specialist</option>
//                 <option value="Plumber">Licensed Plumber</option>
//                 <option value="Electrician">Certified Electrician</option>
//                 <option value="RO Purifier">RO Water Filter Technician</option>
//               </select>
//               <span className="field-hint">Background verification documents will be verified on first visit.</span>
//             </div>
//           )}

//           <div className="form-row">
//             <div className="form-group col-half">
//               <label htmlFor="password">Password <span className="req">*</span></label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Min 6 characters"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={errors.password ? 'input-error' : ''}
//               />
//               {errors.password && <span className="error-text">{errors.password}</span>}
//             </div>

//             <div className="form-group col-half">
//               <label htmlFor="confirmPassword">Confirm Password <span className="req">*</span></label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 placeholder="Re-enter password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className={errors.confirmPassword ? 'input-error' : ''}
//               />
//               {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="btn-auth-submit"
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <span className="auth-spinner-wrap">
//                 <span className="spinner"></span> Creating Account...
//               </span>
//             ) : (
//               `Register as ${formData.role === 'customer' ? 'Customer' : 'Technician'}`
//             )}
//           </button>
//         </form>

//         <div className="auth-footer">
//           <p>
//             Already have an account?{' '}
//             <Link to="/login" className="auth-redirect-link">
//               Sign In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'customer',
    skillSpecialty: 'AC Repair',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({
      ...prev,
      role
    }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm your password.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          password: formData.password,
          role: formData.role
        })
      });

      const data = await response.json();

      if (response.ok) {
        if (data.token) localStorage.setItem('quickfix_token', data.token);
        if (data.user) {
          localStorage.setItem('quickfix_user', JSON.stringify({
            fullName: data.user.fullName || formData.fullName,
            email: data.user.email || formData.email,
            phone: formData.phone,
            role: data.user.role || formData.role
          }));
        }

        setIsLoading(false);
        setRegisterSuccess(true);

        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else {
        setIsLoading(false);
        setErrors((prev) => ({
          ...prev,
          email: data.message || 'Registration failed'
        }));
      }
    } catch (err) {
      setIsLoading(false);
      setErrors((prev) => ({
        ...prev,
        email: 'Backend server not responding. Please make sure node server is running.'
      }));
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-brand-logo">
            Quick<span className="brand-accent">Fix</span>
          </div>
          <h2>Create New Account</h2>
          <p>Join QuickFix as a customer or register as a service technician</p>
        </div>

        <div className="role-switch-container">
          <button
            type="button"
            className={`role-switch-btn ${formData.role === 'customer' ? 'active' : ''}`}
            onClick={() => handleRoleChange('customer')}
          >
            👤 I am a Customer
          </button>
          <button
            type="button"
            className={`role-switch-btn ${formData.role === 'technician' ? 'active' : ''}`}
            onClick={() => handleRoleChange('technician')}
          >
            🧰 I am a Technician
          </button>
        </div>

        {registerSuccess && (
          <div className="auth-alert success">
            🎉 Account created successfully! Redirecting you to login...
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <div className="form-group">
            <label htmlFor="fullName">Full Name <span className="req">*</span></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? 'input-error' : ''}
            />
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}
          </div>

          <div className="form-row">
            <div className="form-group col-half">
              <label htmlFor="email">Email Address <span className="req">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group col-half">
              <label htmlFor="phone">10-Digit Mobile <span className="req">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                maxLength="10"
                placeholder="9876543210"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'input-error' : ''}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>
          </div>

          {formData.role === 'technician' && (
            <div className="form-group technician-highlight-box">
              <label htmlFor="skillSpecialty">Primary Trade / Specialty <span className="req">*</span></label>
              <select
                id="skillSpecialty"
                name="skillSpecialty"
                value={formData.skillSpecialty}
                onChange={handleChange}
              >
                <option value="AC Repair">AC Repair & Maintenance</option>
                <option value="Refrigerator Repair">Refrigerator Technician</option>
                <option value="Washing Machine">Washing Machine Specialist</option>
                <option value="Plumber">Licensed Plumber</option>
                <option value="Electrician">Certified Electrician</option>
                <option value="RO Purifier">RO Water Filter Technician</option>
              </select>
              <span className="field-hint">Background verification documents will be verified on first visit.</span>
            </div>
          )}

          <div className="form-row">
            <div className="form-group col-half">
              <label htmlFor="password">Password <span className="req">*</span></label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Min 6 characters"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'input-error' : ''}
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="form-group col-half">
              <label htmlFor="confirmPassword">Confirm Password <span className="req">*</span></label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? 'input-error' : ''}
              />
              {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
            </div>
          </div>

          <button 
            type="submit" 
            className="btn-auth-submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="auth-spinner-wrap">
                <span className="spinner"></span> Creating Account...
              </span>
            ) : (
              `Register as ${formData.role === 'customer' ? 'Customer' : 'Technician'}`
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="auth-redirect-link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;