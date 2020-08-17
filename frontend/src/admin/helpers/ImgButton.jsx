import React, {useState} from 'react'
import {Grid, Button, Icon, OutlinedInput, Box, Container } from '@material-ui/core'
import { Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

const outLined = () => {
    // border:'2px solid #000000',
}

const ImgButton = () => {
    const [file, setFile] = useState()
    const [previewURL, setPreviewURL] = useState(null) 
    
    const handleFileOnChange = e => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setFile()
            setPreviewURL(reader.result)
        }
        reader.readAsDataURL(file);
        }

    let preview
    if(file!==''){
        preview = <img className='profile_preview' src={previewURL}></img>
    }

    return (
        <div className={outLined}>
            <Row>
                <Col xs={8}>
                    {preview}
                </Col>
                <Col xs={4}>
                    <input 
                        accept="image/*"
                        type="file"
                        name="img"
                        onChange={handleFileOnChange}>
                    </input>
                </Col>
            </Row>
        </div>
        )
}

export default ImgButton

// import React, {useState} from 'react'
// import ImageUploader from "react-images-upload";
// import {Grid} from '@material-ui/core'


// const ImgButton = props => {
//     const [file, setFile] = useState()
//     const [previewURL, setPreviewURL] = useState(null)
    
//     const handleFileOnChange = e => {
//         e.preventDefault();
//         let reader = new FileReader();
//         let file = e.target.files[0];
//         reader.onloadend = () => {
//             setFile()
//             setPreviewURL(reader.result)
//         }
//         reader.readAsDataURL(file);
//         }
    
//     let preview
//     if(file!==''){
//         preview = <img className='profile_preview' src={previewURL}></img>
//     }

//     return (
//         <div>
//         <Grid item xs={8}>
//             {preview}
//         </Grid>
//         <input type='file' 
//             accept='image/jpg,impge/png,image/jpeg,image/gif' 
//             name='profile_img' 
//             onChange={handleFileOnChange}>
//         </input>
//         </div>
//         )

// }

// export default ImgButton