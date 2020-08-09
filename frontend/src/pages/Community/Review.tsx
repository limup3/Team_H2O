import React, {useState} from "react";
import {Container,Form, Button,Modal,Table,} from "react-bootstrap";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import './styles.css'
import './community.css'
import {Link} from "react-router-dom";

const Review = () => {
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
                            </textPath>

                        </td>
                        <td>
                            <textPath>
                                Great to spend time with Mike Singletary while going to Texas. He’s one of the greatest football players ever — A strong man and a really good person. Great being with you Mike! pic.twitter.com/lWsYn4lhOm
                            </textPath>
                        </td>
                        <td>2020.07.31</td>
                    </tr>

                    </tbody>

                </Table>
                <textPath>
                    <Button className="fix-btn" variant="secondary">
                        <Link to='/Fix'>수정하기</Link></Button>
                </textPath>
                <Form.Group className="comment">
                    <button className='comment-btn' >댓글 :</button>

                    <Form.Control type="text" placeholder="Normal text" />
                    <Button className="fix-btn" variant="secondary" >
                        <Link to='/Review'>댓글달기</Link>
                    </Button>
                </Form.Group>
            </div>
        </Container>
    );
};

export default Review;

