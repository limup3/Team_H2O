import React, {useState} from "react";
import {Container,Form, Button,Modal,Table,} from "react-bootstrap";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import './styles.css'
import './community.css'
import {Link} from "react-router-dom";
const Review2 = () => {
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
                <textPath><Link to="/https://twitter.com/elonmusk"> Elon Musk 님 게시글</Link></textPath>
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
                                <img src="https://img.vogue.co.kr/vogue/2018/03/style_5ab9feda23133-844x930.jpg"/>
                                Elon Reeve Musk
                            </textPath>
                        </td>
                        <td>
                            <textPath>
                                I think that's the single best piece of advice: constantly think about how you could be doing things better and questioning yourself.
                            </textPath>
                        </td>
                        <td>2020.07.31</td>
                    </tr>
                    </tbody>
                </Table>
                <Button className="fix-btn" variant="secondary" >
                    <Link to='/Fix'>수정하기</Link></Button>
            </div>
        </Container>
    );
};
export default Review2;