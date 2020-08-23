import React, {useState,useEffect} from 'react';
import './community.css'
import {Button, Table,Form,Col} from "react-bootstrap";
import axios from 'axios'
import {Link, useHistory} from "react-router-dom";
import {MDBCol, MDBPageItem, MDBPageNav, MDBPagination, MDBRow} from "mdbreact";
import Posts from './Posts';
import Pagination from './Pagination';
const CommunityTem = () => {
    const [postList, setPostList] = useState([])
    const [medCategory, setMedCategory] = useState('')
    const [sendList, setSendList] = useState([])
    const [creationDate, setCreationDate] = useState('')
    const [click, setClick] = useState(0);
    const [state, setState] = useState('')
    const history = useHistory()

    const [currentPage, setCurrentPage] = useState(1)
    //현재페이지
    const [postsPerPage] = useState(10)
    //한 페이지에서 보여줄 수 있는 postList 수

    const [loading, setLoading] = useState(false)

    const indexOfLastPost = currentPage * postsPerPage;
    //해당 페이지에서 마지막 postList의 index 번호
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    //해당 페이지에서 첫번째 post의 index 번호
    const currentPosts = sendList.slice(indexOfFirstPost, indexOfLastPost);
    // 각 페이지에서 보여질 포스트 배열

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < currentPosts.length) {
        setCurrentPage(currentPage + 1);
        } else if (postsPerPage < currentPosts.length) {
        setCurrentPage(currentPage + 1);
        } else {
        setCurrentPage(currentPage);
        }
          };
     const prevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };


    useEffect(() => {
        axios
            .get('http://localhost:8080/board/list')
            .then(({data})=>{
                console.log(data);
                setPostList(data);
                setCreationDate(data);
                setClick(data);
            })
            .catch((err)=>{
                throw err;
            })
    }, [])

const changeCategory = (e)=>{
        if (e.target.value==='전체보기'){
            setSendList(postList)
        }else{
            setSendList([])
            console.log(e.target.value)
            postList.forEach(post=>{
                if (post.medCategory===e.target.value) {
                    console.log(post)
                    setSendList((sendList)=>[...sendList, post])
                }
            })

        }
}

    const handleClick=()=>{
        setState(state.value+1);
    }


    const getBoard = () =>{
        console.log(medCategory)
        axios
            .get(`http://localhost:8080/board/list`)
            .then((res)=>{
                //sessionStorage.setItem("board",JSON.stringify(res.data))
                //console.log(res.data)
                setPostList(res.data)
                // window.location.href="/board/Fix"
            })
            .catch((err)=>{
                throw err;
            })
    }
    const getPost = (e,value)=>{
        e.preventDefault()
        alert(value)
        //sessionStorage.setItem("title",value)
        window.location.href="/Review"
    }




    return (
        <>
            <div>
                <Table
                    className="community-table"
                    responsive hover style={{ textAlign: "center" }}>
                    <thead>
                    <tr>
                        <th className="form-select">번호</th>
                        <th className="form-select">사용자아이디</th>
                        <th className="form-select">
                            <select
                                value={medCategory}
                                onChange={changeCategory}
                            >

                                <option>진료과분류</option>
                                <option>전체보기</option>
                                <option>정형외과</option>
                                <option>내과</option>
                                <option>신경과</option>
                                <option>소아과</option>
                                <option>피부과</option>
                                <option>여성의학과</option>
                            </select>
                        </th>
                        <th>
                            게시물 제목 검색:
                            <Form.Row>
                                <Col className="searching" >
                                    <Form.Control  type="text" placeholder="검색어 입력" />
                                </Col>
                            </Form.Row>
                        </th>
                        <th className="form-select">등록날짜</th>
                        <th className="form-select">조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    <Posts sendList={currentPosts} loading={loading} />
                    </tbody>
                </Table>

                <div className="button-right">
                    <Button variant="outline-dark " onClick={()=>{history.push('/Edit')}}>글쓰기</Button>
                </div>

                <div>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={sendList.length}
                    paginate={paginate}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
                </div>

            </div>

        </>
    );
};

export default CommunityTem;