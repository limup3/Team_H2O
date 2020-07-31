import React from "react";
import { Switch, Route } from "react-router-dom";
import {NavBar, Footer} from './layout'
import {MainTopPage, MainBottomPage} from './pages/splash-page'
import {Map} from './pages/SearchHospital'
import {Ambulance} from './pages/Ambulance'
import {TeleMedicine} from './pages/TeleMedicine'
import {Community, CustomerServiceCenter, QueAn, Review, Edit} from './pages/Community'
import {Login, SignUp, MyPage, User_Modify, User_FindID, User_FindPW, Reset_PW} from './pages/Account'


const Page = () => (

    <Switch>
        <Route path="/" exact>
        <NavBar/>
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

        <Route path="/User_Modify">
        <NavBar/>
        <User_Modify/>
        <Footer/>
        </Route>

        <Route path="/User_FIndID">
        <NavBar/>
        <User_FindID/>
        <Footer/>
        </Route>

        <Route path="/User_FIndPW">
         <NavBar/>
         <User_FindPW/>
         <Footer/>
         </Route>

        <Route path="/Reset_PW">
         <NavBar/>
         <Reset_PW/>
         <Footer/>
         </Route>

        <Route path="/SignUp">
        <NavBar/>
        <SignUp/>
        <Footer/>
        </Route>
        
    </Switch>
);

export default Page;