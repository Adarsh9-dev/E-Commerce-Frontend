import React from 'react';
import "./ResponseNav.css";

const ResponseNav = () => {  
  return (
    <div className='ResponseNav'>
    <div className='responseNav_container'>
      <div className='r_nav_top'>
        <ul className='r_nav_top_ul'>
          <li className='r_nav_top_link'><a href="#">Home</a></li>
          <li className='r_nav_top_link'><a href="#">Products</a></li>
          <li className='r_nav_top_link'><a href="#">Blogs</a></li>
          <li className='r_nav_top_link'><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className='r_nav_bottom'>
        <button className='r_nav_bottom_cart btn btn_color'>Cart</button>
        <button className='r_nav_bottom_signup btn btn_color'>Sign up</button>
      </div>
    </div>
    </div>
  )
}

export default ResponseNav
