import React, { useContext } from 'react';

import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
import Show from '../components/showOnce/Show';
import Cart from '../components/cart/Cart';
import Header from '../components/header/Header';
import ContextApp from '../context/ContextApp';

export default function Home() {
  const {searchBarVisible, setSearchBarVisible} = useContext(ContextApp);
  
  const load = () => {
    return setSearchBarVisible(searchBarVisible);
  }
  return (
    <div onLoad={load}>
      <Header />
      <Show />
      <Main />
      <Cart />
      <Footer />
    </div>
  )
}
