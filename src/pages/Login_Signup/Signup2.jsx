import React from 'react';
import webImage from "../../assets/login.png";
import "./Login.css"

const Signup2 = () => {
  return (
    <div className='Login'>
      <div className='login_container signup_container'>

        <div className='login_left'>
          <img src={webImage} alt="Login Image" className="signup_image" />
        </div>

        <div className='login_right'>

            <div className='right_head right_head1'>
              <h1 className='right_head_message'>Sign up</h1>
              <div className='right_back_cont'>
                <i className="uil uil-arrow-left right_back"></i>
              </div>
            </div>

        
         
          <div className='right_input'>
            <form className='right_form'>

              <div className='right_shipping_text'>
                <h3 className='right_shipping_text_in'>Shipping Address</h3>
              </div>

              <div className='form_email'>
                <label htmlFor='Street' className='form_label'>Street</label>
                <input 
                  id="Street" 
                  type="text" 
                  className='form_input' 
                  name='Street' 
                  placeholder='Enter Street Address'
                  required
                />
              </div>

              <div className='form_email'>
                <label htmlFor='city' className='form_label'>City</label>
                <input 
                  id="city" 
                  type="text" 
                  className='form_input' 
                  name='city' 
                  placeholder='Enter City Address'
                  required
                />
              </div>

              <div className='form_text'>
                <div className='form_text_top'>
                  <label htmlFor='State' className='form_label'>State</label>
                  <input 
                    id="State" 
                    type="text" 
                    className='form_input form_input1' 
                    name='State' 
                    placeholder='Enter State'
                    required
                  />
                </div>
                <div className='form_text_bottom'>
                  <label htmlFor='email' className='form_label'>Zip Code</label>
                  <input 
                    id="Lname" 
                    type="number" 
                    className='form_input form_input1 form_input2' 
                    name='Lname' 
                    placeholder='Enter Zip Code'
                    required
                  />
                </div>
              </div>
           

              <button type="submit" className='btn login_form_btn'> Next </button>

            </form>
          </div>

          <div className='right_foter'>
            <span className='right_footer_text'>Allready have an account?</span>
            <span className='right_footer_signup'>Sign in</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup2
