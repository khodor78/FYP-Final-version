import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import BigTitlte from '../subComponent/BigTitle';
import LogoComponent from '../subComponent/LogoComponent';
import PowerButtons from '../subComponent/PowerButtons';
import Socialicons from '../subComponent/Socialicons';
import { Design, Develope } from './AllSvg';
import { LightTheme } from './Themes';
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Main = styled.div`
border: 2px solid ${(props) => props.theme.text};
color:${(props) => props.theme.text};
background-color: ${(props) => props.theme.body};
padding:3rem;
width:30vw;
height:70vh;
z-index:3;
line-height:1.5;
cursor:pointer;

font-family:'Ubuntu Mono',monospace;
display:flex;
flex-direction:column;
justify-content:center;

&:hover{
  color:${(props) => props.theme.body};
  background-color:${(props) => props.theme.text};
}
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 1rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;
function MySkillsPage() {
  return (
    <ThemeProvider theme={LightTheme}>
        <LogoComponent theme="light" />
        <Socialicons theme="light" />
        <PowerButtons />
      
      <Box>
      
       
        <Main>
          <Title>
            <Develope width={40} height={40} />
            Desktop Developer
          </Title>
          <Description>
           I love to create System to provide the company with good reports to complete their tranaction
          </Description>
          <Description>
            <strong>Experience</strong>
            <ul>
              <li> P.O.S System </li>
              <li> Crud APP </li>
            </ul>
          </Description>
          <Description>
            <strong>Language</strong>
            <ul>
              <li> C# </li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} />
          Web Developer 
          </Title>
          <Description>
            I Love to create animated full-worked website 
          </Description>
          <Description>
            <strong>SKIlls</strong>
            <p>HTML,CSS,JavaSCript,PHP,Monogo, Pyhton</p>
          </Description>
          <Description>
            <strong>Future Thing to learn</strong>
            <ul>
              <li> Machine Learning in Web server</li>
              <li> A.I, Robotics</li>

            </ul>
          </Description>
        </Main>
        <BigTitlte text="SKILLS" top="67%" left="50%" />
      </Box>
    </ThemeProvider>
  );
}

export default MySkillsPage;
