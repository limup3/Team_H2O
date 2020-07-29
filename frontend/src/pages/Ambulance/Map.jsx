import React from 'react'
import { Container } from "react-bootstrap";
import {RenderAfterNavermapsLoaded, NaverMap, Marker} from 'react-naver-maps';


const Map =()=>{
    // const list = [{name:'',lat:126.734086, lng:127.269311}];
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
                    // getDistance={(defaultCenter, defaultZoom)}
                >
                    {/*{*/}
                    {/*    list.map()*/}
                    {/*}*/}
                <Marker
                    position ={{lat:37.562457, lng:126.941089}}
                    onClick={() => {alert('여기는 신촌세브란스병원입니다.');}}
                    />

            </NaverMap>
            <h1>Map</h1>
            </RenderAfterNavermapsLoaded>
            <textarea>검색:</textarea>
        </Container>
    )
}
export default Map
