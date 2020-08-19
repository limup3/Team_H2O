import React, { useState } from "react";
import './Reservation.css'
import Payment from "../../layout/Payment";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MDBCard, MDBCardBody, MDBCardTitle,  MDBCol, MDBRow } from 'mdbreact';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const TelReservation = ({match}) =>  {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState("2019-08-18T10:30")

  console.log(JSON.stringify(match.params))

  return (

    <div>

<MDBCol>
  <br/><br/><br/>
      <MDBCard 
      style={{ width: "40%",
               left: "35%",
            }}>
        <br/>      
        <MDBCardTitle cascade className='text-center'>
              <strong>화상진료 예약</strong>
            </MDBCardTitle>
            <br/>  
          <div className={"reservation"}>
          <form className={classes.container} noValidate>
         <TextField
        id="datetime-local"
        label="Reservation"
        type="datetime-local"
        value={selectedDate}
        onChange={e => setSelectedDate(e.target.value)}
        
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
          </div>
            
            <br/>  
        <MDBCardBody>
          
        <h5>            
              병원 이름 : {match.params.hospitalName}{' '}            
        </h5>
        <br/>
        <h5>           
              의사 : {match.params.name}{' '}          
        </h5>
        <br/>
        <h5>
              진료과 : {match.params.medicalSubject}{' '}
        </h5>
        <br/>
        <h5>
              예약 비용 : 5000원{' '}
        </h5>
        <br/>
        <br/>  
        <br/>  

    <MDBRow>
    <MDBCol md="4">
    </MDBCol>
    <MDBCol md="8">
    <Payment/>
    </MDBCol>
    </MDBRow>
  
    <br/>    
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>

  );
}
export default TelReservation