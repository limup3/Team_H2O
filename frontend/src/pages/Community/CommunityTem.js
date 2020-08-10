import React from 'react';
import { Link } from 'react-router-dom'
import {SideBar} from "./index";
import './community.css'
import {Button, Dropdown, DropdownButton, Form, FormControl, Navbar, Table} from "react-bootstrap";
const CommunityTem = () => {

    return (
        <>
        <SideBar/>
                <div id="page-wrapper">
                    {/*<div className="row">*/}
                    {/*    <div className="col-lg-12"><br/>*/}
                    {/*        <Link to="/review"><h2 className="page-header">후기</h2><br/></Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <Table striped bordered hover>
                    <Navbar className="bg-light justify-content-between">
                        <thead className="table-comu">
                        <tr>
                            <th>번호</th>
                            <th>사용자 이름</th>
                            <th style={{width:'150px'}}>
                                <DropdownButton   id="dropdown-basic-button" title="과별항목">
                                    <Dropdown.Item href="#/action-1">정형외과</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">신경외과</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">내과</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">질병과</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">안과</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">소아과</Dropdown.Item>
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

                        </tr>
                        <tbody>

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
                        </tbody>
                        <Button className="ml-auto" variant="secondary"
                        ><Link to='/Edit'>글쓰기</Link></Button>


                        </thead>

                    </Navbar>
                </Table>

            </div>
        </>
    );
};

export default CommunityTem;