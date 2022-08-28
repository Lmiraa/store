import React from 'react';

import { Route,Routes} from 'react-router-dom';
//components
import Header from './Components/header/Header';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import SignUp from './Components/Authenticate/SignUp';
import Login from './Components/Authenticate/Login';

const App = () => {
  return (
    <>
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/signUp"  element={<SignUp/>}/>
     </Routes>
     <Footer/>
     <div>
     
     </div>
    </div>
    
    </>
  );
};

export default App;