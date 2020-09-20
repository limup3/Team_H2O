import React, { useState } from 'react'
import shortId from 'shortid'
import '../../helpers/styles/room.css'

const goToRoom = (history, roomId) => {
    history.push(`/H2O/TeleMedicine/${roomId}`)
}


const RtcRoom = ({history}) => {
    let [roomId, setRoomId] = useState("");
    
    return (

        <div className="room-wrapper">
        <div className="enter-room-container">
        <form>
            <input type="text" value={roomId} placeholder="Room id" onChange={(event) => {
                setRoomId(event.target.value)
            }}/>
            <button type='button' onClick={() => {
                goToRoom(history, roomId)
                console.log(JSON.stringify(history))
                console.log(history)
            }}>Enter</button>
        </form>
    </div>
    </div>

            )
}

export default RtcRoom