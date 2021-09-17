import React from 'react';
import ProdImage from './micro-components/ProdImage';
import TrendingSlider from './micro-components/TrendingSlider';

function Trending() {
  return (
    <section className='trending'>
      <div className='bg-stripe'></div>
      <div className='container'>
        <h2 className='display-2'>Trending</h2>
        <TrendingSlider />
      </div>
    </section>
  );
}

export default Trending;
