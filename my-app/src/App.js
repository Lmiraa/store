import React from 'react';

//components
import Header from './Components/header/Header';
import Slider from './Components/Slider';
import ProductGroup from './Components/Categorization/ProductGroup';
import Footer from './Components/Footer';
import Suggestions from './Components/Shared/Suggestions ';
// import Test from './Components/Test';

const App = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <ProductGroup/>
      <Suggestions/>
      {/* <Test/> */}
     <Footer/>
      
    </>
  );
};

export default App;