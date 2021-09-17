import React from 'react';
import TrendingSliderSlide from './TrendingSliderSlide';
import './trending-slider-styles.css';

function TrendingSlider() {
  return (
    <div className='ts-container'>
      <div className='ts-arrows'></div>
      <TrendingSliderSlide />
    </div>
  );
}

export default TrendingSlider;
