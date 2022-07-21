import React from 'react';
import { Route, Routes } from 'react-router';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import BigProjects from './pages/big-projects';
import SoftProjects from './pages/soft-projects';
import OnProgress from './pages/on-progress';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/big-projects" element={<BigProjects />} />
      <Route path="/soft-projects" element={<SoftProjects />} />
      <Route path="/on-working" element={<OnProgress />} />
    </Routes>
  );
};

export default App;