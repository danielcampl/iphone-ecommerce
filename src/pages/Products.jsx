import React, { useState, useContext, useEffect } from 'react';

import '../components/main/Main.css';
import fetchProducts from '../api/fetchProducts';
import ProductsCard from '../components/Products/ProductsCard';
import Loading from '../components/loading/Loading';
import ContextApp from '../context/ContextApp';
import Cart from '../components/cart/Cart';
import Header from '../components/header/Header';

export default function Products() {
  const { products, setProducts, searchBarVisible, setSearchBarVisible } = useContext(ContextApp);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts('iphone 14 pro max').then((res) => {
      setProducts(res);
      setLoading(false);
      setSearchBarVisible(!searchBarVisible);
    });

    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      <Header />
      {
        loading ?
          <Loading />
          :
          <div className='main-container'>
            <div>
              {
                products.map((product) => <ProductsCard key={product.id} data={product} />)
              }
            </div>
          </div>
      }
      <Cart />
    </div>
  )
}