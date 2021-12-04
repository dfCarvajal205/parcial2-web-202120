import React, { useState, useEffect } from 'react';
import Chart from '../components/Chart';


export const Report = (searchKey) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/api/products?q=${searchKey.searchKey}`)
      .then((res) => res.json())
      .then((productos) => { 
        console.log("reportes: ", productos);
        setProducts(productos);
    });
}, [searchKey]);


  return (
    <section id='report'>
      <div className='report-container'>
        <h1>Unidades en inventario</h1>
        <Chart data={products}/>
      </div>
    </section>
  );
};
