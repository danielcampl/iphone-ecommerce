import React, { useContext } from 'react';

import './Cart.css';
import CartItem from './CartItem';
import ContextApp from '../../context/ContextApp';
import formatCurrency from '../../utils/formatCurrency';
import { TiDeleteOutline } from "react-icons/ti";

export default function Cart() {
  const { cartItems, cartVisible, setCartVisible } = useContext(ContextApp);

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <section className={`cart-container ${cartVisible ? 'cart--active' : ''}`}>
      <TiDeleteOutline className='x-icon' onClick={() => setCartVisible(!cartVisible)} />
      <h3 className='cart-title'>Seu Carrinho</h3>
      <div className='cart-items'>
        {
          cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)
        }
      </div>
      <div className="cart-resume">
        Total: {formatCurrency(totalPrice, 'BRL')}
        <button className='checkout-button'>Pagar Agora</button>
      </div>
    </section>
  )
}
