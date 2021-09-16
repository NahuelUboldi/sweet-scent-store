import React from 'react';

function Hero() {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='col hero-text'>
          <h1 className='display-1'>Your life blossom with a new fragrance</h1>
          <div>
            <button className='btn btn-primary'>
              Check out our fragrances
            </button>
          </div>
        </div>
        <div className='col hero-img'>
          <div className='img-container'>
            <div className='masked-img'></div>
            <div className='img-blobs'></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
