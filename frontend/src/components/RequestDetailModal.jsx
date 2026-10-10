import React from 'react';
import StatusBadge from './StatusBadge';
import './RequestDetailModal.css';

function RequestDetailModal({ request, onClose }) {
  if (!request) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container detail-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-area">
            <div>
              <div className="req-header-badge-row">
                <span className="req-id-pill">{request.id}</span>
                <StatusBadge status={request.status} />
              </div>
              <h2>{request.serviceName}</h2>
              <span className="created-timestamp">Booked on: {request.createdAt}</span>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">✕</button>
        </div>

        <div className="modal-body">
          <div className="modal-section timeline-section">
            <h3 className="section-heading">Service Progress Tracker</h3>
            <div className="vertical-timeline">
              {request.timeline.map((stepItem, index) => (
                <div 
                  key={index} 
                  className={`timeline-node ${stepItem.done ? 'completed' : 'pending'}`}
                >
                  <div className="timeline-marker">
                    {stepItem.done ? '✓' : index + 1}
                  </div>
                  <div className="timeline-info">
                    <span className="step-name">{stepItem.step}</span>
                    <span className="step-time">{stepItem.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3 className="section-heading">Assigned Service Professional</h3>
            {request.technician ? (
              <div className="tech-profile-card">
                <div className="tech-avatar">{request.technician.photoIcon}</div>
                <div className="tech-details">
                  <h4>{request.technician.name}</h4>
                  <p className="tech-rating">Certified Partner • {request.technician.rating}</p>
                  <a href={`tel:${request.technician.phone}`} className="tech-phone-link">
                    📞 {request.technician.phone}
                  </a>
                </div>
              </div>
            ) : (
              <div className="tech-unassigned-notice">
                <span className="pulse-icon">⏳</span>
                <div>
                  <strong>Assigning Best Rated Technician</strong>
                  <p>Our algorithm is matching your request with nearby verified pros. You will get an SMS notification shortly.</p>
                </div>
              </div>
            )}
          </div>

          <div className="modal-section">
            <h3 className="section-heading">Problem Description</h3>
            <div className="desc-box">
              <p>"{request.problem}"</p>
            </div>
          </div>

          <div className="modal-section two-col-info">
            <div className="info-block">
              <span className="info-label">Scheduled Date & Slot</span>
              <p>📅 {request.preferredDate}</p>
              <p>⏰ {request.timeSlot}</p>
            </div>
            <div className="info-block">
              <span className="info-label">Service Address</span>
              <p>📍 {request.address}</p>
              <p>🏙️ {request.city}</p>
            </div>
          </div>

          <div className="modal-section billing-box">
            <div className="billing-row">
              <span>Standard Inspection & Diagnosis</span>
              <span>₹{request.estimatedPrice}</span>
            </div>
            {request.finalAmount && (
              <div className="billing-row highlight-final">
                <span>Final Paid Amount (with parts)</span>
                <strong>₹{request.finalAmount}</strong>
              </div>
            )}
            <div className="billing-note">
              <span>🛡️ Cash on delivery / UPI paid to technician after full satisfaction.</span>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-actions-right">
            <button className="btn-cancel" onClick={onClose}>
              Close Tracker
            </button>
            {request.status === 'Completed' && (
              <button 
                className="btn-confirm-book"
                onClick={() => alert('Review & Rating modal will open here!')}
              >
                Rate Technician ★
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestDetailModal;