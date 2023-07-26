import React from 'react';
import webImage from "../../assets/login.png";
import "./Login.css"

const Signup3 = () => {
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


              <div className='form_email form_profile'>
                <label htmlFor='profile' className='form_label'>Profile Image</label>
                <input 
                  id="profile" 
                  type="file" 
                  className='form_input' 
                  name='profile' 
                  // placeholder='Enter City Address'
                  required
                />
              </div>        

              <button type="submit" className='btn login_form_btn'> Sign up </button>

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

export default Signup3
