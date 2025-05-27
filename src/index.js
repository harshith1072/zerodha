import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './landingpage/home/HomePage';
import About from './landingpage/about/AboutPage';
import ProductsPage from './landingpage/products/ProductsPage';
import Pricing from './landingpage/pricing/PricingPage';
import Support from './landingpage/support/SupportPage';
 
import Signup from './landingpage/signup/Signup';
 import NotFound from './landingpage/home/NotFound';  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
       <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound/>} />  
    </Routes>
  </BrowserRouter>
);
