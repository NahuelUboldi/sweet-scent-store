import React from 'react';
import './stars-rating-styles.css';

function StarsRating() {
  return (
    <div>
      <div className='sr-container'>
        <i class='bi bi-star-fill'></i>
        <i class='bi bi-star-fill'></i>
        <i class='bi bi-star-fill'></i>
        <i class='bi bi-star-fill'></i>
        <i class='bi bi-star-fill'></i>
      </div>
    </div>
  );
}

export default StarsRating;
