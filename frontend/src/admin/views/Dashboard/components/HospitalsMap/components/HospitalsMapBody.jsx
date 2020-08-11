import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { sizing, Box } from '@material-ui/core';

const containerStyle = {
  width: 'auto',
  height: '400px'
};
const center = {
  lat: 37.552345,
  lng: 126.937982
};

const HospitalsMapBody = () => {
    
    const [map, setMap] = React.useState(null)
 
    const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
        }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
        }, [])

    return <Box width="auto">
        <LoadScript
      googleMapsApiKey="AIzaSyBCVs3dKsLOC5xfB8pshVaPEpM7zBPjIZQ"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <>
          <Marker 
            position={{lat: 37.552345, lng: 126.937982}}
          />
        </>
      </GoogleMap>
    </LoadScript>
    </Box >
}

export default HospitalsMapBody