import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import LogoComponent from '../subComponent/LogoComponent';
import PowerButtons from '../subComponent/PowerButtons';
import Socialicons from '../subComponent/Socialicons.js';
import { YinYang } from './AllSvg';
import { motion } from 'framer-motion';
import resume from './Khoder3.pdf';
import Intro from './Intro';
import "../App.css"
const MainContaier = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden;
  max-height: 100vh;
  padding: 0;
 

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`;
const Container = styled.div`
  padding: 2rem;
`;
const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1.2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  --c: black; /* the color  */
  --h: 2.5em;   /* the height */
  
  line-height: var(--h);  

  color: black;
  overflow: hidden;
  text-shadow: 
    0 calc(-1*var(--h)*var(--_i,0)) var(--c), 
    0 calc(var(--h)*(1 - var(--_i,0))) #fff;
  background: 
    linear-gradient(var(--c) 0 0) no-repeat
    calc(200% - var(--_i, 0) * 100%) 100% / 200% calc(100% * var(--_i, 0) + .08em);
  transition: .3s calc(var(--_i, 0) * .3s), background-position .3s calc(.3s - calc(var(--_i, 0) * .3s));
  @media only screen and (max-width:380px){
right: ${(props) => (props.click ?'' :'-7%')};
;

}
  &:hover {
    background-color: #C0C0C0;
    box-shadow:0 0 8px 6px #C0C0C0;
    color:white;
    padding-left:1em;
    padding-top:0.3em;
    -webkit-transition: all 1s ease;
  transition: all 1s ease;
  --_i: 1;
  }
`;
const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 48%;
  left: 1rem;
  transform: rotate(90deg) translate(-50%, -50%);

  overflow: hidden;
  text-decoration: none;
  --c: black; /* the color  */
  --h: 2.5em;   /* the height */
  
  line-height: var(--h);  
width:7rem; 
  overflow: hidden;
  text-shadow: 
    0 calc(-1*var(--h)*var(--_i,0)) var(--c), 
    0 calc(var(--h)*(1 - var(--_i,0))) #fff;
  background: 
    linear-gradient(var(--c) 0 0) no-repeat
    calc(200% - var(--_i, 0) * 100%) 100% / 200% calc(100% * var(--_i, 0) + .08em);
  transition: .3s calc(var(--_i, 0) * .3s), background-position .3s calc(.3s - calc(var(--_i, 0) * .3s));

  @media only screen and (max-width:670px){

left:-3rem;
}

  &:hover {
    background-color: #C0C0C0;
    box-shadow:0 0 8px 6px #C0C0C0;
    color:white;
    --_i: 1;
    padding-left:0.7em;
   
  }

  z-index: 1;
