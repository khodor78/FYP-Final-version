import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Feature from './sections/Feature'
import AboutPage from './Theme-khodor/components/AboutPage';
import BeforeBlog from './Theme-khodor/components/BeforeBlog';
import MySkillsPage from './Theme-khodor/components/MySkillsPage';
import WorkPage from './Theme-khodor/components/WorkPage';
import Theme1 from './Theme-khodor/Theme1';

function start() {
  return (
    <Routes>
    <Route path="/" element={ <App/>}/>
    <Route path="/Theme1" element={ <Theme1/> } />
    <Route path="/Theme1/Blogs" element={ <BeforeBlog/> } />
    <Route path="/Theme1/Work" element={ <WorkPage/> } />
    <Route path="/Theme1/Skills" element={ <MySkillsPage/> } />
    <Route path="/Theme1/About" element={ <AboutPage/> } />
</Routes>
  )
}

export default start