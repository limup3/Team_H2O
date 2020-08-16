import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker,{Calendar, utils} from 'react-modern-calendar-datepicker';
import './Reservation.css'
import { MDBBtn, MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import TimeKeeper from 'react-timekeeper';

const Reservation = () => {
    const [selectedDay, setSelectedDay] = useState(utils().getToday()); 
    const [time, setTime] = useState('12:00pm')

    const renderCustomInput = ({ ref }) => (
      <input 
        readOnly = "true"
        ref={ref} 
        placeholder="Select a Day"
        value ={`${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`}
        style={{
          textAlign: 'center',
          padding: '0.3rem 0.5rem',
          fontSize: 'medium',
          border: '1px solid #184f90',
          borderRadius: '50px',
          boxShadow: '0 0.5rem 1rem rgba(156, 136, 255, 0.2)',
          color: '#184f90',
          outline: 'none',
          margin: '1.3rem',
          
        }}
        className="my-custom-input-class" 
      />
    )
  const renderCalendarInput = ({ ref }) => (
  <input
      ref={ref} 
      value ={`${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`}
      style={{
      width : '100%',
      height : '100%',
      }}
      className="my-custom-input-class" 
  />
  ) 

    return (
     
      
      <MDBContainer>
        <br/>
        <MDBRow>
        <MDBCol md="8"></MDBCol>

      </MDBRow>
        <br/>
  <MDBRow>
    <MDBCol md="4">
      <Calendar
            className="Calendar"
            value={selectedDay}
            onChange={setSelectedDay}
            calendarClassName="custom-calendar" 
            shouldHighlightWeekends
            colorPrimary="#a742f494" 
      />
      <DatePicker
        value={selectedDay}
        onChange={setSelectedDay}
        renderInput={renderCustomInput}
        shouldHighlightWeekends
      />
    </MDBCol>
    <MDBCol md="4" className="TimeKeeper">
    <TimeKeeper
          
          time={time}
          onChange={(newTime) => setTime(newTime.formatted12)}
      />
      
      <br/><br/><br/><br/><br/><br/>

      <MDBBtn gradient="aqua" size="lg">Time is {time}</MDBBtn>
    </MDBCol>
    <MDBCol md="4">
        <MDBBtn className="buttonPosition" gradient="purple" size="lg">예약</MDBBtn>
        </MDBCol>
  </MDBRow>
  
</MDBContainer>


      
    );
  };

export default Reservation