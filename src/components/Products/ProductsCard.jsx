import React, { useContext } from 'react';
import propTypes from 'prop-types';

import formatCurrency from '../../utils/formatCurrency'
import { FaCartPlus } from "react-icons/fa";
import './ProductsCard.css';
import ContextApp from '../../context/ContextApp';

export default function ProductsCard({ data }) {
  const { title, thumbnail, price } = data;
  const { cartItems, setCartItems } = useContext(ContextApp);

  const handleAddCart = () => {
    setCartItems([ ...cartItems, data ]);
  }

  return (
    <div className='product-container'>
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt='product' />
      <div>
        <h2>{title}</h2>
        <div className='price-container'>
          <div>
            <h3>{formatCurrency(price, 'BRL')}</h3>
          </div>
          <button onClick={handleAddCart}>
            <FaCartPlus />
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}

ProductsCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
