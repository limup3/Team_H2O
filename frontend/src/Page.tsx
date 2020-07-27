import React from "react";
import { Switch, Route } from "react-router-dom";
import {NavBar, Footer} from './layout'
import {MainTopPage, MainBottomPage} from './pages/splash-page'
import {Map} from './pages/SearchHospital'
import {Ambulance} from './pages/Ambulance'
import {TeleMedicine} from './pages/TeleMedicine'
import {Community} from './pages/Community'
import {Login, SignUp, Mypage,User_Modify} from './pages/Account'


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
        <Mypage/>
        <Footer/>
        </Route>
        <Route path="/User_Modify">
        <NavBar/>
        <User_Modify/>
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