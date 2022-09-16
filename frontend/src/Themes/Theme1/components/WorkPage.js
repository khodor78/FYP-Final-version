import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';
import { motion } from 'framer-motion';

import LogoComponent from '../subComponent/LogoComponent';
import SocialIcons from '../subComponent/Socialicons';
import PowerButton from '../subComponent/PowerButtons';

import { Work } from '../data/WorkData';
import Card from '../subComponent/Card';
import { YinYang } from './AllSvg';
import BigTitlte from '../subComponent/BigTitle';
//import BigTitlte from '../subComponent/BigTitlte';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
  padding:2rem;
`;
const Down = styled.div `
position:absolute;
top:5rem;
`
const Main = styled(motion.ul)`
  position: fixed;
  @media only screen and (max-width:415px){
  top:6rem
  }
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        'rotate(' + -window.pageYOffset + 'deg)');
    };

    window.addEventListener('scroll', rotate);
    return () => {
      window.removeEventListener('scroll', rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <Down>
        <SocialIcons theme="dark" />
        </Down>
        
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
<BigTitlte text="Work" top='70%' right="20%" />
       
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
