import React from "react";
import {Container,Form, Button,Table,} from "react-bootstrap";
import 'react-quill/dist/quill.snow.css';
import './styles.css'
import './community.css'
import {Link} from "react-router-dom";

const CSReview = () => {
    // const [value, setValue] = useState('')
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const modules = {
    //     toolbar: [
    //         ['bold', 'italic', 'underline', 'strike', 'link', 'image']
    //     ]
    // }
    // const formats = [
    //     'bold',
    //     'italic',
    //     'underline',
    //     'strike',
    //     'link',
    //     'image'
    // ]
    return (
    <Container>
            <div className="Rev-tab">
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
                                원하는 서비스를 제공받을수가 없습니다,  오류를 해결해주세요.
                            </textPath>
                        </td>
                        <td>2020.07.31</td>
                    </tr>
                    </tbody>
                </Table>
                <Button className="fix-btn" variant="secondary" >
                    <Link to='/CSFix'>수정하기</Link></Button>
                <Form.Group className="comment">
                    <button className='comment-btn' >댓글 :</button>
                    <Form.Control type="text" placeholder="Normal text" />
                    <Button className="fix-btn" variant="secondary" >
                        <Link to='/CSReview'>댓글달기</Link>
                    </Button>
                </Form.Group>
            </div>
    </Container>
    );
};

export default CSReview;

