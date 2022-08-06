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
padding:2rem;
width:30vw;
height:60vh;
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
      <Box>
        <LogoComponent theme="light" />
        <Socialicons theme="light" />
        <PowerButtons />
        <Main>
          <Title>
            <Design width={40} height={40} />
            Designer
          </Title>
          <Description>
            I love to create createcreatecreatecreatecreateatecreate
          </Description>
          <Description>
            <strong>dsasa</strong>
            <ul>
              <li> Web Design </li>
              <li> Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li> Machine Learning </li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} />
            FrontEnd Developer
          </Title>
          <Description>
            I love to create createcreatecreatecreatecreatecreatecreate
          </Description>
          <Description>
            <strong>SKIlls</strong>
            <p>hejnsuadasbduasjaybsdhb</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li> Machine Learning </li>
            </ul>
          </Description>
        </Main>
        <BigTitlte text="SKILLS" top="67%" left="50%" />
      </Box>
    </ThemeProvider>
  );
}

export default MySkillsPage;
