import React from 'react'
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import SoundBar from './subComponent/SoundBar';
import { AnimatePresence } from 'framer-motion';
import { LightTheme } from './components/Themes';
import Main from './components/Main';
import Blog from './components/BlogPage';
import Work from './components/WorkPage';
import Skill from './components/MySkillsPage';
import About from './components/AboutPage';
import { Route } from 'react-router-dom';



 const Theme1 = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <SoundBar />
        <Main/>


        
        <AnimatePresence exitBeforeEnter>
  
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
export default Theme1;
