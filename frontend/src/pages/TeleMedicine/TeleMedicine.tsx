import React, { useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import RTCVideo from "./RTCVideo"

const TeleMedicine = () => {
    const [localStream, setLocalStream] = useState<MediaStream>();
  
  useEffect(()=>{
    navigator.mediaDevices.getUserMedia({video: true})
    .then(stream=>{
      setLocalStream(stream);
    })
  },[]);

  return (
    <div>
      <RTCVideo
        mediaStream = {localStream}
      />
    </div>
  );
}


export default TeleMedicine