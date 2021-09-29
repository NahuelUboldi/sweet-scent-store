import React from 'react';
import TrendingSliderSlide from './TrendingSliderSlide';
import './trending-slider-styles.css';

function TrendingSlider() {
  return (
    <div className='ts-container'>
      <div className='ts-arrows'>
        <i class='bi bi-chevron-compact-left'></i>
        <i class='bi bi-chevron-compact-right'></i>
      </div>
      <TrendingSliderSlide />
    </div>
  );
}

export default TrendingSlider;
