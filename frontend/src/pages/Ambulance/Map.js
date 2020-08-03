import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker, Map } from 'google-maps-react';
import '../../helpers/styles/Map.css'


const mapStyles = {
    width: '73%',
    height: '70%'
};


export class MapContainer extends Component {
    state = {
        showingInfoWindow: true,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {},      //Shows the infoWindow to the selected place upon a marker
        animation : 2
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

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
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'여기는 신촌 연세대학교입니다.'}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
                </div>
            </div>


        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDyYteoY6q3NQwsEHFrXfan_q_9VlIVsxk'
})(MapContainer);