`;
const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 3vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  --c: black; /* the color  */
  --h: 2.5em;   /* the height */
  
  line-height: var(--h);  
  width:7.5em;
  height:2.7em;
  color: black;
  overflow: hidden;
  text-shadow: 
    0 calc(-1*var(--h)*var(--_i,0)) var(--c), 
    0 calc(var(--h)*(1 - var(--_i,0))) #fff;
  background: 
    linear-gradient(var(--c) 0 0) no-repeat
    calc(200% - var(--_i, 0) * 100%) 100% / 200% calc(100% * var(--_i, 0) + .08em);
  transition: .3s calc(var(--_i, 0) * .3s), background-position .3s calc(.3s - calc(var(--_i, 0) * .3s));
  @media only screen and (max-width:466px){

right:-1rem;
}
  &:hover {
    --_i: 1;
    padding-left:01em;
    padding-top:0.3em;
    color:white;
    -webkit-transition: all 0.7s ease;
  transition: all 0.7s ease;
  }
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 1rem;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  --c: black; /* the color  */
  --h: 2.5em;   /* the height */
  
  line-height: var(--h);  
  width:6em;
  height:2.5em;

  overflow: hidden;

  text-shadow: 
    0 calc(-1*var(--h)*var(--_i,0)) var(--c), 
    0 calc(var(--h)*(1 - var(--_i,0))) #fff;
  background: 
    linear-gradient(var(--c) 0 0) no-repeat
    calc(200% - var(--_i, 0) * 100%) 100% / 200% calc(100% * var(--_i, 0) + .08em);
  transition: .3s calc(var(--_i, 0) * .3s), background-position .3s calc(.3s - calc(var(--_i, 0) * .3s));

  &:hover {
    color:white;
    --_i: 1;
    background-color: #C0C0C0;
    box-shadow:0 0 8px 6px #C0C0C0;
    padding-left:0.9em;
    padding-top:0.2em;
    -webkit-transition: all 0.7 ease;
  transition: all 0.7 ease;
  }
`;
const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
  --c: black; /* the color  */
  --h: 2.5em;   /* the height */
  
  line-height: var(--h);  
  width:6em;
  
  height:2.5em;
  color: black;
  overflow: hidden;
  text-shadow: 
    0 calc(-1*var(--h)*var(--_i,0)) var(--c), 
    0 calc(var(--h)*(1 - var(--_i,0))) #fff;
  background: 
    linear-gradient(var(--c) 0 0) no-repeat
    calc(200% - var(--_i, 0) * 100%) 100% / 200% calc(100% * var(--_i, 0) + .08em);
  transition: .3s calc(var(--_i, 0) * .3s), background-position .3s calc(.3s - calc(var(--_i, 0) * .3s));

  &:hover {
    background-color: #C0C0C0;
    box-shadow:0 0 8px 6px #C0C0C0;
    -webkit-transition: all 0.7 ease;
  transition: all 0.7 ease;
    color:white;
    --_i: 1;
    padding-left:0.9em;
    padding-top:0.2em;
  }
`;
const rotate = keyframes`
from {
  transform:rotate(0)
}
to{
  transform: rotate(360deg);
}`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? '85%' : '50%')};
  left: ${(props) => (props.click ? '92%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
   @media only screen and (max-width:830px){
   
  }
  
  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > :last-child {
    display: ${(props) => (props.click ? 'none' : 'inline-block')};
    padding-top: 1rem;
  }
`;
const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  overflow-y: hidden;
  overflow-x: hidden;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? '50%' : '0%')};
  height: ${(props) => (props.click ? '100%' : '0%')};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
  @media only screen and (max-width:910px){

min-height: 105vh;
}

  @media only screen and (max-width:617px){

  min-height: 114vh;
  }
  @media only screen and (max-width:415px){

min-height: 135vh;
}

  
`;
const Resume = styled(NavLink)`
color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
font-size:32px;
font-weight: Border;
font-style: italic;

text-decoration: none;
&:hover {

    color:black;
    -webkit-transition: all 1s ease;
  transition: all 1s ease;
  }

z-index: 1;
`;

function Main() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })
  

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    
    <MainContaier>
      <DarkDiv click={click} />
      <Container>
        <PowerButtons />
        <LogoComponent   theme={click ? 'dark' : 'light'} />
        <Socialicons theme={click ? 'dark' : 'light'} />

        <Center click={click}>
          <YinYang id="yin"
            onClick={() => handleClick()}
            width={click ? 120 : 250}
            height={click ? 120 : 250}
            fill="" />
          <span>
            
            <Resume target="_blank" to={{ pathname: resume }}>
              Click Here
            </Resume>
          </span>
        </Center>

        <Contact
          href="mailto:Khoderhabbal36@gmail.com">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say Hii..
          </motion.h2>
        </Contact>
        <Blog to="/Theme1/blog">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {' '}
            Projects
          </motion.h2>
        </Blog>
        <Work to="/Theme1/work" click={click}>
          <motion.h2
            initial={{
              x: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            animate={{
              x: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {' '}
            Work
          </motion.h2>
        </Work>
        <BottomBar>
          <About to="/Theme1/about" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {' '}
              About
            </motion.h2>
          </About>
          <Skills to="/Theme1/myskills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {' '}
              Skills
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContaier>
  );
}

export default Main;
