import React from "react";
import {Switch, Route } from "react-router-dom";
import {NavBar, Footer} from './layout'
import {MainTopPage, MainBottomPage} from './pages/splash-page'
import {Map} from './pages/SearchHospital'
import {Ambulance} from './pages/Ambulance'
import {TeleMedicine} from './pages/TeleMedicine'
import {Community, CustomerServiceCenter, QueAn, Review, Edit} from './pages/Community'
import {Login, SignUp, MyPage, UserModify, UserFindID, UserFindPW, ResetPW, Navtest} from './pages/Account'


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


        <Route path="/TeleMedicine">
        <NavBar/>
        <TeleMedicine/>
        <Footer/>
        </Route>

        <Route path="/Community">
        <NavBar/>
        <Community/>
        <Footer/>
        </Route>

        <Route path="/SearchHospital">
        <NavBar/>
        <Map/>
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

        <Route path="/navtest">
        <Navtest/>
        <MainBottomPage/>
        <Footer/>
        </Route>
        
    </Switch>
);

export default Page;