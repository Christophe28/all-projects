import React from 'react';
import { Route, Routes } from 'react-router';

import Home from './pages/home';
import BigProjects from './pages/big-projects';
import SoftProjects from './pages/soft-projects';
import OnProgress from './pages/on-progress';
import About from './pages/about';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/big-projects" element={<BigProjects />} />
      <Route path="/soft-projects" element={<SoftProjects />} />
      <Route path="/on-working" element={<OnProgress />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;