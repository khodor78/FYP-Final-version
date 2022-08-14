import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Index from './Themes/Theme1/App';
import MySkillsPage from './Themes/Theme1/Skills';
import About from './Themes/Theme1/About';
import WorkPage from './Themes/Theme1/Works';
import Project from './Themes/Theme1/BLOGS';
import PorfolioBuilder from './PorfolioBuilder/PorfolioBuilder';

function start() {
  return (
    <Routes>
      <Route path="/PortfolioBuilder" element={<PorfolioBuilder />} />
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
