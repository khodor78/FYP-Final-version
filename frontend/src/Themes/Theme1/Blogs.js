import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import "./App.css";
import Main from './components/Main';
import MySkillsPage from './components/MySkillsPage';
import ScrollToTop from './components/ScrolToTop';
import { LightTheme } from './components/Themes';
import WorkPage from './components/WorkPage';

import SoundBar from './subComponent/SoundBar';

const App = () => {
  return (
    <>
    <ScrollToTop />

  <ThemeProvider theme={LightTheme}>
    <SoundBar  />
    <AnimatePresence exitBeforeEnter>
        <BlogPage />
        </AnimatePresence>
      </ThemeProvider>
</>
  )
}

export default App