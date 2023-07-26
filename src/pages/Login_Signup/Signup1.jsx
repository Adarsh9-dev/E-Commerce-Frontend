import React from 'react';
import webImage from "../../assets/login.png";
import Google from "../../assets/google.png";
import "./Login.css"

const Login = () => {
  return (
    <div className='Login'>
      <div className='login_container signup_container'>

        <div className='login_left'>
          <img src={webImage} alt="Login Image" className="signup_image" />
        </div>

        <div className='login_right'>

          <div className='right_head'>
            <h1 className='right_head_message'>Sign up</h1>
          </div>
        
          <div className='right_many_login'>
            <div className='right_many_top'>
              <img src={Google} alt="google Image" className='right_top_image'/>
              <i className="uil uil-facebook-f right_top_image2"></i>
            </div>
            <div className='right_many_bottom'>
              <div className='right_arrow'></div>
              <span className='right_m_b_content'>Or Sign up with Email</span>
            </div>
          </div>

          <div className='right_input'>
            <form className='right_form'>

              <div className='form_text'>
                <div className='form_text_top'>
                  <label htmlFor='Fname' className='form_label'>Fname</label>
                  <input 
                    id="Fname" 
                    type="text" 
                    className='form_input form_input1' 
                    name='Fname' 
                    placeholder='Enter Fname'
                    required
                  />
                </div>
                <div className='form_text_bottom'>
                  <label htmlFor='Lname' className='form_label'>Lname</label>
                  <input 
                    id="Lname" 
                    type="text" 
                    className='form_input form_input1' 
                    name='Lname' 
                    placeholder='Enter Lname'
                    required
                  />
                </div>
              </div>

              <div className='form_email'>
                <label htmlFor='email' className='form_label'>Email</label>
                <input 
                  id="email" 
                  type="email" 
                  className='form_input' 
                  name='email' 
                  placeholder='Enter Email'
                  required
                />
              </div>

              <div className='form_password'>
                <label htmlFor='password' className='form_label'>Password</label>
                <input 
                  id="password" 
                  type="password" 
                  className='form_input' 
                  name='password' 
                  placeholder='Enter Password'
                  required
                />
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

export default Login
