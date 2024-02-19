import React, {useContext, useState} from 'react';

import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import ContextApp from '../../context/ContextApp';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const {setProducts} = useContext(ContextApp);

  const handleSearch = async (event) => {
    event.preventDefault();
    const productSearch = await fetchProducts(searchValue);
    setProducts(productSearch);
    setSearchValue('');
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        className="search-input"
        type="search"
        value={searchValue}
        placeholder="Procurar Produto"
        onChange={ ({target}) => setSearchValue(target.value) }
        required
      />
      <button type='submit'>
        Procurar
      </button>
    </form>
  )
}
