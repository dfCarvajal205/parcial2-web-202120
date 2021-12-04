import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card' 
import { FormattedMessage } from 'react-intl';

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/products?q=${searchKey}`)
      .then((res) => res.json())
      .then((productos) => { 
        setProducts(productos);
      });
  }, [searchKey]);

  return (
    <section id='home'>
      <div className='home-container'>
        <h1>
          <FormattedMessage id='gallery' />
        </h1>
        <div className='home-card'>
          {console.log("productos: ", products)}
          {products.map((e,i) => (
            <Card key={i} name={e.name} price={e.price} picture={e.picture} isActive={e.isActive} />
          ))}
        </div>
      </div>
    </section>
  );
};
