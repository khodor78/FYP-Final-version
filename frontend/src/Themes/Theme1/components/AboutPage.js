import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';

import LogoComponent from '../subComponent/LogoComponent';
import SocialIcons from '../subComponent/Socialicons';
import PowerButton from '../subComponent/PowerButtons';
//import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png';
import BigTitlte from '../subComponent/BigTitle';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 54vw;
  height: 80vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
 margin-top:-4rem;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          I'm a Full-Stach Developer Using Mern,Mongo Express, React, Node.
          <br /> <br />
          I'm also a Desktop Developer Using C# to benefit the compant by a good System.          
          <br /> <br />
          Seeking a position as a system analyst where I can improve company business productivity and utilize my knowledge to provide insightful solutions.

          <br /> <br />
          Coding is like a hubby for me in my free time to update my knowledge with new one
          <br/>
          <br/>
          I love Coffee, Reading books, ANIMY and finalizing my job perfectly.
        </Main>
        <BigTitlte text="ABOUT" top="-2%" left="5%" />

      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
