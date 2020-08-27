import React from "react";
import Header from './Header'
import tw from "twin.macro";
const Container = tw.div`relative`;
const NavBar = () => {
    return (
    <>
    <Header/>
    <Container/>
    </>
    );
};
export default NavBar