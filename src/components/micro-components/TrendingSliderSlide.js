import React from 'react';
import StarsRating from './StarsRating';

function TrendingSliderSlide() {
  return (
    <>
      <div className='ts-content'>
        <div className='col'>
          <div className='ts-text'>
            <header>
              <h2 className='h1'>
                LoveMe // <span className='brand'>Tous</span>
              </h2>
              <div className='subtitle'>Eau de Parfum 30ml</div>
              <StarsRating />
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              alias ratione beatae accusamus adipisci eos veniam consectetur
              quibusdam quas vel iure quis temporibus suscipit quo accusantium
              esse, repudiandae non minus.
            </p>
            <div className='tags-container'>
              <div className='tag'>Floral</div>

              <div className='tag'>primavera</div>
            </div>
            <footer>
              <div>
                <div className='price'>$60.00</div>
                <button className='btn-sm btn-primary'>Add to cart</button>
              </div>
            </footer>
          </div>
        </div>
        <div className='col'>
          <div className='ts-image'></div>
        </div>
      </div>
    </>
  );
}

export default TrendingSliderSlide;
