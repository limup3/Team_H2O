import React, {useEffect, useState} from "react";
import {Container, Form, Button, Modal, Table,Col} from "react-bootstrap";
import { useHistory,Link } from "react-router-dom";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import './styles.css'
import './community.css'
import axios from 'axios'

const Edit = () => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')
    const [medCategory, setMedcategory] = useState('')
    const [title, setTitle] = useState('')
    const [creationDate, setCreationDate] =useState('')

    // const  newValue = value.replace(/<(\/span|span)([^>]*)>/gi,"");


    const handleShow = () => setShow(true);
    const history = useHistory();
    const handleClose = () => {
        history.push("/Community")
        setShow(false);
    }
    const handleQuill = (value)=>{
        setValue(value)
    }



//자료 업로드
    const newBoard = e => {
        e.preventDefault();
        console.log(`title ${setTitle}, category ${category}, medCategory ${medCategory}, value ${value}, creationDate ${creationDate}`)
        const comudata ={
            // userId:accountDetail.id,
            title : title,
            category :category,
            medCategory: medCategory,
            content : value,
            creationDate : creationDate
        }
        if (
            setTitle === "" ||
            category === "" ||
            medCategory === "" ||
            value === ""
        ) {
            alert("입력창을 다채워주세요");
        } else {
            console.log('axios 들어옴')
            axios
                .post(`http://localhost:8080/board/update`,comudata)
                .then((res)=>{
                    console.log(res.data);
                    window.location.href ="/Community"
                })
                .catch((err)=>{
                    throw err;
                })};
    }

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'link', 'image']
        ]
    }

    const formats = [
        //'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'link',
        'image'
    ]
    return (
        <Container>
            <div className="Rev-tab">
                <Table striped bordered hover size="sm">
                    <Form.Group controlId="exampleForm.ControlInput1" >
                        {/*큰항목*/}
                        <Form.Label className="cate-label">게시글 구분:
                            <select className="cate-select"
                                    value={category}
                                    onChange={(e)=>setCategory(e.target.value)}
                            >
                                <option value="항목선택">항목선택</option>{''}
                                <option value="자유게시판" >자유게시판</option>
                                <option value="고객서비스센터">고객서비스센터</option>
                                <option value="Q&A">Q&A</option>
                            </select> <br/>
                        </Form.Label>

                        {/*세부항목*/}
                        <Form.Label className="medcate-label">진료항목:
                            <select
                                className="medcate-select"
                                value={medCategory}
                                onChange={(e)=>setMedcategory(e.target.value)}
                            >
                                <option value="전체보기">전체보기</option>{''}
                                <option value="정형외과">정형외과</option>
                                <option value="내과">내과</option>
                                <option value="신경과">신경과</option>
                                <option value="소아과">소아과</option>
                                <option value="피부과">피부과</option>
                                <option value="여성의학과">여성의학과</option>
                            </select><br/>
                        </Form.Label><br/>

                        <Form.Row>
                            <Form.Label column sm={1} style={{ textAlign: "center" }}>
                                <h2 textholder="제목을 입력해주세요.">제목 :</h2>
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    as="input"
                                    type="text"
                                    placeholder="검색어를 입력해주세요."
                                />
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <ReactQuill
                        theme="snow"
                        // value={newValue}
                        onChange={handleQuill}
                        modules={modules}
                        formats={formats}
                    />

                    <div className="input-group">
                        <Form>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="사진 및 동영상 올리기" />
                                <Button className="Submit" variant="primary" onClick={handleShow}
                                >Submit</Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>전송 확인</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>입력하신 데이터를 업로드하시겠습니까?</Modal.Body>
                                    <Modal.Footer>
                                        <Link to="/Edit">
                                            <Button onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button type="submit" onClick={newBoard} >
                                                Submit
                                            </Button>{" "}
                                        </Link>
                                    </Modal.Footer>
                                </Modal>
                                <Button className="Cancel" variant="danger">
                                    <Link to="/Community">Cancel</Link>
                                </Button>

                            </Form.Group>
                        </Form>
                    </div>
                </Table>
            </div>
        </Container>
    );
};
export default Edit;