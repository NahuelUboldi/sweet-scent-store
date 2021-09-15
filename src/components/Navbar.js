import React from 'react';
import { IoMdCart } from 'react-icons/io';

function Navbar() {
  return (
    <nav>
      <div className='container'>
        <div className='logo'>Scent Store</div>
        <div className='menu'>
          <ul>
            <li className='menu-item'>home</li>
            <li className='menu-item'>about</li>
            <li className='menu-item'>products</li>
          </ul>
          <IoMdCart />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
