import React from 'react';
import "./Home.css";
import HomeImage from "../../assets/home1.png";
import whiteDot from "../../assets/neon.png";
import Fashion from "../../assets/fashion.png";

const Home = () => {
  return (
    <div className='Home'>
      <div className='home_right1 home_left_pre'>
        <img src={whiteDot} className='home_r_image_back' alt="Hero Image"/>
        <img src={HomeImage} className='home_r_image' alt="Hero Image"/>
      </div>
      <div className='home_left'>
        <span className='home_l_pre'>Limited Time Only for Winter</span>
        <img src={Fashion} className='home_l_main' alt="Image Of Fashion"/>
        <span className='home_l_post'>Look Your Best On Your Best Day</span>
        <button className='btn btn_color home_l_btn'>Explore Now</button>
      </div>
      <div className='home_right'>
        <img src={whiteDot} className='home_r_image_back' alt="Hero Image"/>
        <img src={HomeImage} className='home_r_image' alt="Hero Image"/>
      </div>
    </div>
  )
}

export default Home
