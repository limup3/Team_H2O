import React,{useState,useCallback,useRef, useEffect} from "react";
import { GoogleMap,useLoadScript,Marker,InfoWindow,} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode,getLatLng,getZipCode} from "use-places-autocomplete";
import Geocode from 'react-geocode'
import {Combobox,ComboboxInput, ComboboxPopover,ComboboxList, ComboboxOption,} from "@reach/combobox";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol,MDBCardImage,MDBIcon,MDBRow, MDBView, MDBLink  } from 'mdbreact';
import './map.css'
import "@reach/combobox/styles.css";
import {Button, Col, Form, Row, Image} from "react-bootstrap";
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
    lat: 37.554880,
    lng: 126.936887
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

    const [ reservation, setReservation] = useState({})

    const [infoShow, setInfoShow]= useState(false)

    const handleReload = () => {
        window.location.reload()
      }

    const handleOpen = () => setInfoShow(true);
    const handleCheck = e => {
      e.preventDefault();
      handleOpen();
    }

    const [ selected, setSelected] = useState({})
    //마커 찍기
    const [ currentPosition, setCurrentPosition] = useState({})
    //현재위치 찍기
    const mapRef = useRef();
    //DOM 영역 직접 참조 

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
            zoom={17}
            center={center}
            options={options}
            onLoad={onMapLoad}
        >
         
              <Locate panTo= {panTo} />
            { // 다중 마커찍기
                hospitalList.map((store,i)=> (
                    <Marker
                    key={i}
                    position={{lat:store.latitude, lng: store.longitude}}             
                    onClick={()=>{
                        setSelected(store)
                        // setInfoShow(true)
                    
                    }}
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
                        onClick={() => setReservation({})}
                        onCloseClick={() => setSelected({})} 

                    >
                    <div className="infowindow">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>{selected.hospitalName}</MDBCardTitle><br/>
                                <MDBCardText>
                                <MDBCardImage className="imgThumbnail" src="https://www.tophospital.co.kr/images/sub/present_01.jpg" />
                                <br/>
                                <p>{selected.hospitalType}</p><br/>
                                    <p>전화번호 : {selected.tel}</p><br/>
                                    <p>주소 : {selected.addr}</p><br/>
                                    <p>의료인수 : {selected.medicalPeople}</p><br/>
                                    <p>입원실수 : {selected.hospitalRoom}</p><br/>
                                    <p>병상수 : {selected.hospitalBed}</p><br/>
                                    <p>총면적 : {selected.hospitalArea}</p><br/>
                                    <MDBBtn gradient="purple" onClick={handleCheck}>진료 예약</MDBBtn>
                                    <MDBBtn gradient="purple">화상 진료</MDBBtn>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        </div>
                    </InfoWindow>
                    ) :null
           }
           {
               infoShow ? (
                   <InfoWindow
                       position = {{lat:selected.latitude, lng:selected.longitude}}
                       onCloseClick={() => {setInfoShow(false);}}
                       clickable={true}
                    >
                       <div>
                       <MDBCardTitle>{selected.hospitalName} 의사 리스트</MDBCardTitle><br/>
                       <MDBRow>
      <MDBCol md='4'>
        <MDBCard wide cascade>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='http://hub.khnmc.or.kr/mng/upload/docinfo/1531109799046_D06CAE30BCC0D658__IMG_1237.jpg'
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>강민서</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>이비인후피부과</p>

            <MDBCardText>
            여드름, 한방미용시술, 성형수술후관리{' '}
            </MDBCardText>
            <MDBLink to="/Community">
            <MDBBtn gradient="purple">예약</MDBBtn>
            </MDBLink>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard wide cascade>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='http://hub.khnmc.or.kr/mng/upload/docinfo/1525414257937_AC15C724AD6C%20AD50C218_h.jpg'
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>강윤구</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>치과교정과</p>

            <MDBCardText>
            성인교정, 성장기교정, 투명교정, 악안면 기형 교정, 턱관절교정{' '}
            </MDBCardText>
            <MDBBtn gradient="purple">예약</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard wide cascade>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='http://hub.khnmc.or.kr/mng/upload/docinfo/1543307784609_AE40ACE0C6B4-AD50C218_h.jpg'
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>김고운</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>한방재활의학과</p>

            <MDBCardText>
            (한방비만체형클리닉) 부분비만(매선요법), 소아비만, 산후비만{' '}
            </MDBCardText>
            <MDBBtn gradient="purple">예약</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </MDBRow>
        <br/><br/>
      <MDBRow>
      <MDBCol md='4'>
        <MDBCard wide cascade>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='http://hub.khnmc.or.kr/mng/upload/docinfo/1525925418375_AE40AE30D0DD%20AD50C218_h.jpg'
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>김기택</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>정형외과</p>

            <MDBCardText>
            척추질환, 강직성척추염, 척추측만증{' '}
            </MDBCardText>
            <MDBBtn gradient="purple">예약</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard wide cascade>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='http://hub.khnmc.or.kr/mng/upload/docinfo/1544085075343_D06CAE30BCC0D658_B9C8CDE8ACFC%20AC15C885B9CCAD50C218.jpg'
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>강종만</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>마취통증의학과</p>

            <MDBCardText>
            수술 전후 척추통증, 급성 및 만성 통증 관리{' '}
            </MDBCardText>
            <MDBBtn gradient="purple">예약</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      </MDBRow>
                       </div>
                   </InfoWindow>

               ) : null
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
                            scaledSize: new window.google.maps.Size(70, 70)
                        }}

                   />
                   :null
           }

        </GoogleMap>
        </>
    )
}
export default HospitalMap;
