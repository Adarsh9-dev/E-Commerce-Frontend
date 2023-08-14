import React from 'react';
import "./Category.css";
import ItemCard from '../ItemCard/ItemCard';

const Category = () => {
  return (
    <div className='Category'>
      <div className='category_top'>
        <h3 className='category_top_head1'>CATEGORYS</h3>
        <h1 className='category_top_head2'>{new Date().getFullYear()} Latest Collections</h1>
      </div>
      <div className='category_middle'>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <div className='category_button'>
        <button className='category_b_btn btn btn_color'>Load More</button>
      </div>
    </div>
  )
}

export default Category
