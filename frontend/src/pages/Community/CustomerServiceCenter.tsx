import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import './community.css'
import axios from 'axios'


const CustomerServiceCenter = () => {


    return (
        <>
            <div className="CS-div">
                        <Table className="community-table" responsive hover style={{ textAlign: "center" }}>
                            <thead >
                            <tr>
                                <th>번호</th>
                                <th>사용자아이디</th>
                                <th>
                                    <select className="form-control">
                                        <option value="">항목구분</option>
                                        <option>서비스</option>
                                        <option>결제</option>
                                        <option>오류</option>
                                    </select>
                                </th>
                                <th>게시물 제목</th>
                                <th>등록날짜</th>
                                <th>조회수</th>
                                <th>진행상황</th>
                            </tr>
                            </thead>
                            <tbody >
                            <tr>
                                <td>0</td>
                                <td>donald**</td>
                                <td>오류</td>
                                <td><Link to="/CSReview">서버 연결중 오류가 계속떠요.</Link></td>
                                <td>2020.07.31</td>
                                <td>34</td>
                                <td>진행중</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Elon**</td>
                                <td>서비스</td>
                                <td><Link to="/CSReview">원하는 서비스를 제공 받을 수 없어요.</Link></td>
                                <td>2020.08.03</td>
                                <td>160</td>
                                <td>진행중</td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td>pw****</td>
                                <td>오류</td>
                                <td>클릭도중 오류가 발생했어요.</td>
                                <td>2020.07.31</td>
                                <td>7</td>
                                <td>마감</td>
                            </tr>

                            </tbody>
                        </Table>
                <div className="button-right">
                    <Button variant="outline-dark" >수정</Button>{' '}
                    <Button variant="outline-dark" >삭제</Button>{' '}
                    <Button variant="outline-dark" onClick={()=>{ window.location.href ="/Edit"}}>글쓰기</Button>
                </div>
            </div>
        </>
    )
}


export default CustomerServiceCenter;