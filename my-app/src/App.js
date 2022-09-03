import React from 'react';

import { Route,Routes} from 'react-router-dom';
//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

//components
import Navbar from './Components/Shared/Navbar';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import SignUp from './Components/Authenticate/SignUp';
import Login from './Components/Authenticate/Login';
import Store from './Components/Store';
import ProductDetails from './Components/ProductDetails';
import ShopingCart from './Components/ShopingCart';

const App = () => {
  return (
    <>
    <ProductContextProvider>
      <CartContextProvider>
      <Navbar/>
      <Routes>
            <Route path="/Products"  element={<Store/>}/>
            <Route path="/Products/:id" element={<ProductDetails/>}/>
            <Route path="/cart"  element={<ShopingCart/>}/>
            </Routes>
      </CartContextProvider>
     </ProductContextProvider>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/signUp"  element={<SignUp/>}/>
     </Routes>
     <Footer/>
    </>
  );
};

export default App;