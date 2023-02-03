import React from 'react';
import './SignupScreen.css';

function SignupScreen() {

  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email"/>
        <input placeholder="Password" type="password"/>
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4>
          <span className='signUpScreen-gray'>New to Netflix?</span>
          <span className='signUpScreen-link' onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;