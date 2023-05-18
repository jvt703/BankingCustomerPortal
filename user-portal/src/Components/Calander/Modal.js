import React, { useState } from 'react';

const TimeSlotModal = ({ isOpen, onClose, onConfirm, selectedTimeSlot}) => {
  const modalStyle = {
    display: 'block',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  const handleConfirm = () => {
    onConfirm(selectedTimeSlot);
    onClose();

  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className={`modal w-25 h-25`} style={modalStyle}>
      <div className="modal-content">
        <h2>Confirm Appointment for {selectedTimeSlot}?</h2>
        <div className="modal-actions">
          <button className="btn btn-confirm" onClick={handleConfirm}>
            Confirm
          </button>
          <button className="btn btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeSlotModal;