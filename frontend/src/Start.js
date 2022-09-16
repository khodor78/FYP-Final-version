import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Index from './Themes/Theme1/App';
import MySkillsPage from './Themes/Theme1/Skills';
import About from './Themes/Theme1/About';
import WorkPage from './Themes/Theme1/Works';
import Project from './Themes/Theme1/BLOGS';
import Projects from './PorfolioBuilder/components/Projects';
import Profile from './PorfolioBuilder/components/Profile';
import Experience from './PorfolioBuilder/components/Experience';
import AboutDetails from './PorfolioBuilder/components/About';
import Skill from './PorfolioBuilder/components/Skill';

function start() {
  return (
    <Routes>
      <Route path="/Profile-Details" element={<Profile />} />
      <Route path="/Project-Details" element={<Projects />} />
      <Route path="/Experience-Details" element={<Experience />} />
      <Route path="/Skill-Details" element={<AboutDetails />} />
      <Route path="/About-Details" element={<Skill />} />



      <Route path="/" element={<App />} />
      <Route path="/Theme1" element={<Index />} />
      <Route path="/Theme1/myskills" element={<MySkillsPage />} />
      <Route path="/Theme1/about" element={<About />} />
      <Route path="/Theme1/work" element={<WorkPage />} />
      <Route path="/Theme1/blog" element={<Project />} />
      
    </Routes>
  );
}

export default start;
