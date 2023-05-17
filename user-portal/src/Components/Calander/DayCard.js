import React, { useEffect, useState } from 'react';
import renderButtons from './RenderButtons';

const DayCard = ({ date, branchId }) => {
  // Generate an array of time slots from 9 am to 5 pm with 30-minute increments
  // const timeSlots = [];


    const [timeSlots, setTimeSlots] = useState([]);


     
  

  const generateTimeSlots = (appointments) => {
    const startTime = new Date(date).setHours(8, 0, 0, 0); // Set start time to 9 am
    const endTime = new Date(date).setHours(17, 0, 0, 0); // Set end time to 5 pm
    
    const timeSlots = [];
    for (let currentTime = startTime; currentTime <= endTime; currentTime += 30 * 60 * 1000) {
      const time = new Date(currentTime);
      const timeString = time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
      
      // Check if the current time slot is available by comparing with the appointments
      const isAvailable = appointments.every((appointment) => {
        
        
       return appointment !== Math.floor(new Date(currentTime).getTime() / 1000)
      
      });

      if (isAvailable) {
        timeSlots.push(timeString);
      }
    }

    return timeSlots;
  };

   const getAllAppointments = async () => {
    const startTime = new Date(date).setHours(8, 0, 0, 0); // Set start time to 8 am
    const endTime = new Date(date).setHours(17, 0, 0, 0); // Set end time to 5 pm

    const queryParams = new URLSearchParams({
      startDateTime: Math.floor(new Date(startTime).getTime() / 1000).toString(),
      endDateTime: Math.floor(new Date(endTime).getTime() / 1000).toString(),
      branchId: 1,
      });

    try {
      const response = await fetch(`http://localhost:8081/appointments/byBranchAndDate?${queryParams}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.ok) {
        const appointments = await response.json();
    
       const timeSlots = generateTimeSlots(appointments.map(appointment => appointment.appointmentDateTime));
        setTimeSlots(timeSlots);
      } else {
        console.error('Failed to fetch appointments from the API.');
      }
    } catch (error) {
      console.error('Error occurred while fetching appointments:', error);
    }
  }

  useEffect(() => {
     
  getAllAppointments();
  }, [date, branchId]);
  const handleGenerate = async () => {
    await getAllAppointments();
  };

  const currentDate = new Date(date).toLocaleDateString([], {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  

  return (
    <div className="card m-1 w-25">
     <h2>{currentDate}</h2>
        {renderButtons(timeSlots, currentDate, handleGenerate)}
    </div>
  );
};

export default DayCard;