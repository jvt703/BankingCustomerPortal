import React, { useEffect, useState } from "react";

const UserAppointments = () =>{
const [appointments, setAppointments] = useState([])

 const getUsersAppointments = async () => {
  

    const userId = 1;

    try {
      const response = await fetch(`http://localhost:8081/appointments/user/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.ok) {
        const appointments = await response.json();
        setAppointments(appointments)
        console.log(appointments)
      } else {
        console.error('Failed to fetch appointments from the API.');
      }
    } catch (error) {
      console.error('Error occurred while fetching appointments:', error);
    }
  }

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
  useEffect(() => {
    getUsersAppointments();
  }, []);

    return (
    <div>
      <h2>My Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.appointmentId}>
            <p>Appointment ID: {appointment.userId}</p>
            <p>Appointment Date: {appointment.branchName}</p>
           <p>Appointment Date: {new Date(appointment.appointmentDateTime * 1000).toLocaleString()}</p>
            <button onClick={() => handleDelete(appointment.appointmentId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>)


}

export default UserAppointments;