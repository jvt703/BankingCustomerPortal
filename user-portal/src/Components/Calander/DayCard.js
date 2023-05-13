import React from 'react';
import renderButtons from './RenderButtons';

const DayCard = ({ date }) => {
  // Generate an array of time slots from 9 am to 5 pm with 30-minute increments
  const timeSlots = [];
  const startTime = new Date().setHours(8, 0, 0, 0); // Set start time to 9 am
  const endTime = new Date().setHours(17, 0, 0, 0); // Set end time to 5 pm

  for (let currentTime = startTime; currentTime <= endTime; currentTime += 30 * 60 * 1000) {
    const time = new Date(currentTime);
    const timeString = time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    timeSlots.push(timeString);
  }
  const currentDate = new Date(date).toLocaleDateString([], {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  

  return (
    <div className="card m-1 w-25">
     <h2>{currentDate}</h2>
        {renderButtons(timeSlots, currentDate)}
    </div>
  );
};

export default DayCard;