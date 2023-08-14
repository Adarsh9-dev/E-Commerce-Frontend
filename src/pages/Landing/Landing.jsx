import React, { useState, useEffect } from 'react';
import "./Landing.css";
import Navbar from '../../components/Navbar/Navbar';
import ResponseNav from '../../components/ResponseNav/ResponseNav';
import Home from '../../components/Home/Home';
import Category from '../../components/Category/Category';
import ItemCard from '../../components/ItemCard/ItemCard';
import Statics from '../../components/Statics/Statics';
import Blog from '../../components/Blog/Blog';
import Footer from '../../components/Footer/Footer';

const Landing = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(()=> {
    window.addEventListener('resize', ()=> {
      if (isResponsive) {
        if (window.innerWidth > 930 ) {
          setIsResponsive(false);
        }
      }
    });
  },[isResponsive])

  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > 5) {
        document.getElementById('Navbar').classList.add('scroll_shadow')
      } else {
        document.getElementById('Navbar').classList.remove('scroll_shadow')
      }
    })
  },[])

  return (
    <div className='Landing'>
      <Navbar setIsResponsive={setIsResponsive}/>
      {
        isResponsive && 
          <ResponseNav/>
      }
      <Home />
      <Category />
      {/* <ItemCard /> */}
      <Statics />
      <Blog />
      <Footer />
    </div>
  )
}

export default Landing
