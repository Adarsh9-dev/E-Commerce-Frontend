import React from 'react';
import "./Footer.css";
import Payment from "../../assets/payment.png";

const Footer = () => {
  return (
    <div className='footer_container'>
    <div className='Footer'>
      <div className='footer_col1'>
        <div className='footer_col1_logo'>
          <h1 className='footer_c_l_main'>Shop<span className='footer_c_l_dot'>.</span>com</h1>
        </div>

        <div className='footer_col1_details'>
          <p>This is the random text, will be fill up in the time of deploy. Thank you</p>
        </div>
        <div className='footer_col1_links'>
          <i className="uil uil-twitter footer_link_btn"></i>
          <i className="uil uil-facebook-f footer_link_btn"></i>
          <i className="uil uil-instagram footer_link_btn"></i>
          <i className="uil uil-linkedin-alt footer_link_btn"></i>
        </div>
      </div>

      <div className='footer_col2'>
        <h3 className='footer_c_links'>Useful Links</h3>
        <ul className='footer_col_ul'>
          <li className='footer_c_u_list'>About Us</li>
          <li className='footer_c_u_list'>FAQ</li>
          <li className='footer_c_u_list'>Location</li>
          <li className='footer_c_u_list'>Affiliates</li>
          <li className='footer_c_u_list'>Contact</li>
        </ul>
      </div>


      <div className='footer_col2'>
        <h3 className='footer_c_links'>Category</h3>
        <ul className='footer_col_ul'>
          <li className='footer_c_u_list'>Men</li>
          <li className='footer_c_u_list'>Women</li>
          <li className='footer_c_u_list'>Kid</li>
          <li className='footer_c_u_list'>Best Seller</li>
          <li className='footer_c_u_list'>New Arrivals</li>
        </ul>
      </div>


      <div className='footer_col2'>
        <h3 className='footer_c_links'>My Account</h3>
        <ul className='footer_col_ul'>
          <li className='footer_c_u_list'>My Account</li>
          <li className='footer_c_u_list'>Discount</li>
          <li className='footer_c_u_list'>Returns</li>
          <li className='footer_c_u_list'>Order History</li>
          <li className='footer_c_u_list'>Order Tracking</li>
        </ul>
      </div>

      <div className='footer_contact'>
        <div className='footer_c_top'>
          <div className='footer_c_t_address'>
            <i className="uil uil-map-marker footer_link_btn special_landing_btn"></i>
            <p className='footer_c_t_m_data'>123 Street, Old trafford, New South London, UK</p>
          </div>

          <div className='footer_c_t_mail'>
            <i className="uil uil-envelope footer_link_btn special_landing_btn"></i>
            <p className='footer_c_t_m_data'>adarshpriyadarshi001@gmail.com</p>
          </div>

          <div className='footer_c_t_mobile'>
            <i className="uil uil-mobile-android footer_link_btn special_landing_btn"></i>
            <p className='footer_c_t_m_data'>+91 7815002053</p>
          </div>
        </div>
        <div className='footer_c_bottom'>
          <p className='footer_c_b_title'>WE ACCEPT</p>
          <img src={Payment} alt="payment option" className='footer_c_b_image' />
        </div>

      </div>
    </div>
        <p className='developed_by'> Developed By <a href="" className='developed_name'>@Adarsh Priyadarshi </a></p>
    </div>
  )
}

export default Footer
