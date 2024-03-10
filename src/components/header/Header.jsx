import React, { useContext } from "react";
import './Header.css';

import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import ContextApp from "../../context/ContextApp";
import SearchBar from "../searchBar/SearchBar";

export default function Header() {
  const {
    cartItems,
    cartVisible,
    setCartVisible,
    searchBarVisible,
    menuOpenIcon,
    setMenuOpenIcon,
    menuVisible,
    setMenuVisible,
  } = useContext(ContextApp);

  const handleNavButton = () => {
    setMenuVisible(!menuVisible);
    setMenuOpenIcon(!menuOpenIcon);
  }

  return (
    <section className="header">
      <div className="header-container">
        <div className="top-container">
          <a href="/"><img src="/images/crocobile2.png" /></a>
          {searchBarVisible ? <SearchBar /> : ''}
          <nav>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/products">Produtos</a></li>
              <li><a href="#">Login</a></li>
              <li>
                <a className="cart-header" onClick={() => setCartVisible(!cartVisible)}>
                  <FaCartShopping />
                  <p>Carrinho ({cartItems.length})</p>
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <div
              className="i-bars"
              onClick={() => handleNavButton()}
            >
              {
                menuOpenIcon
                  ?
                  <TiDeleteOutline id="x-icon" />
                  :
                  <FaBars
                    id="i"
                  />
              }
            </div>
            <div className={`dropdown-menu ${menuVisible ? 'open' : ''}`}>
              <ul>
                <li><a href="/">Início</a></li>
                <li><a href="/products">Produtos</a></li>
                <li><a href="#">Login</a></li>
                <li>
                  <a className="cart-header" onClick={() => setCartVisible(!cartVisible)}>
                    <FaCartShopping />
                    <p>Carrinho ({cartItems.length})</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}