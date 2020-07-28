import React from 'react'
import { Container } from "react-bootstrap";
import {RenderAfterNavermapsLoaded, NaverMap, Marker} from 'react-naver-maps';


const Map =()=>{
    return (
<Container>

    <RenderAfterNavermapsLoaded
    ncpClientId={'h4c9enw8gw'}
    error={<p>Maps Load Error</p>}
    loading={<p>Maps Loading...</p>}
>
    <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'}
        style={{
            width: '1100px',
            height: '500px',
        }}
        defaultCenter={{ lat:37.562457, lng:126.941089 }} // 지도 초기 위치
        defaultZoom={13} // 지도 초기 확대 배율
    >
        <Marker
        position ={{lat:37.562457, lng:126.941089}}
        onClick={() => {alert('여기는 거구장의 거구입니다.');}}
        />            

    </NaverMap>
</RenderAfterNavermapsLoaded>
</Container>
    )
}
export default Map
