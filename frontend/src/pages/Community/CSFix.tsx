import React, {useState} from "react";
import {Container,Form, Button,Modal,Table,} from "react-bootstrap";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import './styles.css'
import './community.css'
import {Link} from "react-router-dom";

const CSFix = () => {
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const modules = {
        toolbar: [
            //[{header: [1, 2, false]}],
            ['bold', 'italic', 'underline', 'strike', 'link', 'image']
            //[{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
            //['clean']
        ]
    }

    const formats = [
        //'header',
        'bold',
        'italic',
        'underline',
        'strike',
        /*
        'blockquote',
        'list',
        'bullet',
        'indent',
        */
        'link',
        'image'
    ]
    return (
        <Container>
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th style={{width:"180px"}}>사용자</th>
                        <th>내용</th>
                        <th style={{width:"150px"}}>게시날짜</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="Rev">
                        <td>
                            <textPath
                                className="use-pic">
                                Donald J. Trump @realDonaldTrump
                            </textPath>
                        </td>
                        <td>
                            <textPath>
                                <ReactQuill
                                    theme="snow"
                                    value={value}
                                    onChange={setValue}
                                    modules={modules}
                                    formats={formats}
                                ><textPath>
                                원하는 서비스를 제공받을수가 없습니다,  오류를 해결해주세요.
                                </textPath>
                                </ReactQuill>
                                </textPath>


                    </td>
                        <td>2020.07.31</td>
                    </tr>
                    </tbody>
                </Table>
                <div className="fix-btn">
                    <tr>
                        <td>
                            <Button className="fix-sub" variant="primary" onClick={handleShow}
                            >Submit
                            </Button>
                        </td>
                        <td>
                            <Button className="fix-can" variant="danger">
                                <Link to="/CSReview">Cancel</Link>
                            </Button>
                        </td>
                    </tr>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>전송 확인</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>입력하신 데이터를 업로드하시겠습니까?</Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleClose}>
                                Close
                            </Button>
                            <Button  onClick={handleClose}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
            </div>
        </Container>
    );
};

export default CSFix;

