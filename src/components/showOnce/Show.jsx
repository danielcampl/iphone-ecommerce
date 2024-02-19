import React from 'react';

import './Show.css';
import { FaCartShopping } from "react-icons/fa6";

export default function Show() {
  return (
    <div className='center-container'>
      <div className='left-container'>
        <h1>Favorito dos Clientes</h1>
        <p>
          A liderança do <strong>iPhone 14 Pro Max</strong> contrasta com dados do ano passado. No primeiro semestre de 2022, o iPhone 13,
          modelo básico da linha da Apple, foi o celular mais vendido do mundo. Ainda que seja um smartphone de topo de
          linha, ele está no lado menos caro do segmento.
        </p>
        <div>
          <button className='learn-button'>Ler mais</button>
          <button className='add-to-cart-button'>
            <FaCartShopping />
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
      <div className='right-container'>
        <img
          className='iphone-img'
          src="https://danielcampl-ecommerce.s3.amazonaws.com/1685215687861.png"
          alt="features"
        />
      </div>
    </div>
  )
}
