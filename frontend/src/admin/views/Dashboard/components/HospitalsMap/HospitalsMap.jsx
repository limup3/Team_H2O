import React, {useState} from 'react'
import {HospitalsMapHead, HospitalsMapBody} from './components'
import {HospitalsMapData} from './components/HospitalsMapData'



const HospitalsMap = () => {
    const [HospitalsMap] = useState(HospitalsMapData)
    return <>
        <HospitalsMapHead/>
        <HospitalsMapBody HospitalsMapData={HospitalsMapData}/>
    </>
}

export default HospitalsMap