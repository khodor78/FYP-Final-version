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
display:grid;
place-items:center center;
`;
const Card = styled.div`

align-items: center;
position:absolute;
left:15%;
top:10%;
bottom:20%;
right:10%;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(500px,1fr));
grid-gap:40px;
@media only screen and (max-width:1270px){
left:37%;
top: 20%;
right:10%;
}
@media only screen and (max-width:980px){
left:20%;

}
@media only screen and (max-width:680px){
left:10%;

}
`
const Main = styled.div`
opacity:0.9;
border: 2px solid ${(props) => props.theme.text};
color:${(props) => props.theme.text};
background-color: ${(props) => props.theme.body};
padding:3rem;
width:30vw;
height:80vh;
z-index:3;
line-height:1.5;
cursor:pointer;

font-family:'Ubuntu Mono',monospace;
display:flex;
flex-direction:column;
justify-content:center;
@media only screen and (max-width:1270px){
width:100%;
}
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
      
       <Card>
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
        </Card>
        <BigTitlte text="SKILLS" top="67%" left="50%" />
      </Box>
    </ThemeProvider>
  );
}

export default MySkillsPage;
