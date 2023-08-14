import React from 'react';
import "./ItemCard.css";
import Image from "../../assets/item2.png"

const ItemCard = () => {
  const rating = 4;
  const raiter = [];
  for (let i = 1; i < 6; i++) {
    if (i <= rating) {
      raiter.push(<i className='bx bxs-star item_p_r_star item_p_r_star_gold'></i>)
    } else {
      raiter.push(<i className='bx bxs-star item_p_r_star'></i>)
    }
  }
  
  return (
    <div className='ItemCard'>
    <div className='item_container'>
      <div className='item_image'>
        <img src={Image} alt="Item Image" className='item_i_main'/>
      </div>
      <div className='item_details'>
        <div className='item_d_left'>
          <h4 className='item_d_l_head'>White T-shirt</h4>
        </div>
        <div className='item_d_right'>
          <button className='btn btn_color item_d_r_btn'>Add To Card</button>
        </div>
      </div>
      <div className='item_price'>
        <div className='item_p_left'>
          <span className='item_p_l_currency'>$</span>
          <span className='item_p_l_total'>102</span>
        </div>
        <div className='item_p_right'>
          {raiter}
        </div>
      </div>
    </div>
    </div>
  )
}

export default ItemCard
