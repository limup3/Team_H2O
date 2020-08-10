import React from 'react';
import {Button, Dropdown, DropdownButton, Form, FormControl, Navbar, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import './styles.css'
import './community.css'
import {SideBar} from "./index";


const QueAn = () => {


    return (
        <>
            <div className="QA-1">
        <SideBar/>
            <div id="page-wrapper-2">
        <Table striped bordered hover className="que-table">
            <Navbar className="que-nav" >
                <thead>
                <tr>
                    <th>번호</th>
                    <th>사용자 이름</th>
                    <th style={{width:'150px'}}>
                        <DropdownButton   id="dropdown-basic-button" title="질문항목">
                            <Dropdown.Item href="#/action-1">사용질문</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">결제질문</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">오류질문</Dropdown.Item>
                        </DropdownButton>
                    </th>
                    <th className="gesi">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button type="submit">게시물 검색하기</Button>
                        </Form>
                    </th>
                    <th className="ii">
                        <textPath>게시물 등록일: </textPath>
                    </th>
                    <th>
                        <textPath>조회수</textPath>
                    </th>
                    <th>
                        <textPath>진행상황</textPath>
                    </th>

                </tr>
                <tbody>

                <tr>
                    <td>0</td>
                    <td>
                        donald**</td>
                    <td>사용질문</td>
                    <td><Link to="/QAReview">효과적으로 사용할수있는방법?.</Link></td>
                    <td>2020.07.31</td>
                    <td>34</td>
                    <td>진행중</td>

                </tr>
                <tr>
                    <td>1</td>
                    <td>Elon**</td>
                    <td>결제질문</td>
                    <td><Link to="/QAReview">빠르게 서비스를 이용할수있나요?</Link></td>
                    <td>2020.08.03</td>
                    <td>160</td>
                    <td>진행중</td>

                </tr>
                <tr>
                    <td>2</td>
                    <td>pw****</td>
                    <td>오류질문</td>
                    <td>오류를 안나게하려면 어떻게할까?</td>
                    <td>2020.07.31</td>
                    <td>7</td>
                    <td>진행중</td>

                </tr>
                <tr>
                    <td>3</td>
                    <td>pw****</td>
                    <td>오류질문</td>
                    <td>결제부분에서 중복이 됬습니다.</td>
                    <td>2020.07.30</td>
                    <td>12</td>
                    <td>진행중</td>

                </tr>
                </tbody>
                <Button className="ml-auto" variant="secondary"
                ><Link to='/Edit'>글쓰기</Link></Button>

                </thead>

            </Navbar>

        </Table>
        </div>
            </div>
            </>
    )
}

export default QueAn;