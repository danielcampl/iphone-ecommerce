import React, { useContext } from 'react';
import propTypes from 'prop-types';

import './Cart.css';
import { IoMdTrash } from "react-icons/io";
import formatCurrency from '../../utils/formatCurrency';
import ContextApp from '../../context/ContextApp';

export default function CartItem({data}) {
  const {id, thumbnail, title, price} = data;
  const {cartItems, setCartItems} = useContext(ContextApp);

  const handleRemoveItem = () => {
    const updateItems = cartItems.filter((item) => item.id != id);
    setCartItems(updateItems);
  }

  return (
    <section className='cart-item-container'>
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt='imagem do produto'
        className='cart-img'
      />
      <div className='cart-item-content'>
        <div>
          <h3 className='cart-item-title'>{title}</h3>
          <h3 className='cart-item-price'>{formatCurrency(price, 'BRL')}</h3>
        </div>
        <button
          type='button'
          className='remove-cart-button'
          onClick={handleRemoveItem}
        >
          <IoMdTrash />
        </button>
      </div>
    </section>
  )
}

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;