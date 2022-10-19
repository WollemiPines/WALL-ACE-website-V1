import React from 'react';
import './App.css';
import Footer from '../src/components/footer';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Disclaimers from './pages/disclaimers';
import Shop from './pages/shop';
import CartPage from './pages/cartPage';
import ProductPage from "./pages/productPage"


function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/disclaimers" element={<Disclaimers />} />
      <Route exact path="/cart" element={<CartPage />} />
      <Route exact path="/products/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;