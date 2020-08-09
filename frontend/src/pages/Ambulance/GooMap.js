import React from 'react';
import {MDBBtn, MDBRow, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBModalFooter} from "mdbreact";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

const libraries = ["places"];


const center = {
    lat: 37.5717975,
    lng: 126.9325254,
};
const locations = [
    {
        name: "cutomerLocation",
        location: {
            lat: 37.57822294432912,
            lng: 126.92318541124448,
        }
    }

];

const GooMap=()=> {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyDyYteoY6q3NQwsEHFrXfan_q_9VlIVsxk",
        libraries,
    });
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";
    return (
        <>
            <div>
                <form
                    className="needs-validation"
                    noValidate
                    style={{padding:'4rem', margin:'0 auto', maxWidth:800}}
                >
                    <MDBRow >

                        <MDBCol md="8" className="mb-3">
                            <h2> 홍두깨님 회원정보</h2>

                            <label
                                htmlFor="defaultFormRegisterNameEx"
                            >
                                이름
                            </label>
                            <input
                                name="fname"
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                required
                                value="홍두깨"
                            />
                            <label
                                htmlFor="defaultFormRegisterNameEx"
                            >
                                아이디
                            </label>
                            <input
                                name="fname"
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                required
                                value="Izzy2020"
                            />
                            <label
                                htmlFor="defaultFormRegisterNameEx"
                            >
                                이메일
                            </label>
                            <input
                                name="fname"
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                placeholder="홍두깨"
                                required
                                value="izzy2020@gmail.com"
                            />
                            <label
                                htmlFor="defaultFormRegisterNameEx"
                            >
                                거주지
                            </label>

                            <input
                                name="fname"
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                required
                                value="서울 특별시 서대문구 연희동"
                            />
                            <br/><br/>

                            <Locate panTo={panTo} />
                            <Search panTo={panTo} />

                            <GoogleMap
                                id="map"
                                zoom={14}
                                center={center}
                                onClick={onMapClick}
                                onLoad={onMapLoad}
                            >
                                <Marker position={center}
                                        icon={{
                                            url: `/movingCar.png`,
                                            origin: new window.google.maps.Point(0, 0),
                                            anchor: new window.google.maps.Point(15, 15),
                                            scaledSize: new window.google.maps.Size(30, 30),
                                        }}/>
                                {
                                    locations.map(item => {
                                        return (
                                            <Marker key={item.name} position={item.location}
                                                    icon={{
                                                        url: `/movingCar.png`,
                                                        origin: new window.google.maps.Point(0, 0),
                                                        anchor: new window.google.maps.Point(15, 15),
                                                        scaledSize: new window.google.maps.Size(30, 30),
                                                    }}/>
                                        )
                                    })
                                }
                                {markers.map((marker) => (
                                    <Marker
                                        key={`${marker.lat}-${marker.lng}`}
                                        position={{ lat: marker.lat, lng: marker.lng }}
                                        onClick={() => {
                                            setSelected(marker);
                                        }}
                                        icon={{
                                            url: `/movingCar.png`,
                                            origin: new window.google.maps.Point(0, 0),
                                            anchor: new window.google.maps.Point(15, 15),
                                            scaledSize: new window.google.maps.Size(30, 30),
                                        }}
                                    />
                                ))}

                                {selected ? (
                                    <InfoWindow
                                        position={{ lat: selected.lat, lng: selected.lng }}

                                        onCloseClick={() => {
                                            setSelected(null);
                                        }}
                                    >
                                        <div>
                                            <h2>
                                                <span role="img" aria-label="bear">
                                                  🐻
                                                </span>{" "}
                                                Alert
                                            </h2>
                                            <p>Spotted  {console.log(selected.lat,selected.lng)}</p>
                                        </div>
                                    </InfoWindow>
                                ) : null}
                            </GoogleMap>
                        </MDBCol>
                    </MDBRow>
                </form>
            </div>
        </>
    )
}
function Locate({ panTo }) {
    return (
        <button
            className="locate"
            onClick={() => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    },
                    () => null
                );
            }}
        >
            <img src="/compass.svg" alt="compass" />
        </button>
    );
}
function Search({ panTo }) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 43.6532, lng: () => -79.3832 },
            radius: 100 * 1000,
        },
    });

    // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            console.log(lat,lng)
            panTo({ lat, lng });
        } catch (error) {
            console.log("😱 Error: ", error);
        }
    };

    return (
        <div className="search">
            <Combobox onSelect={handleSelect}>
                <ComboboxInput
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="Search your location"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" &&
                        data.map(({ id, description }) => (
                            <ComboboxOption key={id} value={description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    );
}
export default GooMap;