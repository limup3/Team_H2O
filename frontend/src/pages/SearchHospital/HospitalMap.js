import React,{useState,useCallback,useRef, useEffect} from "react";
import { GoogleMap,useLoadScript,Marker,InfoWindow,} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode,getLatLng,getZipCode} from "use-places-autocomplete";
import Geocode from 'react-geocode'
import {Combobox,ComboboxInput, ComboboxPopover,ComboboxList, ComboboxOption,} from "@reach/combobox";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol,MDBCardImage,MDBRow, MDBView, MDBLink,  MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
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
            console.log(JSON.stringify(response))
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
                                <MDBCardImage className="imgThumbnail" src="data:image/jpeg;base64,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" />
                                <div className="tableSize">
                                <MDBTable>
                                  <br/>
                               
      <MDBTableBody>
        <tr>
          <th>{selected.hospitalType}</th>
          <td></td>
         
        </tr>
        <tr>
          <th>전화번호</th>
          <td>{selected.tel}</td>
        </tr>
        <tr>
          <th>주소</th>
          <td>{selected.addr}</td>
        </tr>
        <tr>
          <th>의료인수</th>
          <td>{selected.medicalPeople}</td>
        </tr>
        <tr>
          <th>입원실수</th>
          <td>{selected.hospitalRoom}</td>
        </tr>
        <tr>
          <th>병상수</th>
          <td>{selected.hospitalBed}</td>
        </tr>
        <tr>
          <th>총면적</th>
          <td>{selected.hospitalArea}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div >            
                                
                                
                                {/* <br/>
                                <p>{selected.hospitalType}</p><br/>
                                    <p>전화번호 : {selected.tel}</p><br/>
                                    <p>주소 : {selected.addr}</p><br/>
                                    <p>의료인수 : {selected.medicalPeople}</p><br/>
                                    <p>입원실수 : {selected.hospitalRoom}</p><br/>
                                    <p>병상수 : {selected.hospitalBed}</p><br/>
                                    <p>총면적 : {selected.hospitalArea}</p><br/> */}
                                    <MDBBtn gradient="blue" onClick={handleCheck}>진료 예약</MDBBtn>
                                    <MDBBtn gradient="blue">화상 진료</MDBBtn>
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
            <MDBLink to="/Reservation">
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
            <MDBLink to="/Reservation">
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
            <MDBLink to="/Reservation">
            <MDBBtn gradient="purple">예약</MDBBtn>
            </MDBLink>
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
            <MDBLink to="/Reservation">
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
            <MDBLink to="/Reservation">
            <MDBBtn gradient="purple">예약</MDBBtn>
            </MDBLink>
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
