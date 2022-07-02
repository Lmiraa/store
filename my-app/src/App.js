import React from 'react';

//components
import Header from './Components/header/Header';
import Slider from './Components/Slider';
import ProductGroup from './Components/Categorization/ProductGroup';

const App = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <ProductGroup/>
    </>
  );
};

export default App;