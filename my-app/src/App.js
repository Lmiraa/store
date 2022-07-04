import React from 'react';

//components
import Header from './Components/header/Header';
import Slider from './Components/Slider';
import ProductGroup from './Components/Categorization/ProductGroup';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <ProductGroup/>
     <Footer/>
      
    </>
  );
};

export default App;