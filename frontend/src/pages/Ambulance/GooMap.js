import React,{useState,useCallback,useRef} from "react";
import { GoogleMap,useLoadScript,Marker,InfoWindow,} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode,getLatLng,getZipCode} from "use-places-autocomplete";
import Geocode from 'react-geocode'
import {Combobox,ComboboxInput, ComboboxPopover,ComboboxList, ComboboxOption,} from "@reach/combobox";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import './map.css'
import "@reach/combobox/styles.css";
import {Button, Col, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import Data from "../../data-sights";
import "../../"


const mapContainerStyle ={
    width: "100%",
    height : "680px"
};
const options = {
    zoomControl:true,
};
const center ={
    lat:37.550928,
    lng:126.867306
}
const storeList = [
    {
        name: '준화님 집',
        location: {lat:37.550928, lng:126.867306},
        address: '서울 강서구 공황대로 63길 14',
    },
    {
        name:'비트캠프 신촌점',
        location: {lat:37.5525892,lng: 126.9367663},
        address: '서울 마포구 백범로 23 구프라자 3층'
    },
]


const MAP_KEY ='AIzaSyDyYteoY6q3NQwsEHFrXfan_q_9VlIVsxk'
const libraries = ["places"];



const GooMap = () =>{
    const { isLoaded,loadError } = useLoadScript({
        googleMapsApiKey: MAP_KEY,
        libraries,
        region:'kr'
    });

    const [ selected, setSelected ] = useState({});
    const [ currentPosition, setCurrentPosition ] = useState({});
    const [ infoShow, setInfoShow ]= useState(false)

    const [ selectedAddr, setSelectedAddr] = useState("")
    const [ startAddr, setStartAddr] = useState("")
    const [ endAddr, setEndAddr ] = useState("")

    const [ selectedPc, setSelectedPc ] = useState("")
    const [ markers, setMarkers ] = useState([]);
    const [ searchLocation, setSearchLocation ] = useState({})
    const [ point, setPoint] = useState([
        { lat:37.562457, lng:126.941089 },
        { lat:37.579602, lng:126.998998 },
        { lat:37.550999, lng:126.8589698 }
    ])

    Geocode.setApiKey(MAP_KEY);
    Geocode.setLanguage('ko')
    Geocode.fromLatLng(selected.lat, selected.lng).then(
        response =>{
            console.log(response)
            const address = response.results[0].formatted_address
            const length = response.results[0].address_components.length
            const postcode = response.results[0].address_components[length-1].long_name
            console.log(postcode.indexOf('-'))
            if(postcode.indexOf('-') != -1){
                setSelectedPc(postcode)
            }else{
                setSelectedPc("정보없음")
            }
            setSelectedAddr(address)
            setStartAddr(address)
            setEndAddr(address)

            console.log(address)
        },
        error=>{
            console.error(error)
        }
    );


    const mapRef = useRef();
    const onMapLoad = useCallback((map)=>{
        mapRef.current = map;
    },[]);

    const panTo = useCallback(({lat, lng})=>{
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(13);
    },[]);

    const onMapClick = useCallback((e)=>{
        setMarkers((current)=>[
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            },
        ]);
    },[])

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    function Search({panTo}) {
        const {
            ready,
            value,
            suggestions: {status, data},
            setValue,
            clearSuggestions
        } = usePlacesAutocomplete({
            requestOptions:{
                location: { lat:()=> 37.5525892, lng:()=> 126.9367663 },
                radius: 200*1000,
            },
        });
        const handleInput = (e)=>{
            setValue(e.target.value);
        };
        const handleSelect = async (address) =>{
            setValue(address, false);
            clearSuggestions();

            try{
                const result =await getGeocode({address});

                const {lat, lng} = await getLatLng(result[0]);
                const postal_code = await getZipCode(result[0],false)
                panTo({ lat, lng });
                setSelectedPc(postal_code)
                setSearchLocation({ lat, lng });
            }catch (error) {
                console.log("Error: ", error);
            }
        };

        return(
            <div className="search">
                <Combobox onSelect={handleSelect}>
                    <ComboboxInput
                        value = {value}
                        onChange={handleInput}
                        disabled={!ready}
                        placeholder="Search your location"
                        className={"from-control-plaintext"}
                    />
                    <ComboboxPopover>
                        <ComboboxList>
                            {status === "OK" &&
                            data.map(({ id,description})=>(
                                <ComboboxOption key={id} value={description}/>
                            ))}
                        </ComboboxList>
                    </ComboboxPopover>
                </Combobox>
            </div>
        );
    }

//현 위치 검색
    function Locate({panTo}) {
        return(
            <button
                className="locate"
                onClick={()=>{
                    navigator.geolocation.getCurrentPosition(
                        (position)=>{
                        const currentPosition ={
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                        panTo(currentPosition);
                        setCurrentPosition(currentPosition);
                    },
                        ()=>null
                    );
                }}
            >
                <img src="https://image.flaticon.com/icons/svg/3198/3198467.svg"/>
            </button>
        );
    }
    
    
    return(
        <>
        <div className="map_container map_box">
            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={11}
                center={center}
                options={options}
                onLoad={onMapLoad}
                onClick={onMapClick}
            >
                <Locate panTo={panTo}/>
                <Search panTo={panTo}/>
                {//다중마커
                    storeList.map((point,i)=>(
                        <Marker
                            key={i}
                            position={point.location}
                            onClick={()=>setPoint(point)}
                            icon={
                                {
                                url: "https://image.flaticon.com/icons/svg/3198/3198467.svg",
                                scaledSize: new window.google.maps.Size(40, 40)}
                            }
                        >
                        </Marker>
                    ))
                }
                {//지도마커 정보
                    selected.location ? (
                        <InfoWindow
                            position ={selected.location}
                            clickable={true}
                            onCloseClick={()=>setSelected({})}
                            >
                            <div className="infowindow">
                                <p>{selected.name}</p>
                                <img src={selected.image} className="small-image" alt="rental"/>
                                <p>주소:{selected.address}</p>
                            </div>
                        </InfoWindow>
                    )
                        :null
                }
                {//지역정보 검색
                    searchLocation.lat ?
                        <Marker
                            position={searchLocation}

                            onClick={()=>{
                                setSelected(searchLocation)
                                setInfoShow(true)
                            }}
                            icon={{
                                url: "https://image.flaticon.com/icons/svg/3198/3198467.svg",
                                scaledSize: new window.google.maps.Size(40, 40)
                            }}
                            />
                            :null
                    }



                {
                    markers.map((marker,i)=>(
                        <Marker
                            key={i}
                            onClick={()=>{
                                setSelected(marker);
                                setInfoShow(true)
                            }}
                            position={{ lat: marker.lat, lng: marker.lng }}

                            icon={{
                                    url: "https://image.flation.com/icons/svg/3198/3198588.svg",
                                    scaledSize : new window.google.maps.Size(40,40)
                            }}
                        />
                    ))
                }
                {//현위치
                    currentPosition.lat ?
                        <Marker
                            position={currentPosition}
                            onClick={() => {
                                setSelected(currentPosition)
                                setInfoShow(true)
                            }}
                            icon={{
                                url: "https://image.flaticon.com/icons/svg/3198/3198517.svg",
                                scaledSize: new window.google.maps.Size(40, 40)
                            }}
                        />
                        : null
                }
                {
                    Data.map((store,i)=>(
                        <Marker
                            key={i}
                            position={{lat:store.x_value, lng:store.y_value}}
                            onClick={()=>setSelected(store)}
                                icon={{
                                url: "https://image.flaticon.com/icons/svg/3198/3198517.svg",
                                scaledSize: new window.google.maps.Size(40, 40)
                            }}
                            />
                    ))
                }
                {//인포윈도우 내용정보
                    infoShow ? (
                            <InfoWindow
                                position={{lat: selected.lat, lng: selected.lng}}
                                onCloseClick={()=>{setInfoShow(false);}}
                                clickable={true}
                            >
                                <div className="infowindow">
                                    <MDBCol>
                                        <MDBCard>
                                            <MDBCardBody>
                                                <MDBCardText>
                                                    <div>

                                                    <span>*상세주소 :</span><br/>
                                                        <h2>{selectedAddr}</h2>
                                                    <span>*우편번호 :</span><br/>
                                                        <h2>{selectedPc}</h2><br/>

                                                    <Button
                                                        className="map-start"
                                                        variant="secondary"
                                                        value={setStartAddr}
                                                    >출발지 선택
                                                    </Button>

                                                    <Button
                                                        className="map-end"
                                                        variant="secondary"
                                                        value={endAddr}
                                                    >
                                                    도착지 선택
                                                    </Button>
                                                    </div>
                                            </MDBCardText>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </div>
                            </InfoWindow>
                    ): null
                }
            </GoogleMap>

                    <div className="map_container search_box">
                        <Form>
                            <Form.Row className="align-items-center">
                                <Col xs="auto" className="my-1">
                                    <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                        Preference
                                    </Form.Label>

                                    <Form>
                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label>출발지 주소 : </Form.Label>
                                            <Form.Control type="location" placeholder="starting point" value={setStartAddr}/>
                                        </Form.Group>
                                        <Form.Group controlId="formGroupPassword">
                                            <Form.Label>도착지 주소:</Form.Label>
                                            <Form.Control type="location" placeholder="ending point" value={setEndAddr}/>
                                        </Form.Group>
                                        <Form.Group controlId="formGroupPassword">
                                            <Form.Label>예약 날짜:</Form.Label>
                                            <Form.Control type="date" placeholder="reservation" />
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <div>
                                    <Col xs="auto" className="my-1">
                                        <Button type="submit">Submit</Button>
                                    </Col>
                                </div>
                            </Form.Row>
                        </Form>
                    </div>
                     </div>
        </>
    )
}
export default GooMap;
