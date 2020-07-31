import React, { Component } from 'react';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import '../../helpers/styles/Map.css'
const mapStyles = {
    width: '73%',
    height: '70%'
};

export class MapContainer extends Component {



    render() {
        return (
            <div className="womap_container">
                <div className="womap">
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 37.562457,
                    lng: 126.941089
                }}
            />
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD_d0nY1RTtSkpyu2iY4j85GVIv58DL4NI'
})(MapContainer);