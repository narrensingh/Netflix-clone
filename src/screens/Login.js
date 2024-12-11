import React, { useState } from 'react';
import './Login.css';
import SignIn from './SignIn';

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="https://loodibee.com/wp-content/uploads/Netflix-logo.png"
          alt="login__logo"
        />
        <button className="signIn__btn" onClick={() => setSignIn(true)}>
          Sign In
        </button>
      </div>
      <div className="login__content">
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1 className="login__Cheader">
              Unlimited films, TV programmes and more.
            </h1>
            <h1 className="login__CSheader">
              Watch anywhere. Cancel at any time.
            </h1>
            <p className="login__CSSheader">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="login__input">
              <input type="text" placeholder="email" />
              <button>GET STARTED</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
