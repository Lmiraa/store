import React from 'react';

//components
import Header from './Components/header/Header';
import Slider from './Components/Slider';
import ProductGroup from './Components/Categorization/ProductGroup';
import Footer from './Components/Footer';
import Suggestions from './Components/Shared/Suggestions ';
// import Test from './Components/Test';
import Article from './Components/Article';
import Guide from './Components/Guide';

const App = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <ProductGroup/>
      <Suggestions/>
      {/* <Test/> */}
      <Guide/>
      <Article/>
     <Footer/>
      
    </>
  );
};

export default App;