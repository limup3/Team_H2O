import React, {useState} from "react";
import {Container,Form, Button,Modal,Table,} from "react-bootstrap";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import './styles.css'
import './community.css'
import {Link} from "react-router-dom";

const QAReview = () => {
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
                                효과적으로 사용 할 수 있는 방법이 있을까요?
                            </textPath>
                        </td>
                        <td>2020.07.31</td>
                    </tr>
                    </tbody>
                </Table>
                <textPath>
                    <Button className="fix-btn" variant="secondary">
                        <Link to='/QAFix'>수정하기</Link></Button>
                </textPath>
                <Form.Group className="comment">
                    <button className='comment-btn' >댓글 :</button>
                    <Form.Control type="text" placeholder="Normal text" />
                    <Button className="fix-btn" variant="secondary" >
                        <Link to='/QAReview'>댓글달기</Link>
                    </Button>
                </Form.Group>

            </div>
        </Container>
    );
};

export default QAReview;

