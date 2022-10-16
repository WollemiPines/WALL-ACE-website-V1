import React from 'react';
import './App.css';
import Footer from '../src/components/footer';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Projects from './pages/projects';
import Disclaimers from './pages/disclaimers';

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route exact path="/Wall-Ace/" element={<Home />} />
      <Route exact path="/Wall-Ace/home" element={<Home />} />
      <Route exact path="/Wall-Ace/contact" element={<Contact />} />
      <Route exact path="/Wall-Ace/shop" element={<Resume />} />
      <Route exact path="/Wall-Ace/projects" element={<Projects />} />
      <Route exact path="/Wall-Ace/disclaimers" element={<Disclaimers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;