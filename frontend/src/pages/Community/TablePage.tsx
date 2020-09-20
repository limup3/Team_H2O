import React from 'react';
import {Route} from "react-router-dom";
import CommunityTem from "./CommunityTem";
import Review from "./Review";

import QueAn from "./QueAn";
import QAReview from "./QAReview";

import CustomerServiceCenter from "./CustomerServiceCenter";
import CSReview from "./CSReview"

const TablePage = () => {

    return (

        <div>
            <Route path="/H2O/Community/userBoard" exact>
                    <CommunityTem/>
            </Route>

            <Route path="/H2O/Community/CustomerServiceCenter">
                <CustomerServiceCenter/>
            </Route>

            <Route path="/H2O/Community/QueAn">
                <QueAn/>
            </Route>


                    <Route path={`/H2O/Community/Review/:boardNo`}
                           render = {(props) => <Review {...props}/>}>
                    </Route>

                    <Route path={`/H2O/Community/CSReview/:boardNo`}
                           render = {(props) => <CSReview {...props}/>}>
                    </Route>

                    <Route path={`/H2O/Community/QAReview/:boardNo`}
                           render = {(props) => <QAReview {...props}/>}>
                    </Route>

        </div>
    );
};

export default TablePage;