import React, { useState, useEffect } from 'react';
import ContextApp from './ContextApp';
import propTypes from 'prop-types';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

export default function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(cartFromLocalStorage || []);
  const [cartVisible, setCartVisible] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    cartVisible,
    setCartVisible,
    searchBarVisible,
    setSearchBarVisible,
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ContextApp.Provider value={value}>
      {children}
    </ContextApp.Provider>
  )
}

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
