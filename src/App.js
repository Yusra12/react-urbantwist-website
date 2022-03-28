import React from 'react';
import { GlobalStyle } from './globalStyles';
import Products from './components/Products';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import {productData,productDataTwo}from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
function App() {
  return (
   <Router>
  
     <GlobalStyle/>
     <Hero/>
     <Products heading='Choose your Drink' data={productData}/>
     <Feature/>
     <Products heading='Sweet Treats for you' data={productDataTwo}/>
     <Footer/>
    </Router>

  
  );
}

export default App;
