import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Quote from './components/Quote';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Products from './components/Product';
import { productData, productDataTwo } from './components/Product/data';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Quote />
      <Products heading='Tinh Hoa Ẩm Thực' data={productData} />
      <Feature />
      <Products heading='Con người Việt Nam' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
