import React from 'react';
import {Route} from "react-router-dom";
import CommunityTem from "./CommunityTem";
import CustomerServiceCenter from "./CustomerServiceCenter";
import QueAn from "./QueAn";
import Edit from "./Edit";


const TablePage = () => {

    return (
        <div>
            <Route path="/Community" exact>
                <div className="main-board">
                    <CommunityTem/>
                </div>
            </Route>
            <Route path="/Community/CustomerServiceCenter">
                <div className="main-board">
                    <CustomerServiceCenter/>
                </div>
            </Route>

            <Route path="/Community/QueAn">
                <div className="main-board">
                    <QueAn/>
                </div>
            </Route>

            <Route path="/Community/Edit">
                <div className="main-board">
                    <Edit/>
                </div>
            </Route>
            <Route path="/Community/CSFix">
                <div className="main-board">
                    <Edit/>
                </div>
            </Route>
            <Route path="/Community/QAFix">
                <div className="main-board">
                    <Edit/>
                </div>
            </Route>



        </div>
    );
};

export default TablePage;