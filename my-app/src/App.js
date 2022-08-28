import React from 'react';
import { Route, Routes } from 'react-router';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import BigProjects from './pages/big-projects';
import SoftProjects from './pages/soft-projects';
import OnProgress from './pages/on-progress';

import './styles/index.scss';
import Error404 from './pages/Error404';
import AllProjects from './pages/All-projects';


const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/big-projects" element={<BigProjects />} />
      <Route exact path="/soft-projects" element={<SoftProjects />} />
      <Route exact path="/on-working" element={<OnProgress />} />
      <Route exact path="/projects" element={<AllProjects />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;