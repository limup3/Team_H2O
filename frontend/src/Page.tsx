import React from "react";
import {Switch, Route } from "react-router-dom";
import {NavBar, Footer} from './layout'
import {MainTopPage, MainBottomPage} from './pages/splash-page'
import {SearchHospital} from './pages/SearchHospital'
import {Ambulance} from './pages/Ambulance'
import {TeleMedicine, RtcRoom} from './pages/TeleMedicine'
import {Community, CustomerServiceCenter, QueAn, Review, Edit,Review2,Fix} from './pages/Community'
import {Login, SignUp, MyPage, UserModify, UserFindID, UserFindPW, ResetPW, } from './pages/Account'

const Page = () => (

    <Switch>
        <Route path="/" exact>
        <MainTopPage/>
        <MainBottomPage/>
        <Footer/>
        </Route>

        <Route path="/Ambulance">
        <NavBar/>
        <Ambulance/>
        <Footer/>
        </Route>

        <Route path="/CustomerServiceCenter">
        <NavBar/>
        <CustomerServiceCenter/>
        <Footer/>
        </Route>

        <Route path="/QueAn">
        <NavBar/>
        <QueAn/>
        <Footer/>
        </Route>

        <Route path="/Review">
        <NavBar/>
        <Review/>
        <Footer/>
        </Route>

        <Route path="/Edit">
        <NavBar/>
        <Edit/>
        <Footer/>
        </Route>

        {/*<Route path="/TeleMedicine">*/}
        {/*<RtcRoom/>*/}
        {/*</Route>*/}

        {/*<Route path="/TeleMedicine/:roomId">*/}
        {/*<TeleMedicine/>*/}
        {/*</Route>    */}
        <React.Fragment>
        <Route path="/TeleMedicine" exact component={RtcRoom}/>
        <Route path="/TeleMedicine/:roomId" exact component={TeleMedicine}/>
         </React.Fragment>

        <Route path="/Community">
        <NavBar/>
        <Community/>
        <Footer/>
        </Route>

        <Route path="/SearchHospital">
        <NavBar/>
        <SearchHospital/>
        <Footer/>
        </Route>

        <Route path="/Login">
        <NavBar/>
        <Login/>
        <Footer/>
        </Route>
        
        <Route path="/MyPage">
        <NavBar/>
        <MyPage/>
        <Footer/>
        </Route>

        <Route path="/UserModify">
        <NavBar/>
        <UserModify/>
        <Footer/>
        </Route>

        <Route path="/UserFIndID">
        <NavBar/>
        <UserFindID/>
        <Footer/>
        </Route>

        <Route path="/UserFIndPW">
         <NavBar/>
         <UserFindPW/>
         <Footer/>
         </Route>

        <Route path="/ResetPW">
         <NavBar/>
         <ResetPW/>
         <Footer/>
         </Route>

        <Route path="/SignUp">
        <NavBar/>
        <SignUp/>
        <Footer/>
        </Route>

        <Route path="/Review2">
            <NavBar/>
            <Review2/>
            <Footer/>
        </Route>

        <Route path="/Fix">
            <NavBar/>
            <Fix/>
            <Footer/>
        </Route>
        
    </Switch>

);

export default Page;