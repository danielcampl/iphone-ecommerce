import React, { useEffect, useState } from 'react';

import './Main.css';
import fetchProducts from '../../api/fetchProducts';
import ProductsCard from '../Products/ProductsCard';
import Loading from '../loading/Loading';

export default function Main() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts('iphone 14 pro max').then((res) => {
      setProducts(res);
    });

    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  return (
    <div>
      <div>
        <div className='main-container'>
          <h1>Recomendados</h1>
          {
            loading ?
              <Loading />
              :
              <div>
                {
                  products.map((product) => <ProductsCard key={product.id} data={product} />).slice(0, 6)
                }
              </div>
          }
        </div>
      </div>
    </div>
  )
}
