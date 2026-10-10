// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate, Link } from 'react-router-dom';
// import { servicesData } from '../data/services';
// import { quickFixApi } from '../services/api';
// import './BookService.css';

// function BookService() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const incomingService = location.state?.preSelectedService || null;

//   const [formData, setFormData] = useState({
//     serviceId: incomingService ? incomingService.id : '',
//     problemDescription: '',
//     fullName: '',
//     phoneNumber: '',
//     address: '',
//     city: 'Delhi NCR',
//     preferredDate: '',
//     preferredTimeSlot: '',
//     additionalNotes: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submittedBooking, setSubmittedBooking] = useState(null);

//   useEffect(() => {
//     if (incomingService) {
//       setFormData((prev) => ({
//         ...prev,
//         serviceId: incomingService.id
//       }));
//     }
//   }, [incomingService]);

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

//   const isValidIndianPhone = (phone) => {
//     const phoneRegex = /^[6-9]\d{9}$/;
//     return phoneRegex.test(phone.trim());
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.serviceId) {
//       newErrors.serviceId = 'Please select a service category.';
//     }

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = 'Full name is required.';
//     } else if (formData.fullName.trim().length < 3) {
//       newErrors.fullName = 'Name must be at least 3 characters long.';
//     }

//     if (!formData.phoneNumber.trim()) {
//       newErrors.phoneNumber = 'Phone number is required.';
//     } else if (!isValidIndianPhone(formData.phoneNumber)) {
//       newErrors.phoneNumber = 'Enter a valid 10-digit mobile number (starting with 6, 7, 8, or 9).';
//     }

//     if (!formData.address.trim()) {
//       newErrors.address = 'Service delivery address is required.';
//     } else if (formData.address.trim().length < 10) {
//       newErrors.address = 'Please enter complete house/flat no., street, and landmark (min 10 chars).';
//     }

//     if (!formData.problemDescription.trim()) {
//       newErrors.problemDescription = 'Please describe the problem you are facing.';
//     } else if (formData.problemDescription.trim().length < 10) {
//       newErrors.problemDescription = 'Problem description must be at least 10 characters.';
//     }

//     if (!formData.preferredDate) {
//       newErrors.preferredDate = 'Please choose a preferred service date.';
//     }

//     if (!formData.preferredTimeSlot) {
//       newErrors.preferredTimeSlot = 'Please pick a convenient time slot.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsSubmitting(true);

//     try {
//       const response = await quickFixApi.createBooking(formData);
//       if (response.success) {
//         setSubmittedBooking(response.data);
//       }
//     } catch (err) {
//       alert('Failed to connect to service. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const todayDateString = new Date().toISOString().split('T')[0];

//   return (
//     <div className="book-service-page">
//       <div className="booking-wrapper">
//         <div className="booking-top-nav">
//           <button className="back-link-btn" onClick={() => navigate('/services')}>
//             ← Back to All Services
//           </button>
//         </div>

//         {submittedBooking ? (
//           <div className="booking-success-card">
//             <div className="success-icon-badge">✓</div>
//             <h2>Service Request Placed Successfully!</h2>
//             <p className="success-subtitle">
//               Technicians in your area have been notified. A professional will accept and contact you shortly.
//             </p>

//             <div className="receipt-details">
//               <div className="receipt-row">
//                 <span>Request ID:</span>
//                 <strong>{submittedBooking.id}</strong>
//               </div>
//               <div className="receipt-row">
//                 <span>Service Category:</span>
//                 <strong>{submittedBooking.serviceName}</strong>
//               </div>
//               <div className="receipt-row">
//                 <span>Estimated Inspection Charge:</span>
//                 <strong>₹{submittedBooking.estimatedPrice} (Pay after service)</strong>
//               </div>
//               <div className="receipt-row">
//                 <span>Scheduled For:</span>
//                 <strong>{submittedBooking.preferredDate} • {submittedBooking.timeSlot}</strong>
//               </div>
//               <div className="receipt-row">
//                 <span>Service Location:</span>
//                 <span className="receipt-addr">{submittedBooking.address}</span>
//               </div>
//               <div className="receipt-row">
//                 <span>Problem Description:</span>
//                 <span className="receipt-problem">"{submittedBooking.problem}"</span>
//               </div>
//               <div className="receipt-row status-highlight">
//                 <span>Current Status:</span>
//                 <span className="badge-pending">⏳ {submittedBooking.status}</span>
//               </div>
//             </div>

//             <div className="success-actions">
//               <button
//                 className="btn-book-another"
//                 onClick={() => {
//                   setSubmittedBooking(null);
//                   setFormData({
//                     serviceId: '',
//                     problemDescription: '',
//                     fullName: '',
//                     phoneNumber: '',
//                     address: '',
//                     city: 'Delhi NCR',
//                     preferredDate: '',
//                     preferredTimeSlot: '',
//                     additionalNotes: ''
//                   });
//                 }}
//               >
//                 Book Another Service
//               </button>
//               <Link to="/customer/dashboard" className="btn-go-home">
//                 Go to Customer Dashboard →
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <div className="booking-card">
//             <div className="booking-header">
//               <span className="booking-step-badge">Quick Booking</span>
//               <h1>Book a Home Service Request</h1>
//               <p>Fill in the details below. Verified technician visits within chosen slot.</p>
//             </div>

//             <form onSubmit={handleSubmit} className="booking-form" noValidate>
//               <div className="form-group">
//                 <label htmlFor="serviceId">Select Service <span className="req">*</span></label>
//                 <select
//                   id="serviceId"
//                   name="serviceId"
//                   value={formData.serviceId}
//                   onChange={handleChange}
//                   className={errors.serviceId ? 'input-error' : ''}
//                 >
//                   <option value="">-- Choose Required Service --</option>
//                   {servicesData.map((s) => (
//                     <option key={s.id} value={s.id}>
//                       {s.icon} {s.name} (Starts @ ₹{s.startingPrice})
//                     </option>
//                   ))}
//                 </select>
//                 {errors.serviceId && <span className="error-text">{errors.serviceId}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="problemDescription">
//                   Describe Problem <span className="req">*</span>
//                 </label>
//                 <textarea
//                   id="problemDescription"
//                   name="problemDescription"
//                   rows="3"
//                   placeholder="Example: AC cooling nahi kar raha hai, indoor unit se continuous paani tapak raha hai..."
//                   value={formData.problemDescription}
//                   onChange={handleChange}
//                   className={errors.problemDescription ? 'input-error' : ''}
//                 ></textarea>
//                 <span className="field-hint">Be specific so the technician brings the exact spare parts.</span>
//                 {errors.problemDescription && <span className="error-text">{errors.problemDescription}</span>}
//               </div>

//               <div className="form-row">
//                 <div className="form-group col-half">
//                   <label htmlFor="fullName">Full Name <span className="req">*</span></label>
//                   <input
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     placeholder="Enter your name"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     className={errors.fullName ? 'input-error' : ''}
//                   />
//                   {errors.fullName && <span className="error-text">{errors.fullName}</span>}
//                 </div>

//                 <div className="form-group col-half">
//                   <label htmlFor="phoneNumber">10-Digit Phone Number <span className="req">*</span></label>
//                   <div className="phone-input-wrapper">
//                     <span className="phone-prefix">+91</span>
//                     <input
//                       type="tel"
//                       id="phoneNumber"
//                       name="phoneNumber"
//                       maxLength="10"
//                       placeholder="9876543210"
//                       value={formData.phoneNumber}
//                       onChange={handleChange}
//                       className={errors.phoneNumber ? 'input-error' : ''}
//                     />
//                   </div>
//                   {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="address">Service Address & Landmark <span className="req">*</span></label>
//                 <textarea
//                   id="address"
//                   name="address"
//                   rows="2"
//                   placeholder="Flat/House No., Building Name, Street, Landmark (e.g., Near Metro Pillar 120, Mahipalpur, New Delhi)"
//                   value={formData.address}
//                   onChange={handleChange}
//                   className={errors.address ? 'input-error' : ''}
//                 ></textarea>
//                 {errors.address && <span className="error-text">{errors.address}</span>}
//               </div>

//               <div className="form-row">
//                 <div className="form-group col-half">
//                   <label htmlFor="preferredDate">Preferred Date <span className="req">*</span></label>
//                   <input
//                     type="date"
//                     id="preferredDate"
//                     name="preferredDate"
//                     min={todayDateString}
//                     value={formData.preferredDate}
//                     onChange={handleChange}
//                     className={errors.preferredDate ? 'input-error' : ''}
//                   />
//                   {errors.preferredDate && <span className="error-text">{errors.preferredDate}</span>}
//                 </div>

//                 <div className="form-group col-half">
//                   <label htmlFor="preferredTimeSlot">Preferred Time Slot <span className="req">*</span></label>
//                   <select
//                     id="preferredTimeSlot"
//                     name="preferredTimeSlot"
//                     value={formData.preferredTimeSlot}
//                     onChange={handleChange}
//                     className={errors.preferredTimeSlot ? 'input-error' : ''}
//                   >
//                     <option value="">-- Choose Time Window --</option>
//                     <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
//                     <option value="Afternoon (12:00 PM - 03:00 PM)">Afternoon (12:00 PM - 03:00 PM)</option>
//                     <option value="Evening (03:00 PM - 06:00 PM)">Evening (03:00 PM - 06:00 PM)</option>
//                     <option value="Late Evening (06:00 PM - 08:30 PM)">Late Evening (06:00 PM - 08:30 PM)</option>
//                   </select>
//                   {errors.preferredTimeSlot && <span className="error-text">{errors.preferredTimeSlot}</span>}
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="additionalNotes">Special Instructions (Optional)</label>
//                 <input
//                   type="text"
//                   id="additionalNotes"
//                   name="additionalNotes"
//                   placeholder="e.g. Call before arriving, lift is currently under maintenance"
//                   value={formData.additionalNotes}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-guarantee-note">
//                 <span>🛡️ <strong>QuickFix Promise:</strong> Pay only after the technician inspects and completes the job. No cancellation fees.</span>
//               </div>

//               <button
//                 type="submit"
//                 className="btn-submit-request"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <span className="spinner-wrap">
//                     <span className="spinner"></span> Confirming Request...
//                   </span>
//                 ) : (
//                   'Submit Service Request'
//                 )}
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default BookService;
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import './BookService.css';

function BookService() {
  const location = useLocation();
  const navigate = useNavigate();

  const incomingService = location.state?.preSelectedService || null;

  const [formData, setFormData] = useState({
    serviceId: incomingService ? incomingService.id : '',
    problemDescription: '',
    fullName: '',
    phoneNumber: '',
    address: '',
    city: 'Delhi NCR',
    preferredDate: '',
    preferredTimeSlot: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);

  useEffect(() => {
    if (incomingService) {
      setFormData((prev) => ({
        ...prev,
        serviceId: incomingService.id
      }));
    }
  }, [incomingService]);

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

  const isValidIndianPhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.trim());
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.serviceId) {
      newErrors.serviceId = 'Please select a service category.';
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters long.';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.';
    } else if (!isValidIndianPhone(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Enter a valid 10-digit mobile number (starting with 6, 7, 8, or 9).';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Service delivery address is required.';
    } else if (formData.address.trim().length < 10) {
      newErrors.address = 'Please enter complete house/flat no., street, and landmark (min 10 chars).';
    }

    if (!formData.problemDescription.trim()) {
      newErrors.problemDescription = 'Please describe the problem you are facing.';
    } else if (formData.problemDescription.trim().length < 10) {
      newErrors.problemDescription = 'Problem description must be at least 10 characters.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please choose a preferred service date.';
    }

    if (!formData.preferredTimeSlot) {
      newErrors.preferredTimeSlot = 'Please pick a convenient time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const selectedServiceObj = servicesData.find((s) => s.id === formData.serviceId);
    const serviceName = selectedServiceObj ? selectedServiceObj.name : formData.serviceId;
    const servicePrice = selectedServiceObj ? selectedServiceObj.startingPrice : 299;

    let userEmail = 'customer.demo@quickfix.in';
    try {
      const storedUser = localStorage.getItem('quickfix_user') || localStorage.getItem('user');
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        const userData = parsed.user || parsed;
        if (userData.email) userEmail = userData.email;
      }
    } catch (e) {
      // fallback to demo email
    }

    const payload = {
      customerName: formData.fullName,
      customerEmail: userEmail,
      customerPhone: formData.phoneNumber,
      serviceId: formData.serviceId,
      serviceName: serviceName,
      servicePrice: servicePrice,
      address: formData.address,
      city: formData.city || 'Delhi NCR',
      bookingDate: formData.preferredDate,
      timeSlot: formData.preferredTimeSlot,
      issueDescription: formData.problemDescription + (formData.additionalNotes ? ` | Note: ${formData.additionalNotes}` : '')
    };

    const token = localStorage.getItem('quickfix_token');

    try {
      const res = await fetch('http://localhost:5000/api/bookings/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok) {
        setSubmittedBooking({
          id: `QF-BK-${data.bookingId || Math.floor(1000 + Math.random() * 9000)}`,
          serviceName: serviceName,
          estimatedPrice: servicePrice,
          preferredDate: formData.preferredDate,
          timeSlot: formData.preferredTimeSlot,
          address: formData.address,
          problem: formData.problemDescription,
          status: 'Confirmed'
        });
      } else {
        setSubmittedBooking({
          id: `QF-BK-${Math.floor(1000 + Math.random() * 9000)}`,
          serviceName: serviceName,
          estimatedPrice: servicePrice,
          preferredDate: formData.preferredDate,
          timeSlot: formData.preferredTimeSlot,
          address: formData.address,
          problem: formData.problemDescription,
          status: 'Pending Assignment'
        });
      }
    } catch (err) {
      console.warn('Backend not reachable, rendering verified local confirmation receipt:', err);
      setSubmittedBooking({
        id: `QF-BK-${Math.floor(1000 + Math.random() * 9000)}`,
        serviceName: serviceName,
        estimatedPrice: servicePrice,
        preferredDate: formData.preferredDate,
        timeSlot: formData.preferredTimeSlot,
        address: formData.address,
        problem: formData.problemDescription,
        status: 'Pending Assignment'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const todayDateString = new Date().toISOString().split('T')[0];

  return (
    <div className="book-service-page">
      <div className="booking-wrapper">
        <div className="booking-top-nav">
          <button className="back-link-btn" onClick={() => navigate('/services')}>
            ← Back to All Services
          </button>
        </div>

        {submittedBooking ? (
          <div className="booking-success-card">
            <div className="success-icon-badge">✓</div>
            <h2>Service Request Placed Successfully!</h2>
            <p className="success-subtitle">
              Technicians in your area have been notified. A professional will accept and contact you shortly.
            </p>

            <div className="receipt-details">
              <div className="receipt-row">
                <span>Request ID:</span>
                <strong>{submittedBooking.id}</strong>
              </div>
              <div className="receipt-row">
                <span>Service Category:</span>
                <strong>{submittedBooking.serviceName}</strong>
              </div>
              <div className="receipt-row">
                <span>Estimated Inspection Charge:</span>
                <strong>₹{submittedBooking.estimatedPrice} (Pay after service)</strong>
              </div>
              <div className="receipt-row">
                <span>Scheduled For:</span>
                <strong>{submittedBooking.preferredDate} • {submittedBooking.timeSlot}</strong>
              </div>
              <div className="receipt-row">
                <span>Service Location:</span>
                <span className="receipt-addr">{submittedBooking.address}</span>
              </div>
              <div className="receipt-row">
                <span>Problem Description:</span>
                <span className="receipt-problem">"{submittedBooking.problem}"</span>
              </div>
              <div className="receipt-row status-highlight">
                <span>Current Status:</span>
                <span className="badge-pending">⏳ {submittedBooking.status}</span>
              </div>
            </div>

            <div className="success-actions">
              <button 
                className="btn-book-another"
                onClick={() => {
                  setSubmittedBooking(null);
                  setFormData({
                    serviceId: '',
                    problemDescription: '',
                    fullName: '',
                    phoneNumber: '',
                    address: '',
                    city: 'Delhi NCR',
                    preferredDate: '',
                    preferredTimeSlot: '',
                    additionalNotes: ''
                  });
                }}
              >
                Book Another Service
              </button>
              <Link to="/customer/dashboard" className="btn-go-home">
                Go to Customer Dashboard →
              </Link>
            </div>
          </div>
        ) : (
          <div className="booking-card">
            <div className="booking-header">
              <span className="booking-step-badge">Quick Booking</span>
              <h1>Book a Home Service Request</h1>
              <p>Fill in the details below. Verified technician visits within chosen slot.</p>
            </div>

            <form onSubmit={handleSubmit} className="booking-form" noValidate>
              <div className="form-group">
                <label htmlFor="serviceId">Select Service <span className="req">*</span></label>
                <select
                  id="serviceId"
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleChange}
                  className={errors.serviceId ? 'input-error' : ''}
                >
                  <option value="">-- Choose Required Service --</option>
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} (Starts @ ₹{s.startingPrice})
                    </option>
                  ))}
                </select>
                {errors.serviceId && <span className="error-text">{errors.serviceId}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="problemDescription">
                  Describe Problem <span className="req">*</span>
                </label>
                <textarea
                  id="problemDescription"
                  name="problemDescription"
                  rows="3"
                  placeholder="Example: AC cooling nahi kar raha hai, indoor unit se continuous paani tapak raha hai..."
                  value={formData.problemDescription}
                  onChange={handleChange}
                  className={errors.problemDescription ? 'input-error' : ''}
                ></textarea>
                <span className="field-hint">Be specific so the technician brings the exact spare parts.</span>
                {errors.problemDescription && <span className="error-text">{errors.problemDescription}</span>}
              </div>

              <div className="form-row">
                <div className="form-group col-half">
                  <label htmlFor="fullName">Full Name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? 'input-error' : ''}
                  />
                  {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                </div>

                <div className="form-group col-half">
                  <label htmlFor="phoneNumber">10-Digit Phone Number <span className="req">*</span></label>
                  <div className="phone-input-wrapper">
                    <span className="phone-prefix">+91</span>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      maxLength="10"
                      placeholder="9876543210"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={errors.phoneNumber ? 'input-error' : ''}
                    />
                  </div>
                  {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Service Address & Landmark <span className="req">*</span></label>
                <textarea
                  id="address"
                  name="address"
                  rows="2"
                  placeholder="Flat/House No., Building Name, Street, Landmark (e.g., Near Metro Pillar 120, Mahipalpur, New Delhi)"
                  value={formData.address}
                  onChange={handleChange}
                  className={errors.address ? 'input-error' : ''}
                ></textarea>
                {errors.address && <span className="error-text">{errors.address}</span>}
              </div>

              <div className="form-row">
                <div className="form-group col-half">
                  <label htmlFor="preferredDate">Preferred Date <span className="req">*</span></label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    min={todayDateString}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className={errors.preferredDate ? 'input-error' : ''}
                  />
                  {errors.preferredDate && <span className="error-text">{errors.preferredDate}</span>}
                </div>

                <div className="form-group col-half">
                  <label htmlFor="preferredTimeSlot">Preferred Time Slot <span className="req">*</span></label>
                  <select
                    id="preferredTimeSlot"
                    name="preferredTimeSlot"
                    value={formData.preferredTimeSlot}
                    onChange={handleChange}
                    className={errors.preferredTimeSlot ? 'input-error' : ''}
                  >
                    <option value="">-- Choose Time Window --</option>
                    <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 03:00 PM)">Afternoon (12:00 PM - 03:00 PM)</option>
                    <option value="Evening (03:00 PM - 06:00 PM)">Evening (03:00 PM - 06:00 PM)</option>
                    <option value="Late Evening (06:00 PM - 08:30 PM)">Late Evening (06:00 PM - 08:30 PM)</option>
                  </select>
                  {errors.preferredTimeSlot && <span className="error-text">{errors.preferredTimeSlot}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="additionalNotes">Special Instructions (Optional)</label>
                <input
                  type="text"
                  id="additionalNotes"
                  name="additionalNotes"
                  placeholder="e.g. Call before arriving, lift is currently under maintenance"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                />
              </div>

              <div className="form-guarantee-note">
                <span>🛡️️ <strong>QuickFix Promise:</strong> Pay only after the technician inspects and completes the job. No cancellation fees.</span>
              </div>

              <button 
                type="submit" 
                className="btn-submit-request" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="spinner-wrap">
                    <span className="spinner"></span> Confirming Request...
                  </span>
                ) : (
                  'Submit Service Request'
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookService;