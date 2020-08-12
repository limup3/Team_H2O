import React, {useState} from "react";
import {Container,Form, Button,Modal,Table,} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import './styles.css'
import './community.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';



const Fix = () => {
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false);
    const history = useHistory();

    const handleClose = (e:any) => {
        e.preventDefault();
        history.push("/Review")
        setShow(false);
    }

    const handleShow = () => setShow(true);

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'link', 'image']
        ]
    }

    const formats = [
        'bold',
        'italic',
        'underline',
        'strike',
        'link',
        'image'
    ]
    return (
        <Container>
            <div>
                <textPath><Link to="/https://twitter.com/realdonaldtrump">Donald J. Trump @realDonaldTrump 님 게시글</Link></textPath>
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
                                <img src="https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F7%2F201804241120041041.jpg"/>
                                Donald J. Trump @realDonaldTrump
                                <Form.Group>
                                    <Form.File className="fixfile" />
                                </Form.Group>
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
                                Great to spend time with Mike Singletary while going to Texas. He’s one of the greatest football players ever — A strong man and a really good person. Great being with you Mike! pic.twitter.com/lWsYn4lhOm
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
                        <Link to="/Review">Cancel</Link>
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

export default Fix;

