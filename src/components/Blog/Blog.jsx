import React from 'react'
import "./Blog.css";
import Blog1 from "../../assets/Blog1.png"
import Blog2 from "../../assets/Blog2.png"
import Blog3 from "../../assets/Blog3.png"

const Blog = () => {
  return (
    <div className='Blog'>
      <div className='blog_top'>
        <h3 className='blog_t_head1'>BLOGS</h3>
        <h1 className='blog_t_head2'>latest news</h1>
      </div>

      <div className='blog_bottom'>
        <div className='blog_b_type'>
          <img src={Blog1} alt="Blog image" className='blog_b_t_image' />
          <h3 className='blog_b_t_head'>Fashion World</h3>
          <p className='blog_b_t_details'>Details about the ariticle Given</p>
          <p className='blog_b_t_date'>22 January 2023</p>
        </div>

        <div className='blog_b_type'>
          <img src={Blog2} alt="Blog image" className='blog_b_t_image' />
          <h3 className='blog_b_t_head'>Fashion World</h3>
          <p className='blog_b_t_details'>Details about the ariticle Given</p>
          <p className='blog_b_t_date'>22 January 2023</p>
        </div>

        <div className='blog_b_type'>
          <img src={Blog3} alt="Blog image" className='blog_b_t_image' />
          <h3 className='blog_b_t_head'>Fashion World</h3>
          <p className='blog_b_t_details'>Details about the ariticle Given</p>
          <p className='blog_b_t_date'>22 January 2023</p>
        </div>
      </div>
    </div>
  )
}

export default Blog;
