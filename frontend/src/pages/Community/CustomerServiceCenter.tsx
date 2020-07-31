import React from 'react';
import {Button, Dropdown, DropdownButton, Form, FormControl, Navbar, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import './styles.css'
import './community.css'


const CustomerServiceCenter = () => {


    return (

            <Table striped bordered hover>
            <h1>고객서비스센터</h1>
                <Navbar className="bg-light justify-content-between" >
                    <thead>
                    <tr>
                        <th>
                           <textPath>고객아이디</textPath>
                        </th>
                        <th className="gesi">
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button type="submit">게시물 검색하기</Button>
                            </Form>
                        </th>
                        <th className="ii"
                        >
                            <textPath>게시물 등록일: </textPath>

                        </th>
                        <th>
                            <textPath>조회수</textPath>
                        </th>

                    </tr>
                    <tbody>

                    <tr>
                        <td>pw***</td>
                        <td><Link to="/Review">김모씨</Link></td>
                        <td>2020.07.31</td>
                        <td>34</td>
                    </tr>
                    <tr>
                        <td>pw***</td>
                        <td><Link to="/Review">이모씨</Link></td>
                        <td>2020.07.31</td>
                        <td>3</td>

                    </tr>
                    <tr>
                        <td>pw***</td>
                        <td>박모씨</td>
                        <td>2020.07.31</td>
                        <td>7</td>

                    </tr>
                    <tr>
                        <td>pw***</td>
                        <td>최모씨</td>
                        <td>2020.07.30</td>
                        <td>12</td>

                    </tr>
                    <tr>
                        <td>pw***</td>
                        <td>구모씨</td>
                        <td>2020.07.25</td>
                        <td>7</td>

                    </tr>
                    <tr>
                        <td>**</td>
                        <td>강모씨</td>
                        <td>@bird</td>
                        <td>5</td>

                    </tr>
                    <tr>
                        <td>**</td>
                        <td>조모씨</td>
                        <td>@horse</td>
                        <td>7</td>

                    </tr>
                    <tr>
                        <td>**</td>
                        <td>윤모씨</td>
                        <td>@shark</td>
                        <td>7</td>

                    </tr>
                    </tbody>
                    <Button className="ml-auto" variant="secondary"
                    ><Link to='/Edit'>글쓰기</Link></Button>

                    </thead>

                </Navbar>

            </Table>
    )
}

export default CustomerServiceCenter;