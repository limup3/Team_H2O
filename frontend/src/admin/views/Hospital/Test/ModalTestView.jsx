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
  TableFooter,
  Button as MuiButton,
  TablePagination
} from '@material-ui/core';
import { Button, Modal } from 'react-bootstrap'
import ModalTestBody from './ModalTestBody';
import PaginationAction from './PaginationAction'

const ModalTestView = () => {

    const [hospitalData, setHospitalData] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const [show, setShow] = useState(false);
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    
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
    
    const handleClose = () => {
      setShow(false)
    }

    const handleChangePage = (e, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (e) => {
      setRowsPerPage(parseInt(e.target.value, 10));
      setPage(0);
    };

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

                {/* -------------pagination----------------- */}

                {/* {posts.slice(0,10).map((hospital, i) => ( */}
                  {(rowsPerPage > 0
                    ? posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : posts
                    ).map((hospital, i) => (

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


              {/* ---------------------- Pagination ----------------------------------- */}

              <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 50, 100, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={posts.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  // ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
              
            {/* ---------------------- Pagination ----------------------------------- */}

                        
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
              </Modal>):null}
          </Table>
          {/* <PaginationAction
            component="div"
            rowsPerPageOptions={[10, 50, 100]}

            count={posts.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onChangePage={handleChangePage}

            onChangeRowsPerPage={handleChangeRowsPerPage}
          /> */}
        </CardContent>
        </Card>

        {/* -----------Pagination------------ */}
        </>
    )
}



export default ModalTestView
