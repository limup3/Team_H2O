import React from "react";
import {Container} from "react-bootstrap";
import CommunityTem from "./CommunityTem"
import CustomerServiceCenter from "./CustomerServiceCenter";
import QueAn from "./QueAn";
import {SideBar, TablePage} from "./index";
import {Route} from 'react-router-dom'

const Community = () => (
    <>
        <Container className="main-bigboard">
            <div id="page-wrapper-1">
                <div className="main-side">
                    <SideBar/>
                </div>
                <TablePage />
            </div>
        </Container>
    </>
);
export default Community
