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

const MainContaier = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden;
  height: 100vh;
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
const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 46%;
  left: 2rem;
  transform: rotate(-90deg);
  text-decoration: none;

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
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
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
`;
const Resume = styled(NavLink)`
color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
font-size:32px;
font-weight: Border;
font-style: italic;

text-decoration: none;

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
        <LogoComponent theme={click ? 'dark' : 'light'} />
        <Socialicons theme={click ? 'dark' : 'light'} />

        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 250}
            height={click ? 120 : 250}
            fill="CurremtColor"
          />
          <span>
            
            <Resume target="_blank" to={{ pathname: resume }}>
              Click Here
            </Resume>
          </span>
        </Center>

        <Contact
          target="_blank"
          to={{ pathname: 'mailto:Khoderhabbal36@gmail.com' }}
        >
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
