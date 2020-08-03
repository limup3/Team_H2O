import React from 'react';
import {Table, Navbar,Form,FormControl,Button,DropdownButton,Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import './styles.css'
import './community.css'
import TablePagination from '@material-ui/core/TablePagination';

const Chart=()=> {
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return(

    <Table striped bordered hover>

        <Navbar className="bg-light justify-content-between">
            <thead className="table-comu">
                <tr>
                    <th>번호</th>
                    <th>사용자 이름</th>
                    <th style={{width:'150px'}}>
                        <DropdownButton   id="dropdown-basic-button" title="항목">
                            <Dropdown.Item href="#/action-1">공지</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">육아</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">자랑</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">나눔</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">후기</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">기타</Dropdown.Item>
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
                    <td>자랑</td>
                    <td><Link to="/Review">내가 오늘 한 일 자랑한다.</Link></td>
                    <td>2020.07.31</td>
                    <td>34</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Elon**</td>
                    <td>나눔</td>
                    <td><Link to="/Review2">즐거운 나눔활동</Link></td>
                    <td>2020.08.03</td>
                    <td>160</td>

                </tr>
                <tr>
                    <td>2</td>
                    <td>pw****</td>
                    <td>후기</td>
                    <td>여기 한번 꼭 가보세요</td>
                    <td>2020.07.31</td>
                    <td>7</td>

                </tr>
                <tr>
                    <td>3</td>
                    <td>pw****</td>
                    <td>후기</td>
                    <td>흠... 솔직한 후기</td>
                    <td>2020.07.30</td>
                    <td>12</td>

                </tr>
                <tr>
                    <td>4</td>
                    <td>pw****</td>
                    <td>후기</td>
                    <td>너무좋아요! 여긴 꼭 가야해!</td>
                    <td>2020.07.25</td>
                    <td>7</td>

                </tr>
                <tr>
                    <td>5</td>
                    <td>pw****</td>
                    <td>**</td>
                    <td>강모씨</td>
                    <td>@bird</td>
                    <td>5</td>

                </tr>
                <tr>
                    <td>6</td>
                    <td>pw****</td>
                    <td>**</td>
                    <td>조모씨</td>
                    <td>@horse</td>
                    <td>7</td>

                </tr>
                <tr>
                    <td>7</td>
                    <td>pw****</td>
                    <td>**</td>
                    <td>윤모씨</td>
                    <td>@shark</td>
                    <td>7</td>

                </tr>
                </tbody>
                <Button className="ml-auto" variant="secondary"
                ><Link to='/Edit'>글쓰기</Link></Button>


                <TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />



            </thead>

        </Navbar>

    </Table>
    )
}
export default Chart