import React, { useEffect, useState } from 'react';

const TimeSlotModal = ({ isOpen, onClose, selectedTimeSlot, getUsersAppointments, handleGenerate}) => {

  
  const [serviceTypeId, setServiceTypeId] = useState('');
  const [serviceTypeList, setServiceTypeList] = useState([])

 useEffect(() => {
    const fetchServiceTypes = async () => {
      try {
        const response = await await fetch(`http://localhost:8081/servicetype/serviceTypes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
        if (response.ok) {
          const data = await response.json();
          setServiceTypeList(data);
          setServiceTypeId(data[0].id)
        } else {
          throw new Error('Error fetching service types');
        }
      } catch (error) {
        console.error('Error fetching service types:', error);
      }
    };

    fetchServiceTypes();
  }, []);




  const handleServiceTypeChange = (event) => {
    const selectedServiceTypeId = event.target.value;
    setServiceTypeId(selectedServiceTypeId);
  };
  
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

  const handleConfirmclick = () => {
    handleConfirm(selectedTimeSlot);
    onClose();

  };
  const handleConfirm = async (timeSlot) => {
    
  const appointmentData = {
    userId: 1,
    branchId: 1,
    appointmentDateTime: timeSlot,
    bankerId: 1,
    serviceTypeId: serviceTypeId
  };
  
  try {
    const response = await fetch('http://localhost:8081/appointments/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointmentData),
    });

    if (response.ok) {
      // Handle success response
      console.log('Appointment created successfully');
      handleGenerate()
      getUsersAppointments()
    } else {
      // Handle error response
      console.error('Failed to create appointment');
    }
  } catch (error) {
    console.error('Error occurred while creating appointment:', error);
  }
};

  const handleCancel = () => {
    onClose();
  };

  return (
 <div className={`modal w-25 h-25`} style={modalStyle}>
    <div className="modal-content">
      <h2>Confirm Appointment for {selectedTimeSlot}?</h2>
      <div className="form-group">
        <label htmlFor="serviceTypeId">Service Type:</label>
        <select id="serviceTypeId" name="serviceTypeId" onChange={handleServiceTypeChange}>
          {serviceTypeList.map(serviceType => (
            <option key={serviceType.id} value={serviceType.id}>
              {serviceType.typeName}
            </option>
          ))}
        </select>
      </div>
      <div className="modal-actions">
        <button className="btn btn-confirm" onClick={handleConfirmclick}>
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