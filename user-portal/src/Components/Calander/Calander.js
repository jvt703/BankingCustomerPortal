import React, { useState } from "react";
import DayCard from "./DayCard";
import HeaderComponent from "../Headercomponent";
import Section from "../Section/Section";
import Dropdown from "./BranchDropdown";
import UserAppointments from "./UserAppointments";


 const getNextThreeDays = (currentDayIndex) => {
    const today = new Date();
    const nextThreeDays = [];
    for (let i = currentDayIndex; i < currentDayIndex + 1; i++) {
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + i);
      nextThreeDays.push(nextDay);
    }
    return nextThreeDays;
  };


const Calander = () => {
  const [branchId, setBranchId] = useState('');
  const [currentDayIndex, setCurrentDayIndex] = useState(1); // Start with index 1 to display the second day as initial state

 

  const handleNextDay = () => {
    setCurrentDayIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousDay = () => {
    setCurrentDayIndex((prevIndex) => prevIndex - 1);
  };

  const nextThreeDays = getNextThreeDays(currentDayIndex);

  return (
    <>
      <HeaderComponent pageName="Calendar" pageDescription="Reserve Appointment" />
      <Dropdown branchId={branchId} setBranchId={setBranchId} />
      <Section title="Appointments">
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary m-1" onClick={handlePreviousDay} disabled={currentDayIndex === 1}>
            Previous Day
          </button>
          {nextThreeDays.map((date, index) => (
            <DayCard key={index} date={date} branchId={branchId}/>
          ))}
          <button
            className="btn btn-primary m-1"
            onClick={handleNextDay}
            disabled={currentDayIndex === 31} // Assuming 3 days are displayed, so the maximum currentDayIndex would be 5 (7 - 3)
          >
            Next Day
          </button>
        </div>
        <UserAppointments/>
      </Section>
      
    </>
  );
};


export default Calander;