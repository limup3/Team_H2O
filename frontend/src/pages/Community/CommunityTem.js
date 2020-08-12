import React from 'react';
import { Link } from 'react-router-dom'
import './community.css'
import {Button, Table} from "react-bootstrap";
const CommunityTem = () => {


    return (
        <>
            {/*<div className="content-title">*/}
            {/*    <h2 className="menu-h2"> - 공지사항</h2>*/}
            {/*    <div id="select-search-bar">*/}
            {/*        <div >내용선택 :*/}
            {/*            <select className="form-control">*/}
            {/*                <option value="">선택</option>*/}
            {/*                <option>제목</option>*/}
            {/*                <option>내용</option>*/}
            {/*                <option>제목 및 내용</option>*/}
            {/*            </select>*/}
            {/*        </div>*/}
            {/*        <div>카테고리 :*/}
            {/*            <select className="form-control" id="select">*/}
            {/*                <option value="">카테고리</option>*/}
            {/*                <option>지역</option>*/}
            {/*                <option>사이트</option>*/}
            {/*            </select>*/}
            {/*        </div>*/}
            {/*        <span id="search-bar">*/}
            {/*            /!*<SearchBar onSearch={handleSearch} />*!/*/}
            {/*        </span>*/}
            {/*    </div>*/}
            {/*</div>*/}


            <div>
                <Table className="community-table" responsive hover style={{ textAlign: "center" }}>
                    <thead >
                    <tr>
                        <th>번호</th>
                        <th>사용자아이디</th>
                        <th>
                            <select className="form-control">
                                <option value="">항목구분</option>
                                <option>정형외과</option>
                                <option>내과</option>
                                <option>신경과</option>
                                <option>소아과</option>
                                <option>피부과</option>
                                <option>여성의학과</option>
                            </select>
                        </th>
                        <th>게시물 제목</th>
                        <th>등록날짜</th>
                        <th>조회수</th>

                    </tr>
                    </thead>
                    <tbody >
                    <tr>
                        <td>0</td>
                        <td>
                            donald**</td>
                        <td>신경외과</td>
                        <td><Link to="/Review">머리가 아파요</Link></td>
                        <td>2020.07.31</td>
                        <td>34</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>
                            donald**</td>
                        <td>신경외과</td>
                        <td><Link to="/Review">머리가 아파요</Link></td>
                        <td>2020.07.31</td>
                        <td>34</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Elon**</td>
                        <td>외과</td>
                        <td><Link to="/Review2">손가락 마디가 불편해요</Link></td>
                        <td>2020.08.03</td>
                        <td>160</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>pw****</td>
                        <td>근육통</td>
                        <td>아침에 일어나서 승모근이 아파요</td>
                        <td>2020.07.31</td>
                        <td>7</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>c2****</td>
                        <td>정형외과</td>
                        <td>무릎에 통증이 있을 경우 어떻게할까요?</td>
                        <td>2020.07.30</td>
                        <td>12</td>

                    </tr>
                    <tr>
                        <td>4</td>
                        <td> ag****</td>
                        <td>소아과</td>
                        <td>아이가 열이 심한데 주의 할 점 있을까요? </td>
                        <td>2020.07.25</td>
                        <td>7</td>

                    </tr>
                    <tr>
                        <td>5</td>
                        <td>pw****</td>
                        <td>내과</td>
                        <td>식중독이 의심됩니다.</td>
                        <td>@bird</td>
                        <td>5</td>

                    </tr>
                    <tr>
                        <td>6</td>
                        <td>by****</td>
                        <td>내과</td>
                        <td>온몸이 춥고 땀이 나요</td>
                        <td>@horse</td>
                        <td>7</td>

                    </tr>
                    <tr>
                        <td>7</td>
                        <td>yj****</td>
                        <td>질병내과</td>
                        <td>기침이 계속되고, 가래가 나와요</td>
                        <td>@shark</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>pw****</td>
                        <td>신경뇌과</td>
                        <td>뇌졸증인거같아요</td>
                        <td>@bird</td>
                        <td>5</td>

                    </tr>
                    <tr>
                        <td>9</td>
                        <td>by****</td>
                        <td>정형외과</td>
                        <td>골절인거같아요</td>
                        <td>@horse</td>
                        <td>7</td>

                    </tr>
                    <tr>
                        <td>10</td>
                        <td>yj****</td>
                        <td>내과</td>
                        <td>감기인거같아요</td>
                        <td>@shark</td>
                        <td>7</td>
                    </tr>
                    </tbody>
                </Table>
                <Button className="ml-auto" variant="secondary">
                    <Link to='/Edit'>글쓰기</Link>
                </Button>
                </div>

        </>
    );
};

export default CommunityTem;