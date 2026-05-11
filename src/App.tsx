import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tours from './pages/Tours';
import About from './pages/About';
import TourDetail from './pages/TourDetail';
import Region from './pages/Region';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/passeios" element={<Tours />} />
        <Route path="/passeios/:slug" element={<TourDetail />} />
        <Route path="/regiao" element={<Region />} />
        <Route path="/quem-somos" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/privacidade" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;
