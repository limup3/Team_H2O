import React, { useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import RTCVideo from "./RTCVideo"
import './TeleMedicine.css'
const TeleMedicine = () => {
    const [localStream, setLocalStream] = useState<MediaStream>();
  
  useEffect(()=>{
    navigator.mediaDevices.getUserMedia({video: true})
    .then(stream=>{
      setLocalStream(stream);
    })
  },[]);

  return (
    <Container>
      <RTCVideo
        mediaStream = {localStream}
      />
    </Container>
  );
}


export default TeleMedicine