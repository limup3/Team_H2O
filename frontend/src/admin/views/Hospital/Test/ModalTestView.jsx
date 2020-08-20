import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios'

import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button as MuiButton
} from '@material-ui/core';
import { Button, Modal } from 'react-bootstrap'
import ModalTestBody from './ModalTestBody';

const ModalTestView = () => {
    const [hospitalIdArr, setHospitalIdArr] = useState([])
    const [hospitalData, setHospitalData] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage]=useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
      setShow(false)
    }
    const [handleSwitch, setHandleSwitch] = useState({
      show: false,

    })
      
      useEffect(()=>{
        setLoading(true);
        axios
          .get(`http://localhost:8080/hospital/hospitalList`)
          .then(response => {
            setPosts(response.data)
          })
          .catch(error => {
            alert("서버와의 연결이 되지 않았습니다.");
          })
          setLoading(false);
      }, [])
    

    return (
        <>
        <Card>
        <CardContent>
          <Table
          >
            <TableHead>
              <TableCell align="center">No.</TableCell>
              <TableCell align="center">이름</TableCell>
              <TableCell align="center">사업자 번호</TableCell>
              <TableCell align="center">주소</TableCell>
              <TableCell align="center">병원 형태</TableCell>
              <TableCell align="center">의료인 수</TableCell>
              <TableCell align="center">연락처</TableCell>
              <TableCell align="center">위도</TableCell>
              <TableCell align="center">경도</TableCell>
              <TableCell align="center">영업상태</TableCell>
            </TableHead>

              <TableBody>
                {posts.slice(0,10).map((hospital, i) => (
                  <TableRow
                    align="center"
                    key={i}
                    onClick={()=>setHospitalData(hospital)}
                  >
                    <TableCell align="center">{hospital.hospitalNo}</TableCell>
                    <TableCell align="center">
                      <MuiButton variant="light" onClick={()=>setShow(true)}
                      >{hospital.hospitalName}
                      </MuiButton>
                    </TableCell>
                    
                    <TableCell align="center">{hospital.businessLicenseNumber}</TableCell>
                    <TableCell align="center">{hospital.addr}</TableCell>
                    <TableCell align="center">{hospital.hospitalType}</TableCell>
                    <TableCell align="center">{hospital.medicalPeople}</TableCell>
                    <TableCell align="center">{hospital.tel}</TableCell>
                    <TableCell align="center">{hospital.latitude}</TableCell>
                    <TableCell align="center">{hospital.longitude}</TableCell>
                    <TableCell align="center">{hospital.businessStatus}</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
                        
                        
              {hospitalData.hospitalName? (
                <Modal 
                  show={show} 
                  onHide={handleClose}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  scrollable={Boolean(true)}
                  >
                <Modal.Header closeButton>
                  <Modal.Title>등록 병원 정보</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ModalTestBody hospitalData={hospitalData} setClose={(close)=>{setShow(close)}}/>
                  </Modal.Body>
                {/* <Modal.Footer>
                  <Button variant="primary" onClick={()=>{handleClose()}}>
                    저장
                  </Button>
                  <Button variant="secondary" onClick={()=>{handleClose()}}>
                    취소
                  </Button>
                </Modal.Footer> */}
              </Modal>):null}
          </Table>
        </CardContent>
        </Card>

        </>
    )
}

export default ModalTestView
