import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className='container-log'>
        <h1>Signup</h1>
        <div className="fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email Id' />
          <input type="password" placeholder='Your Password' />
        </div>
        <button>Continue</button>
        <p  className='login-signup-login'>
          Already have an account? <span>Login Here</span>
        </p>
        <div className="agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to Terms of use & Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
