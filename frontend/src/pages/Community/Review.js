import React, {useEffect, useState} from "react";
import {Container,Form, Button,Table,} from "react-bootstrap";
import 'react-quill/dist/quill.snow.css';
import './styles.css'
import './community.css'
import {Link} from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";


const Review = ({match}) => {
    const [postList, setPostList] = useState('')
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [boardNo, setBoardNo] = useState('')
    const [readOnly, setReadOnly] = useState(true)
    const [value, setValue] = useState('')
    const [creationDate, setCreationDate] = useState('')
    const handleQuill = (value)=>{
        setValue(value)
    }


    useEffect(()=>{
        console.log(`1`)
        console.log(boardNo)

        axios
            .get(`http://localhost:8080/board/list/getOne/${match.params.boardNo}`)
            .then((res)=>{
                console.log(res.data)
                setContent(res.data)
                setBoardNo(res.data.boardNo)
                //  setTitle(res.data.title)
            })
            .then((err)=>{
                throw err;
            })
    },[])


    const updateBoard = e =>{
        e.preventDefault();
        console.log(`boardNo ${setBoardNo}`)
        // setReadOnly(false)
        const updata ={
            boardNo: boardNo,
            title : title,
            content : value,
            creationDate : creationDate
        }
        axios
            .post(`http://localhost:8080/board/list/medCategory`,updata)
            .then((res)=>{
                console.log(res.data);
                window.location.href ="/Community/Review"
            })
            .catch((err)=>{
                throw err;
            })};



    const getContent = e =>{
        e.preventDefault();
        console.log(`boardNo ${setBoardNo}`)
        setBoardNo(match.params.boardNo)
        setReadOnly(false)
        axios
            .get(`http://localhost:8080/board/list/medCategory/${boardNo}`)
            .then((res)=>{
                // sessionStorage.setItem("board",JSON.stringify(res.data))
                setPostList(res.data)
                setTitle(res.data)
                setBoardNo(res.data)
            })
            .catch((err)=>{
                throw err;
            })
    }

    const deleteBoard = e =>{
        e.preventDefault()
        axios
            .delete(`http://localhost:8080/board/list/delete/${match.params.boardNo}`)
            .then((res)=>{
                console.log(res)
                window.location.href="/Community"
            })
            .catch((err)=>{
                throw err;
            })
    }

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
        'image']


    // useEffect(() => {
    //     const title =sessionStorage.getItem("title")
    //     setTitle(title)
    //     axios
    //         .get(`http://localhost:8080/board/list/medCategory/${title}`)
    //         .then(({data})=>{
    //             console.log(data);
    //             setPostList(data)
    //         })
    //         .catch((err)=>{
    //             throw err;
    //         })
    // }, [])



    // const [board] = useState(
    //     JSON.parse(sessionStorage.getItem("board"))
    // )





    return (
        <Container>
            <div className="Rev-tab">
                <textPath>
                    <Link to="/https://twitter.com/realdonaldtrump">
                        Donald J. Trump @realDonaldTrump 님 게시글
                    </Link>
                </textPath>

                <Table striped bordered hover size="sm"
                       value={content}
                       readOnly={readOnly}
                    // onChange={getContent}
                >
                    <thead>
                    <tr >
                        <th style={{width:"180px"}}>사용자</th>
                        <th>
                            제목 :
                            <textPath
                                value={content}
                                // onChange={getContent}
                            >
                                {readOnly &&
                                content.title}

                                {!readOnly &&
                                <textarea>
                                        {content.title}
                                    </textarea>
                                }
                            </textPath>
                        </th>
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
                            <textPath
                                value={content}
                                // onChange={getContent}
                            >
                                {readOnly &&
                                content.content
                                }

                                {!readOnly &&

                                <ReactQuill
                                    theme="snow"
                                    // value={newValue}
                                    onChange={handleQuill}
                                    modules={modules}
                                    formats={formats}
                                >
                                    <textarea className="quill-font">
                                        {content.content}
                                    </textarea>
                                </ReactQuill>
                                }

                            </textPath>
                        </td>

                        <td>2020.07.31</td>
                    </tr>
                    </tbody>
                </Table>

                <textPath>
                    {readOnly &&
                    <div>
                        <Button className="fix-btn"
                                variant="outline-dark"
                                onClick={getContent}
                        >수정
                        </Button>

                        <Button
                            variant="outline-dark"
                            onClick={deleteBoard}
                        >
                            삭제
                        </Button>
                    </div>
                    }


                    {
                        !readOnly &&
                        <div>
                            <Button className="fix-btn"
                                    variant="outline-dark"
                                    onClick={updateBoard}
                            >수정완료
                            </Button>
                            <Button variant="outline-dark">
                                <Link to='/Community/Review'>뒤로</Link>
                            </Button>
                        </div>
                    }

                </textPath>

                <Form.Group className="comment">
                    <button className='comment-btn' >댓글 :</button>

                    <Form.Control type="text" placeholder="Normal text" />
                    <Button className="cmt-btn" variant="secondary" >
                        <Link to='/Review'>댓글달기</Link>
                    </Button>
                </Form.Group>

            </div>
        </Container>
    );
};

export default Review;
