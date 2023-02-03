import React, { useState } from 'react';
import SignInScreen from './SignupScreen';
import './LoginScreen.css';

function LoginScreen() {

  const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreenContainer'>
      <div className='loginScreen-background'>
        <img
          className='loginScreen-logo' 
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='logo' 
          />
          <button onClick={() => setSignIn(true)} className='login-button'>
            Sign In
          </button>
          <div className='loginScreen-gradient'/>
      </div>
          <div className='loginScreen-body'>
            {signIn ? (
              <SignInScreen />
            ): (

              <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className='loginScreen-input-container'>
                <form className='loginScreen-form'>
                  <input className='user-input' type="email" placeholder="Email Address"/>
                  <button 
                    className='loginScreen-button-getStarted'
                    onClick={() => setSignIn(true)}
                    >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
            )}
          </div>
    </div>
  )
}

export default LoginScreen;