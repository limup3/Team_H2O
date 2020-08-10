import React from 'react';
import {Button, Dropdown, DropdownButton, Form, FormControl, Navbar, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import './community.css'
import {SideBar} from "./index";


const CustomerServiceCenter = () => {


    return (
        <>
            <div className="CS-div">
            <SideBar/>
                <div id="page-wrapper-1">
            <Table striped bordered hover className="table-CS" >
                <Navbar className="bg-light justify-content-between-1">
                <thead className="table-comu">
                    <tr>
                    <th>번호</th>
                    <th>사용자 이름</th>
                    <th >
                        <DropdownButton   id="dropdown-basic-button" title="항목">
                            <Dropdown.Item href="#/action-1">서비스</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">결제</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">오류</Dropdown.Item>
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
                    <td>진행중</td>

                </tr>
                <tr>
                    <td>3</td>
                    <td>pw****</td>
                    <td>결제</td>
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


export default CustomerServiceCenter;