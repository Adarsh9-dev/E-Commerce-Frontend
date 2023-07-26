import React from 'react';
import webImage from "../../assets/login.png";
import Google from "../../assets/google.png";
import "./Login.css"

const Login = () => {
  return (
    <div className='Login'>
      <div className='login_container'>

        <div className='login_left'>
          <img src={webImage} alt="Login Image" className='login_image' />
        </div>

        <div className='login_right'>

          <div className='right_head'>
            <h1 className='right_head_message'>Sign in</h1>
          </div>
        
          <div className='right_many_login'>
            <div className='right_many_top'>
              <img src={Google} alt="google Image" className='right_top_image'/>
              <i className="uil uil-facebook-f right_top_image2"></i>
            </div>
            <div className='right_many_bottom'>
              <div className='right_arrow'></div>
              <span className='right_m_b_content'>Or Sign in with Email</span>
            </div>
          </div>

          <div className='right_input'>
            <form className='right_form'>

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

              <div className='form_isLogin'>
                <div className='form_isLogin_left'>
                  <input type="checkbox" id="remember" name="remember" />
                  <label htmlFor='remember' className='form_isLogin_left_check'>keep me logged in</label>
                </div>

                <div className='form_isLogin_right'>
                  <span>Forgot password?</span>
                </div>
              </div>

              <button type="submit" className='btn login_form_btn'> Sign in </button>

            </form>
          </div>

          <div className='right_foter'>
            <span className='right_footer_text'>Don't have an account?</span>
            <span className='right_footer_signup'>Sign up</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
