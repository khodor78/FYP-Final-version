import React from 'react'
import GlobalStyle from '../globalStyles';
import { ThemeProvider } from 'styled-components';
import SoundBar from '../subComponent/SoundBar';
import { AnimatePresence } from 'framer-motion';
import { LightTheme } from './Themes';

import Blog from './BlogPage'


 const Theme1 = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <SoundBar />
        <Blog/>


        
        <AnimatePresence exitBeforeEnter>
  
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
export default Theme1;
