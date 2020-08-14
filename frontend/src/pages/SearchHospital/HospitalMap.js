import React,{useState,useCallback,useRef, useEffect} from "react";
import { GoogleMap,useLoadScript,Marker,InfoWindow,} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode,getLatLng,getZipCode} from "use-places-autocomplete";
import Geocode from 'react-geocode'
import {Combobox,ComboboxInput, ComboboxPopover,ComboboxList, ComboboxOption,} from "@reach/combobox";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol,MDBCardImage  } from 'mdbreact';
import './map.css'
import "@reach/combobox/styles.css";
import {Button, Col, Form, Row, Image} from "react-bootstrap";
import mapdata from "./mapdata";
import axios from "axios";


const MAP_KEY ='AIzaSyDyYteoY6q3NQwsEHFrXfan_q_9VlIVsxk'
//맵 키 
const libraries = ["places"];
//구글 맵 places 라이브러리 호출
//place = 애플리케이션이 정의 된 영역 내에서 시설, 지리적 위치 또는 주요 관심 지점과 같은 장소를 검색 할 수 있도록합니다

const mapContainerStyle = {
    width: "100%",
   height : "680px"
}

const options = {
    // disableDefaultUI : true,
    zoomControl: true,
}

const center = {
    lat:37.550928,
    lng:126.867306
}


const HospitalMap = () =>{
    const [hospitalList, setHospitalList] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/hospital/data`)
        .then(response => {
            setHospitalList(response.data.list)
        })
        .catch(
            error => {
                throw (error)
            }
        )
    },[]);

    const { isLoaded,loadError } = useLoadScript({
        googleMapsApiKey: MAP_KEY,
        libraries,
        region:'kr'
    });
    const [ selected, setSelected] = useState({})
    //마커 찍기
    const [ currentPosition, setCurrentPosition] = useState({})
    //현재위치 찍기
    const mapRef = useRef();
    //DOM 영역 직접 참조
    // const onMapLoad = useCallback((map) => {
    //     mapRef.current = map;
    // }, [])
    const onMapLoad = React.useCallback(map => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng})
        mapRef.current.setZoom(17)
    }, [])
    //변경 사항이 지도의 너비와 높이보다 작 으면 전환이 부드럽게 움직임

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    //Geolocation API는 사용자의 현재 위치를 가져오는 API로, 
    //지도에 사용자 위치를 표시하는 등 다양한 용도로 사용
    function Locate({panTo}) {
        return (
            <button
            className="locate_img"
            onClick={() => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const currentPosition = {
                            lat : position.coords.latitude,
                            lng : position.coords.longitude
                        }
                        panTo(currentPosition)
                        setCurrentPosition(currentPosition)
                    },
                    () => null
                )
            }}
            >
                
               <img src="https://image.flaticon.com/icons/svg/3198/3198467.svg"/>
            </button>
        )
    }
    
    return (
        <>
      
        <GoogleMap
            id="map"
            mapContainerStyle={mapContainerStyle}
            zoom={11}
            center={center}
            options={options}
            onLoad={onMapLoad}
        >
         
              <Locate panTo= {panTo} />
              {/* {
                    mapdata.map((store,i)=>(
                        <Marker
                            key={i}
                            position={store.location}
                            onClick={()=>setSelected(store)}
                            icon={{
                                url: "https://image.flaticon.com/icons/svg/3198/3198517.svg",
                                scaledSize: new window.google.maps.Size(40, 40)
                            }}
                        />
                    ))
                } */}
            { // 다중 마커찍기
                hospitalList.map((store,i)=> (
                    <Marker
                    key={i}
                    position={{lat:store.latitude, lng: store.longitude}}             
                    onClick={()=>setSelected(store)}
                    icon={{
                        url: "https://image.flaticon.com/icons/svg/1786/1786525.svg",
                        scaledSize: new window.google.maps.Size(30, 30)
                    }}
                    />
            
                ))
                
            }
           
           { // 마커 클릭이벤트 infoWindow
               selected.latitude ? (
                   <InfoWindow
                        position = {{lat:selected.latitude, lng:selected.longitude}}
                        clickable={true}
                        onCloseClick={() => setSelected({})}
                    >
                    
                    <div className="infowindow">
                                                <MDBCol>
                                                    <MDBCard>
                                                        <MDBCardBody>
                                                            <MDBCardTitle><h3>{selected.hospitalName}</h3></MDBCardTitle><br/>
                                                            <MDBCardText>
                                                            <MDBCardImage className="imgThumbnail" src="https://www.tophospital.co.kr/images/sub/present_01.jpg" />
                                                            <br/>
                                                                <h4>전화번호: {selected.tel}</h4><br/>
                                                                <h4>주소: {selected.addr}</h4><br/>
                                                                <h4>병원상태: {selected.hospitalType}</h4><br/>
                                                                <h4>의료인수: {selected.medicalPeople}</h4><br/>
                                                                <h4>입원실수: {selected.hospitalRoom}</h4><br/>
                                                                <h4>병상수: {selected.hospitalBed}</h4><br/>
                                                                <h4>총면적: {selected.hospitalArea}</h4><br/>
                                                            </MDBCardText>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </MDBCol>
                                            </div>
                                        </InfoWindow>
                                    ) :null
           }

           { // 내 위치
                    currentPosition.lat ?
                   <Marker
                        position={currentPosition}
                        onClick={() => {
                            setSelected(currentPosition)
                        }}
                        icon={{
                            url : "https://image.flaticon.com/icons/svg/727/727590.svg",
                            scaledSize: new window.google.maps.Size(40, 40)
                        }}

                   />
                   :null
           }

        </GoogleMap>
        </>
    )
}
export default HospitalMap;
