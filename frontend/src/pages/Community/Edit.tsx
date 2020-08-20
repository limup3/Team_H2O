import React, {useState} from "react";
import {Container, Form, Button, Modal, Table} from "react-bootstrap";
import { useHistory,Link } from "react-router-dom";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import './styles.css'
import './community.css'

const Edit = () => {
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false);
    const history = useHistory();

    const handleClose = (e:any) => {
        e.preventDefault();
        history.push("/Community")
        setShow(false);
    }

    const handleShow = () => setShow(true);

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
                    <Form.Label>게시글 구분: </Form.Label>
                    <select className="form-control">
                        <option>자유게시판</option>
                        <option>고객서비스센터</option>
                        <option>Q&A</option>
                    </select>
                </Form.Group>
                <Form>
                    제목 : <textarea></textarea>
                </Form>
                <div>내용:</div>
                <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
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
                                                <Button onClick={handleClose}>
                                                    Close
                                                </Button>
                                                <Button  onClick={handleClose}>
                                                    Submit
                                                </Button>
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
