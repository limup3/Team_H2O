import React from "react";
import {Switch, Route } from "react-router-dom";
import {NavBar, Footer} from './layout'
import {MainTopPage, MainBottomPage} from './pages/splash-page'
import {SearchHospital} from './pages/SearchHospital'
import {Ambulance} from './pages/Ambulance'
import {TeleMedicine, RtcRoom} from './pages/TeleMedicine'
import {Community, Edit} from './pages/Community'
import {Login, SignUp, UserModify, UserFindID, UserFindPW, UserDelete, } from './pages/Account'
import './pages/Community/community.css'
import { Reservation, TelReservation } from "./pages/Reservation";
import CarReservation from "./pages/Reservation/CarReservation";
import { Intro } from "./intro";

const Page = () => (

    <Switch>
            <Route path="/" exact>
                    <Intro/>
            </Route>

            <Route path="/H2O" exact>
                    <MainTopPage/>
                    <MainBottomPage/>
                    <Footer/>
            </Route>

            
            <Route path="/H2O/Reservation/:hospitalName/:name/:medicalSubject">
                    <NavBar/>
                    <Route path={`/Reservation/:hospitalName/:name/:medicalSubject`}
                       render = {(props) => <Reservation {...props}/>}>
                    </Route>
                    <Footer/>
            </Route>
            <Route path="/H2O/TelReservation/:hospitalName/:name/:medicalSubject">
                    <NavBar/>
                    <Route path={`/H2O/TelReservation/:hospitalName/:name/:medicalSubject`}
                       render = {(props) => <TelReservation {...props}/>}>
                    </Route>

                    <Footer/>
            </Route>
            <Route path="/H2O/CarReservation/:content/:name/:startAddr/:endAddr/:postcode">
                <NavBar/>
                <Route path={`/H2O/CarReservation/:content/:name/:startAddr/:endAddr/:postcode`}
                       render = {(props) => <CarReservation {...props}/>}>
                </Route>
                <Footer/>
            </Route>


            <Route path="/H2O/Ambulance">
                    <NavBar/>
                    <Ambulance/>
                    <Footer/>
            </Route>

            <Route path="/H2O/Edit">
                    <NavBar/>
                    <Edit/>
                    <Footer/>
            </Route>

            <Route path="/H2O/Community">
                    <NavBar/>
                    <Community/>
                    <Footer/>
            </Route>

            <Route path="/H2O/SearchHospital">
                    <NavBar/>
                    <SearchHospital/>
                    <Footer/>
            </Route>

            <Route path="/H2O/Login">
                    <NavBar/>
                    <Login/>
                    <Footer/>
            </Route>



            <Route path="/H2O/UserModify">
                    <NavBar/>
                    <UserModify/>
                    <Footer/>
            </Route>

            <Route path="/H2O/UserFIndID">
                    <NavBar/>
                    <UserFindID/>
                    <Footer/>
            </Route>

            <Route path="/H2O/UserFIndPW">
                    <NavBar/>
                    <UserFindPW/>
                    <Footer/>
            </Route>

            <Route path="/H2O/UserDelete">
                    <NavBar/>
                    <UserDelete/>
                    <Footer/>
            </Route>

            <Route path="/H2O/SignUp">
                    <NavBar/>
                    <SignUp/>
                    <Footer/>
            </Route>
                  
            <React.Fragment>
                    <Route path="/H2O/TeleMedicine" exact component={RtcRoom}/>
                    <Route path="/H2O/TeleMedicine/:roomId" exact component={TeleMedicine}/>
            </React.Fragment>

    </Switch>
);

export default Page;