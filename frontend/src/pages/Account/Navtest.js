import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import ReactPlayer from 'react-player'
// import { css } from "styled-components/macro"; //eslint-disable-line



const Context = styled.div`
  background-image: url("https://img.onestore.co.kr/thumbnails/img_sac/0_0_A20_40/data6/android/201412/27/SE201412131811506170004506/0000680735/img/preview/0000680735_DP000105.png");
`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-primary-500 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;


const Notification = tw.span`inline-block my-4 pl-3 py-1 text-primary-500 border-l-4 border-blue-500 font-medium text-sm`;


const Navtest = () => (
  
  <Container>
    <Context>
  <HeroContainer>
    <TwoColumn>
      <LeftColumn>
        <Notification>&nbsp;&nbsp;[ 간편하게 병원 비교검색하고 원하는 병원 찾기 ]</Notification>
        <Heading>
          <span >&nbsp;&nbsp;병원찾기</span>
          <br />
          <br/>
        </Heading>
        <Actions>
              <input type="text" placeholder="Search Hospital" />
              <button>Click !</button>
            </Actions>
      </LeftColumn>
      <RightColumn>
        <ReactPlayer
        url='https://www.youtube.com/watch?v=hSxNj8pKAZg' playing controls
        width="100%"
        />  
      </RightColumn>
    </TwoColumn>
  </HeroContainer>
  </Context>
</Container>

);


export default Navtest