import React,{ useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/Home';
import Products from './pages/Products';
import Provider from './context/Provider';
// import ContextApp from './context/ContextApp';

function App() {
  // const {cartItems} = useContext(ContextApp);
  
  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cartItems));
  // }, [cartItems]);

  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
