import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { css } from "styled-components/macro"; //eslint-disable-line
import './Header.css'


import logo from "../../helpers/images/logo.svg";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-400 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion.custom(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

const handleLogout = () => {
  sessionStorage.clear()
  window.location.reload()
}

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {

  const defaultLinks = [
    <NavLinks key={1} >
      <Link to="/H2O/SearchHospital" className="navColor"><NavLink >병원찾기</NavLink></Link>
      <Link to="/H2O/Ambulance" className="navColor"><NavLink >응급차 호출</NavLink></Link>
      <Link to="/H2O/TeleMedicine" className="navColor"><NavLink target="_blank">화상 진료</NavLink></Link>
      <Link to="/H2O/Community/userboard" className="navColor"><NavLink  >커뮤니티</NavLink></Link>
      <NavLink className="navColor" href="/H2O/Admin" target="_blank">관리자(임시)</NavLink>
      {!sessionStorage.userData &&
        <Link to="/H2O/Login" className="navColor"><NavLink  tw="lg:ml-12!">
        Login
      </NavLink></Link>
      }
      {sessionStorage.userData &&
        <Link to="/H2O" className="navColor"><NavLink tw="lg:ml-12!" onClick={handleLogout}>
        Logout
      </NavLink></Link>
      }
      {!sessionStorage.userData &&
      <Link to="/H2O/SignUp"><PrimaryLink css={roundedHeaderButton && tw`rounded-full`}>Sign Up</PrimaryLink></Link>
      }
      {sessionStorage.userData &&
      <Link to="/H2O/UserModify"><PrimaryLink css={roundedHeaderButton && tw`rounded-full`}>MyPage</PrimaryLink></Link>
      }       
     
    </NavLinks>
  ];

  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <Link to="/H2O" className="navColor"><LogoLink >
      <img src={logo} alt="logo" />
      H2O
    </LogoLink></Link>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-Header"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
      </MobileNavLinksContainer>
    </Header>
  );
};


const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};

