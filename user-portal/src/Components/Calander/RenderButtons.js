import React, { useState } from "react";
import TimeSlotModal from "./Modal";

const RenderButtons = ({slots, currentDate, handleGenerate, getUsersAppointments}) => {
  // const handleButtonClick = (hour, minute) => {
  //   // const clickedDateTime = new Date(date);
  //   // clickedDateTime.setHours(hour, minute);
  //   // const unixTime = clickedDateTime.getTime() / 1000;
  //   // // handleGenerate();
  //   // console.log(unixTime);
  // };
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const openModal = (hour, minute) => {

     const clickedDateTime = new Date(currentDate);
    clickedDateTime.setHours(hour, minute);
    const unixTime = clickedDateTime.getTime() / 1000;

    setSelectedTimeSlot(unixTime);
    setModalOpen(true);
    
  };

  const closeModal = () => {
    setSelectedTimeSlot("");
    setModalOpen(false);
  };

  const handleConfirm = async (timeSlot) => {
    
  const appointmentData = {
    userId: 1,
    branchId: 1,
    appointmentDateTime: timeSlot,
    bankerId: 1,
    serviceTypeId: 2
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

  const buttons = slots.map((timeSlot, index) => {
    const [time, period] = timeSlot.split(" ");
    const [hour, minute] = timeSlot
      .split(":")
      .map((part) => parseInt(part, 10));

    let adjusted = "";
    if (period === "PM" && hour < 12) {
      
      adjusted = hour + 12;
    } else {
      adjusted = hour;
    }
    return (
      <button
        key={index}
        className="m-1 view-button w-100"
        onClick={() => openModal(adjusted, minute)}
      >
        {timeSlot}
      </button>
    );
  });
  const buttonsPerColumn = Math.ceil(10);
  const column1 = buttons.slice(0, buttonsPerColumn);
  const column2 = buttons.slice(buttonsPerColumn);

  return (
    <div className="d-flex flex-fill">
      <div className="d-flex flex-column m-1 flex-fill align-items-center">
        {column1}
      </div>
      <div className="d-flex flex-column m-1 flex-fill align-items-center">
        {column2}
      </div>
      {modalOpen && (
        <TimeSlotModal
          isOpen={modalOpen}
          onClose={closeModal}
          onConfirm={handleConfirm}
          selectedTimeSlot={selectedTimeSlot}
        />
      )}
    </div>
  );
};

export default RenderButtons;
