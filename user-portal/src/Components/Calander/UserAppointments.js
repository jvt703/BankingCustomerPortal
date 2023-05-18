import React from "react";

const UserAppointments = ({ onAppointmentDelete, appointments, getUsersAppointments }) =>{


 

  const handleDelete = async (appointmentId) => {
    try {
      const response = await fetch(`http://localhost:8081/appointments/user/1/${appointmentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log(`Appointment with ID ${appointmentId} deleted successfully.`);
        getUsersAppointments();
      } else {
        console.error('Failed to delete the appointment.');
      }
    } catch (error) {
      console.error('Error occurred while deleting the appointment:', error);
    }
  };
  

    return (
    <div>
      <h2>My Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.appointmentId}>
            <p>Appointment ID: {appointment.appointmentId}</p>
           <p>Appointment Date: {new Date(appointment.appointmentDateTime * 1000).toLocaleString()}</p>
            <button onClick={() => handleDelete(appointment.appointmentId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>)


}

export default UserAppointments;