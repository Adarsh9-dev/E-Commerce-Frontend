import React,{useState, useEffect} from 'react';
import "./Navbar.css";

const Navbar = ({setIsResponsive}) => {
  const [isCross, setIsCross] = useState(false);
  const [isRight, setIsRight] = useState(true);
  
  const showCross = () => {
    setIsCross(true);
    setIsRight(false);
    setIsResponsive(true);
  }

  const showRight = () => {
    setIsRight(true);
    setIsCross(false);
    setIsResponsive(false);
  }
  
  return (
    <div className='Navbar' id='Navbar'>
      <div className='nav_left'>
        <h2 className='nav_left_logo'>Shop<span className='logo_dot'>.</span>com</h2>
      </div>
      <div className='nav_middle'>
        <ul className='nav_middle_list'>
          <li className='nav_middle_all nav_bottom_line'><a href="#">Home</a></li>
          <li className='nav_middle_all'><a href='#'>Products</a></li>
          <li className='nav_middle_all'><a href="#">Blogs</a></li>
          <li className='nav_middle_all nav_contact'><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className='nav_right'>
        {/* Search */}
        <i className="uil uil-search nav_right_link"></i>
        {/* Cart */}
        <i className="uil uil-shopping-bag nav_right_link"></i>
        {/* User */}
        {/* <i className="uil uil-user nav_right_link"></i> */}
        {/* Signup */}
        <button className='btn btn_color '>Sign up</button>
      </div>
      <div className='nav_right_small'>
        {
          isRight && 
            <i className="uil uil-align-right nav_right_responsive" onClick={()=> showCross()}></i>
        }
        {
          isCross &&
            <i className="uil uil-times nav_right_cross" onClick={()=> showRight()}></i>
        }
      </div>
    </div>
  )
}

export default Navbar
