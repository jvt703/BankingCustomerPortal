import React from 'react';


const renderButtons = (slots,date, handleGenerate) => {
    const handleButtonClick = (hour, minute) => {
    const clickedDateTime = new Date(date);
    clickedDateTime.setHours(hour, minute);
    const unixTime = clickedDateTime.getTime() / 1000;
    // handleGenerate();
    console.log(unixTime);
  };

        
  const buttons = slots.map((timeSlot, index) => {
    const [time, period] = timeSlot.split(' '); 
    const [hour, minute] = timeSlot.split(':').map((part) => parseInt(part, 10));
  
    let adjusted = ""
    if(period=="PM" && hour>12){
      adjusted = hour+12;
      console.log(adjusted,"here the adjusted")
    }else{
      adjusted=hour;
    }
    
    return (
      <button
        key={index}
        className="m-1 view-button w-100"
        onClick={() => handleButtonClick(adjusted, minute)}
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
      </div>
);
};

  export default renderButtons;